// GSAP Animations for Bolzano Real Estate Landing Page

document.addEventListener("DOMContentLoaded", function () {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Hero section animations
  const heroTimeline = gsap.timeline();

  heroTimeline
    .to(".hero-title", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    })
    .to(
      ".hero-subtitle",
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.5"
    )
    .to(
      ".search-form",
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.3"
    );

  // Area cards animation
  gsap.fromTo(
    ".area-card",
    {
      opacity: 0,
      y: 50,
      scale: 0.8,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".area-card",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Property cards animation
  gsap.fromTo(
    ".property-card",
    {
      opacity: 0,
      y: 60,
      rotationX: 15,
    },
    {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".property-card",
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Dream home section animation
  const dreamHomeTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".dream-home-section",
      start: "top 70%",
      end: "bottom 30%",
      toggleActions: "play none none reverse",
    },
  });

  dreamHomeTimeline
    .fromTo(
      ".dream-home-image img",
      {
        opacity: 0,
        x: -100,
        scale: 1.1,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
      }
    )
    .fromTo(
      ".dream-home-content h2",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.5"
    )
    .fromTo(
      ".agent-card",
      {
        opacity: 0,
        y: 30,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      },
      "-=0.3"
    );

  // Agent profile cards animation
  gsap.fromTo(
    ".agent-profile-card",
    {
      opacity: 0,
      y: 50,
      rotationY: 15,
    },
    {
      opacity: 1,
      y: 0,
      rotationY: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".agent-profile-card",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Blog cards animation
  gsap.fromTo(
    ".blog-card",
    {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.7,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".blog-card",
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Company logos animation
  gsap.fromTo(
    ".company-logo",
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 0.6,
      y: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".company-logo",
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // CTA cards animation
  gsap.fromTo(
    ".cta-card",
    {
      opacity: 0,
      x: -50,
      rotationX: 10,
    },
    {
      opacity: 1,
      x: 0,
      rotationX: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cta-card",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Section titles animation
  gsap.fromTo(
    "section h2",
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "section h2",
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Hover animations for property cards
  document.querySelectorAll(".property-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      gsap.to(this, {
        y: -10,
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(this.querySelector(".property-image img"), {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", function () {
      gsap.to(this, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(this.querySelector(".property-image img"), {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });

  // Hover animations for area cards
  document.querySelectorAll(".area-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      gsap.to(this, {
        y: -5,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(this.querySelector(".area-image img"), {
        scale: 1.1,
        rotation: 5,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", function () {
      gsap.to(this, {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(this.querySelector(".area-image img"), {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });

  // Button hover animations
  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("mouseenter", function () {
      gsap.to(this, {
        y: -2,
        scale: 1.05,
        duration: 0.2,
        ease: "power2.out",
      });
    });

    button.addEventListener("mouseleave", function () {
      gsap.to(this, {
        y: 0,
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
      });
    });
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: target,
            offsetY: 80,
          },
          ease: "power3.inOut",
        });
      }
    });
  });

  // Parallax effect for hero section
  gsap.to(".hero-section", {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  // Counter animation for property numbers
  function animateCounter(element, target) {
    gsap.fromTo(
      element,
      {
        textContent: 0,
      },
      {
        textContent: target,
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }

  // Apply counter animation to property counts
  document.querySelectorAll(".area-card small").forEach((element) => {
    const text = element.textContent;
    const number = parseInt(text.match(/\d+/));
    if (number) {
      animateCounter(element, number);
    }
  });

  // Loading animation for images
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("load", function () {
      gsap.fromTo(
        this,
        {
          opacity: 0,
          scale: 1.1,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
        }
      );
    });
  });

  // Form input focus animations
  document.querySelectorAll(".form-control, .form-select").forEach((input) => {
    input.addEventListener("focus", function () {
      gsap.to(this, {
        scale: 1.02,
        duration: 0.2,
        ease: "power2.out",
      });
    });

    input.addEventListener("blur", function () {
      gsap.to(this, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
      });
    });
  });

  // Newsletter form submission animation
  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const button = this.querySelector("button");
      const originalText = button.textContent;

      gsap.to(button, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
        onComplete: function () {
          button.textContent = "Subscribed!";
          button.classList.remove("btn-danger");
          button.classList.add("btn-success");

          setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove("btn-success");
            button.classList.add("btn-danger");
          }, 2000);
        },
      });
    });
  }

  // Search form submission animation
  const searchForm = document.querySelector(".search-form form");
  if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const button = this.querySelector("button");

      gsap.to(button, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
      });

      // Add loading animation
      button.classList.add("loading");
      setTimeout(() => {
        button.classList.remove("loading");
      }, 1500);
    });
  }

  // Refresh ScrollTrigger on window resize
  window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
  });

  console.log("🏠 Bolzano Real Estate animations loaded successfully!");
});
