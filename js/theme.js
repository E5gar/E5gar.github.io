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

      function commit() {
        applyTheme(nextTheme);
        try {
          localStorage.setItem('theme', nextTheme);
        } catch (e) {}
        syncButton();
      }

      var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!document.startViewTransition || reduceMotion) {
        commit();
        return;
      }

      var rect = toggleBtn.getBoundingClientRect();
      var x = rect.left + rect.width / 2;
      var y = rect.top + rect.height / 2;
      var radius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      root.classList.add('theme-switching');

      var transition = document.startViewTransition(commit);

      transition.ready
        .then(function () {
          root.animate(
            {
              clipPath: [
                'circle(0px at ' + x + 'px ' + y + 'px)',
                'circle(' + radius + 'px at ' + x + 'px ' + y + 'px)',
              ],
            },
            {
              duration: 600,
              easing: 'ease-in-out',
              pseudoElement: '::view-transition-new(root)',
            }
          );
        })
        .catch(function () {});

      transition.finished.finally(function () {
        root.classList.remove('theme-switching');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeToggle);
  } else {
    initThemeToggle();
  }
})();
