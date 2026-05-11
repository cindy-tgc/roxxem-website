(function () {
  /**
   * Content library — built at runtime from <a> elements inside
   * #hiw-content in index.html. Each <a> below the tabs has:
   *   data-lang, data-cat, data-title, data-sub, data-image, href
   * Edit those tags in index.html to change links, titles, or thumbnails.
   *
   * Final shape: CONTENT[language][category] = Array<{ title, sub, image, url }>
   */
  function loadContentFromDom() {
    const out = {};
    const root = document.getElementById('hiw-content');
    if (!root) return out;
    root.querySelectorAll('a[data-lang][data-cat]').forEach((a) => {
      const lang = a.dataset.lang;
      const cat = a.dataset.cat;
      if (!lang || !cat) return;
      if (!out[lang]) out[lang] = {};
      if (!out[lang][cat]) out[lang][cat] = [];
      out[lang][cat].push({
        title: a.dataset.title || '',
        sub: a.dataset.sub || '',
        image: a.dataset.image || '',
        url: a.getAttribute('href') || '#',
      });
    });
    return out;
  }

  // Populated from the DOM at init() time.
  let CONTENT = {};

  const LANGUAGES = [
    { value: 'spanish', label: 'Spanish' },
    { value: 'french', label: 'French' },
    { value: 'german', label: 'German' },
    { value: 'english', label: 'English' },
    { value: 'chinese', label: 'Chinese' },
  ];

  const PER_PAGE = 3;
  const CYCLE_MS = 4500;

  let currentLanguage = 'spanish';
  let currentCategory = 'music';

  function chunk(arr, size) {
    const out = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
  }

  function buildCard(item) {
    const card = document.createElement('a');
    card.className = 'pick-card';
    card.href = item.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.innerHTML = `
      <div class="pick-card__thumb">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
      </div>
      <div class="pick-card__title">${item.title}</div>
      <p class="pick-card__sub">${item.sub}</p>
    `;
    return card;
  }

  function buildPanel(catKey, items) {
    const pages = chunk(items, PER_PAGE);

    const panel = document.createElement('div');
    panel.className = 'tab-panel';
    panel.dataset.cat = catKey;

    const pagesEl = document.createElement('div');
    pagesEl.className = 'tab-pages';

    pages.forEach((pageItems, idx) => {
      const page = document.createElement('div');
      page.className = 'tab-page' + (idx === 0 ? ' is-active' : '');
      pageItems.forEach((item) => {
        page.appendChild(buildCard(item));
      });
      pagesEl.appendChild(page);
    });

    const pagination = document.createElement('div');
    pagination.className = 'tab-pagination';
    pagination.innerHTML = `
      <button class="page-btn page-btn--prev" aria-label="Previous page">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>
      <span class="page-count"><span class="page-count__current">1</span> / ${pages.length}</span>
      <button class="page-btn page-btn--next" aria-label="Next page">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>
    `;

    panel.appendChild(pagesEl);
    panel.appendChild(pagination);

    return { panel, pageCount: pages.length };
  }

  let state = {}; // { catKey: { idx, total, timer, panel } }

  function gotoPage(catKey, nextIdx) {
    const s = state[catKey];
    if (!s) return;
    const total = s.total;
    const idx = ((nextIdx % total) + total) % total;
    s.idx = idx;
    const pages = s.panel.querySelectorAll('.tab-page');
    pages.forEach((p, i) => p.classList.toggle('is-active', i === idx));
    const counter = s.panel.querySelector('.page-count__current');
    if (counter) counter.textContent = String(idx + 1);
  }

  function startAuto(catKey) {
    stopAuto(catKey);
    const s = state[catKey];
    if (!s || s.total <= 1) return;
    s.timer = setInterval(() => gotoPage(catKey, s.idx + 1), CYCLE_MS);
  }

  function stopAuto(catKey) {
    const s = state[catKey];
    if (s && s.timer) {
      clearInterval(s.timer);
      s.timer = null;
    }
  }

  function renderPanels() {
    // Tear down existing
    Object.keys(state).forEach(stopAuto);
    const panelsHost = document.querySelector('.tab-panels');
    if (!panelsHost) return;
    panelsHost.innerHTML = '';
    state = {};

    const tabsEl = document.querySelector('.tabs');
    if (!tabsEl) return;

    // Build a panel for each category that exists in this language
    const langContent = CONTENT[currentLanguage] || {};
    tabsEl.querySelectorAll('.tab').forEach((tabBtn) => {
      const catKey = tabBtn.dataset.cat;
      const items = langContent[catKey];
      if (!items) return;
      const { panel, pageCount } = buildPanel(catKey, items);
      panelsHost.appendChild(panel);
      state[catKey] = { idx: 0, total: pageCount, timer: null, panel };
    });

    activateTab(currentCategory);
  }

  function activateTab(catKey) {
    currentCategory = catKey;
    const tabsEl = document.querySelector('.tabs');
    if (tabsEl) {
      tabsEl.querySelectorAll('.tab').forEach((t) => {
        t.classList.toggle('is-active', t.dataset.cat === catKey);
      });
    }
    Object.entries(state).forEach(([key, s]) => {
      s.panel.classList.toggle('is-active', key === catKey);
      if (key === catKey) startAuto(key); else stopAuto(key);
    });
  }

  function init() {
    const tabsEl = document.querySelector('.tabs');
    const panelsHost = document.querySelector('.tab-panels');
    const langSelect = document.querySelector('.lang-select');
    if (!tabsEl || !panelsHost) return;

    // Build CONTENT from the <a> tags inside #hiw-content in index.html.
    CONTENT = loadContentFromDom();

    // Wire up language dropdown
    if (langSelect) {
      // Make sure options exist (in case markup omitted them)
      if (!langSelect.children.length) {
        LANGUAGES.forEach((l) => {
          const opt = document.createElement('option');
          opt.value = l.value;
          opt.textContent = l.label;
          langSelect.appendChild(opt);
        });
      }
      langSelect.value = currentLanguage;
      langSelect.addEventListener('change', (e) => {
        currentLanguage = e.target.value;
        renderPanels();
      });
    }

    // Tab clicks
    tabsEl.addEventListener('click', (e) => {
      const t = e.target.closest('.tab');
      if (!t) return;
      activateTab(t.dataset.cat);
    });

    // Pagination clicks (delegated)
    panelsHost.addEventListener('click', (e) => {
      const next = e.target.closest('.page-btn--next');
      const prev = e.target.closest('.page-btn--prev');
      if (!next && !prev) return;
      const panel = e.target.closest('.tab-panel');
      const catKey = panel && panel.dataset.cat;
      if (!catKey) return;
      const s = state[catKey];
      gotoPage(catKey, s.idx + (next ? 1 : -1));
      startAuto(catKey);
    });

    // Pause autoplay when hovering a panel
    panelsHost.addEventListener('mouseenter', (e) => {
      const panel = e.target.closest && e.target.closest('.tab-panel.is-active');
      if (!panel) return;
      stopAuto(panel.dataset.cat);
    }, true);
    panelsHost.addEventListener('mouseleave', (e) => {
      const panel = e.target.closest && e.target.closest('.tab-panel.is-active');
      if (!panel) return;
      startAuto(panel.dataset.cat);
    }, true);

    renderPanels();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
