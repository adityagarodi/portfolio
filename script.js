/* ============================================================
   Particle Background
   All particles share a single requestAnimationFrame loop
   instead of spawning N independent animation callbacks.
   ============================================================ */
function createParticles() {
  const container = document.getElementById('particles');
  const PARTICLE_COUNT = 25;
  const particles = [];

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const el = document.createElement('div');
    el.className = 'particle';

    const size = Math.random() * 2 + 1;
    el.style.cssText = `
      left:    ${Math.random() * 100}%;
      top:     ${Math.random() * 100}%;
      width:   ${size}px;
      height:  ${size}px;
      opacity: ${(Math.random() * 0.5 + 0.2).toFixed(2)};
    `;

    container.appendChild(el);

    particles.push({
      el,
      x: parseFloat(el.style.left),
      y: parseFloat(el.style.top),
      vx: (Math.random() - 0.5) * 0.1,
      vy: (Math.random() - 0.5) * 0.1,
    });
  }

  // Single shared rAF loop
  function tick() {
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x > 100) p.x = 0;
      else if (p.x < 0) p.x = 100;

      if (p.y > 100) p.y = 0;
      else if (p.y < 0) p.y = 100;

      p.el.style.left = p.x + '%';
      p.el.style.top  = p.y + '%';
    }
    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

/* ============================================================
   Typing Animation
   ============================================================ */
function typeText() {
  const titles = ['Computer Engineering Student', 'Data Analyst', 'AI Enthusiast'];
  let titleIndex = 0;
  let charIndex  = 0;
  let isDeleting = false;
  const el = document.getElementById('typingText');

  function tick() {
    const current = titles[titleIndex];

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    el.textContent = current.substring(0, charIndex);

    if (!isDeleting && charIndex === current.length) {
      // Pause before deleting
      setTimeout(() => { isDeleting = true; setTimeout(tick, 50); }, 1500);
      return;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
    }

    setTimeout(tick, isDeleting ? 50 : 100);
  }

  tick();
}

/* ============================================================
   Scroll — Fade-in Animations (IntersectionObserver)
   ============================================================ */
function handleScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // stop watching once revealed
      }
    }
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

/* ============================================================
   Active Navigation (throttled scroll listener)
   ============================================================ */
function handleActiveNav() {
  const SECTION_IDS = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'certifications', 'languages', 'contact'];
  const navLinks = document.querySelectorAll('.nav-link');
  let ticking = false;

  function update() {
    const scrollY = window.scrollY + 100;

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (!el) continue;
      if (scrollY >= el.offsetTop && scrollY < el.offsetTop + el.offsetHeight) {
        navLinks.forEach(link => {
          const isActive = link.getAttribute('href') === '#' + id;
          link.classList.toggle('active', isActive);
        });
        break;
      }
    }

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
}

/* ============================================================
   Mobile Menu
   ============================================================ */
function toggleMobileMenu() {
  const menu   = document.getElementById('mobileMenu');
  const btn    = document.getElementById('menuBtn');
  const isOpen = !menu.hidden;

  menu.hidden = isOpen;
  btn.setAttribute('aria-expanded', String(!isOpen));
  btn.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  const menu = document.getElementById('mobileMenu');
  const btn  = document.getElementById('menuBtn');
  if (!menu.hidden && !menu.contains(e.target) && !btn.contains(e.target)) {
    menu.hidden = true;
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Open navigation menu');
  }
});

/* ============================================================
   Scroll Helpers
   ============================================================ */
function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ============================================================
   Contact Form
   ============================================================ */
function handleSubmit(event) {
  event.preventDefault();
  alert('Thank you for your message! This is a demo form.');
  event.target.reset();
}

/* ============================================================
   Footer Year
   ============================================================ */
function setFooterYear() {
  const el = document.getElementById('footerYear');
  if (el) el.textContent = new Date().getFullYear();
}

/* ============================================================
   Init
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  setFooterYear();
  createParticles();
  typeText();
  handleScrollAnimations();
  handleActiveNav();
  initCertCarousel();
  initCertModal();
});

/* ============================================================
   Certifications Carousel
   ============================================================ */
function initCertCarousel() {
  const carousel  = document.getElementById('certCarousel');
  const prevBtn   = document.getElementById('certPrev');
  const nextBtn   = document.getElementById('certNext');
  const dots      = document.querySelectorAll('.cert-dot');
  const slides    = document.querySelectorAll('.cert-slide');
  const total     = slides.length;

  if (!carousel || total === 0) return;

  let current = 0;

  // ── helpers ──────────────────────────────────────────────
  function getSlideWidth() {
    // slide width + gap (28px)
    return slides[0].getBoundingClientRect().width + 28;
  }

  function scrollTo(index) {
    current = Math.max(0, Math.min(index, total - 1));
    carousel.scrollTo({ left: current * getSlideWidth(), behavior: 'smooth' });
    updateUI();
  }

  function updateUI() {
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === current);
      d.setAttribute('aria-selected', String(i === current));
    });
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === total - 1;
  }

  // ── controls ─────────────────────────────────────────────
  prevBtn.addEventListener('click', () => scrollTo(current - 1));
  nextBtn.addEventListener('click', () => scrollTo(current + 1));

  dots.forEach((dot, i) => dot.addEventListener('click', () => scrollTo(i)));

  // Keyboard navigation
  carousel.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft')  { e.preventDefault(); scrollTo(current - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); scrollTo(current + 1); }
  });

  // Sync dot on native scroll (swipe / mouse drag)
  let scrollTimer;
  carousel.addEventListener('scroll', () => {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      const w    = getSlideWidth();
      const idx  = Math.round(carousel.scrollLeft / w);
      if (idx !== current) { current = idx; updateUI(); }
    }, 80);
  }, { passive: true });

  // init state
  updateUI();
}

/* ============================================================
   Certificate Lightbox Modal
   ============================================================ */
function initCertModal() {
  const modal    = document.getElementById('certModal');
  const modalImg = document.getElementById('certModalImg');
  const modalTtl = document.getElementById('certModalTitle');
  const closeBtn = document.getElementById('certModalClose');
  const backdrop = document.getElementById('certModalBackdrop');

  if (!modal) return;

  function openModal(src, title) {
    modalImg.src = src;
    modalImg.alt = title;
    modalTtl.textContent = title;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
    modalImg.src = '';
  }

  // "View" buttons inside each card
  document.querySelectorAll('.cert-view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(btn.dataset.img, btn.dataset.title);
    });
  });

  // Clicking the card image area also opens modal
  document.querySelectorAll('.cert-img-wrap').forEach(wrap => {
    wrap.addEventListener('click', () => {
      const btn = wrap.querySelector('.cert-view-btn');
      if (btn) openModal(btn.dataset.img, btn.dataset.title);
    });
  });

  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);

  // Keyboard: Escape closes, arrow keys navigate
  document.addEventListener('keydown', (e) => {
    if (!modal.hidden && e.key === 'Escape') closeModal();
  });
}


