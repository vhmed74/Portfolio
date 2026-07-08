/* ============================================================
   AHMED KAMAL PORTFOLIO — script.js  (v4 — Final)
   ============================================================ */

// ── Project Data (ordered newest → oldest) ───────────────────
const PROJECTS = [
  {
    id: 2,
    title: "VITA Project — Advanced Edition",
    tag: "Web Presentation",
    icon: "💊",
    color: "#7c6ef0",
    colorDim: "rgba(124,110,240,0.12)",
    colorGlow: "rgba(124,110,240,0.3)",
    url: "https://vita-project-eight.vercel.app/",
    thumb: "https://image.thum.io/get/width/1280/crop/720/https://vita-project-eight.vercel.app/",
    isPresentation: true,
    shortDesc: "Advanced version of the VITA presentation featuring 3D canvas, Chart.js visualizations & GSAP animations.",
    description: "An advanced variant of the VITA graduation presentation featuring Three.js 3D canvas elements, Chart.js real-time data charts, and GSAP animations layered over the same premium dark design system.",
    techStack: ["HTML", "CSS", "Three.js", "Chart.js", "GSAP"],
    year: "2026",
    status: "Live ✓",
    badge: "20 Slides",
    features: [
      "20 cinematic slides with smooth swipe/scroll transitions",
      "Three.js 3D canvas objects integrated into slides",
      "Chart.js live-animated data visualizations",
      "GSAP-powered entrance & transition animations",
      "Orbit controls for interactive 3D exploration",
      "Glowing custom cursor and slide counter HUD",
    ],
  },
  {
    id: 1,
    title: "Project VITA — Ultimate Presentation",
    tag: "Web Presentation",
    icon: "🧬",
    color: "#00f5c8",
    colorDim: "rgba(0,245,200,0.12)",
    colorGlow: "rgba(0,245,200,0.3)",
    url: "https://vita-presentation.vercel.app/",
    thumb: "https://image.thum.io/get/width/1280/crop/720/https://vita-presentation.vercel.app/",
    isPresentation: true,
    shortDesc: "The main VITA graduation project presentation — immersive, dark-themed & fully interactive.",
    description: "A flagship presentation for Project VITA, a medical platform for managing patient data and biomedical signals. Built with a premium dark theme, particle effects, 3D tilt cards, custom cursor, and smooth swipe navigation.",
    techStack: ["HTML", "CSS", "JavaScript", "Swiper.js", "Particle.js"],
    year: "2026",
    status: "Live ✓",
    badge: null,
    features: [
      "Cinematic slides with smooth swipe/scroll transitions",
      "Particle.js animated background + ambient glow effects",
      "3D Vanilla Tilt hover effect on slide panels",
      "Dark/Light mode toggle for clinical environments",
      "Custom glowing cursor and real-time progress indicator",
      "Fully responsive — works on all screen sizes",
    ],
  },
  {
    id: 3,
    title: "Vita Mobile Hub — Full Data",
    tag: "Web Application",
    icon: "📱",
    color: "#3b82f6",
    colorDim: "rgba(59,130,246,0.12)",
    colorGlow: "rgba(59,130,246,0.3)",
    url: "https://vita-full-data.vercel.app/",
    thumb: "https://image.thum.io/get/width/1280/crop/720/https://vita-full-data.vercel.app/",
    isPresentation: false,
    shortDesc: "A complete mobile-first web app for the VITA platform — patient data, signals, and remote monitoring.",
    description: "Vita Mobile Hub is a comprehensive mobile-first web app that aggregates all VITA platform data — patient profiles, biomedical signals, monitoring dashboards, and real-time alerts — in a single sleek interface.",
    techStack: ["HTML", "CSS", "JavaScript", "Particle.js"],
    year: "2026",
    status: "Live ✓",
    badge: "Web App",
    features: [
      "Mobile-first design with splash screen loading animation",
      "Ambient particle glow background effects",
      "Patient data cards with real-time status indicators",
      "Biomedical signal visualization (ECG, SpO₂, Temp)",
      "Touch-optimized navigation with swipe gestures",
      "Bottom navigation bar for quick section switching",
    ],
  },
  {
    id: 4,
    title: "Smart Neonatal Incubator",
    tag: "Web Presentation",
    icon: "👶",
    color: "#0ea5e9",
    colorDim: "rgba(14,165,233,0.12)",
    colorGlow: "rgba(14,165,233,0.3)",
    url: "https://smart-incubator-presentation.vercel.app/",
    thumb: "https://image.thum.io/get/width/1280/crop/720/https://smart-incubator-presentation.vercel.app/",
    isPresentation: true,
    shortDesc: "IoT-based smart incubator monitoring system — presented with particles, Space Grotesk typography & GSAP.",
    description: "A presentation for a Smart Environmental Monitoring System for Neonatal Incubators. The IoT upgrade kit enhances conventional incubators with real-time monitoring, automated control, and remote access from Menoufia University.",
    techStack: ["HTML", "CSS", "JavaScript", "Swiper.js", "GSAP"],
    year: "2026",
    status: "Live ✓",
    badge: "20 Slides",
    features: [
      "20 slides covering the full project scope and architecture",
      "Particle.js star-field animated background",
      "Vanilla Tilt 3D hover on glass panels",
      "Space Grotesk premium typography",
      "Theme toggle (dark/light clinical mode)",
      "Slide counter + scroll indicator HUD",
    ],
  },
  {
    id: 5,
    title: "Smart Rehabilitation Glove",
    tag: "Web Presentation",
    icon: "🤲",
    color: "#f97316",
    colorDim: "rgba(249,115,22,0.12)",
    colorGlow: "rgba(249,115,22,0.3)",
    url: "https://smart-rehabilitation-glove-presenta.vercel.app/",
    thumb: "https://image.thum.io/get/width/1280/crop/720/https://smart-rehabilitation-glove-presenta.vercel.app/",
    isPresentation: true,
    shortDesc: "A premium light-theme presentation for a smart glove designed to aid hand rehabilitation therapy.",
    description: "A detailed presentation for the Smart Rehabilitation Glove — a wearable device that tracks hand motion and provides biofeedback for physical therapy. Features a clean warm-white design with animated blobs and glassmorphism cards.",
    techStack: ["HTML", "CSS", "JavaScript", "Swiper.js"],
    year: "2026",
    status: "Live ✓",
    badge: "20 Slides",
    features: [
      "Light & warm design with animated background blobs",
      "Glassmorphism card panels with depth shadows",
      "Real-time progress bar across 20 slides",
      "Outfit + Inter premium font pairing",
      "Responsive & mobile-friendly layout",
      "Smooth swipe transitions via Swiper.js",
    ],
  },
  {
    id: 6,
    title: "Electrolyte Analyzer Calibration",
    tag: "Web Presentation",
    icon: "🧪",
    color: "#63b3ed",
    colorDim: "rgba(99,179,237,0.12)",
    colorGlow: "rgba(99,179,237,0.3)",
    url: "https://calibration-presentation.vercel.app/",
    thumb: "https://image.thum.io/get/width/1280/crop/720/https://calibration-presentation.vercel.app/",
    isPresentation: true,
    shortDesc: "A dark iframe-based presentation on Electrolyte Analyzer calibration with a custom glowing cursor.",
    description: "A polished presentation covering the calibration procedures for an Electrolyte Analyzer. Features a deep navy background, glowing blue cursor, smooth iframe fade transitions, and a professional clinical aesthetic.",
    techStack: ["HTML", "CSS", "JavaScript", "Font Awesome"],
    year: "2025",
    status: "Live ✓",
    badge: null,
    features: [
      "Deep navy (#050A15) dark clinical theme",
      "Custom glowing blue cursor (dot + outline ring)",
      "Smooth iframe opacity fade transitions",
      "Font Awesome iconography throughout",
      "Clean Inter typography for professional readability",
      "Fullscreen-optimized presentation layout",
    ],
  },
  {
    id: 7,
    title: "Fault Detection Platform",
    tag: "Study Platform",
    icon: "⚡",
    color: "#f43f5e",
    colorDim: "rgba(244,63,94,0.12)",
    colorGlow: "rgba(244,63,94,0.3)",
    url: "https://fault-nine.vercel.app/",
    thumb: "https://image.thum.io/get/width/1280/crop/720/https://fault-nine.vercel.app/",
    isPresentation: false,
    shortDesc: "An Arabic interactive study platform for Fault Detection — 9 lecture modules with structured content.",
    description: "An interactive Arabic-language web platform for reviewing and studying the Fault Detection course. Contains 9 lecture modules, each with structured content and review material — designed for biomedical engineering students.",
    techStack: ["HTML", "CSS", "JavaScript"],
    year: "2025",
    status: "Live ✓",
    badge: "9 Modules",
    features: [
      "Full Arabic RTL layout with Cairo font",
      "9 interactive lecture modules (Lectures 1–9)",
      "Glassmorphism header and landing grid",
      "Animated background for immersive studying",
      "Clean card-based navigation between lectures",
      "Optimized for mobile and desktop students",
    ],
  },
  {
    id: 8,
    title: "Bio-Optics Application",
    tag: "Study Platform",
    icon: "👁",
    color: "#38bdf8",
    colorDim: "rgba(56,189,248,0.12)",
    colorGlow: "rgba(56,189,248,0.3)",
    url: "https://optics-ten.vercel.app/",
    thumb: "https://image.thum.io/get/width/1280/crop/720/https://optics-ten.vercel.app/",
    isPresentation: false,
    shortDesc: "An Arabic dark-mode web app for studying Bio-Optics — featuring gradient header and card modules.",
    description: "A dedicated Arabic-language study app for the Bio-Optics subject in biomedical engineering. Styled with a deep navy dark theme, sky-blue/indigo gradient accents, and Tajawal Arabic typography.",
    techStack: ["HTML", "CSS", "JavaScript"],
    year: "2025",
    status: "Live ✓",
    badge: null,
    features: [
      "Dark navy theme with sky-blue gradient accents",
      "Tajawal Arabic font for crisp Arabic readability",
      "Gradient hero title with animated visual presence",
      "Card-based subject module navigation",
      "Full RTL (right-to-left) layout support",
      "Radial gradient background for depth",
    ],
  },
];

