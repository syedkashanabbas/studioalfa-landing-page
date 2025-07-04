// Advanced Futuristic Real Estate Animations

// Import GSAP and plugins
const gsap = window.gsap
const ScrollTrigger = window.ScrollTrigger
const TextPlugin = window.TextPlugin

document.addEventListener("DOMContentLoaded", () => {
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger, TextPlugin)

  // Initialize loading screen
  initLoadingScreen()

  // Initialize cursor effects
  initCursorEffects()

  // Initialize navigation effects
  initNavigationEffects()

  // Initialize hero animations
  initHeroAnimations()

  // Initialize scroll animations
  initScrollAnimations()

  // Initialize interactive effects
  initInteractiveEffects()

  // Initialize particle systems
  initParticleEffects()

  // Initialize counter animations
  initCounterAnimations()

  // Initialize form effects
  initFormEffects()

  console.log("🚀 Futuristic Real Estate animations loaded successfully!")
})

// Loading Screen Animation
function initLoadingScreen() {
  const loadingScreen = document.getElementById("loading-screen")
  const loadingProgress = document.querySelector(".loading-progress")
  const loadingPercentage = document.querySelector(".loading-percentage")

  let progress = 0
  const interval = setInterval(() => {
    progress += Math.random() * 15
    if (progress > 100) progress = 100

    loadingProgress.style.width = progress + "%"
    loadingPercentage.textContent = Math.floor(progress) + "%"

    if (progress >= 100) {
      clearInterval(interval)
      setTimeout(() => {
        gsap.to(loadingScreen, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            loadingScreen.classList.add("hidden")
            // Start main animations after loading
            startMainAnimations()
          },
        })
      }, 500)
    }
  }, 100)

  // Create loading particles
  createLoadingParticles()
}

function createLoadingParticles() {
  const container = document.querySelector(".loading-particles")
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div")
    particle.style.cssText = `
      position: absolute;
      width: 2px;
      height: 2px;
      background: #00d4ff;
      border-radius: 50%;
      opacity: 0.7;
    `
    container.appendChild(particle)

    gsap.set(particle, {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    })

    gsap.to(particle, {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      duration: Math.random() * 3 + 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    })
  }
}

// Cursor Effects
function initCursorEffects() {
  const cursorFollower = document.querySelector(".cursor-follower")
  const cursorDot = document.querySelector(".cursor-dot")

  let mouseX = 0,
    mouseY = 0
  let followerX = 0,
    followerY = 0

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX
    mouseY = e.clientY

    gsap.to(cursorDot, {
      x: mouseX - 4,
      y: mouseY - 4,
      duration: 0.1,
      opacity: 1,
    })
  })

  // Smooth follower animation
  gsap.ticker.add(() => {
    followerX += (mouseX - followerX) * 0.1
    followerY += (mouseY - followerY) * 0.1

    gsap.set(cursorFollower, {
      x: followerX - 20,
      y: followerY - 20,
      opacity: 1,
    })
  })

  // Interactive elements
  document.querySelectorAll("a, button, .futuristic-card").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      gsap.to(cursorFollower, {
        scale: 1.5,
        borderColor: "#ff0080",
        duration: 0.3,
      })
    })

    el.addEventListener("mouseleave", () => {
      gsap.to(cursorFollower, {
        scale: 1,
        borderColor: "#00d4ff",
        duration: 0.3,
      })
    })
  })
}

