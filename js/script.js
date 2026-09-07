(function () {
  'use strict';

  const body = document.body;
  const header = document.querySelector('#header');

  function toggleScrolled() {
    window.scrollY > 60 ? header.classList.add('scrolled') : header.classList.remove('scrolled');
  }
  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  const mobileNavToggleBtn = document.querySelector('#mobileNavToggle');
  function mobileNavToggle() {
    body.classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('ri-menu-line');
    mobileNavToggleBtn.classList.toggle('ri-close-line');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToggle);
  }

  document.querySelectorAll('#navmenu a').forEach((link) => {
    link.addEventListener('click', () => {
      if (body.classList.contains('mobile-nav-active')) {
        mobileNavToggle();
      }
    });
  });

  document.querySelectorAll('.navmenu .toggle-dropdown').forEach((toggle) => {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      this.closest('li').classList.toggle('active');
      this.closest('li').querySelector('ul').classList.toggle('dropdown-active');
      e.stopPropagation();
    });
  });

  const scrollTopBtn = document.querySelector('#scrollTop');
  function toggleScrollTop() {
    if (scrollTopBtn) {
      window.scrollY > 100
        ? scrollTopBtn.classList.add('active')
        : scrollTopBtn.classList.remove('active');
    }
  }
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = el.getAttribute('data-delay');
          if (delay) {
            el.style.transitionDelay = delay + 'ms';
          }
          el.classList.add('in-view');
          revealObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  const skillsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bars = entry.target.querySelectorAll('.progress-bar');
          bars.forEach((bar) => {
            bar.style.width = bar.getAttribute('data-value') + '%';
          });
          skillsObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  document.querySelectorAll('.skills-grid').forEach((el) => skillsObserver.observe(el));

  const lightbox = document.querySelector('#lightbox');
  const lightboxClose = document.querySelector('.lightbox-close');
  document.querySelectorAll('.preview-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      lightbox.classList.add('active');
    });
  });
  function closeLightbox() {
    lightbox.classList.remove('active');
  }
  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  });

  document.querySelectorAll('.isotope-layout, .portfolio').forEach(() => {});
  const filterButtons = document.querySelectorAll('.portfolio-filters li');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelector('.portfolio-filters .filter-active').classList.remove('filter-active');
      btn.classList.add('filter-active');
      const filter = btn.getAttribute('data-filter');
      portfolioItems.forEach((item) => {
        const matches = filter === '*' || item.getAttribute('data-category') === filter;
        item.classList.toggle('is-hidden', !matches);
      });
    });
  });

  const sliderTrack = document.querySelector('.slider-track');
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.querySelector('.testimonial-prev');
  const nextBtn = document.querySelector('.testimonial-next');
  let currentSlide = 0;
  let autoplayTimer;

  function goToSlide(index) {
    currentSlide = (index + slides.length) % slides.length;
    if (sliderTrack) {
      sliderTrack.style.transform = 'translateX(-' + currentSlide * 100 + '%)';
    }
  }
  function startAutoplay() {
    autoplayTimer = setInterval(() => goToSlide(currentSlide + 1), 5000);
  }
  function stopAutoplay() {
    clearInterval(autoplayTimer);
  }
  if (sliderTrack && slides.length) {
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
        stopAutoplay();
        startAutoplay();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
        stopAutoplay();
        startAutoplay();
      });
    }
    const sliderWrapper = document.querySelector('.testimonials-slider');
    if (sliderWrapper) {
      sliderWrapper.addEventListener('mouseenter', stopAutoplay);
      sliderWrapper.addEventListener('mouseleave', startAutoplay);
    }
    startAutoplay();
  }

  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((el) => {
    el.addEventListener('click', () => {
      el.closest('.faq-item').classList.toggle('faq-active');
    });
  });

  const contactForm = document.querySelector('#contactForm');
  if (contactForm) {
    const loadingEl = contactForm.querySelector('.form-loading');
    const errorEl = contactForm.querySelector('.form-error');
    const successEl = contactForm.querySelector('.form-success');
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      errorEl.style.display = 'none';
      successEl.style.display = 'none';
      loadingEl.style.display = 'block';
      setTimeout(() => {
        loadingEl.style.display = 'none';
        successEl.style.display = 'block';
        contactForm.reset();
      }, 900);
    });
  }

  const navLinks = document.querySelectorAll("#navmenu a[href^='#']");
  const sections = Array.from(navLinks)
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  const spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = '#' + entry.target.id;
        const link = document.querySelector("#navmenu a[href='" + id + "']");
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach((l) => l.classList.remove('active'));
          link.classList.add('active');
        }
      });
    },
    { rootMargin: '-40% 0px -50% 0px' }
  );
  sections.forEach((section) => spyObserver.observe(section));
})();
