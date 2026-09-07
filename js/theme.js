(function () {
  'use strict';
  var root = document.documentElement;
  var toggleBtn = document.querySelector('#themeToggle');
  if (!toggleBtn) return;
  function getTheme() {
    return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }
  function syncButton() {
    var isDark = getTheme() === 'dark';
    toggleBtn.setAttribute('aria-pressed', String(isDark));
    toggleBtn.setAttribute('aria-label', isDark ? 'Activar modo claro' : 'Activar modo oscuro');
    toggleBtn.setAttribute('title', isDark ? 'Activar modo claro' : 'Activar modo oscuro');
  }
  toggleBtn.addEventListener('click', function () {
    var next = getTheme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch (e) {}
    syncButton();
  });
  syncButton();
})();
