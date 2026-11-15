const CASES = [
  { id: 1, title: "早上 7 点的第一炉，到底有多香？", platform: "抖音", industry: "美食饮品", tag: "过程感", duration: "00:21", views: "18.6w", likes: "1.4w", saves: "3,206", insight: "前 3 秒出炉", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=85", fit: "适合烘焙、早餐、咖啡等有制作过程的门店", steps: [["钩子", "镜头贴近烤箱，先给刚出炉的热气。"], ["证据", "切开产品，展示酥脆声和真实内馅。"], ["行动", "带出门店位置和最佳到店时间。"]] },
  { id: 2, title: "没有豪华装修，却被街坊吃了 12 年", platform: "视频号", industry: "美食饮品", tag: "老板故事", duration: "00:32", views: "9.8w", likes: "8,721", saves: "2,105", insight: "真实人物出镜", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=85", fit: "适合经营多年、有熟客故事的社区门店", steps: [["反差", "先说没有什么，再说为什么有人一直来。"], ["人物", "老板本人讲一个街坊顾客的小故事。"], ["邀请", "邀请观众来店里坐坐，弱化推销感。"]] },
  { id: 3, title: "剪完这个头发，整个人轻了 10 岁", platform: "小红书", industry: "美业丽人", tag: "前后对比", duration: "00:18", views: "26.3w", likes: "2.1w", saves: "5,966", insight: "结果先行", image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=85", fit: "适合美发、美甲、美睫等效果直观的服务", steps: [["结果", "第一秒直接出现改造后的满意表情。"], ["过程", "用三个特写交代设计和操作细节。"], ["背书", "顾客用一句真实感受完成收尾。"]] },
  { id: 4, title: "小狗第一次洗澡，紧张到不敢看镜头", platform: "抖音", industry: "宠物", tag: "情绪共鸣", duration: "00:24", views: "31.7w", likes: "3.8w", saves: "4,102", insight: "可爱瞬间开场", image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=85", fit: "适合宠物洗护、寄养和宠物用品门店", steps: [["情绪", "捕捉宠物一个最有性格的微表情。"], ["安心", "展示洗护人员温柔、专业的操作。"], ["变化", "用吹干后的状态做轻松反转。"]] },
  { id: 5, title: "这把旧椅子，修完还能再坐 20 年", platform: "视频号", industry: "生活服务", tag: "手艺过程", duration: "00:41", views: "7.2w", likes: "6,118", saves: "3,475", insight: "细节治愈", image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=900&q=85", fit: "适合维修、清洗、改造等靠手艺赢信任的生意", steps: [["问题", "用磨损特写交代物品当前状态。"], ["过程", "保留刮、磨、缝等声音，突出手艺。"], ["结果", "同角度做修复前后的完整对照。"]] },
  { id: 6, title: "客厅只换一盏灯，氛围完全不一样", platform: "小红书", industry: "家居零售", tag: "低成本改造", duration: "00:27", views: "14.9w", likes: "1.2w", saves: "8,341", insight: "场景化种草", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=85", fit: "适合家居、花店、软装和生活方式零售", steps: [["痛点", "同一空间先拍普通光线下的真实状态。"], ["变化", "一镜切换产品使用后的氛围。"], ["方法", "给出型号、色温等可操作建议。"]] },
  { id: 7, title: "午休 30 分钟，肩颈终于松下来了", platform: "抖音", industry: "生活服务", tag: "即时体验", duration: "00:29", views: "11.5w", likes: "9,380", saves: "3,734", insight: "痛点明确", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=85", fit: "适合按摩、养生、健身等体验型服务", steps: [["痛点", "用上班族熟悉的僵硬动作作为开场。"], ["体验", "拍环境、手法和放松后的三个细节。"], ["时间", "强调午休可完成，降低决策门槛。"]] },
  { id: 8, title: "一杯奶茶里，为什么要放 7 种小料？", platform: "小红书", industry: "美食饮品", tag: "好奇揭秘", duration: "00:25", views: "21.8w", likes: "1.7w", saves: "4,809", insight: "数字钩子", image: "https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=900&q=85", fit: "适合茶饮、小吃和有独特配方的产品", steps: [["提问", "用数字和疑问制造继续观看的理由。"], ["拆解", "每种小料只给一个最诱人的特写。"], ["口感", "用一句具体口感描述完成种草。"]] },
  { id: 9, title: "开店前 1 小时，花店老板都在忙什么？", platform: "视频号", industry: "家居零售", tag: "门店日常", duration: "00:36", views: "6.9w", likes: "5,210", saves: "2,884", insight: "日常有温度", image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=85", fit: "适合花店、书店、买手店等重氛围门店", steps: [["时间", "字幕点明清晨，让日常有观察感。"], ["动作", "连续拍整理、修剪、摆放等自然动作。"], ["情绪", "用开门迎客的画面温柔收尾。"]] },
  { id: 10, title: "只用一个小工具，把鞋洗得像新的一样", platform: "抖音", industry: "生活服务", tag: "技巧分享", duration: "00:19", views: "38.4w", likes: "4.2w", saves: "1.1w", insight: "实用可收藏", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85", fit: "适合清洗、家政和维修等解决问题的生意", steps: [["结果", "脏鞋和成品并排，先证明效果。"], ["技巧", "只讲一个简单、可复述的专业技巧。"], ["转化", "提醒复杂材质需要交给专业人员。"]] },
  { id: 11, title: "猫咪住店第一晚，我们偷偷看了 6 次", platform: "小红书", industry: "宠物", tag: "信任建立", duration: "00:34", views: "12.4w", likes: "1.3w", saves: "6,240", insight: "服务细节", image: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=900&q=85", fit: "适合宠物寄养、母婴托管等信任型服务", steps: [["担心", "替顾客说出第一次托付时的真实焦虑。"], ["细节", "用巡视、记录、陪伴三个画面回应。"], ["安心", "给主人发送状态的动作最能建立信任。"]] },
  { id: 12, title: "做了 3000 双鞋后，我最推荐这一双", platform: "视频号", industry: "家居零售", tag: "老板推荐", duration: "00:39", views: "8.7w", likes: "7,115", saves: "4,388", insight: "专业背书", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85", fit: "适合服饰、眼镜、家居等需要专业选购建议的零售", steps: [["资历", "用真实经验数字建立专业感。"], ["选择", "给出明确推荐，不堆砌太多产品。"], ["理由", "围绕顾客真实使用场景解释原因。"]] }
];

const state = {
  view: "studio",
  platform: "全部",
  industry: "全部",
  search: "",
  sort: "hot",
  visibleCases: 6,
  contentType: "口播短视频",
  tone: "亲切像街坊",
  structure: "探店种草",
  assets: [],
  libraryFilter: "全部",
  objectUrls: [],
  resultUrl: null,
  isRendering: false,
  selectedHook: 0,
  resultType: null,
  profile: null,
  hooks: [],
  scenes: [],
  frameData: []
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const STATIC_HOSTING = location.hostname.endsWith('.github.io');
const STATIC_BACKEND_MESSAGE = '这是 GitHub Pages 静态演示站。AI 文案、开场生成和视频制作需要连接应用后端。';
const escapeHtml = (value = "") => String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));

function initIcons() {
  if (window.lucide) window.lucide.createIcons({ attrs: { "aria-hidden": "true" } });
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2300);
}

const profileFields = ['name','industry','city','address','product','price','selling','audience','cta'];
function readProfile() {
  try {
    const value=JSON.parse(localStorage.getItem('xiangli.store-profile')||'null');
    if(!value||['name','industry','city','product','audience'].some(key=>typeof value[key]!=='string'||!value[key].trim())) return null;
    return Object.fromEntries(profileFields.map(key=>[key,String(value[key]||'').trim()]));
  } catch { return null; }
}
function profileReady() { return !!state.profile; }
function setProfileFields(profile) {
  const ids={name:'profileShopInput',industry:'profileIndustry',city:'profileCityInput',address:'profileAddressInput',product:'profileProductInput',price:'profilePriceInput',selling:'profileSellingInput',audience:'profileAudienceInput',cta:'profileCtaInput'};
  for(const [key,id] of Object.entries(ids)) $('#'+id).value=profile?.[key]||'';
}
function openProfile() { setProfileFields(state.profile); $('#shopDialog').showModal(); }
function applyStoreProfile(profile) {
  state.profile=profile;
  localStorage.setItem('xiangli.store-profile',JSON.stringify(profile));
  invalidateHooks('店铺资料已更新，请重新生成开场');
  $('#topShopName').textContent=profile.name;
  $('#sidebarShopName').textContent=profile.name;
  $('#sidebarShopMeta').textContent=`${profile.industry} · ${profile.city}`;
  $('#storeProfileSummary').textContent=`${profile.name} · ${profile.industry} · ${profile.city}`;
  $('#storeProfileFacts').textContent=[profile.product,profile.price,profile.selling].filter(Boolean).join(' · ')||'可随时补充价格与真实卖点';
  $('#shopInput').value=profile.name; $('#productInput').value=profile.product;
  $('#sellingInput').value=profile.selling; $('#sellingCount').textContent=`${profile.selling.length}/300`;
  $('#audienceInput').value=profile.audience;
  $('#videoEndingInput').value=profile.cta;
}
function invalidateHooks(message='上传或修改素材后，需要重新生成前三秒开场') {
  state.hooksReady=false; state.hooks=[]; state.scenes=[]; state.frameData=[]; state.selectedHook=0;
  const choices=$('#hookChoices');
  if(choices) { choices.classList.add('empty-hook-choices'); choices.replaceChildren(Object.assign(document.createElement('span'),{id:'hookEmptyState',textContent:message})); }
  const status=$('#hookDesignStatus'); if(status) status.textContent=message;
  const preview=$('#previewHookTitle'); if(preview) preview.textContent='前三秒开场钩子';
  const title=$('#videoTitleInput'); if(title) title.value='';
  const renderButton=$('#renderVideo'); if(renderButton) renderButton.innerHTML='<i data-lucide="wand-sparkles"></i> 设计前三秒开场';
  clearVideoResult();
}
function clearVideoResult() {
  if(state.resultUrl) URL.revokeObjectURL(state.resultUrl);
  state.resultUrl=null; state.resultType=null;
  const result=$('#resultVideo'); if(result) { result.pause(); result.removeAttribute('src'); result.load(); result.classList.add('hidden'); }
  $('#renderCanvas')?.classList.remove('hidden'); $('#downloadVideo')?.classList.add('hidden'); $('#remakeVideo')?.classList.add('hidden');
  const note=$('#exportNote'); if(note) note.textContent='选择开场后生成真实动态、AI 配音和字幕';
}
function collectStoreProfile() {
  return Object.fromEntries(profileFields.map(key=>[key,$('#'+({name:'profileShopInput',industry:'profileIndustry',city:'profileCityInput',address:'profileAddressInput',product:'profileProductInput',price:'profilePriceInput',selling:'profileSellingInput',audience:'profileAudienceInput',cta:'profileCtaInput'})[key]).value.trim()]));
}

function navigate(view) {
  state.view = view;
  $$(".view").forEach(el => el.classList.toggle("active", el.dataset.view === view));
  $$('[data-nav]').forEach(el => el.classList.toggle("active", el.dataset.nav === view));
  $("#breadcrumbTitle").textContent = ({ discover: "案例参考", copy: "文案设置", studio: "一键做视频", library: "我的素材" })[view];
  if (view === "studio") drawPlaceholder();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function caseCard(item) {
  return `<article class="case-card" data-case-id="${item.id}" tabindex="0" role="button" aria-label="拆解案例：${escapeHtml(item.title)}">
    <div class="case-cover"><img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy" referrerpolicy="no-referrer">
      <div class="cover-top"><span class="platform-label"><span class="platform-marker"></span>${item.platform}</span><span class="duration-label">${item.duration}</span></div>
      <span class="play-button"><i data-lucide="scan-search"></i></span>
      <div class="cover-bottom"><span class="cover-tag">${item.tag}</span><span class="cover-views">播放 ${item.views}</span></div>
    </div>
    <div class="case-card-body"><div class="case-card-title">${item.title}</div><div class="case-meta"><span class="case-metrics"><span class="case-metric"><i data-lucide="heart"></i>${item.likes}</span><span class="case-metric"><i data-lucide="bookmark"></i>${item.saves}</span></span><span class="case-insight">${item.insight}</span></div></div>
  </article>`;
}

function getFilteredCases() {
  const keyword = state.search.trim().toLowerCase();
  let list = CASES.filter(item => (state.platform === "全部" || item.platform === state.platform) && (state.industry === "全部" || item.industry === state.industry) && (!keyword || [item.title, item.industry, item.tag, item.insight].join(" ").toLowerCase().includes(keyword)));
  if (state.sort === "saves") list = [...list].sort((a, b) => parseMetric(b.saves) - parseMetric(a.saves));
  return list;
}

function parseMetric(value) { return Number(String(value).replace("w", "0000").replace(/\D/g, "")); }

function renderCases() {
  const list = getFilteredCases();
  const shown = list.slice(0, state.visibleCases);
  $("#caseGrid").innerHTML = shown.length ? shown.map(caseCard).join("") : `<div class="no-results">没有找到相符的案例，换个关键词或行业试试。</div>`;
  $(".fresh-count").textContent = list.length === CASES.length ? "精选 12 条" : `找到 ${list.length} 条`;
  initIcons();
}

function openCase(id) {
  const item = CASES.find(entry => entry.id === Number(id));
  if (!item) return;
  $("#caseDialogContent").innerHTML = `<div class="case-detail-layout">
    <div class="case-detail-cover"><img src="${item.image}" alt="${escapeHtml(item.title)}"><div class="cover-top"><span class="platform-label"><span class="platform-marker"></span>${item.platform}</span><span class="duration-label">${item.duration}</span></div></div>
    <div class="case-detail-content"><span class="detail-label"><i data-lucide="scan-search"></i> AI 爆款拆解 · DEMO</span><h2 id="caseDialogTitle">${item.title}</h2>
      <div class="detail-meta"><span><i data-lucide="play"></i>${item.views} 播放</span><span><i data-lucide="heart"></i>${item.likes}</span><span><i data-lucide="bookmark"></i>${item.saves}</span></div><div class="detail-separator"></div>
      <div class="detail-section-title"><i data-lucide="blocks"></i> 这条视频为什么有效</div><div class="detail-steps">${item.steps.map((step, i) => `<div class="detail-step"><span class="detail-step-num">0${i + 1}</span><div><strong>${step[0]}</strong>${step[1]}</div></div>`).join("")}</div>
      <div class="detail-fit"><i data-lucide="store"></i><span><strong>适合你这样拍：</strong>${item.fit}</span></div>
      <div class="detail-actions"><button class="button button-dark" data-action="remix-case" data-case-id="${item.id}"><i data-lucide="wand-sparkles"></i> 仿写我的版本</button><button class="button button-outline" data-action="use-case-video" data-case-id="${item.id}"><i data-lucide="clapperboard"></i> 按这个结构做视频</button><button class="icon-button" data-action="save-case" aria-label="收藏案例" title="收藏案例"><i data-lucide="bookmark"></i></button></div>
    </div></div>`;
  $("#caseModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
  initIcons();
}

function closeCase() {
  $("#caseModal").classList.add("hidden");
  document.body.style.overflow = "";
}

function renderScripts(scripts) {
  $("#copyResults").innerHTML = scripts.map((script, index) => `<article class="script-card" data-script-index="${index}"><div class="script-card-heading"><span class="script-type-tag">${escapeHtml(script.tag)}</span><span class="script-actions"><button class="icon-button" data-action="save-script" aria-label="收藏文案" title="收藏文案"><i data-lucide="heart"></i></button><button class="icon-button" data-action="copy-script" aria-label="复制文案" title="复制文案"><i data-lucide="copy"></i></button></span></div><p class="script-body"><span class="script-hook">${escapeHtml(script.hook)}</span>${escapeHtml(script.body)}</p><div class="script-footer"><span>${escapeHtml(script.fit)}</span><button data-action="script-to-video"><i data-lucide="clapperboard"></i> 做成视频</button></div></article>`).join("");
  initIcons();
}

async function generateScripts() {
  if (state.copyLoading) return;
  if (STATIC_HOSTING) { $('#copyStatus').textContent=STATIC_BACKEND_MESSAGE; showToast('静态演示站暂未连接 AI 后端'); return; }
  if (!profileReady()) { showToast('先填写店铺档案，文案才能基于真实信息生成'); openProfile(); return; }
  const input = { ...state.profile, shop: $('#shopInput').value.trim(), product: $('#productInput').value.trim(), selling: $('#sellingInput').value.trim(), audience: $('#audienceInput').value.trim(), platform: $('#copyPlatform').value, tone: state.tone, contentType: state.contentType, reference: state.caseReference || '' };
  if (!input.shop || !input.product) { showToast('请先填写店名和主推商品'); openProfile(); return; }
  state.copyLoading = true;
  const button = $('#generateCopy'), retry = $('[data-action="refresh-copy"]');
  button.disabled = true; retry.disabled = true; button.textContent = '正在生成…';
  $('#copyStatus').textContent = '百炼正在根据你的店铺信息写文案，请稍候…';
  try {
    const response = await fetch('/api/copy', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(input), signal: AbortSignal.timeout(65000) });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || '生成失败，请重试');
    renderScripts(result.scripts);
    $('#copyStatus').textContent = '已由百炼生成 · 请核实事实后发布';
    showToast('已生成 3 条原创文案');
  } catch (error) {
    const message = error.name === 'TimeoutError' ? '生成超时，请稍后重试' : error instanceof SyntaxError ? '请先启动本地后端服务' : error.message;
    $('#copyStatus').textContent = message;
    showToast(message);
  } finally {
    state.copyLoading = false; button.disabled = false; retry.disabled = false;
    button.innerHTML = '<i data-lucide="sparkles"></i> 生成文案'; initIcons();
  }
}

async function copyText(text) {
  try { await navigator.clipboard.writeText(text); showToast("文案已复制，可以直接去发布"); }
  catch { showToast("当前浏览器未开放剪贴板权限，请手动选中文字"); }
}

function addFiles(fileList) {
  const files = [...fileList].filter(file => file.type.startsWith("image/") || file.type.startsWith("video/")).slice(0, 3 - state.assets.length);
  if (!files.length) { showToast("请选择图片或视频文件"); return; }
  files.forEach(file => {
    const url = URL.createObjectURL(file);
    state.objectUrls.push(url);
    state.assets.push({ id: `${Date.now()}-${Math.random().toString(16).slice(2)}`, file, url, kind: file.type.startsWith("video/") ? "视频" : "照片", name: file.name });
  });
  invalidateHooks();
  renderAssets();
  showToast(`已加入 ${files.length} 段素材，文件只在本机处理`);
}

function removeAsset(id) {
  if(state.isRendering) return;
  invalidateHooks();
  const asset = state.assets.find(item => item.id === id);
  if (asset) URL.revokeObjectURL(asset.url);
  state.assets = state.assets.filter(item => item.id !== id);
  renderAssets();
}

function mediaMarkup(asset, context) {
  const media = asset.kind === "照片" ? `<img src="${asset.url}" alt="${escapeHtml(asset.name)}">` : `<video src="${asset.url}" muted preload="metadata"></video>`;
  if (context === "studio") return `<div class="studio-asset">${media}<span class="studio-asset-kind">${asset.kind}</span><button class="asset-remove" data-action="remove-asset" data-asset-id="${asset.id}" aria-label="移除素材"><i data-lucide="x"></i></button></div>`;
  return `<article class="library-card"><div class="library-visual">${media}<button class="asset-remove" data-action="remove-asset" data-asset-id="${asset.id}" aria-label="移除素材"><i data-lucide="x"></i></button></div><div class="library-card-meta"><strong title="${escapeHtml(asset.name)}">${escapeHtml(asset.name)}</strong><span>${asset.kind}</span></div></article>`;
}

function renderAssets() {
  $("#studioAssets").innerHTML = state.assets.map(asset => mediaMarkup(asset, "studio")).join("");
  const filtered = state.assets.filter(asset => state.libraryFilter === "全部" || asset.kind === state.libraryFilter);
  $("#libraryGrid").innerHTML = state.assets.length ? (filtered.length ? filtered.map(asset => mediaMarkup(asset, "library")).join("") : `<div class="no-results">还没有${state.libraryFilter}素材。</div>`) : `<div class="empty-state"><span class="empty-icon"><i data-lucide="images"></i></span><strong>你的好素材，从这里开始</strong><span>上传几张产品、店面或制作过程的照片</span><label class="button button-outline" for="libraryMediaInput"><i data-lucide="upload"></i> 选择本地素材</label></div>`;
  const countText = `${state.assets.length} 段素材`;
  $("#studioAssetCount").textContent = countText;
  $("#libraryAssetCount").textContent = countText;
  $("#assetNavCount").textContent = state.assets.length;
  initIcons();
  drawPlaceholder();
}

function roundedRect(ctx, x, y, w, h, r, fill) {
  ctx.beginPath(); ctx.roundRect(x, y, w, h, r); ctx.fillStyle = fill; ctx.fill();
}

function splitText(ctx, text, maxWidth) {
  const chars = [...text]; const lines = []; let line = "";
  chars.forEach(char => { const test = line + char; if (ctx.measureText(test).width > maxWidth && line) { lines.push(line); line = char; } else line = test; });
  if (line) lines.push(line); return lines.slice(0, 3);
}

function drawTextOverlay(ctx, title, ending, phase = 0) {
  const w = ctx.canvas.width, h = ctx.canvas.height;
  const gradient = ctx.createLinearGradient(0, 0, 0, h); gradient.addColorStop(0, "rgba(15,23,17,.2)"); gradient.addColorStop(.45, "rgba(15,23,17,0)"); gradient.addColorStop(1, "rgba(15,23,17,.72)"); ctx.fillStyle = gradient; ctx.fillRect(0,0,w,h);
  roundedRect(ctx, 44, 52, 148, 42, 10, "rgba(218,242,118,.94)"); ctx.fillStyle = "#2f4021"; ctx.font = "600 20px Microsoft YaHei"; ctx.fillText(phase < .35 ? "附近新发现" : phase < .75 ? "店里真实拍" : "欢迎来尝尝", 60, 81);
  ctx.fillStyle = "white"; ctx.font = phase < .4 ? "700 58px Microsoft YaHei" : "700 48px Microsoft YaHei"; const lines = splitText(ctx, title, w - 88); lines.forEach((line, i) => ctx.fillText(line, 44, phase < .4 ? 320 + i * 78 : 170 + i * 68));
  ctx.fillStyle = "rgba(255,255,255,.9)"; ctx.font = "500 27px Microsoft YaHei"; ctx.fillText(ending, 44, h - 102);
  ctx.fillStyle = "rgba(255,255,255,.65)"; ctx.font = "18px Arial"; ctx.fillText("巷里好生意 · LOCAL STORY", 44, h - 57);
}

function drawImageCover(ctx, source, sourceW, sourceH) {
  const cw = ctx.canvas.width, ch = ctx.canvas.height; const scale = Math.max(cw/sourceW, ch/sourceH); const dw = sourceW*scale, dh = sourceH*scale; ctx.drawImage(source, (cw-dw)/2, (ch-dh)/2, dw, dh);
}

async function loadVisual(asset) {
  if (!asset) return null;
  if (asset.kind === "照片") return await new Promise((resolve, reject) => { const img = new Image(); img.onload = () => resolve({ type: "image", el: img, w: img.naturalWidth, h: img.naturalHeight }); img.onerror = reject; img.src = asset.url; });
  return await new Promise((resolve, reject) => { const video = document.createElement("video"); video.muted = true; video.playsInline = true; video.preload = "auto"; video.onloadeddata = () => resolve({ type: "video", el: video, w: video.videoWidth, h: video.videoHeight }); video.onerror = reject; video.src = asset.url; video.load(); });
}

function drawPlaceholder() {
  const canvas = $("#renderCanvas"); if (!canvas || state.isRendering || !$("#resultVideo").classList.contains("hidden")) return;
  const ctx = canvas.getContext("2d"); const w = canvas.width, h = canvas.height;
  const asset=state.assets[0];
  if(asset?.kind==="照片") { const img=new Image(); img.onload=()=>{if(!state.isRendering) {drawImageCover(ctx,img,img.naturalWidth,img.naturalHeight);drawTextOverlay(ctx,$("#videoTitleInput")?.value||"附近这家店，值得来看看",$("#videoEndingInput")?.value||"欢迎来店里坐坐",0);} }; img.src=asset.url; return; }
  if(asset?.kind==="视频") { const video=document.createElement("video"); video.muted=true; video.playsInline=true; video.onloadeddata=()=>{if(!state.isRendering){drawImageCover(ctx,video,video.videoWidth,video.videoHeight);drawTextOverlay(ctx,$("#videoTitleInput")?.value||"附近这家店，值得来看看",$("#videoEndingInput")?.value||"欢迎来店里坐坐",0);} video.pause();}; video.src=asset.url; video.load(); return; }
  const gradient = ctx.createLinearGradient(0,0,w,h); gradient.addColorStop(0,"#e3f1d6"); gradient.addColorStop(.55,"#e6e5db"); gradient.addColorStop(1,"#b8d2c6"); ctx.fillStyle=gradient; ctx.fillRect(0,0,w,h);
  ctx.fillStyle="rgba(255,255,255,.75)";ctx.fillRect(150,540,420,280);ctx.fillStyle="#a9b69c";ctx.fillRect(0,840,w,440);
  ctx.fillStyle="#536555";ctx.font="600 25px Microsoft YaHei";ctx.textAlign="center";ctx.fillText("上传素材后，先展示你的店",w/2,h/2);ctx.textAlign="left";
  drawTextOverlay(ctx,$("#videoTitleInput")?.value || "附近这家店，值得来看看",$("#videoEndingInput")?.value || "欢迎来店里坐坐",0);
}

function framesFromVisuals(visuals) {
  return visuals.map(visual=>{
    const canvas=document.createElement('canvas'),scale=Math.min(1,640/Math.max(visual.w,visual.h));
    canvas.width=Math.max(1,Math.round(visual.w*scale)); canvas.height=Math.max(1,Math.round(visual.h*scale));
    canvas.getContext('2d').drawImage(visual.el,0,0,canvas.width,canvas.height);
    return canvas.toDataURL('image/jpeg',.72);
  });
}
async function designHooks() {
  if(state.isRendering) return;
  if(STATIC_HOSTING) { $('#hookDesignStatus').textContent=STATIC_BACKEND_MESSAGE; showToast('静态演示站暂未连接 AI 后端'); return; }
  if(!profileReady()) { showToast('先填写店铺资料'); openProfile(); return; }
  if(!state.assets.length) { showToast('先上传店铺素材'); $('#uploadZone').scrollIntoView({behavior:'smooth',block:'center'}); return; }
  state.isRendering=true;
  const button=$('#renderVideo'),progress=$('#renderProgress'),label=$('#progressLabel');
  button.disabled=true; progress.classList.remove('hidden'); label.textContent='AI 正在结合店铺资料和素材设计开场…';
  try {
    const visuals=(await Promise.all(state.assets.slice(0,3).map(asset=>loadVisual(asset).catch(()=>null)))).filter(Boolean);
    if(!visuals.length) throw new Error('素材读取失败，请换一张图片再试');
    const frames=framesFromVisuals(visuals);
    const response=await fetch('/api/hooks',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({frames,profile:state.profile,platform:'抖音'}),signal:AbortSignal.timeout(65000)});
    const data=await response.json(); if(!response.ok) throw new Error(data.error||'开场设计失败');
    state.frameData=frames; state.scenes=data.scenes; state.hooks=data.hooks; state.videoSubject=data.subject; state.hooksReady=true;
    renderHooks(data.hooks); chooseHook(0);
    $('#hookDesignStatus').textContent=`已为 ${frames.length} 段素材设计动态镜头和旁白；请选一个前三秒开场，再生成视频。`;
    button.innerHTML=`<i data-lucide="clapperboard"></i> 生成 AI 动态视频 · 约 ¥${(frames.length*.5+.1).toFixed(2)}`;
    showToast('开场已生成，选择后再确认制作');
  } catch(error) {
    $('#hookDesignStatus').textContent=error.message||'开场设计失败，请重试'; showToast(error.message||'开场设计失败');
  } finally { state.isRendering=false; button.disabled=false; progress.classList.add('hidden'); initIcons(); }
}
async function fetchJobStatus(id) {
  const response=await fetch(`/api/video-status/${encodeURIComponent(id)}`,{signal:AbortSignal.timeout(35000)});
  const data=await response.json(); if(!response.ok) throw new Error(data.error||'无法查询视频任务'); return data;
}
async function composeGeneratedVideo(job,audioContext) {
  if(!window.MediaRecorder||!HTMLCanvasElement.prototype.captureStream) throw new Error('当前浏览器不支持音画合成，请使用最新版 Chrome 或 Edge');
  const canvas=$('#renderCanvas'),result=$('#resultVideo'),download=$('#downloadVideo'),ctx=canvas.getContext('2d');
  const videos=job.clips.map(src=>{const video=document.createElement('video');video.src=src;video.muted=true;video.playsInline=true;video.preload='auto';return video;});
  await Promise.all(videos.map(video=>new Promise((resolve,reject)=>{video.onloadeddata=resolve;video.onerror=()=>reject(new Error('无法读取 AI 生成的视频片段'));video.load();})));
  if(audioContext.state!=='running') await audioContext.resume();
  const destination=audioContext.createMediaStreamDestination();
  const audioBuffers=await Promise.all(job.audios.map(async src=>{const response=await fetch(src);if(!response.ok)throw new Error('无法读取 AI 配音');return audioContext.decodeAudioData(await response.arrayBuffer());}));
  const canvasStream=canvas.captureStream(30); destination.stream.getAudioTracks().forEach(track=>canvasStream.addTrack(track));
  const types=['video/mp4;codecs="avc1.42E01E, mp4a.40.2"','video/mp4','video/webm;codecs=vp9,opus','video/webm;codecs=vp8,opus','video/webm'];
  const mimeType=types.find(type=>MediaRecorder.isTypeSupported(type))||'';
  const recorder=new MediaRecorder(canvasStream,mimeType?{mimeType,videoBitsPerSecond:5_000_000}:undefined),chunks=[];
  recorder.ondataavailable=event=>{if(event.data.size)chunks.push(event.data);};
  const done=new Promise(resolve=>recorder.onstop=resolve); recorder.start(250);
  const audioStart=audioContext.currentTime+.15;
  audioBuffers.forEach((buffer,index)=>{const source=audioContext.createBufferSource();source.buffer=buffer;source.connect(destination);source.start(audioStart+index*5);});
  const total=job.seconds*1000,start=performance.now(); let activeIndex=-1;
  await new Promise(resolve=>{
    function frame(now){
      const elapsed=now-start,index=Math.min(Math.floor(elapsed/5000),videos.length-1),within=elapsed-index*5000,video=videos[index];
      if(index!==activeIndex){if(activeIndex>=0)videos[activeIndex].pause();activeIndex=index;video.currentTime=0;video.play().catch(()=>{});}
      ctx.fillStyle='#111';ctx.fillRect(0,0,canvas.width,canvas.height);drawImageCover(ctx,video,video.videoWidth||9,video.videoHeight||16);
      const isHook=index===0&&within<3000;
      const isEnding=index===videos.length-1&&within>3600;
      const caption=isEnding?(state.profile.cta||'欢迎到店看看'):isHook?$('#videoTitleInput').value:state.scenes[index]?.narration||'';
      drawVideoSubtitle(ctx,caption,index+1,videos.length,isHook,isEnding);
      const phase=Math.min(elapsed/total,1),percent=Math.round(phase*100);
      $('#progressFill').style.width=`${percent}%`;
      $('#progressLabel').textContent=percent<15?'正在生成真实动态画面…':percent<86?'正在合成配音与抖音字幕…':'正在导出预览视频…';
      if(elapsed<total)requestAnimationFrame(frame);else resolve();
    }requestAnimationFrame(frame);
  });
  recorder.stop();videos.forEach(video=>video.pause());await done;
  const blob=new Blob(chunks,{type:mimeType||'video/webm'}),isMp4=blob.type.includes('mp4');
  state.resultUrl=URL.createObjectURL(blob);state.resultType=blob.type;result.src=state.resultUrl;download.href=state.resultUrl;download.download=`xiangli-douyin-video.${isMp4?'mp4':'webm'}`;
  result.classList.remove('hidden');canvas.classList.add('hidden');download.classList.remove('hidden');$('#remakeVideo').classList.remove('hidden');
  $('#exportNote').textContent=`AI 动态 · 配音 · 字幕 · ${job.seconds} 秒 · ${isMp4?'MP4':'WebM'} · 本机合成`;
  result.play().catch(()=>{});
}
function drawVideoSubtitle(ctx,text,scene,total,isHook,isEnding) {
  const w=ctx.canvas.width,h=ctx.canvas.height;
  const fade=ctx.createLinearGradient(0,h*.62,0,h);fade.addColorStop(0,'rgba(12,15,13,0)');fade.addColorStop(1,'rgba(12,15,13,.86)');ctx.fillStyle=fade;ctx.fillRect(0,h*.62,w,h*.38);
  ctx.fillStyle='#d9ef78';ctx.font='600 20px Microsoft YaHei';ctx.fillText(isHook?'前三秒开场':isEnding?'到店邀请':`镜头 0${scene}`,40,830);
  ctx.fillStyle='#fff';ctx.font='700 46px Microsoft YaHei';
  const lines=splitText(ctx,text,w-80).slice(0,2);lines.forEach((line,index)=>ctx.fillText(line,40,900+index*64));
  ctx.fillStyle='rgba(255,255,255,.72)';ctx.font='18px Arial';ctx.fillText('巷里好生意',40,h-48);
}
async function renderVideo() {
  if(state.isRendering)return;
  if(!state.hooksReady){await designHooks();return;}
  if(!window.MediaRecorder||!HTMLCanvasElement.prototype.captureStream||!window.AudioContext){showToast('当前浏览器不支持音画合成，请使用最新版 Chrome 或 Edge');return;}
  if(!profileReady()||!state.frameData.length){invalidateHooks('店铺资料或素材已变化，请重新设计开场');showToast('请重新生成前三秒开场');return;}
  state.isRendering=true;
  const button=$('#renderVideo'),progress=$('#renderProgress'),label=$('#progressLabel');
  const audioContext=new AudioContext();
  button.disabled=true;progress.classList.remove('hidden');$('#resultVideo').classList.add('hidden');$('#renderCanvas').classList.remove('hidden');$('#downloadVideo').classList.add('hidden');
  if(state.resultUrl){URL.revokeObjectURL(state.resultUrl);state.resultUrl=null;}
  try {
    await audioContext.resume();
    label.textContent='正在提交语音与视频任务…';
    const response=await fetch('/api/video-start',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({frames:state.frameData,scenes:state.scenes,hook:$('#videoTitleInput').value.trim()||state.hooks[state.selectedHook].text,ending:$('#videoEndingInput').value.trim()||state.profile.cta||'欢迎到店看看'}),signal:AbortSignal.timeout(65000)});
    const started=await response.json();if(!response.ok)throw new Error(started.error||'任务提交失败');
    let job;
    while(true){job=await fetchJobStatus(started.id);label.textContent=job.phase||'百炼正在生成视频…';$('#progressFill').style.width=`${job.progress||0}%`;if(job.status==='ready')break;if(job.status==='failed')throw new Error(job.error||'视频生成失败');await new Promise(resolve=>setTimeout(resolve,3000));}
    await composeGeneratedVideo(job,audioContext);showToast('AI 动态视频已生成，可以预览或下载');
  }catch(error){$('#hookDesignStatus').textContent=error.message||'视频生成失败，请检查百炼权限';showToast(error.message||'视频生成失败');}
  finally{if(audioContext.state!=='closed')await audioContext.close();state.isRendering=false;button.disabled=false;progress.classList.add('hidden');button.innerHTML=`<i data-lucide="clapperboard"></i> 生成 AI 动态视频 · 约 ¥${(state.frameData.length*.5+.1).toFixed(2)}`;initIcons();}
}

function renderHooks(hooks) {
  const choices=$('#hookChoices'); choices.classList.remove('empty-hook-choices'); choices.replaceChildren();
  hooks.forEach((hook,index)=>{
    const button=document.createElement('button'); button.type='button'; button.className='hook-choice'; button.dataset.hook=hook.type; button.title=hook.visual;
    const title=document.createElement('strong'); title.textContent=hook.type;
    const text=document.createElement('span'); text.id=`hookText${index}`; text.textContent=hook.text;
    const visual=document.createElement('small'); visual.textContent=hook.visual;
    button.append(title,text,visual); button.addEventListener('click',()=>chooseHook(index)); choices.append(button);
  });
}
function chooseHook(index) {
  if(!state.hooks[index]) return;
  state.selectedHook=index;
  $$(".hook-choice").forEach((button,i)=>button.classList.toggle("active",i===index));
  $("#videoTitleInput").value=state.hooks[index].text;
  $("#previewHookTitle").textContent=state.hooks[index].text;
  drawPlaceholder();
}

function bindEvents() {
  document.addEventListener("click", event => {
    const nav = event.target.closest("[data-nav]"); if (nav) { event.preventDefault(); navigate(nav.dataset.nav); return; }
    const platform = event.target.closest("[data-platform]"); if (platform) { state.platform=platform.dataset.platform; $$("[data-platform]").forEach(el=>el.classList.toggle("active",el===platform)); state.visibleCases=6; renderCases(); return; }
    const industry = event.target.closest("[data-industry]"); if (industry) { state.industry=industry.dataset.industry; $$("[data-industry]").forEach(el=>el.classList.toggle("active",el===industry)); state.visibleCases=6; renderCases(); return; }
    const card = event.target.closest(".case-card"); if (card) { openCase(card.dataset.caseId); return; }
    const action = event.target.closest("[data-action]"); if (!action) return;
    const kind = action.dataset.action;
    if (kind === "close-case") closeCase();
    if (kind === "show-all") { state.visibleCases=CASES.length; renderCases(); showToast("已展开全部案例"); }
    if (kind === "sort-cases") { state.sort=state.sort==="hot"?"saves":"hot"; action.querySelector("span").textContent=state.sort==="hot"?"本周热度":"收藏最多"; renderCases(); }
    if (kind === "edit-shop") openProfile();
    if (kind === "help") showToast("先设计并选择开场；确认后最多生成 3 段 480P 动态画面并配音、加字幕。视频按段计费，不会自动重试。");
    if (kind === "trend-script") { navigate("copy"); showToast('先补充店铺资料，再生成原创内容'); }
    if (kind === "refresh-copy") generateScripts();
    if (kind === "save-case") { action.classList.toggle("saved"); showToast("案例已收藏到本次 Demo"); }
    if (kind === "remix-case") { const item=CASES.find(x=>x.id===Number(action.dataset.caseId)); closeCase(); navigate("copy"); state.caseReference=item.steps.map(step=>step.join('：')).join('；'); $('#copyReferenceText').textContent=`仅参考「${item.tag}」的镜头结构，不会复用案例中的商品事实。`; $('#copyReference').classList.remove('hidden'); showToast('已加入案例结构参考'); }
    if (kind === "use-case-video") { const item=CASES.find(x=>x.id===Number(action.dataset.caseId)); closeCase(); navigate("studio"); $("#videoTitleInput").value=item.title; $("#previewHookTitle").textContent=item.title; drawPlaceholder(); }
    if (kind === "copy-script") copyText(action.closest(".script-card").querySelector(".script-body").innerText);
    if (kind === "save-script") { const script=action.closest(".script-card"); script.classList.toggle("saved"); showToast(script.classList.contains("saved")?"已收藏这条文案":"已取消收藏"); }
    if (kind === "script-to-video") { const hook=action.closest(".script-card").querySelector(".script-hook").textContent; $("#videoTitleInput").value=hook.slice(0,32); $("#previewHookTitle").textContent=hook; navigate("studio"); }
    if (kind === "remove-asset") removeAsset(action.dataset.assetId);
    if (kind === "studio-structure") { const options=[...$$('[data-structure]')]; const next=(options.findIndex(el=>el.classList.contains("active"))+1)%options.length; options[next].click(); }
    if (kind === "studio-hook") {
      if(!state.assets.length) { showToast('先上传店铺素材'); return; }
      if(!profileReady()) { openProfile(); showToast('先填写店铺资料'); return; }
      state.hooksReady=false; $('#renderVideo').click();
    }
  });
  document.addEventListener("keydown", event => { if ((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==="k") { event.preventDefault(); navigate("discover"); $("#caseSearch").focus(); } if(event.key==="Escape"&&!$("#caseModal").classList.contains("hidden")) closeCase(); if(event.key==="Enter"&&event.target.classList.contains("case-card")) openCase(event.target.dataset.caseId); });
  $("#caseSearch").addEventListener("input", event=>{state.search=event.target.value;state.visibleCases=CASES.length;renderCases();});
  $$("[data-content-type]").forEach(button=>button.addEventListener("click",()=>{state.contentType=button.dataset.contentType;$$('[data-content-type]').forEach(el=>el.classList.toggle("active",el===button));}));
  $$("[data-tone]").forEach(button=>button.addEventListener("click",()=>{state.tone=button.dataset.tone;$$('[data-tone]').forEach(el=>el.classList.toggle("active",el===button));}));
  $$("[data-structure]").forEach(button=>button.addEventListener("click",()=>{state.structure=button.dataset.structure;$$('[data-structure]').forEach(el=>{const active=el===button;el.classList.toggle("active",active);const icon=el.querySelector("svg");if(icon) icon.outerHTML=`<i data-lucide="${active?"circle-check":"circle"}"></i>`;});initIcons();}));
  $$("[data-library-filter]").forEach(button=>button.addEventListener("click",()=>{state.libraryFilter=button.dataset.libraryFilter;$$('[data-library-filter]').forEach(el=>el.classList.toggle("active",el===button));renderAssets();}));
  $("#sellingInput").addEventListener("input",event=>$("#sellingCount").textContent=`${event.target.value.length}/70`);
  $$(".hook-choice").forEach((button,index)=>button.addEventListener("click",()=>chooseHook(index)));
  $("#videoTitleInput").addEventListener("input",event=>{ $("#previewHookTitle").textContent=event.target.value; $("#hookText"+state.selectedHook).textContent=event.target.value; drawPlaceholder(); }); $("#videoEndingInput").addEventListener("input",drawPlaceholder);
  $("#generateCopy").addEventListener("click",generateScripts);
  [$("#mediaInput"),$("#libraryMediaInput")].forEach(input=>input.addEventListener("change",event=>{addFiles(event.target.files);event.target.value="";}));
  const zone=$("#uploadZone"); ["dragenter","dragover"].forEach(name=>zone.addEventListener(name,event=>{event.preventDefault();zone.classList.add("dragging");})); ["dragleave","drop"].forEach(name=>zone.addEventListener(name,event=>{event.preventDefault();zone.classList.remove("dragging");})); zone.addEventListener("drop",event=>addFiles(event.dataTransfer.files));
  $("#renderVideo").addEventListener("click",renderVideo);
  $("#remakeVideo").addEventListener("click",()=>{const estimate=(state.frameData.length*.5+.1).toFixed(2);if(window.confirm(`重新生成会再次调用百炼，视频费用预估约 ¥${estimate}，按用量计费且不自动重试。继续吗？`)){clearVideoResult();renderVideo();}});
  $("#caseModal").addEventListener("click",event=>{if(event.target===$("#caseModal"))closeCase();});
  $('#openStoreProfile').addEventListener('click',openProfile);
  $('#cancelStoreProfile').addEventListener('click',()=>$('#shopDialog').close('cancel'));
  $('#saveStoreProfile').addEventListener('click',()=>{
    const profile=collectStoreProfile();
    const missing=[['name','店铺名称'],['industry','所属行业'],['city','所在城市'],['product','主推商品或服务'],['audience','主要顾客']].find(([key])=>!profile[key]);
    if(missing) { showToast(`请填写${missing[1]}`); $('#'+({name:'profileShopInput',industry:'profileIndustry',city:'profileCityInput',product:'profileProductInput',audience:'profileAudienceInput'})[missing[0]]).focus(); return; }
    applyStoreProfile(profile); $('#shopDialog').close('save'); showToast('店铺资料已保存');
  });
  $('#clearCopyReference').addEventListener('click',()=>{state.caseReference='';$('#copyReference').classList.add('hidden');});
  window.addEventListener("beforeunload",()=>{state.objectUrls.forEach(URL.revokeObjectURL);if(state.resultUrl)URL.revokeObjectURL(state.resultUrl);});
}

document.addEventListener("DOMContentLoaded", () => {
  bindEvents(); renderCases(); initIcons(); drawPlaceholder();
  if(STATIC_HOSTING) $('#staticHostingNotice').classList.remove('hidden');
  state.profile=readProfile(); if(state.profile) applyStoreProfile(state.profile); else openProfile();
  navigate('studio');
  setTimeout(initIcons, 400);
});
