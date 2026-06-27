const photoInput = document.getElementById('photoInput');
const photoPreview = document.getElementById('photoPreview');
const uploadCopy = document.getElementById('uploadCopy');
const chatLog = document.getElementById('chatLog');
const prompt = document.getElementById('prompt');
const sendBtn = document.getElementById('sendBtn');
const downloadBtn = document.getElementById('downloadBtn');
const mockMode = document.getElementById('mockMode');
const apiStatus = document.getElementById('apiStatus');
const gender = document.getElementById('gender');
const age = document.getElementById('age');
const focus = document.getElementById('focus');
const reportMeta = document.getElementById('reportMeta');
const reportBody = document.getElementById('reportBody');
const progressWrap = document.getElementById('progressWrap');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const dropzone = document.getElementById('dropzone');
const previewModal = document.getElementById('previewModal');
const previewCanvas = document.getElementById('previewCanvas');
const previewTitle = document.getElementById('previewTitle');
const previewMeta = document.getElementById('previewMeta');
const previewClose = document.getElementById('previewClose');
const previewDownload = document.getElementById('previewDownload');

let uploadedImage = '';
let progressTimer = null;
let progressValue = 0;
let currentReportData = null;

function escapeHtml(text) {
  return String(text)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function appendMessage(role, text) {
  const node = document.createElement('div');
  node.className = `bubble ${role}`;
  node.textContent = text;
  chatLog.appendChild(node);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function setProgress(value, text) {
  progressValue = Math.max(0, Math.min(100, value));
  progressFill.style.width = `${progressValue}%`;
  progressText.textContent = text || `正在生成 ${progressValue}%`;
}

function startProgress() {
  progressWrap.hidden = false;
  setProgress(8, '正在整理手相照片...');
  clearInterval(progressTimer);
  progressTimer = setInterval(() => {
    if (progressValue < 28) setProgress(progressValue + 7, '正在识别纹理与分区...');
    else if (progressValue < 56) setProgress(progressValue + 5, '正在编排命理内容...');
    else if (progressValue < 84) setProgress(progressValue + 4, '正在润色海报版式...');
    else setProgress(Math.min(97, progressValue + 1), '即将完成...');
  }, 480);
}

function stopProgress() {
  clearInterval(progressTimer);
  progressTimer = null;
  setProgress(100, '已完成');
  window.setTimeout(() => {
    progressWrap.hidden = true;
    progressFill.style.width = '0%';
    progressValue = 0;
  }, 700);
}

function buildMockData() {
  return {
    title: '手相分析报告',
    meta: `性别 ${gender.value} · 年龄 ${age.value} · 关注 ${focus.value}`,
    overview:
      '整体气场偏稳，属于先蓄势、后见成果的类型。做事不宜急转弯，更适合以持续投入换取长期回报。',
    destiny: [
      '事业：适合做需要耐心、沟通和持续积累的事情，贵人多来自稳定合作关系。',
      '感情：表达偏克制，关键在于主动说清楚自己的节奏与边界。',
      '财运：财路以稳为主，不宜追高，更适合分阶段推进。',
    ],
    suggestions: [
      '未来三个月优先完成一件能沉淀口碑的事。',
      '遇到机会先说清目标，再决定投入力度。',
      '保持作息稳定，精神状态会直接影响判断。',
    ],
    tags: ['稳中求进', '长线布局', '重视沟通', '积累见效'],
  };
}

function renderReport(data) {
  currentReportData = data;
  reportMeta.textContent = data.meta;
  reportBody.innerHTML = `
    <div class="report-columns">
      <section class="report-section report-main">
        <div class="section-head">
          <span class="section-tag">命理</span>
          <h3>整体判断</h3>
        </div>
        <p class="report-overview">${escapeHtml(data.overview)}</p>
        <div class="destiny-list">
          ${data.destiny
            .map(
              (item) => `
                <article class="destiny-item">
                  <span class="destiny-bullet"></span>
                  <div>${escapeHtml(item)}</div>
                </article>
              `
            )
            .join('')}
        </div>
      </section>

      <section class="report-section report-side">
        <div class="section-head">
          <span class="section-tag">建议</span>
          <h3>行动指引</h3>
        </div>
        <ol class="report-list">
          ${data.suggestions.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
        </ol>
        <div class="tags">
          ${data.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}
        </div>
      </section>
    </div>
  `;
}

function renderLoadingReport() {
  reportMeta.textContent = '正在生成';
  reportBody.innerHTML = `
    <section class="report-section">
      <div class="section-head">
        <span class="section-tag">命理 / 建议</span>
        <h3>正在排版</h3>
      </div>
      <div class="report-empty">报告正在整理成海报式版面，请稍候。</div>
    </section>
  `;
}

async function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function loadImageFile(file) {
  uploadedImage = await fileToDataUrl(file);
  photoPreview.src = uploadedImage;
  photoPreview.style.display = 'block';
  uploadCopy.style.display = 'none';
}

photoInput.addEventListener('change', async () => {
  const file = photoInput.files?.[0];
  if (!file) return;
  await loadImageFile(file);
});

dropzone.addEventListener('dragover', (event) => event.preventDefault());
dropzone.addEventListener('drop', async (event) => {
  event.preventDefault();
  const file = event.dataTransfer.files?.[0];
  if (!file) return;
  await loadImageFile(file);
});

async function checkApiStatus() {
  apiStatus.textContent = '公开演示版';
}


function buildPromptPayload(question) {
  return {
    messages: [
      {
        role: 'system',
        content:
          '你是一位国学大师IP的手相分析助手。请根据用户上传的手相照片和问题，输出有条理、结构清晰、温和专业的报告内容，适合排版成图片。',
      },
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: `性别：${gender.value}；年龄：${age.value}；关注方向：${focus.value}。问题：${question}`,
          },
          ...(uploadedImage ? [{ type: 'image_url', image_url: { url: uploadedImage } }] : []),
        ],
      },
    ],
    temperature: 0.7,
  };
}

