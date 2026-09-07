(function () {
  'use strict';

  const viewer = document.querySelector('#cuadernoViewer');
  const viewerImg = viewer ? viewer.querySelector('img') : null;
  const leftContainer = document.querySelector('#pageContentLeft');
  const rightContainer = document.querySelector('#pageContentRight');
  const totalWeeks = 16;
  let currentWeek = 1;

  function bindEntryImages(container) {
    container.querySelectorAll('.entry-image').forEach((img) => {
      img.addEventListener('click', () => {
        if (!viewer || !viewerImg) return;
        viewerImg.src = img.getAttribute('src');
        viewerImg.alt = img.getAttribute('alt') || '';
        viewer.classList.add('active');
      });
    });
  }

  function buildEntryHTML(data) {
    if (!data) return '';

    const weekHTML = data.chip ? `<span class="entry-week">${data.chip}</span>` : '';
    const titleHTML = data.title ? `<h2 class="entry-title">${data.title}</h2>` : '';
    const subtitleHTML = data.subtitle ? `<h3 class="entry-subtitle">${data.subtitle}</h3>` : '';

    const paragraphs = Array.isArray(data.text) ? data.text : data.text ? [data.text] : [];
    const textHTML = paragraphs.map((p) => `<p class="entry-text">${p}</p>`).join('');

    const body = data.image
      ? `<div class="entry-body">
         <span class="entry-image-wrap entry-image-${data.image.side}" style="--tilt: ${data.image.tilt || 0}deg">
           <img class="entry-image" src="${data.image.src}" alt="${data.image.alt || ''}" data-tilt="${data.image.tilt || 0}">
         </span>
         ${textHTML}
       </div>`
      : textHTML;

    return `
    <article class="entry">
      ${weekHTML}
      ${titleHTML}
      ${subtitleHTML}
      ${body}
    </article>`;
  }

  function buildPageHTML(entries) {
    const list = Array.isArray(entries) ? entries : entries ? [entries] : [];
    return list.map(buildEntryHTML).join('');
  }

  function renderNotebookWeek(weekNumber) {
    const data = cuadernoWeeksData && cuadernoWeeksData[weekNumber];
    if (!data || !leftContainer || !rightContainer) return;
    [leftContainer, rightContainer].forEach((el) => el.classList.add('is-loading'));
    setTimeout(() => {
      leftContainer.innerHTML = buildPageHTML(data.left);
      rightContainer.innerHTML = buildPageHTML(data.right);
      bindEntryImages(leftContainer);
      bindEntryImages(rightContainer);
      [leftContainer, rightContainer].forEach((el) => el.classList.remove('is-loading'));
    }, 250);
  }

  if (viewer) {
    viewer.addEventListener('click', () => viewer.classList.remove('active'));
  }

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
    prevBtn.disabled = currentWeek === 1;
    nextBtn.disabled = currentWeek === totalWeeks;
    weekDropdown.querySelectorAll('.week-option').forEach((opt) => {
      opt.classList.toggle('selected', Number(opt.dataset.week) === currentWeek);
    });
    renderNotebookWeek(currentWeek);
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
  document.addEventListener('click', () => weekDropdown.classList.remove('active'));

  renderWeek();
})();
