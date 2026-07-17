(() => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#main-nav');
  if (!toggle || !nav) return;
  const close = () => { toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); };
  toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') === 'true'; toggle.setAttribute('aria-expanded', String(!open)); nav.classList.toggle('is-open', !open); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') { close(); toggle.focus(); } });
  nav.addEventListener('click', (event) => { if (event.target.closest('a')) close(); });
})();