function getQuestion() {
  return (
    prompt.value.trim() ||
    '请结合手相照片，分析我的事业、感情、财运和未来三个月的建议。'
  );
}

async function openPreview() {
  if (!currentReportData) return;
  previewTitle.textContent = currentReportData.title || '手相分析报告';
  previewMeta.textContent = currentReportData.meta || '';
  previewCanvas.src = await buildPreviewImage();
  previewModal.hidden = false;
}

function closePreview() {
  previewModal.hidden = true;
}

function wrapText(ctx, text, maxWidth) {
  const chars = Array.from(text);
  const lines = [];
  let line = '';
  for (const ch of chars) {
    const test = line + ch;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = ch;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function drawPaperTexture(ctx, width, height) {
  const grain = ctx.createImageData(width, height);
  for (let i = 0; i < grain.data.length; i += 4) {
    const n = 222 + Math.floor(Math.random() * 18);
    grain.data[i] = n;
    grain.data[i + 1] = n - 6;
    grain.data[i + 2] = n - 18;
    grain.data[i + 3] = 10 + Math.floor(Math.random() * 18);
  }
  ctx.putImageData(grain, 0, 0);
}

function drawSeal(ctx, x, y, size) {
  ctx.save();
  ctx.translate(x, y);
  ctx.strokeStyle = '#a63a26';
  ctx.fillStyle = 'rgba(214, 66, 37, 0.12)';
  ctx.lineWidth = 4;
  ctx.strokeRect(-size / 2, -size / 2, size, size);
  ctx.fillRect(-size / 2 + 8, -size / 2 + 8, size - 16, size - 16);
  ctx.restore();
}

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });
}

async function buildPreviewImage() {
  const canvas = document.createElement('canvas');
  canvas.width = 1400;
  canvas.height = 2200;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#eadcc0';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const paper = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  paper.addColorStop(0, '#f2e8d2');
  paper.addColorStop(0.45, '#ead9b9');
  paper.addColorStop(1, '#dcc8a2');
  ctx.fillStyle = paper;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawPaperTexture(ctx, canvas.width, canvas.height);

  const edge = ctx.createLinearGradient(0, 0, canvas.width, 0);
  edge.addColorStop(0, 'rgba(90, 58, 25, 0.12)');
  edge.addColorStop(0.08, 'rgba(90, 58, 25, 0.02)');
  edge.addColorStop(0.92, 'rgba(90, 58, 25, 0.02)');
  edge.addColorStop(1, 'rgba(90, 58, 25, 0.12)');
  ctx.fillStyle = edge;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const strokeInset = 58;
  ctx.strokeStyle = 'rgba(111, 69, 28, 0.38)';
  ctx.lineWidth = 3;
  ctx.strokeRect(strokeInset, strokeInset, canvas.width - strokeInset * 2, canvas.height - strokeInset * 2);
  ctx.strokeRect(strokeInset + 20, strokeInset + 20, canvas.width - (strokeInset + 20) * 2, canvas.height - (strokeInset + 20) * 2);

  ctx.fillStyle = '#7d4b18';
  ctx.font = '700 58px "Songti SC", serif';
  ctx.fillText('手相分析报告', 108, 150);

  ctx.fillStyle = '#a6804e';
  ctx.font = '28px "Songti SC", serif';
  ctx.fillText(reportMeta.textContent || '', 108, 206);

  ctx.fillStyle = 'rgba(125, 75, 24, 0.10)';
  ctx.font = '900 210px "Songti SC", serif';
  ctx.fillText('命', 1030, 430);
  ctx.fillText('理', 1030, 680);

  if (uploadedImage) {
    const img = await loadImage(uploadedImage).catch(() => null);
    if (img) {
      const boxX = 104;
      const boxY = 252;
      const boxW = 372;
      const boxH = 452;
      const scale = Math.max(boxW / img.width, boxH / img.height);
      const drawW = img.width * scale;
      const drawH = img.height * scale;
      const offsetX = boxX + (boxW - drawW) / 2;
      const offsetY = boxY + (boxH - drawH) / 2;
      ctx.save();
      ctx.beginPath();
      ctx.roundRect(boxX, boxY, boxW, boxH, 20);
      ctx.clip();
      ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
      ctx.fillStyle = 'rgba(20, 14, 9, 0.18)';
      ctx.fillRect(boxX, boxY, boxW, boxH);
      ctx.restore();
      ctx.strokeStyle = 'rgba(125, 75, 24, 0.38)';
      ctx.lineWidth = 2;
      ctx.strokeRect(boxX + 2, boxY + 2, boxW - 4, boxH - 4);
    } else {
      ctx.save();
      ctx.beginPath();
      ctx.roundRect(104, 252, 372, 452, 20);
      ctx.clip();
      ctx.fillStyle = 'rgba(255,255,255,0.26)';
      ctx.fillRect(104, 252, 372, 452);
      ctx.restore();
    }
  }

  const leftX = 120;
  const midX = 690;
  const topY = 340;
  const colWidth = 520;

  ctx.fillStyle = '#8a541d';
  ctx.font = '700 30px "Songti SC", serif';
  ctx.fillText('命理', leftX, topY);
  ctx.fillText('建议', midX, topY);

  ctx.fillStyle = '#2f2519';
  ctx.font = '30px "Songti SC", serif';
  const overviewLines = wrapText(ctx, currentReportData?.overview || '', colWidth);
  let y = topY + 56;
  for (const line of overviewLines) {
    ctx.fillText(line, leftX, y);
    y += 46;
  }

  y += 28;
  ctx.font = '28px "Songti SC", serif';
  for (const item of currentReportData?.destiny || []) {
    const lines = wrapText(ctx, item, colWidth);
    ctx.fillStyle = '#5b3b18';
    ctx.fillText('•', leftX, y);
    ctx.fillStyle = '#2f2519';
    let lineY = y;
    for (const line of lines) {
      ctx.fillText(line, leftX + 34, lineY);
      lineY += 42;
    }
    y = lineY + 18;
  }

  const suggestionLines = [];
  for (const item of currentReportData?.suggestions || []) {
    suggestionLines.push(...wrapText(ctx, item, colWidth - 10));
  }
  ctx.font = '28px "Songti SC", serif';
  y = topY + 56;
  for (const line of suggestionLines) {
    ctx.fillText(line, midX, y);
    y += 48;
  }

  drawSeal(ctx, canvas.width - 160, canvas.height - 250, 120);
  ctx.fillStyle = '#8a541d';
  ctx.font = '700 26px "Songti SC", serif';
  ctx.fillText('国学海报', canvas.width - 252, canvas.height - 90);

  return canvas.toDataURL('image/png');
}