// ── Skills Data ──────────────────────────────────────────────
const SKILLS = [
  { name: "HTML5",      icon: "🌐", level: 95, color: "#e34f26", glow: "rgba(227,79,38,0.3)"  },
  { name: "CSS3",       icon: "🎨", level: 92, color: "#1572b6", glow: "rgba(21,114,182,0.3)" },
  { name: "JavaScript", icon: "⚡", level: 90, color: "#f7df1e", glow: "rgba(247,223,30,0.3)" },
  { name: "React",      icon: "⚛️", level: 75, color: "#61dafb", glow: "rgba(97,218,251,0.3)" },
  { name: "Python",     icon: "🐍", level: 80, color: "#3776ab", glow: "rgba(55,118,171,0.3)" },
  { name: "IoT",        icon: "📡", level: 85, color: "#00f5c8", glow: "rgba(0,245,200,0.3)"  },
  { name: "Three.js",   icon: "🎲", level: 70, color: "#888888", glow: "rgba(200,200,200,0.2)"},
  { name: "GSAP",       icon: "✨", level: 78, color: "#88ce02", glow: "rgba(136,206,2,0.3)"  },
  { name: "Swiper.js",  icon: "📐", level: 88, color: "#6332f6", glow: "rgba(99,50,246,0.3)"  },
  { name: "Git",        icon: "🔀", level: 82, color: "#f05032", glow: "rgba(240,80,50,0.3)"  },
];

