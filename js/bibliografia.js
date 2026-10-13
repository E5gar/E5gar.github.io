(function () {
  'use strict';

  const BASE = 'assets/images/Libros/';
  const EXT = 'png';

  const libros = [
    {
      semana: 1,
      n: 1,
      titulo: 'Manual de HTML',
      autor: 'Universidade Nacional Autônoma do México',
      url: 'https://infolibros.org/pdfview/manual-de-html-universidade-nacional-autonoma-do-mexico-613/',
    },
    {
      semana: 1,
      n: 2,
      titulo: 'Programación Web del Frontend al Backend',
      autor: 'Celi Párraga, Boné Andrade y Mora Olivero',
      url: 'https://infolibros.org/pdfview/programacion-web-del-frontend-al-backend-celi-parraga-ricardo-javier-bone-andrade-miguel-fabricio-mora-olivero-aldo-patricio-613/',
    },
    {
      semana: 1,
      n: 3,
      titulo: 'Curso de desarrollo web en entorno de servidor',
      autor: 'Pedro R. Benito da Rocha',
      url: 'https://infolibros.org/pdfview/curso-de-desarrollo-web-en-entorno-de-servidor-pedro-r-benito-da-rocha-613/',
    },
    {
      semana: 1,
      n: 4,
      titulo: 'Pro Git',
      autor: 'Scott Chacon y Ben Straub',
      url: 'https://git-scm.com/book/es/v2',
    },
    {
      semana: 1,
      n: 5,
      titulo: 'Manual Básico de Creación de Páginas Web',
      autor: 'Aragón Emprendedor',
      url: 'https://infolibros.org/pdfview/manual-basico-de-creacion-de-paginas-web-aragon-emprendedor-613/',
    },
    {
      semana: 2,
      n: 1,
      titulo: 'Dive Into HTML5',
      autor: 'Mark Pilgrim',
      url: 'https://mislav.github.io/diveintohtml5/',
    },
    {
      semana: 2,
      n: 2,
      titulo: 'Resilient Web Design',
      autor: 'Jeremy Keith',
      url: 'https://resilientwebdesign.com',
    },
    {
      semana: 2,
      n: 3,
      titulo: 'El gran libro de HTML5, CSS3 y JavaScript',
      autor: 'J.D Gauchat',
      url: 'https://bibliotecadigital.utn.edu.ec/files/original/df49ad39c8a4b8ab877f3f13c7083492a1d4e8c3.pdf',
    },
    {
      semana: 3,
      n: 1,
      titulo: 'CSS Notes for Professionals',
      autor: 'Stack Overflow Contributors & GoalKicker',
      url: 'https://goalkicker.com/CSSBook/',
    },
    {
      semana: 3,
      n: 2,
      titulo: 'Web Style Guide: Foundations of User Experience Design',
      autor: 'Patrick J. Lynch y Sarah Horton',
      url: 'https://webstyleguide.com/',
    },
    {
      semana: 3,
      n: 3,
      titulo: 'Inclusive Components',
      autor: 'Heydon Pickering',
      url: 'https://inclusive-components.design/#components',
    },
    {
      semana: 3,
      n: 4,
      titulo: 'Enduring CSS',
      autor: 'Ben Frain',
      url: 'https://ecss.benfrain.com/',
    },
    {
      semana: 3,
      n: 5,
      titulo: 'Learn to Code HTML & CSS',
      autor: 'Shay Howe',
      url: 'https://learn.shayhowe.com/',
    },
    {
      semana: 4,
      n: 1,
      titulo: 'Eloquent JavaScript',
      autor: 'Marijn Haverbeke',
      url: 'https://eloquentjavascript.net/',
    },
    {
      semana: 4,
      n: 2,
      titulo: 'The JavaScript Standard',
      autor: 'Nicolás Bevacqua',
      url: 'https://ponyfoo.com/articles/standard',
    },
    {
      semana: 4,
      n: 3,
      titulo: 'Structure and Interpretation of Computer Programs, JavaScript Edition',
      autor: 'Harold Abelson y Gerald Jay Sussman',
      url: 'https://sicp.sourceacademy.org/sicpjs.pdf',
    },
    {
      semana: 4,
      n: 4,
      titulo: 'JavaScript Notes for Professionals',
      autor: 'GoalKicker.com',
      url: 'https://goalkicker.com/JavaScriptBook/',
    },
    {
      semana: 4,
      n: 5,
      titulo: 'TypeScript Notes for Professionals',
      autor: 'GoalKicker.com',
      url: 'https://goalkicker.com/TypeScriptBook2',
    },
    {
      semana: 5,
      n: 1,
      titulo: 'React JS Notes for Professionals',
      autor: 'GoalKicker.com',
      url: 'https://goalkicker.com/ReactJSBook/',
    },
    {
      semana: 5,
      n: 2,
      titulo: 'SurviveJS - React: De aprendiz a maestro',
      autor: 'Juho Vepsäläinen y Raúl Expósito',
      url: 'https://librosgratis.dev/books/react-aprendiz-maestro.pdf',
    },
    {
      semana: 5,
      n: 3,
      titulo: 'React in Patterns',
      autor: 'Krasimir Tsonev',
      url: 'https://github.com/krasimir/react-in-patterns/blob/master/book.pdf',
    },
    {
      semana: 5,
      n: 4,
      titulo: 'SurviveJS - Webpack 5',
      autor: 'Juho Vepsäläinen',
      url: 'https://webpack.js.org',
    },
    {
      semana: 5,
      n: 5,
      titulo: 'Node.js Notes for Professionals',
      autor: 'GoalKicker.com',
      url: 'https://goalkicker.com/NodeJSBook/',
    },
    {
      semana: 6,
      n: 1,
      titulo: 'Building User Interfaces for Modern Web Applications: React Programming',
      autor: 'Cheer-Sun Yang (2024)',
      url: 'https://paadopt.org/bookshelf/building-user-interfaces-for-modern-web-applications-react-programming/',
    },
    {
      semana: 6,
      n: 2,
      titulo: 'React: From Basics to Next.js, TypeScript, Fullstack',
      autor: 'School of Web (2026)',
      url: 'https://schoolofweb.net/en/books/modern-react/',
    },
    {
      semana: 6,
      n: 3,
      titulo: 'React Handbook',
      autor: 'Flavio Copes',
      url: 'https://flaviocopes.com/ebooks/react-handbook/',
    },
    {
      semana: 6,
      n: 4,
      titulo: 'React Enlightenment',
      autor: 'Cody Lindley',
      url: 'https://www.reactenlightenment.com/index.html',
    },
    {
      semana: 6,
      n: 5,
      titulo: 'React Book',
      autor: 'Chris Noring',
      url: 'https://softchris.github.io/books/react/',
    },
  ];

  const viewport = document.querySelector('#librosViewport');
  const container = document.querySelector('#librosContainer');
  const prevBtn = document.querySelector('#librosPrev');
  const nextBtn = document.querySelector('#librosNext');
  if (!viewport || !container || typeof EmblaCarousel === 'undefined') return;

  const pad = (value) => String(value).padStart(2, '0');

  container.innerHTML = libros
    .map((libro) => {
      const semana = pad(libro.semana);
      const src = BASE + 'Semana_' + semana + '_Libro_' + pad(libro.n) + '.' + EXT;
      return `
      <div class="libros-slide">
        <a class="libro-card" href="${libro.url}" target="_blank" rel="noopener" draggable="false" aria-label="${libro.titulo}">
          <div class="libro-cover">
            <i class="ri-book-2-line"></i>
            <img src="${src}" alt="Carátula de ${libro.titulo}" loading="lazy" draggable="false" onerror="this.remove()">
          </div>
          <div class="libro-info">
            <span class="libro-semana">Semana ${semana}</span>
            <h3 class="libro-title">${libro.titulo}</h3>
            <p class="libro-autor">${libro.autor}</p>
          </div>
        </a>
      </div>`;
    })
    .join('');

  const autoplay = EmblaCarouselAutoplay({
    delay: 2500,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  const embla = EmblaCarousel(
    viewport,
    {
      loop: true,
      align: 'start',
      dragFree: true,
      slidesToScroll: 1,
    },
    [autoplay]
  );

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    autoplay.stop();
  }

  embla.on('pointerDown', () => viewport.classList.add('is-dragging'));
  embla.on('pointerUp', () => viewport.classList.remove('is-dragging'));

  if (prevBtn) prevBtn.addEventListener('click', () => embla.scrollPrev());
  if (nextBtn) nextBtn.addEventListener('click', () => embla.scrollNext());
})();