async function downloadReportImage() {
  const url = await buildPreviewImage();
  const link = document.createElement('a');
  link.download = '手相报告.png';
  link.href = url;
  link.click();
  previewCanvas.src = url;
  previewTitle.textContent = currentReportData?.title || '手相分析报告';
  previewMeta.textContent = currentReportData?.meta || '';
  previewModal.hidden = false;
}

async function sendPrompt() {
  const question = getQuestion();
  appendMessage('user', question);
  sendBtn.disabled = true;
  downloadBtn.disabled = true;
  renderLoadingReport();
  startProgress();

  try {
    if (true || mockMode.checked) {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const data = buildMockData();
      appendMessage('assistant', '报告已生成，已自动打开大图预览。');
      renderReport(data);
      downloadBtn.disabled = false;
      await openPreview();
      return;
    }

    const res = await fetch('/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(buildPromptPayload(question)),
    });
    const data = await res.json();
    const content = data?.choices?.[0]?.message?.content || '没有收到有效回复。';
    appendMessage('assistant', content);

    renderReport({
      title: '手相分析报告',
      meta: `性别 ${gender.value} · 年龄 ${age.value} · 关注 ${focus.value}`,
      overview: content,
      destiny: [
        '事业：请根据上文自然整理为事业判断。',
        '感情：请根据上文自然整理为感情判断。',
        '财运：请根据上文自然整理为财运判断。',
      ],
      suggestions: ['请根据上文自然整理为适合海报排版的建议。'],
      tags: ['国学风格', '结构化输出', '图片报告'],
    });
    downloadBtn.disabled = false;
    await openPreview();
  } catch (error) {
    renderReport({
      title: '请求失败',
      meta: '请检查接口或密钥配置',
      overview: error?.message || '未知错误',
      destiny: ['请重试。', '请检查网络连接。', '请确认密钥是否可用。'],
      suggestions: ['刷新页面后重新生成。'],
      tags: ['失败', '待处理'],
    });
  } finally {
    stopProgress();
    sendBtn.disabled = false;
    downloadBtn.disabled = false;
  }
}

sendBtn.addEventListener('click', sendPrompt);
downloadBtn.addEventListener('click', downloadReportImage);
previewClose.addEventListener('click', closePreview);
previewDownload.addEventListener('click', downloadReportImage);
previewModal.addEventListener('click', (event) => {
  if (event.target === previewModal) closePreview();
});
gender.addEventListener('change', () => mockMode.checked && renderReport(buildMockData()));
age.addEventListener('input', () => mockMode.checked && renderReport(buildMockData()));
focus.addEventListener('change', () => mockMode.checked && renderReport(buildMockData()));

checkApiStatus();
renderReport(buildMockData());

