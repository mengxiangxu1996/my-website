(() => {
  const input = document.querySelector('#caseVideoInput');
  const player = document.querySelector('#realCaseVideo');
  const button = document.querySelector('#analyzeCase');
  const status = document.querySelector('#caseAnalysisStatus');
  const results = document.querySelector('#realCaseAnalysis');
  const strip = document.querySelector('#caseFrameStrip');
  const linkButton = document.querySelector('#importCaseLink');
  const linkStatus = document.querySelector('#caseLinkStatus');
  let fileUrl = null, loading = false, analysis = null, ready = false;

  function waitMedia(media, event, action) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => finish(new Error('视频读取超时，请转换为 H.264 MP4 后重试')), 12000);
      const success = () => finish(); const failure = () => finish(new Error('浏览器无法解码此视频，请转换为 H.264 MP4 后重试'));
      function finish(error) { clearTimeout(timer); media.removeEventListener(event, success); media.removeEventListener('error', failure); error ? reject(error) : resolve(); }
      media.addEventListener(event, success, { once: true }); media.addEventListener('error', failure, { once: true });
      try { action(); } catch (error) { finish(error); }
    });
  }

  async function loadVideo(url, name) {
    ready = false; analysis = null; results.innerHTML = ''; strip.innerHTML = ''; status.textContent = '正在读取视频…';
    document.querySelector('#realCaseWorkspace').classList.remove('hidden');
    button.disabled = true; player.pause(); if (fileUrl?.startsWith('blob:')) URL.revokeObjectURL(fileUrl); fileUrl = url;
    document.querySelector('#realCaseFile').textContent = name;
    await waitMedia(player, 'loadeddata', () => { player.src = fileUrl; player.load(); });
    if (!Number.isFinite(player.duration) || player.duration <= 0 || player.duration > 120) throw new Error('请选择时长不超过 2 分钟的视频');
    ready = true; button.disabled = false; status.textContent = `视频已就绪 · ${player.duration.toFixed(1)} 秒，可以先播放再分析。`;
  }

  document.querySelector('#caseLinkForm').addEventListener('submit', async event => {
    event.preventDefault(); if (loading) return;
    if (location.hostname.endsWith('.github.io')) { linkStatus.textContent = '这是 GitHub Pages 静态演示站，平台链接解析需要连接应用后端。'; return; }
    loading = true; linkButton.disabled = true; input.disabled = true; button.disabled = true;
    linkStatus.textContent = '正在解析平台链接并读取视频，可能需要约一分钟…';
    const source = document.querySelector('#caseSourceLink'); source.classList.add('hidden');
    // Invalidate old analysis immediately so failed imports cannot analyze a previous video.
    ready = false; analysis = null; results.innerHTML = ''; strip.innerHTML = '';
    document.querySelector('#realCaseWorkspace').classList.add('hidden'); player.pause();
    try {
      const response = await fetch('/api/resolve-link', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ text: document.querySelector('#caseLinkInput').value.trim() }), signal: AbortSignal.timeout(115000) });
      const data = await response.json(); if (!response.ok) throw new Error(data.error || '链接导入失败');
      source.href = data.source; source.classList.remove('hidden');
      if (!data.playable) { linkStatus.textContent = `${data.platform} · ${data.title || '作品详情'}：${data.message}`; return; }
      await loadVideo(data.mediaUrl, `${data.platform} · ${data.title || '链接视频'}${data.author ? ' / ' + data.author : ''}`);
      linkStatus.textContent = '链接导入完成。视频已缓存 15 分钟，可先播放，再点击“分析关键画面”。';
    } catch(error) { linkStatus.textContent = error.name === 'TimeoutError' ? '导入超时，解析服务可能已计费，请先查看 TikHub 使用日志再重试。' : error.message; }
    finally { loading = false; linkButton.disabled = false; input.disabled = false; button.disabled = !ready; }
  });

  input.addEventListener('change', async () => {
    const file = input.files[0]; input.value = ''; if (!file || loading) return;
    if ((!file.type.startsWith('video/') && !/\.(mp4|mov|webm|m4v)$/i.test(file.name)) || file.size > 200 * 1024 * 1024) { showToast('请选择 200 MB 以内的视频文件'); return; }
    loading = true; input.disabled = true; linkButton.disabled = true;
    linkStatus.textContent = ''; document.querySelector('#caseSourceLink').classList.add('hidden');
    try {
      await loadVideo(URL.createObjectURL(file), file.name);
    } catch (error) { status.textContent = error.message; }
    finally { loading = false; input.disabled = false; linkButton.disabled = false; }
  });

  async function framesFromVideo() {
    const video = document.createElement('video'); video.muted = true; video.playsInline = true; video.preload = 'auto';
    try {
      await waitMedia(video, 'loadeddata', () => { video.src = fileUrl; video.load(); });
      const canvas = document.createElement('canvas'), ctx = canvas.getContext('2d');
      const scale = Math.min(1, 640 / Math.max(video.videoWidth, video.videoHeight));
      canvas.width = Math.max(1, Math.round(video.videoWidth * scale)); canvas.height = Math.max(1, Math.round(video.videoHeight * scale));
      const frames = [];
      for (const fraction of [0.01, 0.08, 0.25, 0.5, 0.75, 0.95]) {
        const time = Math.min(video.duration - 0.001, video.duration * fraction);
        await waitMedia(video, 'seeked', () => { video.currentTime = time; });
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height); frames.push({ time, image: canvas.toDataURL('image/jpeg', 0.72) });
      }
      return frames;
    } finally { video.pause(); video.removeAttribute('src'); video.load(); }
  }

  button.addEventListener('click', async () => {
    if (!ready || loading) return;
    if (location.hostname.endsWith('.github.io')) { status.textContent = '这是 GitHub Pages 静态演示站，AI 视频分析需要连接应用后端。'; return; }
    loading = true; button.disabled = true; input.disabled = true; linkButton.disabled = true; analysis = null; results.innerHTML = ''; strip.innerHTML = ''; player.pause();
    try {
      status.textContent = '正在本机提取 6 张关键画面…';
      const frames = await framesFromVideo();
      strip.innerHTML = frames.map(f => `<figure><img src="${f.image}" alt="${f.time.toFixed(1)}秒关键帧"><figcaption>${f.time.toFixed(1)}s</figcaption></figure>`).join('');
      status.textContent = '正在发送关键帧到百炼分析，请稍候…';
      const response = await fetch('/api/analyze', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ duration: player.duration, frames, transcript: document.querySelector('#caseTranscript').value.trim() }), signal: AbortSignal.timeout(75000) });
      const data = await response.json(); if (!response.ok) throw new Error(data.error || '分析失败'); analysis = data.analysis;
      results.innerHTML = `<div class="analysis-summary"><span class="section-kicker">AI / 基于抽样画面的分析</span><h3>${escapeHtml(analysis.summary)}</h3><p><strong>开场观察：</strong>${escapeHtml(analysis.hook)}</p></div><div class="analysis-shots">${analysis.shots.map(s => `<article><span class="detail-label">${escapeHtml(s.time)}</span><p><strong>可见事实</strong>${escapeHtml(s.observation)}</p><p><strong>拍摄建议</strong>${escapeHtml(s.suggestion)}</p></article>`).join('')}</div><p class="page-subtitle">${escapeHtml(analysis.limitations)}</p><div class="analysis-adapt"><p>${escapeHtml(analysis.adaptation)}</p><button class="button button-dark" id="useRealCase">带着这个结构写文案</button></div>`;
      document.querySelector('#useRealCase').addEventListener('click', () => {
        state.caseReference = JSON.stringify({ hook: analysis.hook, adaptation: analysis.adaptation, shots: analysis.shots }).slice(0, 2000);
        document.querySelector('#copyReference').classList.remove('hidden'); document.querySelector('#copyReferenceText').textContent = '已参考真实案例：' + analysis.adaptation;
        navigate('copy'); showToast('已带入案例结构，请填写你店铺的真实商品与卖点');
      });
      status.textContent = '百炼分析完成 · 仅供创作参考，不代表热度预测';
    } catch (error) { status.textContent = error.name === 'TimeoutError' ? '分析超时，请稍后重试' : error.message; showToast(status.textContent); }
    finally { loading = false; button.disabled = !ready; input.disabled = false; linkButton.disabled = false; }
  });
  document.querySelector('#clearCopyReference').addEventListener('click', () => { state.caseReference = ''; document.querySelector('#copyReference').classList.add('hidden'); });
  window.addEventListener('beforeunload', () => { if (fileUrl) URL.revokeObjectURL(fileUrl); });
})();
