/* ═══════════════════════════════════════════════
   script.js – Isaac Mukendi Portfolio v2.0
═══════════════════════════════════════════════ */

// ── i18n Dictionary ──────────────────────────
const i18n = {
  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.tag': 'Open to opportunities',
    'hero.subtitle': 'L3 Health Sciences · UPJV',
    'hero.description': 'Biomedical technologies & computational techniques student. Passionate about data analysis, medical devices and physiological signal processing.',
    'hero.contactBtn': 'Contact me',
    'hero.badge1': 'Computational Biology',
    'hero.badge2': 'Medical Devices',
    'hero.badge3': 'Health Data',
    'about.label': 'Background',
    'about.title': 'Academic Background',
    'about.intro': 'Bachelor Health Sciences (2023–2026) — Biomedical Technologies & Computational Techniques track. Strong background in physiology, pharmacology, biostatistics and modelling.',
    'about.L3': 'L3 Health Sciences (TBTC) · GPA 13.9/20',
    'about.L2': 'L2 Health Sciences · 11.78/20',
    'about.L1': 'L1 Life & Earth Sciences · 12.9/20',
    'about.courses': '<strong>Key courses:</strong> Cellular & molecular physiology, algorithms, digital health, medical devices, biostatistics, immunology, modelling.',
    'about.stat1': 'Years academic experience',
    'about.stat2': 'Computational projects',
    'about.stat3': 'Research internships',
    'skills.label': 'Expertise',
    'skills.title': 'Skills',
    'skills.prog': 'Programming',
    'skills.bio': 'Biology & Health',
    'skills.data': 'Data Science',
    'skills.soft': 'Soft Skills',
    'exp.label': 'Career',
    'exp.title': 'Professional Experience',
    'exp.bio.role': 'Bioinformatics Intern',
    'exp.bio.desc1': 'OMICS data analysis (LC/MS), bioactivity prediction using AI (QSAR, PLS-DA)',
    'exp.bio.desc2': 'Lab database management, enzymatic hydrolysis simulation',
    'exp.peritox.role': 'Data Analyst Intern',
    'exp.peritox.desc1': 'Meteorological / neonatal mortality data analysis, statistical modelling with R',
    'exp.peritox.desc2': 'Database cleaning, correlation analysis, diagnostic tool development',
    'exp.media.role': 'Telephone Interviewer',
    'exp.media.desc1': 'Survey data collection via telephone, proficiency with IT tools',
    'exp.vol.role': 'Childcare Monitor (Volunteer)',
    'exp.vol.desc1': 'Children supervision, recreational activity coordination',
    'proj.label': 'Work',
    'projects.title': 'Projects & Work',
    'proj1.title': 'EEG / MEG Processing',
    'proj1.desc': 'Biomedical signal analysis with Matlab — imaging, filtering, interpretation.',
    'proj2.title': 'Medical Device Lifecycle',
    'proj2.desc': 'Full cycle: classification, reimbursement, market withdrawal (team project).',
    'proj3.title': 'Toxicokinetic Modelling',
    'proj3.desc': 'Computer simulation and documentation of biological models.',
    'proj4.title': 'Health Database',
    'proj4.desc': 'Access DB construction, queries, patient data filtering.',
    'proj5.title': 'Baxter Robot Programming',
    'proj5.desc': 'Python control algorithms (duo project).',
    'proj6.title': 'Reports & Posters',
    'proj6.desc': 'Auditory system, PET, corpus callosum, pesticides & ALL.',
    'contact.label': 'Get in touch',
    'contact.title': 'Contact',
    'contact.status': 'Available',
    'contact.available': 'Open to opportunities in health data analysis and biomedical R&D.',
    'contact.downloadCV': 'Download CV'
  },
  fr: {
    'nav.about': 'Parcours',
    'nav.skills': 'Compétences',
    'nav.experience': 'Expérience',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    'hero.tag': 'Ouvert aux opportunités',
    'hero.subtitle': 'L3 Sciences pour la santé · UPJV',
    'hero.description': 'Étudiant en technologies biomédicales et techniques computationnelles. Passionné par l\'analyse de données, les dispositifs médicaux et le traitement du signal physiologique.',
    'hero.contactBtn': 'Me contacter',
    'hero.badge1': 'Biologie computationnelle',
    'hero.badge2': 'Dispositifs médicaux',
    'hero.badge3': 'Données santé',
    'about.label': 'Formation',
    'about.title': 'Parcours académique',
    'about.intro': 'Licence Sciences pour la santé (2023-2026) - parcours Technologies Biomédicales et Techniques Computationnelles. Formation solide en physiologie, pharmacologie, biostatistiques et modélisation.',
    'about.L3': 'L3 Sciences pour la santé (TBTC) · Moyenne 13.9/20',
    'about.L2': 'L2 Sciences pour la santé · 11.78/20',
    'about.L1': 'L1 Sciences de la vie et de la terre · 12.9/20',
    'about.courses': '<strong>Enseignements clés :</strong> Physiologie cellulaire & moléculaire, algorithmique, numérique en santé, DM, biostatistiques, immunologie, modélisation.',
    'about.stat1': 'Années d\'expérience académique',
    'about.stat2': 'Projets computationnels',
    'about.stat3': 'Stages recherche',
    'skills.label': 'Expertise',
    'skills.title': 'Compétences',
    'skills.prog': 'Programmation',
    'skills.bio': 'Biologie & Santé',
    'skills.data': 'Data Science',
    'skills.soft': 'Transversales',
    'exp.label': 'Carrière',
    'exp.title': 'Expériences professionnelles',
    'exp.bio.role': 'Stagiaire bioinformatique',
    'exp.bio.desc1': 'Analyse données OMICS (LC/MS), prédiction bioactivité par IA (QSAR, PLS-DA)',
    'exp.bio.desc2': 'Gestion BDD laboratoire, simulation hydrolyse enzymatique',
    'exp.peritox.role': 'Stagiaire analyse de données',
    'exp.peritox.desc1': 'Analyse données météo / mortalité néonatale, modélisation R',
    'exp.peritox.desc2': 'Nettoyage BDD, corrélation, outil diagnostique',
    'exp.media.role': 'Télé-enquêteur',
    'exp.media.desc1': 'Collecte de données par téléphone, maîtrise outils informatiques',
    'exp.vol.role': 'Animateur périscolaire (bénévolat)',
    'exp.vol.desc1': 'Encadrement enfants, activités récréatives',
    'proj.label': 'Travaux',
    'projects.title': 'Projets & travaux',
    'proj1.title': 'Traitement EEG / MEG',
    'proj1.desc': 'Analyse de signaux biomédicaux sous Matlab — imagerie, filtrage, interprétation.',
    'proj2.title': 'Cycle de vie DM',
    'proj2.desc': 'Cycle complet : classement, remboursement, retrait marché (projet équipe).',
    'proj3.title': 'Modélisation toxicocinétique',
    'proj3.desc': 'Simulation informatique et documentation de modèles biologiques.',
    'proj4.title': 'Base de données santé',
    'proj4.desc': 'Construction Access, requêtes, filtrage patients.',
    'proj5.title': 'Programmation robot Baxter',
    'proj5.desc': 'Algorithmes de contrôle en Python (projet duo).',
    'proj6.title': 'Mémoires & posters',
    'proj6.desc': 'Système auditif, TEP, corps calleux, pesticides & LAL.',
    'contact.label': 'Me contacter',
    'contact.title': 'Contact',
    'contact.status': 'Disponible',
    'contact.available': 'Disponible pour opportunités en analyse données santé, R&D biomédicale.',
    'contact.downloadCV': 'Télécharger CV'
  }
};

