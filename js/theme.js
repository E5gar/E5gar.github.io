(function () {
  'use strict';
  var root = document.documentElement;
  function getInitialTheme() {
    try {
      var saved = localStorage.getItem('theme');
      if (saved) return saved;
    } catch (e) {}

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }
  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
  }
  applyTheme(getInitialTheme());
  function initThemeToggle() {
    var toggleBtn = document.querySelector('#themeToggle');
    if (!toggleBtn) return;
    function isDark() {
      return root.getAttribute('data-theme') === 'dark';
    }
    function syncButton() {
      var dark = isDark();
      toggleBtn.setAttribute('aria-pressed', String(dark));
      toggleBtn.setAttribute('aria-label', dark ? 'Activar modo claro' : 'Activar modo oscuro');
      toggleBtn.setAttribute('title', dark ? 'Activar modo claro' : 'Activar modo oscuro');
    }
    toggleBtn.addEventListener('click', function () {
      var nextTheme = isDark() ? 'light' : 'dark';
      applyTheme(nextTheme);

      try {
        localStorage.setItem('theme', nextTheme);
      } catch (e) {}

      syncButton();
    });
    syncButton();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeToggle);
  } else {
    initThemeToggle();
  }
})();
