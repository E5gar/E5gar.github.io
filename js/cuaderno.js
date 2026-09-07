(function () {
  'use strict';
  const viewer = document.querySelector('#cuadernoViewer');
  const viewerImg = viewer ? viewer.querySelector('img') : null;
  function randomTilt() {
    return (Math.random() * 20 - 10).toFixed(1);
  }
  document.querySelectorAll('.entry-image').forEach((img) => {
    const explicitTilt = img.getAttribute('data-tilt');
    const tilt = explicitTilt !== null ? explicitTilt : randomTilt();
    img.style.setProperty('--tilt', tilt + 'deg');
    img.addEventListener('click', () => {
      if (!viewer || !viewerImg) return;
      viewerImg.src = img.getAttribute('src');
      viewerImg.alt = img.getAttribute('alt') || '';
      viewer.classList.add('active');
    });
  });
  if (viewer) {
    viewer.addEventListener('click', () => {
      viewer.classList.remove('active');
    });
  }
})();

(function () {
  const totalWeeks = 16;
  let currentWeek = 1;
  const weekLabel = document.querySelector('#weekLabel');
  const weekDropdown = document.querySelector('#weekDropdown');
  const prevBtn = document.querySelector('.week-prev');
  const nextBtn = document.querySelector('.week-next');
  if (!weekLabel || !weekDropdown || !prevBtn || !nextBtn) return;
  for (let i = 1; i <= totalWeeks; i++) {
    const option = document.createElement('div');
    option.className = 'week-option';
    option.textContent = 'Semana ' + String(i).padStart(2, '0');
    option.dataset.week = i;
    weekDropdown.appendChild(option);
  }
  function renderWeek() {
    weekLabel.textContent = 'Semana ' + String(currentWeek).padStart(2, '0');
    prevBtn.classList.toggle('is-hidden', currentWeek === 1);
    nextBtn.classList.toggle('is-hidden', currentWeek === totalWeeks);
    weekDropdown.querySelectorAll('.week-option').forEach((opt) => {
      opt.classList.toggle('selected', Number(opt.dataset.week) === currentWeek);
    });
  }
  prevBtn.addEventListener('click', () => {
    if (currentWeek > 1) currentWeek -= 1;
    renderWeek();
  });
  nextBtn.addEventListener('click', () => {
    if (currentWeek < totalWeeks) currentWeek += 1;
    renderWeek();
  });
  weekLabel.addEventListener('click', (e) => {
    e.stopPropagation();
    weekDropdown.classList.toggle('active');
  });
  weekDropdown.addEventListener('click', (e) => {
    const option = e.target.closest('.week-option');
    if (!option) return;
    currentWeek = Number(option.dataset.week);
    weekDropdown.classList.remove('active');
    renderWeek();
  });
  document.addEventListener('click', () => {
    weekDropdown.classList.remove('active');
  });
  renderWeek();
})();
