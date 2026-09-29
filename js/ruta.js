(() => {
  const route = document.querySelector('.learning-route');
  if (!route) return;
  const nodes = [...route.querySelectorAll('.route-node')];
  const routeStops = [...route.querySelectorAll('.route-stop')];
  const categoryTabs = [...route.querySelectorAll('.route-category-tab')];
  const cyberNodes = [...route.querySelectorAll('.cyber-node')];
  const hover = window.matchMedia('(hover: hover) and (pointer: fine)');
  let preview = null;
  let activeCategory = null;

  function setNodeExpanded(node, expanded) {
    const summary = node.querySelector(':scope > summary');
    if (summary) summary.setAttribute('aria-expanded', String(expanded));
    if (node.open !== expanded) node.open = expanded;
  }

  function closeCyberNodes() {
    cyberNodes.forEach(node => setNodeExpanded(node, false));
  }

  function closeNode(node) {
    setNodeExpanded(node, false);
    if (node.id === 'ruta-seguridad') closeCyberNodes();
  }

  function openNode(node) {
    nodes.forEach(other => { if (other !== node) closeNode(other); });
    if (node.id === 'ruta-seguridad') closeCyberNodes();
    setNodeExpanded(node, true);
  }

  function setRouteCategory(category) {
    if (activeCategory === category) return;
    activeCategory = category;
    routeStops.forEach(stop => { stop.hidden = stop.dataset.routeCategory !== category; });
    nodes.forEach(closeNode);
    categoryTabs.forEach(tab => {
      const selected = tab.dataset.routeCategory === category;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (selected) document.querySelector('#route-panel').setAttribute('aria-labelledby', tab.id);
    });
    preview = null;
  }

  categoryTabs.forEach((tab, index) => {
    tab.addEventListener('pointerenter', event => {
      if (hover.matches && event.pointerType === 'mouse') setRouteCategory(tab.dataset.routeCategory);
    });
    tab.addEventListener('click', () => setRouteCategory(tab.dataset.routeCategory));
    tab.addEventListener('keydown', event => {
      const next = event.key === 'ArrowRight' ? (index + 1) % categoryTabs.length
        : event.key === 'ArrowLeft' ? (index - 1 + categoryTabs.length) % categoryTabs.length
          : event.key === 'Home' ? 0
            : event.key === 'End' ? categoryTabs.length - 1
              : -1;
      if (next < 0) return;
      event.preventDefault();
      categoryTabs[next].focus();
      setRouteCategory(categoryTabs[next].dataset.routeCategory);
    });
  });

  setRouteCategory('frontend');

  nodes.forEach(node => {
    const summary = node.querySelector('summary');
    summary.setAttribute('aria-expanded', String(node.open));

    node.addEventListener('pointerenter', event => {
      if (!hover.matches || event.pointerType !== 'mouse') return;
      if (nodes.some(other => other !== node && other.contains(document.activeElement))) return;
      if (!node.open) { openNode(node); preview = node; }
    });
    node.addEventListener('pointerleave', () => {
      if (preview !== node) return;
      if (!node.contains(document.activeElement)) closeNode(node);
      preview = null;
    });
    summary.addEventListener('click', event => {
      event.preventDefault();
      if (node.open && preview === node) {
        preview = null;
        return;
      }
      if (node.open) closeNode(node);
      else openNode(node);
      preview = null;
    });
    node.addEventListener('toggle', () => {
      summary.setAttribute('aria-expanded', String(node.open));
      if (node.open) nodes.forEach(other => { if (other !== node) closeNode(other); });
    });
    node.addEventListener('keydown', event => {
      if (event.key !== 'Escape' || !node.open) return;
      event.preventDefault();
      const nestedCyberNode = event.target.closest('.cyber-node[open]');
      if (nestedCyberNode && node.contains(nestedCyberNode)) {
        event.stopPropagation();
        setNodeExpanded(nestedCyberNode, false);
        nestedCyberNode.querySelector(':scope > summary').focus();
        return;
      }
      closeNode(node);
      preview = null;
      summary.focus();
    });
  });

  cyberNodes.forEach((node, index) => {
    const summary = node.querySelector(':scope > summary');
    const topics = node.querySelector(':scope > .route-topics');
    if (topics && !topics.id) topics.id = `detail-cyber-${index + 1}`;
    if (topics) summary.setAttribute('aria-controls', topics.id);
    summary.setAttribute('aria-expanded', String(node.open));

    node.addEventListener('toggle', () => {
      summary.setAttribute('aria-expanded', String(node.open));
      if (node.open) cyberNodes.forEach(other => { if (other !== node) setNodeExpanded(other, false); });
    });
    node.addEventListener('keydown', event => {
      if (event.key !== 'Escape' || !node.open) return;
      event.preventDefault();
      event.stopPropagation();
      setNodeExpanded(node, false);
      summary.focus();
    });
  });

  route.querySelectorAll('[data-route-target]').forEach(link => {
    link.addEventListener('click', event => {
      const target = document.getElementById(link.dataset.routeTarget);
      if (!target || !nodes.includes(target)) return;
      event.preventDefault();
      setRouteCategory(target.closest('.route-stop').dataset.routeCategory);
      openNode(target);
      preview = null;
      target.querySelector('summary').focus({ preventScroll: true });
      target.scrollIntoView({ block: 'start', behavior: 'auto' });
    });
  });

})();