let currentLang = 'fr';

// ── Language switcher ─────────────────────────
function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = i18n[lang][key];
    if (!val) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.innerHTML = val;
    }
  });
  const toggle = document.getElementById('langToggle');
  if (toggle) toggle.innerText = lang === 'en' ? 'FR' : 'EN';
  document.documentElement.lang = lang;
}

// ── Navbar scroll shadow ──────────────────────
function handleNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

// ── Skill bars IntersectionObserver ──────────
function initSkillBars() {
  const section = document.getElementById('skills');
  if (!section) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        section.classList.add('skills-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  observer.observe(section);
}

// ── Fade-in on scroll ─────────────────────────
function initFadeIn() {
  const items = document.querySelectorAll('.exp-card, .project-card, .skill-category, .stat-item');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  items.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// ── Active nav link on scroll ─────────────────
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));
}

// ── DOMContentLoaded ──────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  // Language toggle
  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      setLanguage(currentLang === 'en' ? 'fr' : 'en');
    });
  }

  // Mobile menu
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuBtn.innerHTML = isOpen
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
  }

  // Set initial language
  setLanguage('fr');

  // Init features
  handleNavbarScroll();
  initSkillBars();
  initFadeIn();
  initActiveNav();
});

// Scroll listener
window.addEventListener('scroll', handleNavbarScroll, { passive: true });

// ── Smooth scroll for anchor links ───────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80; // navbar height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ── Active nav style (CSS helper) ────────────
const style = document.createElement('style');
style.textContent = `.nav-links a.active { color: var(--primary) !important; }
.nav-links a.active::after { width: 100%; }`;
document.head.appendChild(style);