// ── DOM Refs ──────────────────────────────────────────────────
const grid            = document.getElementById("projectsGrid");
const overlay         = document.getElementById("modalOverlay");
const modalCard       = document.getElementById("modalCard");
const modalClose      = document.getElementById("modalClose");
const btnClose        = document.getElementById("btnCloseModal");
const modalIcon       = document.getElementById("modalIcon");
const modalTag        = document.getElementById("modalTag");
const modalTitle      = document.getElementById("modalTitle");
const modalDesc       = document.getElementById("modalDesc");
const modalFeaturesList = document.getElementById("modalFeatures");
const modalTip        = document.getElementById("modalTip");
const modalLaunch     = document.getElementById("modalLaunch");
const modalStats      = document.getElementById("modalStats");
const btnCopy         = document.getElementById("btnCopy");
const copyText        = document.getElementById("copyText");
const previewFrame    = document.getElementById("previewFrame");
const previewUrl      = document.getElementById("previewUrl");
const previewLoading  = document.getElementById("previewLoading");
const previewBlocked  = document.getElementById("previewBlocked");
const filterBar       = document.getElementById("filterBar");
const themeToggle     = document.getElementById("themeToggle");
const cursorDot       = document.getElementById("cursorDot");
const cursorRing      = document.getElementById("cursorRing");
const skillsGrid      = document.getElementById("skillsGrid");