// Navigation Effects
function initNavigationEffects() {
  const navbar = document.querySelector(".futuristic-nav")

  // Scroll effect
  ScrollTrigger.create({
    start: "top -80",
    end: 99999,
    toggleClass: { className: "scrolled", targets: navbar },
  })

  // Navigation link hover effects
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("mouseenter", () => {
      gsap.to(link.querySelector(".nav-glow"), {
        opacity: 0.2,
        scale: 1.1,
        duration: 0.3,
      })
    })

    link.addEventListener("mouseleave", () => {
      if (!link.classList.contains("active")) {
        gsap.to(link.querySelector(".nav-glow"), {
          opacity: 0,
          scale: 1,
          duration: 0.3,
        })
      }
    })
  })

  // Mobile menu animation
  const toggler = document.querySelector(".futuristic-toggler")
  const navCollapse = document.querySelector("#navbarNav")

  if (toggler) {
    toggler.addEventListener("click", () => {
      const spans = toggler.querySelectorAll("span")
      if (navCollapse.classList.contains("show")) {
        // Close animation
        gsap.to(spans[0], { rotation: 0, y: 0, duration: 0.3 })
        gsap.to(spans[1], { opacity: 1, duration: 0.3 })
        gsap.to(spans[2], { rotation: 0, y: 0, duration: 0.3 })
      } else {
        // Open animation
        gsap.to(spans[0], { rotation: 45, y: 7, duration: 0.3 })
        gsap.to(spans[1], { opacity: 0, duration: 0.3 })
        gsap.to(spans[2], { rotation: -45, y: -7, duration: 0.3 })
      }
    })
  }
}

// Hero Animations
function initHeroAnimations() {
  const heroTl = gsap.timeline({ paused: true })

  heroTl
    .from(".hero-badge", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
    })
    .from(
      ".title-line",
      {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      },
      "-=0.4",
    )
    .from(
      ".hero-subtitle",
      {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.4",
    )
    .from(
      ".hero-stats .stat-item",
      {
        opacity: 0,
        y: 30,
        scale: 0.8,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
      },
      "-=0.2",
    )
    .from(
      ".search-form",
      {
        opacity: 0,
        x: 50,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.6",
    )

  // Store timeline for later use
  window.heroTimeline = heroTl
}

function startMainAnimations() {
  if (window.heroTimeline) {
    window.heroTimeline.play()
  }
}

// Scroll Animations
function initScrollAnimations() {
  // Section headers
  gsap.utils.toArray(".section-header").forEach((header) => {
    gsap.from(header.children, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: header,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    })
  })

  // Area cards
  gsap.from(".area-card", {
    opacity: 0,
    y: 50,
    scale: 0.8,
    duration: 0.6,
    stagger: 0.1,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".areas-section",
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
  })

  // Property cards
  gsap.from(".futuristic-property-card", {
    opacity: 0,
    y: 60,
    rotationX: 15,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".properties-section",
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
  })

  // Agent cards
  gsap.from(".futuristic-agent-card", {
    opacity: 0,
    y: 50,
    rotationY: 15,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".agents-section",
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
  })

  // CTA cards
  gsap.from(".futuristic-cta-card", {
    opacity: 0,
    x: -50,
    rotationX: 10,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".cta-section",
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
  })

  // Parallax effects
  gsap.utils.toArray(".hero-background, .cta-background, .footer-background").forEach((bg) => {
    gsap.to(bg, {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: bg.parentElement,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })
  })
}

