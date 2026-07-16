/* ============================================================
   StockFlow Landing Page — Main JavaScript
   ============================================================ */

(function () {
  "use strict";

  // ---------- Check for reduced motion preference ----------
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // ---------- 1. IntersectionObserver for Scroll Reveal ----------
  const revealElements = document.querySelectorAll(".reveal");

  if (revealElements.length > 0 && !prefersReducedMotion) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Apply the stagger delay from inline style (if any)
            const delay = entry.target.style.transitionDelay || "0ms";
            const delayMs = parseInt(delay) || 0;
            setTimeout(() => {
              entry.target.classList.add("active");
            }, delayMs);
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else if (prefersReducedMotion) {
    // Show all elements immediately if user prefers reduced motion
    revealElements.forEach((el) => el.classList.add("active"));
  } else {
    // Fallback: show everything
    revealElements.forEach((el) => el.classList.add("active"));
  }

  // ---------- 2. Sticky Nav Frosted Transition ----------
  const nav = document.getElementById("top-nav");
  const navContainer = document.getElementById("nav-container");

  function handleNavScroll() {
    if (!nav || !navContainer) return;
    if (window.scrollY > 80) {
      navContainer.classList.add("clay", "shadow-xl", "px-10");
      navContainer.classList.remove("bg-transparent");
      nav.classList.add("py-2");
    } else {
      navContainer.classList.remove("glass", "shadow-xl", "px-10");
      navContainer.classList.add("bg-transparent");
      nav.classList.remove("py-2");
    }
  }

  window.addEventListener("scroll", handleNavScroll, { passive: true });

  // ---------- 2b. Hero Title Scroll Fade ----------
  const heroTitleContainer = document.getElementById("hero-title-container");
  
  function handleHeroTitleScroll() {
    if (!heroTitleContainer) return;
    
    // Calculate progress based on scroll. 60vh = fully faded
    const scrollY = window.scrollY;
    const viewHeight = window.innerHeight;
    
    // progress is 0 at top, 1 at 60vh down
    let progress = scrollY / (viewHeight * 0.6);
    progress = Math.max(0, Math.min(progress, 1));
    
    const opacity = 1 - progress;
    // Scale from 1 to 0.85
    const scale = 1 - (progress * 0.15);
    // Translate Y from -50% to -50% - 60px (moving it up slightly as it shrinks)
    const translateYOffset = -(progress * 60);
    
    heroTitleContainer.style.opacity = opacity.toFixed(3);
    heroTitleContainer.style.transform = `translate(-50%, calc(-50% + ${translateYOffset}px)) scale(${scale.toFixed(3)})`;
    
    if (opacity <= 0) {
      heroTitleContainer.style.pointerEvents = "none";
      heroTitleContainer.setAttribute("aria-hidden", "true");
    } else {
      heroTitleContainer.style.pointerEvents = "none";
      heroTitleContainer.removeAttribute("aria-hidden");
    }
  }

  // Handle hero title via scroll (could also use requestAnimationFrame block if performance issues arise)
  window.addEventListener("scroll", () => {
    requestAnimationFrame(handleHeroTitleScroll);
  }, { passive: true });
  
  // Init
  handleHeroTitleScroll();

  // ---------- 3. Animated Counters ----------
  const counterElements = document.querySelectorAll(".counter");

  if (counterElements.length > 0) {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.target);
            if (isNaN(target)) {
              counterObserver.unobserve(el);
              return;
            }

            let current = 0;
            const duration = 1500;
            const startTime = performance.now();

            function updateCounter(now) {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Ease-out cubic
              const easedProgress = 1 - Math.pow(1 - progress, 3);
              el.innerText = Math.floor(easedProgress * target);
              if (progress < 1) {
                requestAnimationFrame(updateCounter);
              } else {
                el.innerText = target;
              }
            }
            requestAnimationFrame(updateCounter);
            counterObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    counterElements.forEach((c) => counterObserver.observe(c));
  }

  // ---------- 4. SVG Timeline Path Draw ----------
  const timelinePath = document.getElementById("timeline-path");
  const timelineContainer = document.getElementById("timeline-container");

  if (timelinePath && timelineContainer && !prefersReducedMotion) {
    const length = timelinePath.getTotalLength();
    timelinePath.style.strokeDasharray = length;
    timelinePath.style.strokeDashoffset = length;

    function drawTimeline() {
      const rect = timelineContainer.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      // Calculate how much of the container has passed the center of the screen
      const start = rect.top - viewHeight / 2;
      const scrollRange = rect.height;
      let progress = -start / scrollRange;
      progress = Math.max(0, Math.min(progress, 1));
      timelinePath.style.strokeDashoffset = length - progress * length;
    }

    window.addEventListener("scroll", drawTimeline, { passive: true });
    // Initial draw
    drawTimeline();
  } else if (timelinePath && prefersReducedMotion) {
    // Show full path for reduced motion
    const length = timelinePath.getTotalLength();
    timelinePath.style.strokeDasharray = length;
    timelinePath.style.strokeDashoffset = 0;
  }

  // ---------- 5. Mobile Hamburger Menu ----------
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuOverlay = document.getElementById("menu-overlay");
  const menuIcon = document.getElementById("menu-icon");

  function openMenu() {
    if (!mobileMenu || !menuOverlay || !menuToggle) return;
    mobileMenu.classList.add("open");
    menuOverlay.classList.add("open");
    menuToggle.setAttribute("aria-expanded", "true");
    if (menuIcon) menuIcon.textContent = "close";
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    if (!mobileMenu || !menuOverlay || !menuToggle) return;
    mobileMenu.classList.remove("open");
    menuOverlay.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    if (menuIcon) menuIcon.textContent = "menu";
    document.body.style.overflow = "";
  }

  if (menuToggle && mobileMenu && menuOverlay) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.contains("open");
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close on overlay click
    menuOverlay.addEventListener("click", closeMenu);

    // Close on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileMenu.classList.contains("open")) {
        closeMenu();
      }
    });

    // Close on any mobile menu link click
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }

  // ---------- 6. Smooth Scroll for Anchor Links ----------
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#" || href === "") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navHeight = nav ? nav.offsetHeight : 80;
        const targetPosition =
          target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: prefersReducedMotion ? "auto" : "smooth",
        });
      }
    });
  });

  // ---------- 7. Screenshot Card 3D Tilt Effect ----------
  const screenshotCards = document.querySelectorAll(".screenshot-card");

  screenshotCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    });
  });

  // ---------- 8. Hero Section 3D Carousel ----------
  const carouselContainer = document.getElementById("hero-3d-carousel");
  if (carouselContainer) {
    const items = Array.from(carouselContainer.querySelectorAll('.carousel-item'));
    let slideInterval;
    
    function rotateCarousel() {
      const classes = items.map(el => {
        if(el.classList.contains('active')) return 'active';
        if(el.classList.contains('next')) return 'next';
        if(el.classList.contains('prev')) return 'prev';
        return 'hidden';
      });
      
      const lastClass = classes.pop();
      classes.unshift(lastClass);
      
      items.forEach((el, i) => {
        el.className = `carousel-item absolute top-0 left-1/2 w-[240px] md:w-[320px] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${classes[i]}`;
      });
    }

    function rotateCarouselReverse() {
      const classes = items.map(el => {
        if(el.classList.contains('active')) return 'active';
        if(el.classList.contains('next')) return 'next';
        if(el.classList.contains('prev')) return 'prev';
        return 'hidden';
      });
      
      const firstClass = classes.shift();
      classes.push(firstClass);
      
      items.forEach((el, i) => {
        el.className = `carousel-item absolute top-0 left-1/2 w-[240px] md:w-[320px] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${classes[i]}`;
      });
    }

    // Auto rotate every 5 seconds
    function startSlideshow() {
      slideInterval = setInterval(rotateCarousel, 5000);
    }
    
    function resetSlideshow() {
      clearInterval(slideInterval);
      startSlideshow();
    }

    startSlideshow();

    // User can click to rotate
    carouselContainer.addEventListener("click", (e) => {
      const item = e.target.closest('.carousel-item');
      if (!item) return;
      
      if (item.classList.contains('next')) {
        rotateCarousel();
        resetSlideshow();
      } else if (item.classList.contains('prev')) {
        rotateCarouselReverse();
        resetSlideshow();
      }
    });
  }

  // ---------- 9. Screenshot Carousel Auto-Scroll ----------
  const carousel = document.getElementById("screenshot-carousel");
  if (carousel && !prefersReducedMotion) {
    let scrollInterval;
    const startCarousel = () => {
      scrollInterval = setInterval(() => {
        const itemWidth = 332; // 300px width + 32px gap
        
        // Check if we reached the end
        if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 10) {
          carousel.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          carousel.scrollBy({ left: itemWidth, behavior: "smooth" });
        }
      }, 3000);
    };
    
    startCarousel();

    // Pause on hover/interaction
    carousel.addEventListener("mouseenter", () => clearInterval(scrollInterval));
    carousel.addEventListener("mouseleave", startCarousel);
    carousel.addEventListener("touchstart", () => clearInterval(scrollInterval), { passive: true });
    carousel.addEventListener("touchend", startCarousel, { passive: true });
  }

  // ---------- 10. Log that JS is loaded ----------
  console.log(
    "%c StockFlow %c Landing page loaded",
    "background:#2563EB;color:white;padding:4px 8px;border-radius:4px 0 0 4px;font-weight:bold",
    "background:#06D6A0;color:#0A1628;padding:4px 8px;border-radius:0 4px 4px 0;font-weight:bold"
  );
})();
