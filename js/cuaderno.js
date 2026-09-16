(function () {
  'use strict';

  const viewer = document.querySelector('#cuadernoViewer');
  const viewerImageBox = viewer ? viewer.querySelector('.cuaderno-viewer-image') : null;
  const viewerImg = viewerImageBox ? viewerImageBox.querySelector('img') : null;
  const viewerPdfBox = viewer ? viewer.querySelector('.cuaderno-viewer-pdf') : null;
  const viewerPdfFrame = viewer ? viewer.querySelector('.cuaderno-viewer-pdf-frame') : null;
  const viewerPdfTitle = viewer ? viewer.querySelector('.cuaderno-viewer-pdf-title') : null;
  const viewerPdfDownload = viewer ? viewer.querySelector('.cuaderno-viewer-pdf-download') : null;
  const viewerPdfNewTab = viewer ? viewer.querySelector('.cuaderno-viewer-pdf-newtab') : null;
  const viewerCloseBtn = viewer ? viewer.querySelector('.cuaderno-viewer-pdf-close') : null;
  const leftContainer = document.querySelector('#pageContentLeft');
  const rightContainer = document.querySelector('#pageContentRight');
  const totalWeeks = 16;
  let currentWeek = 1;

  function openImageViewer(src, alt) {
    if (!viewer || !viewerImg || !viewerImageBox || !viewerPdfBox) return;
    viewerImg.src = src;
    viewerImg.alt = alt || '';
    viewerImageBox.style.display = 'flex';
    viewerPdfBox.style.display = 'none';
    viewer.classList.add('active');
  }

  function openPdfViewer(src, title) {
    if (!viewer || !viewerPdfFrame || !viewerImageBox || !viewerPdfBox) return;
    const label = title || 'Documento PDF';
    viewerPdfFrame.src = src;
    viewerPdfFrame.title = label;
    if (viewerPdfTitle) viewerPdfTitle.textContent = label;
    if (viewerPdfDownload) viewerPdfDownload.setAttribute('href', src);
    if (viewerPdfNewTab) viewerPdfNewTab.setAttribute('href', src);
    viewerImageBox.style.display = 'none';
    viewerPdfBox.style.display = 'flex';
    viewer.classList.add('active');
  }

  function closeViewer() {
    if (!viewer) return;
    viewer.classList.remove('active');
    if (viewerImg) viewerImg.src = '';
    if (viewerPdfFrame) viewerPdfFrame.src = '';
  }

  function bindEntryImages(container) {
    container.querySelectorAll('.entry-image').forEach((img) => {
      img.addEventListener('click', () => {
        openImageViewer(img.getAttribute('src'), img.getAttribute('alt'));
      });
    });
  }

  function bindEntryPdfs(container) {
    container.querySelectorAll('.entry-pdf').forEach((btn) => {
      btn.addEventListener('click', () => {
        openPdfViewer(btn.dataset.src, btn.dataset.title);
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

    const pdfHTML = buildPdfHTML(data.pdf);
    const tableHTML = buildTableHTML(data.table);

    return `
    <article class="entry">
      ${weekHTML}
      ${titleHTML}
      ${subtitleHTML}
      ${body}
      ${pdfHTML}
      ${tableHTML}
    </article>`;
  }

  function buildPdfHTML(pdf) {
    if (!pdf || !pdf.src) return '';
    const title = pdf.title || 'Documento PDF';
    return `
    <div class="entry-pdf-wrap">
      <button type="button" class="entry-pdf" data-src="${pdf.src}" data-title="${title}">
        <i class="ri-file-pdf-2-line entry-pdf-icon"></i>
        <span class="entry-pdf-info">
          <span class="entry-pdf-title">${title}</span>
          <span class="entry-pdf-action">Ver documento</span>
        </span>
      </button>
      <a class="entry-pdf-download" href="${pdf.src}" download aria-label="Descargar PDF">
        <i class="ri-download-2-line"></i>
      </a>
    </div>`;
  }

  function buildTableHTML(table) {
    if (!table || !Array.isArray(table.rows)) return '';
    const headHTML =
      Array.isArray(table.headers) && table.headers.length
        ? `<thead><tr>${table.headers.map((h) => `<th>${h}</th>`).join('')}</tr></thead>`
        : '';
    const bodyHTML = `<tbody>${table.rows
      .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`)
      .join('')}</tbody>`;
    const captionHTML = table.caption
      ? `<figcaption class="entry-table-caption">${table.caption}</figcaption>`
      : '';
    return `
    <figure class="entry-table-wrap">
      <table class="entry-table">${headHTML}${bodyHTML}</table>
      ${captionHTML}
    </figure>`;
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
      bindEntryPdfs(leftContainer);
      bindEntryPdfs(rightContainer);
      [leftContainer, rightContainer].forEach((el) => el.classList.remove('is-loading'));
    }, 250);
  }

  if (viewer) {
    viewer.addEventListener('click', (e) => {
      if (e.target === viewer) closeViewer();
    });
  }
  if (viewerImageBox) viewerImageBox.addEventListener('click', closeViewer);
  if (viewerCloseBtn) viewerCloseBtn.addEventListener('click', closeViewer);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeViewer();
  });

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