// ── Animated Counter ─────────────────────────────────────────
function animateCounter(el) {
  const target = el.dataset.target;
  const suffix = el.dataset.suffix || "";
  if (target === "infinity") return;
  const end = parseInt(target, 10);
  const duration = 1800;
  const start = performance.now();
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * end) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll(".stat-num[data-target]").forEach(animateCounter);
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.5 });
const heroStats = document.querySelector(".hero-stats");
if (heroStats) statsObserver.observe(heroStats);

// ── Render Skills ─────────────────────────────────────────────
function renderSkills() {
  SKILLS.forEach((s, idx) => {
    const card = document.createElement("div");
    card.className = "skill-card";
    card.style.animationDelay = `${idx * 0.07}s`;
    card.style.setProperty("--skill-color", s.color);
    card.style.setProperty("--skill-glow", s.glow);
    card.innerHTML = `
      <div class="skill-icon">${s.icon}</div>
      <div class="skill-name">${s.name}</div>
      <div class="skill-level">${s.level}%</div>
      <div class="skill-bar-wrap">
        <div class="skill-bar" data-width="${s.level}"></div>
      </div>
    `;
    skillsGrid.appendChild(card);
  });
}

const skillsObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll(".skill-bar").forEach(bar => {
        bar.style.width = bar.dataset.width + "%";
      });
      skillsObs.disconnect();
    }
  });
}, { threshold: 0.2 });

// ── Render Cards ──────────────────────────────────────────────
function renderCards() {
  PROJECTS.forEach((p, idx) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.dataset.tag = p.tag;
    card.style.animationDelay = `${idx * 0.07}s`;
    card.style.setProperty("--card-color", p.color);
    card.style.setProperty("--card-color-dim", p.colorDim);
    card.style.setProperty("--card-glow", p.colorGlow);

    const badgeHTML = p.badge ? `<div class="card-badge">${p.badge}</div>` : "";

    card.innerHTML = `
      <div class="card-thumb">
        ${badgeHTML}
        <img src="${p.thumb}" alt="${p.title} preview" loading="lazy" onerror="this.parentElement.style.display='none'" />
        <div class="card-thumb-overlay"></div>
      </div>
      <div class="card-top">
        <div class="card-icon">${p.icon}</div>
        <span class="card-tag">${p.tag}</span>
      </div>
      <h3 class="card-title">${p.title}</h3>
      <p class="card-desc">${p.shortDesc}</p>
      <div class="card-footer">
        <span>View Details</span>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </div>
    `;
    card.addEventListener("click", () => openModal(p));
    grid.appendChild(card);
  });
}

// ── Filter Logic ──────────────────────────────────────────────
filterBar.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  filterBar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  const filter = btn.dataset.filter;
  document.querySelectorAll(".project-card").forEach(card => {
    card.classList.toggle("hidden", filter !== "all" && card.dataset.tag !== filter);
  });
});

// ── Modal Logic ───────────────────────────────────────────────
let currentUrl = "";

