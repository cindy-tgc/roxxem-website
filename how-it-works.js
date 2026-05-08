(function () {
  const CATEGORIES = {
    music: {
      label: 'Music',
      kicker: '♪ Coming soon',
      items: [
        { title: 'Music Pick #1', color: 'orange' },
        { title: 'Music Pick #2', color: 'periwinkle' },
        { title: 'Music Pick #3', color: 'lime' },
        { title: 'Music Pick #4', color: 'navy' },
        { title: 'Music Pick #5', color: 'orange' },
        { title: 'Music Pick #6', color: 'periwinkle' },
      ],
    },
    tv: {
      label: 'TV & Film',
      kicker: '▶ Coming soon',
      items: [
        { title: 'TV Pick #1', color: 'periwinkle' },
        { title: 'TV Pick #2', color: 'lime' },
        { title: 'TV Pick #3', color: 'orange' },
        { title: 'TV Pick #4', color: 'lime' },
        { title: 'TV Pick #5', color: 'periwinkle' },
        { title: 'TV Pick #6', color: 'orange' },
      ],
    },
    viral: {
      label: 'Viral Videos',
      kicker: '✦ Coming soon',
      items: [
        { title: 'Viral Pick #1', color: 'lime' },
        { title: 'Viral Pick #2', color: 'orange' },
        { title: 'Viral Pick #3', color: 'periwinkle' },
        { title: 'Viral Pick #4', color: 'orange' },
        { title: 'Viral Pick #5', color: 'navy' },
        { title: 'Viral Pick #6', color: 'lime' },
      ],
    },
    social: {
      label: 'Social Media',
      kicker: '✦ Coming soon',
      items: [
        { title: 'Social Pick #1', color: 'navy' },
        { title: 'Social Pick #2', color: 'lime' },
        { title: 'Social Pick #3', color: 'orange' },
        { title: 'Social Pick #4', color: 'periwinkle' },
        { title: 'Social Pick #5', color: 'lime' },
        { title: 'Social Pick #6', color: 'navy' },
      ],
    },
    podcasts: {
      label: 'Podcasts',
      kicker: '🎙 Coming soon',
      items: [
        { title: 'Podcast Pick #1', color: 'orange' },
        { title: 'Podcast Pick #2', color: 'navy' },
        { title: 'Podcast Pick #3', color: 'lime' },
        { title: 'Podcast Pick #4', color: 'periwinkle' },
        { title: 'Podcast Pick #5', color: 'orange' },
        { title: 'Podcast Pick #6', color: 'lime' },
      ],
    },
    news: {
      label: 'News & Media',
      kicker: '📰 Coming soon',
      items: [
        { title: 'News Pick #1', color: 'periwinkle' },
        { title: 'News Pick #2', color: 'orange' },
        { title: 'News Pick #3', color: 'navy' },
        { title: 'News Pick #4', color: 'lime' },
        { title: 'News Pick #5', color: 'periwinkle' },
        { title: 'News Pick #6', color: 'orange' },
      ],
    },
  };

  const PER_PAGE = 3;
  const CYCLE_MS = 4500;

  function chunk(arr, size) {
    const out = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
  }

  function buildCard(item) {
    const card = document.createElement('a');
    card.className = 'pick-card';
    card.href = '#';
    card.innerHTML = `
      <div class="pick-card__thumb pick-card__thumb--${item.color}"></div>
      <div class="pick-card__title">${item.title}</div>
      <div class="pick-card__kicker"></div>
      <p class="pick-card__desc">A short description of this clip will appear here once content is added.</p>
    `;
    return card;
  }

  function buildPanel(catKey, cat) {
    const pages = chunk(cat.items, PER_PAGE);

    const panel = document.createElement('div');
    panel.className = 'tab-panel';
    panel.dataset.cat = catKey;

    const pagesEl = document.createElement('div');
    pagesEl.className = 'tab-pages';

    pages.forEach((pageItems, idx) => {
      const page = document.createElement('div');
      page.className = 'tab-page' + (idx === 0 ? ' is-active' : '');
      pageItems.forEach((item) => {
        const card = buildCard(item);
        card.querySelector('.pick-card__kicker').textContent = cat.kicker;
        page.appendChild(card);
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

  function init() {
    const tabsEl = document.querySelector('.tabs');
    const panelsHost = document.querySelector('.tab-panels');
    if (!tabsEl || !panelsHost) return;

    const state = {}; // { catKey: { idx, total, timer, panel } }

    Object.entries(CATEGORIES).forEach(([catKey, cat]) => {
      const { panel, pageCount } = buildPanel(catKey, cat);
      panelsHost.appendChild(panel);
      state[catKey] = { idx: 0, total: pageCount, timer: null, panel };
    });

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

    function activateTab(catKey) {
      // Tabs UI
      tabsEl.querySelectorAll('.tab').forEach((t) => {
        t.classList.toggle('is-active', t.dataset.cat === catKey);
      });
      // Panels UI
      Object.entries(state).forEach(([key, s]) => {
        s.panel.classList.toggle('is-active', key === catKey);
        if (key === catKey) startAuto(key); else stopAuto(key);
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
      // Restart timer to avoid jumping right after manual nav
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

    // Initial activation
    activateTab('music');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
