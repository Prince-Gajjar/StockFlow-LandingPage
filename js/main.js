/* ============================================================
   StockFlow Landing Page — Bright Liquid Glass JS Engine
   Powers Cursor Light Refraction, Scroll Reveals, Hero Slideshow,
   Numeric Counter Ease, Screenshot Carousel, & Mobile Menu
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. Dynamic Cursor Specular Light Tracking ── */
  const glassCards = document.querySelectorAll('.liquid-glass-hover');
  
  glassCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  /* ── 2. Scroll Reveal Animations (IntersectionObserver) ── */
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  /* ── 3. Sticky Bright Navigation Bar ── */
  const nav = document.getElementById('main-nav');
  
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  }

  /* ── 4. Hero Slideshow Handler ── */
  const heroImage = document.getElementById('hero-slideshow');
  const heroDots = document.querySelectorAll('.hero-dot');
  const slides = [
    'assets/images/1.png',
    'assets/images/2.png',
    'assets/images/3.png',
    'assets/images/4.png',
    'assets/images/5.png',
    'assets/images/6.png',
    'assets/images/7.png'
  ];
  let currentSlideIndex = 0;

  function updateHeroSlide(index) {
    if (!heroImage) return;
    currentSlideIndex = index;
    
    // Smooth opacity transition
    heroImage.style.opacity = '0.3';
    
    setTimeout(() => {
      heroImage.src = slides[currentSlideIndex];
      heroImage.style.opacity = '1';
      
      // Update dot indicators
      heroDots.forEach((dot, idx) => {
        if (idx === (currentSlideIndex % (heroDots.length || 1))) {
          dot.className = 'hero-dot w-6 h-2 rounded-full bg-[#0D9488] transition-all duration-300';
        } else {
          dot.className = 'hero-dot w-2 h-2 rounded-full bg-white/40 transition-all duration-300';
        }
      });
    }, 250);
  }

  if (heroImage) {
    setInterval(() => {
      const nextIndex = (currentSlideIndex + 1) % slides.length;
      updateHeroSlide(nextIndex);
    }, 4500);
  }

  /* ── 5. Animated Numeric Counters ── */
  const counters = document.querySelectorAll('.counter');
  let animated = false;

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
          const target = parseFloat(counter.getAttribute('data-target'));
          const isDecimal = target % 1 !== 0;
          const duration = 2000;
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentValue = easeProgress * target;

            counter.innerText = isDecimal ? currentValue.toFixed(1) : Math.floor(currentValue);

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              counter.innerText = isDecimal ? target.toFixed(1) : target;
            }
          }

          requestAnimationFrame(updateCounter);
        });
      }
    });
  }, { threshold: 0.5 });

  if (counters.length > 0) {
    counterObserver.observe(counters[0].parentElement);
  }

  /* ── 6. Screenshot Carousel Controls ── */
  const carousel = document.getElementById('screenshot-carousel');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');

  if (carousel && prevBtn && nextBtn) {
    const scrollAmount = 320;

    prevBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }

  /* ── 7. Mobile Menu Drawer Controls ── */
  const menuToggle = document.getElementById('menu-toggle');
  const menuClose = document.getElementById('menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuOverlay = document.getElementById('menu-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  function openMenu() {
    mobileMenu.classList.remove('translate-x-full');
    menuOverlay.classList.remove('opacity-0', 'pointer-events-none');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.add('translate-x-full');
    menuOverlay.classList.add('opacity-0', 'pointer-events-none');
    document.body.style.overflow = '';
  }

  if (menuToggle) menuToggle.addEventListener('click', openMenu);
  if (menuClose) menuClose.addEventListener('click', closeMenu);
  if (menuOverlay) menuOverlay.addEventListener('click', closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

});