function openModal(p) {
  currentUrl = p.url;
  [overlay, modalCard].forEach(el => {
    el.style.setProperty("--modal-color", p.color);
    el.style.setProperty("--modal-color-dim", p.colorDim);
  });

  modalIcon.textContent = p.icon;
  modalTag.textContent = p.tag;
  modalTitle.textContent = p.title;
  modalDesc.textContent = p.description;

  modalStats.innerHTML = "";
  const statsData = [
    { label: "Tech", value: p.techStack.join(", ") },
    { label: "Year", value: p.year },
    { label: "Status", value: p.status },
  ];
  if (p.badge) statsData.push({ label: "Scope", value: p.badge });
  statsData.forEach(s => {
    const badge = document.createElement("div");
    badge.className = "modal-stat-badge";
    badge.innerHTML = `<strong>${s.label}:</strong> ${s.value}`;
    modalStats.appendChild(badge);
  });

  modalFeaturesList.innerHTML = "";
  p.features.forEach(f => {
    const li = document.createElement("li");
    li.textContent = f;
    modalFeaturesList.appendChild(li);
  });

  modalTip.style.display = p.isPresentation ? "flex" : "none";
  modalLaunch.href = p.url;
  modalLaunch.style.background = `linear-gradient(135deg, ${p.color} 0%, #00aeff 100%)`;

  previewUrl.textContent = p.url;
  previewLoading.style.display = "flex";
  previewBlocked.style.display = "none";
  previewFrame.src = "";
  setTimeout(() => { previewFrame.src = p.url; }, 400);
  previewFrame.onload = () => {
    previewLoading.style.display = "none";
    previewBlocked.style.display = "none";
  };
  const blockTimer = setTimeout(() => {
    if (previewLoading.style.display !== "none") {
      previewLoading.style.display = "none";
      previewBlocked.style.display = "flex";
    }
  }, 6000);
  previewFrame._blockTimer = blockTimer;

  copyText.textContent = "Copy Link";
  btnCopy.classList.remove("copied");
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  overlay.classList.remove("open");
  document.body.style.overflow = "";
  clearTimeout(previewFrame._blockTimer);
  setTimeout(() => { previewFrame.src = ""; }, 400);
}

modalClose.addEventListener("click", closeModal);
btnClose.addEventListener("click", closeModal);
overlay.addEventListener("click", (e) => { if (e.target === overlay) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

// ── Copy Link ─────────────────────────────────────────────────
btnCopy.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(currentUrl);
  } catch {
    const el = document.createElement("input");
    el.value = currentUrl;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  }
  copyText.textContent = "Copied! ✓";
  btnCopy.classList.add("copied");
  setTimeout(() => {
    copyText.textContent = "Copy Link";
    btnCopy.classList.remove("copied");
  }, 2500);
});

// ── Dark / Light Toggle ───────────────────────────────────────
const htmlEl = document.documentElement;
htmlEl.dataset.theme = localStorage.getItem("ak-theme") || "dark";
themeToggle.addEventListener("click", () => {
  const next = htmlEl.dataset.theme === "dark" ? "light" : "dark";
  htmlEl.dataset.theme = next;
  localStorage.setItem("ak-theme", next);
});

// ── Custom Cursor ─────────────────────────────────────────────
let mouseX = -100, mouseY = -100, ringX = -100, ringY = -100;
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX; mouseY = e.clientY;
  cursorDot.style.left = mouseX + "px";
  cursorDot.style.top = mouseY + "px";
});
const hoverTargets = "a, button, .project-card, .filter-btn, .skill-card, .social-link";
document.addEventListener("mouseover", (e) => {
  if (e.target.closest(hoverTargets)) cursorRing.classList.add("hovered");
});
document.addEventListener("mouseout", (e) => {
  if (e.target.closest(hoverTargets)) cursorRing.classList.remove("hovered");
});
function animateRing() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  cursorRing.style.left = ringX + "px";
  cursorRing.style.top = ringY + "px";
  requestAnimationFrame(animateRing);
}
animateRing();

// ── Scroll Reveal ─────────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = "1";
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

// ── Init ──────────────────────────────────────────────────────
renderSkills();
renderCards();
document.querySelectorAll(".project-card").forEach(card => {
  card.style.opacity = "0";
  revealObserver.observe(card);
});
if (skillsGrid) skillsObs.observe(skillsGrid);