// Interactive Effects
function initInteractiveEffects() {
  // Card hover effects
  document.querySelectorAll(".futuristic-card").forEach((card) => {
    const glow = card.querySelector(".card-glow")
    const border = card.querySelector(".card-border")

    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        y: -10,
        duration: 0.3,
        ease: "power2.out",
      })

      if (glow) {
        gsap.to(glow, {
          opacity: 0.15,
          duration: 0.3,
        })
      }

      if (border) {
        gsap.to(border, {
          opacity: 1,
          duration: 0.3,
        })
      }
    })

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      })

      if (glow) {
        gsap.to(glow, {
          opacity: 0,
          duration: 0.3,
        })
      }

      if (border) {
        gsap.to(border, {
          opacity: 0,
          duration: 0.3,
        })
      }
    })
  })

  // Button hover effects
  document.querySelectorAll(".futuristic-btn-primary, .futuristic-btn-outline").forEach((btn) => {
    const glow = btn.querySelector(".btn-glow")

    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, {
        y: -2,
        scale: 1.05,
        duration: 0.2,
        ease: "power2.out",
      })

      if (glow && btn.classList.contains("futuristic-btn-outline")) {
        gsap.to(glow, {
          opacity: 0.1,
          duration: 0.2,
        })
      }
    })

    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        y: 0,
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
      })

      if (glow && btn.classList.contains("futuristic-btn-outline")) {
        gsap.to(glow, {
          opacity: 0,
          duration: 0.2,
        })
      }
    })
  })

  // Property image hover effects
  document.querySelectorAll(".property-image").forEach((container) => {
    const img = container.querySelector(".property-img")
    const overlay = container.querySelector(".image-overlay")

    container.addEventListener("mouseenter", () => {
      gsap.to(img, {
        scale: 1.1,
        duration: 0.5,
        ease: "power2.out",
      })

      if (overlay) {
        gsap.to(overlay, {
          opacity: 0.3,
          duration: 0.3,
        })
      }
    })

    container.addEventListener("mouseleave", () => {
      gsap.to(img, {
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      })

      if (overlay) {
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.3,
        })
      }
    })
  })
}

// Particle Effects
function initParticleEffects() {
  // Hero particles
  createParticleSystem(".hero-particles", 30, "#00d4ff")

  // CTA particles
  createParticleSystem(".cta-particles", 20, "#ff0080")

  // Footer particles
  createParticleSystem(".footer-particles", 25, "#7c3aed")
}

function createParticleSystem(container, count, color) {
  const containerEl = document.querySelector(container)
  if (!containerEl) return

  for (let i = 0; i < count; i++) {
    const particle = document.createElement("div")
    particle.style.cssText = `
      position: absolute;
      width: ${Math.random() * 4 + 1}px;
      height: ${Math.random() * 4 + 1}px;
      background: ${color};
      border-radius: 50%;
      opacity: ${Math.random() * 0.5 + 0.2};
      pointer-events: none;
    `

    containerEl.appendChild(particle)

    // Random initial position
    gsap.set(particle, {
      x: Math.random() * containerEl.offsetWidth,
      y: Math.random() * containerEl.offsetHeight,
    })

    // Floating animation
    gsap.to(particle, {
      x: `+=${Math.random() * 200 - 100}`,
      y: `+=${Math.random() * 200 - 100}`,
      duration: Math.random() * 10 + 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    })

    // Opacity animation
    gsap.to(particle, {
      opacity: Math.random() * 0.8 + 0.2,
      duration: Math.random() * 3 + 1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    })
  }
}

// Counter Animations
function initCounterAnimations() {
  // Hero stats counters
  document.querySelectorAll(".stat-number[data-count]").forEach((counter) => {
    const target = Number.parseInt(counter.dataset.count)

    ScrollTrigger.create({
      trigger: counter,
      start: "top 80%",
      onEnter: () => {
        gsap.to(counter, {
          textContent: target,
          duration: 2,
          ease: "power2.out",
          snap: { textContent: 1 },
          onUpdate: () => {
            counter.textContent = Math.ceil(counter.textContent)
          },
        })
      },
    })
  })

  // Property count counters
  document.querySelectorAll(".property-count[data-count]").forEach((counter) => {
    const target = Number.parseInt(counter.dataset.count)

    ScrollTrigger.create({
      trigger: counter,
      start: "top 80%",
      onEnter: () => {
        gsap.to(counter, {
          textContent: target,
          duration: 1.5,
          ease: "power2.out",
          snap: { textContent: 1 },
          onUpdate: () => {
            counter.textContent = Math.ceil(counter.textContent)
          },
        })
      },
    })
  })
}

// Form Effects
function initFormEffects() {
  // Input focus effects
  document.querySelectorAll(".futuristic-input, .futuristic-select").forEach((input) => {
    const container = input.closest(".input-container, .select-container")
    const glow = container?.querySelector(".input-glow, .select-glow")
    const border = container?.querySelector(".input-border, .select-border")

    input.addEventListener("focus", () => {
      gsap.to(input, {
        scale: 1.02,
        duration: 0.2,
        ease: "power2.out",
      })

      if (glow) {
        gsap.to(glow, {
          opacity: 0.1,
          duration: 0.2,
        })
      }

      if (border) {
        gsap.to(border, {
          opacity: 1,
          duration: 0.2,
        })
      }
    })

    input.addEventListener("blur", () => {
      gsap.to(input, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
      })

      if (glow) {
        gsap.to(glow, {
          opacity: 0,
          duration: 0.2,
        })
      }

      if (border) {
        gsap.to(border, {
          opacity: 0,
          duration: 0.2,
        })
      }
    })
  })

  // Form submission effects
  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault()

      const submitBtn = form.querySelector('button[type="submit"]')
      if (submitBtn) {
        const originalText = submitBtn.querySelector(".btn-text").textContent

        // Button animation
        gsap.to(submitBtn, {
          scale: 0.95,
          duration: 0.1,
          yoyo: true,
          repeat: 1,
          ease: "power2.inOut",
        })

        // Text change animation
        gsap.to(submitBtn.querySelector(".btn-text"), {
          opacity: 0,
          duration: 0.2,
          onComplete: () => {
            submitBtn.querySelector(".btn-text").textContent = "Processing..."
            gsap.to(submitBtn.querySelector(".btn-text"), {
              opacity: 1,
              duration: 0.2,
            })
          },
        })

        // Reset after delay
        setTimeout(() => {
          gsap.to(submitBtn.querySelector(".btn-text"), {
            opacity: 0,
            duration: 0.2,
            onComplete: () => {
              submitBtn.querySelector(".btn-text").textContent = "Success!"
              gsap.to(submitBtn.querySelector(".btn-text"), {
                opacity: 1,
                duration: 0.2,
              })

              setTimeout(() => {
                gsap.to(submitBtn.querySelector(".btn-text"), {
                  opacity: 0,
                  duration: 0.2,
                  onComplete: () => {
                    submitBtn.querySelector(".btn-text").textContent = originalText
                    gsap.to(submitBtn.querySelector(".btn-text"), {
                      opacity: 1,
                      duration: 0.2,
                    })
                  },
                })
              }, 1500)
            },
          })
        }, 2000)
      }
    })
  })
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))

    if (target) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: {
          y: target,
          offsetY: 100,
        },
        ease: "power3.inOut",
      })
    }
  })
})

// Refresh ScrollTrigger on window resize
window.addEventListener("resize", () => {
  ScrollTrigger.refresh()
})

// Add loading class to images
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("load", function () {
    gsap.from(this, {
      opacity: 0,
      scale: 1.1,
      duration: 0.5,
      ease: "power2.out",
    })
  })
})

// Intersection Observer for fade-in effects
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

// Observe elements for fade-in effects
document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right, .scale-in").forEach((el) => {
  observer.observe(el)
})

// Add glitch effect to title on hover
document.querySelectorAll(".hero-title, .section-title").forEach((title) => {
  title.addEventListener("mouseenter", () => {
    gsap.to(title, {
      textShadow: "2px 0 #ff0080, -2px 0 #00d4ff",
      duration: 0.1,
      yoyo: true,
      repeat: 3,
    })
  })
})

// Add typing effect to hero subtitle
const heroSubtitle = document.querySelector(".hero-subtitle")
if (heroSubtitle) {
  const originalText = heroSubtitle.textContent
  heroSubtitle.textContent = ""

  ScrollTrigger.create({
    trigger: heroSubtitle,
    start: "top 80%",
    onEnter: () => {
      gsap.to(heroSubtitle, {
        text: originalText,
        duration: 2,
        ease: "none",
      })
    },
  })
}
