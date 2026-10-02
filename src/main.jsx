import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Code2, Database, ExternalLink, Layers3, Menu, MessageCircle, Phone, X } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 'parkflow', number: '01', category: 'SYSTEMS ENGINEERING', year: '2025', title: 'ParkFlow Kenya', subtitle: 'Automated Smart Parking Management System',
    description: 'ParkFlow tracks parking spaces, vehicle registration, sessions, payments, receipts, and operational reports in one management system.', image: '/assets/image.png', imageAlt: 'Parking management dashboard showing parking bay availability and vehicle sessions.', imageWidth: 1894, imageHeight: 1000,
    tags: ['Python', 'JavaScript', 'SQL', 'Web technologies'],
    challenge: 'Parking operations depend on accurate information about spaces, arrivals, active sessions, and payments. Disconnected records slow down attendants and make day-to-day reporting difficult.',
    solution: 'ParkFlow brings the core parking workflow into a single digital system: register a vehicle, open and track a parking session, record payment, issue a receipt, and review activity through operational reporting.',
    outcome: 'A practical systems project centred on the full lifecycle of a parking session, with clear data relationships and a workflow that reflects real operations.',
    stack: ['Python', 'JavaScript', 'SQL', 'Web technologies']
  },
  {
    id: 'neolife', number: '02', category: 'PRODUCT ENGINEERING', year: '2025', title: 'NeoLife International Startups', subtitle: 'E-commerce platform for product management and sales',
    description: 'I built a React storefront and product-admin workflow, backed by an Express API and Supabase, with product media managed through Cloudinary.', image: '/assets/neolifeinternational%20startups.png', imageAlt: 'NeoLife International Startups online storefront featuring a Super 10 product.', imageWidth: 1897, imageHeight: 994,
    tags: ['React', 'Vite', 'JavaScript', 'Node.js', 'Express', 'Supabase', 'Cloudinary'],
    challenge: 'The online product catalogue needed a clear storefront for customers and a convenient management workflow for keeping product information and images up to date.',
    solution: 'Built a React storefront and administration surface backed by an Express API and Supabase. Product media is delivered through Cloudinary, keeping imagery management part of the product workflow.',
    outcome: 'A connected product experience that brings catalogue presentation and day-to-day product management together.',
    stack: ['React', 'Vite', 'JavaScript', 'Node.js', 'Express', 'Supabase', 'Cloudinary']
  },
  {
    id: 'jasiri', number: '03', category: 'PRODUCT DEVELOPMENT', year: '2026', title: 'Jasiri Web Studios', subtitle: 'In development',
    description: 'Jasiri Web Studios is in development. Current work explores a studio services page and project inquiry entry point; more build details will follow as it progresses.', image: '/assets/jasiri web studios.png', imageAlt: 'Jasiri Web Studios website homepage with service information and a project inquiry link.', imageWidth: 1902, imageHeight: 985,
    tags: ['React', 'Node.js', 'Supabase'],
    challenge: 'Local businesses need digital tools shaped around how their teams work and the practical realities of their operations.',
    solution: 'Jasiri Web Studios is an in-progress product exploring a focused set of digital tools through an iterative product-development process.',
    outcome: 'The work is ongoing. More implementation detail and product outcomes will be added as the project develops.',
    stack: ['React', 'Node.js', 'Supabase']
  }
];

const technologies = [
  { name: 'React', group: 'Frontend', detail: 'Building product interfaces and reusable component systems.' },
  { name: 'JavaScript', group: 'Frontend · Backend', detail: 'The application logic behind my full-stack projects.' },
  { name: 'Tailwind CSS', group: 'Frontend', detail: 'Composing consistent, responsive interfaces.' },
  { name: 'GSAP', group: 'Motion', detail: 'Adding deliberate, polished motion to web experiences.' },
  { name: 'Vite', group: 'Tooling', detail: 'A fast development and build workflow for modern frontend projects.' },
  { name: 'Node.js', group: 'Backend', detail: 'Building server-side application logic and services.' },
  { name: 'Express', group: 'Backend', detail: 'Designing API routes and application middleware.' },
  { name: 'Python', group: 'Backend · Systems', detail: 'Implementing practical systems and application logic.' },
  { name: 'REST APIs', group: 'Backend', detail: 'Connecting frontend workflows with reliable, structured services.' },
  { name: 'Supabase', group: 'Data · Cloud', detail: 'Using managed data and cloud services to support product features.' },
  { name: 'SQL', group: 'Databases', detail: 'Modelling and querying relational application data.' },
  { name: 'MongoDB', group: 'Databases', detail: 'Working with document-oriented data for flexible application needs.' },
  { name: 'Firebase', group: 'Cloud', detail: 'Integrating hosted services into application workflows.' },
  { name: 'Cloudinary', group: 'Media', detail: 'Managing and delivering cloud-backed product imagery.' },
  { name: 'Git', group: 'Workflow', detail: 'Keeping changes reviewable through branches and clear commit history.' },
  { name: 'GitHub', group: 'Workflow', detail: 'Organising repositories, issues, and collaboration around real code.' }
];

const experience = [
  { dates: '2024 — PRESENT', role: 'Freelance Full-Stack Developer', company: 'Independent', description: 'Designing and building web applications end to end for clients — interfaces, APIs, databases, deployment, and the ongoing iteration after launch.' },
  { dates: '2024 — PRESENT', role: 'Developer', company: 'NeoLife International Startups', description: 'Built the e-commerce platform: React storefront, Express API, Supabase data layer, and a Cloudinary-backed media pipeline with admin product management.' },
  { dates: '2024 — PRESENT', role: 'Client Website Projects', company: 'Various', description: 'Delivered responsive marketing and business websites, translating requirements into maintainable component systems and clear content structures.' },
  { dates: '2025 — PRESENT', role: 'Product & Systems Development', company: 'Self-directed', description: 'Building systems such as ParkFlow Kenya that address operational problems rather than demo scenarios — domain modelling, workflow design, and reporting.' }
];

const process = [
  ['Discover', 'Understand the problem, the people, and the constraints before writing code.'],
  ['Plan', 'Define scope, data model, and the sequence of work that de-risks the build.'],
  ['Design', 'Shape the interface and the system around the real workflow.'],
  ['Build', 'Implement in reviewable slices — frontend, backend, and data together.'],
  ['Test', 'Verify behaviour against the actual edge cases, not the happy path.'],
  ['Deploy', 'Ship with configuration, monitoring, and a path back if something breaks.'],
  ['Improve', 'Iterate on what usage reveals; treat launch as the beginning.']
];

const pageLinks = [
  ['01', 'About', '#about'], ['02', 'Work', '#projects'], ['03', 'Services', '#services'],
  ['04', 'Technology', '#technology'], ['05', 'Experience', '#experience'], ['06', 'Process', '#process'], ['07', 'Contact', '#contact']
];

function Brand() {
  return <a className="brand" href="#top" aria-label="Alex Mwangi, go to top"><span>Alex Mwangi</span><span className="brand-locale">KE</span></a>;
}

function GithubMark({ size = 16 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .9a11.2 11.2 0 0 0-3.54 21.82c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.15 1.72 1.15 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.5-.28-5.12-1.25-5.12-5.58 0-1.23.44-2.23 1.15-3.02-.12-.28-.5-1.43.1-2.98 0 0 .94-.3 3.08 1.15a10.7 10.7 0 0 1 5.61 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.55.23 2.7.12 2.98.72.79 1.15 1.79 1.15 3.02 0 4.34-2.63 5.3-5.14 5.58.4.35.76 1.02.76 2.07v3.12c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .9Z" /></svg>;
}

function LinkedinMark({ size = 15 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.3 3.2a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2ZM3.5 9h3.7v11.5H3.5V9Zm6 0h3.5v1.6h.05A3.85 3.85 0 0 1 16.5 8.7c3.8 0 4.5 2.5 4.5 5.7v6.1h-3.7v-5.4c0-1.3-.02-3-1.85-3-1.85 0-2.13 1.45-2.13 2.9v5.5H9.5V9Z" /></svg>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const close = () => setOpen(false);
  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const sections = pageLinks.map(([, , href]) => document.querySelector(href)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (current) setActive(`#${current.target.id}`);
    }, { rootMargin: '-18% 0px -68% 0px', threshold: [0, .15, .35, .6] });
    sections.forEach((section) => observer.observe(section));
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect(); };
  }, []);
  return <>
    <header className={`site-header ${scrolled ? 'site-header-scrolled' : ''}`}><Brand /><nav className="desktop-nav" aria-label="Main navigation">{pageLinks.map(([number, label, href]) => <a className={active === href ? 'active' : ''} aria-current={active === href ? 'location' : undefined} href={href} key={href}><span>{number}</span>{label}</a>)}</nav><button className="menu-toggle" onClick={() => setOpen((value) => !value)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X /> : <Menu />}</button></header>
    <nav className={`menu-overlay ${open ? 'is-open' : ''}`} aria-hidden={!open} inert={!open}>
      <div className="menu-inner"><div className="eyebrow">ON THIS PAGE</div>
        {pageLinks.map(([num, label, href]) => <a className="menu-link" key={href} href={href} onClick={close}><span className="menu-number">{num}</span><span>{label === 'Work' ? 'Selected work' : label}</span><ArrowUpRight size={25} /></a>)}
        <a className="menu-email" href="mailto:alexmwangi9999@gmail.com">alexmwangi9999@gmail.com <ArrowUpRight size={15} /></a>
      </div>
    </nav>
  </>;
}

function SectionMarker({ number, children, aside }) {
  return <header className="section-marker"><span><i>{number}</i><span className="marker-divider" />{children}</span>{aside && <span className="marker-aside">{aside}</span>}</header>;
}

function Hero() {
  return <section id="top" className="hero" aria-labelledby="hero-title">
    <div className="hero-bg" /><div className="hero-grid" />
    <div className="hero-inner">
      <div className="hero-index"><span>SOFTWARE ENGINEER</span><span>BASED IN KENYA <i>↘</i></span></div>
      <h1 id="hero-title"><span>ALEX</span> MWANGI<span className="hero-period">.</span></h1>
      <div className="hero-bottom"><div className="hero-copy"><div className="eyebrow hero-role">FULL-STACK DEVELOPER <span>/</span> SOFTWARE ENGINEER</div>
        <p>I build web applications and operational systems, from React storefronts and APIs to data-backed workflows.</p>
      </div><div className="hero-actions"><a className="button button-primary" href="#projects">View projects <ArrowDownRight size={15} /></a><a className="button button-outline" href="#contact">Let's work together <ArrowUpRight size={15} /></a></div></div>
      <a className="scroll-cue" href="#about"><span className="scroll-line" /><span>SCROLL TO EXPLORE</span><ArrowDown size={13} /></a>
    </div><div className="hero-vertical">INDEPENDENT DEVELOPER <span>—</span> 2026</div>
  </section>;
}

function About() {
  const items = ['Frontend', 'Backend', 'Databases', 'APIs', 'Authentication', 'Cloud services', 'Product interfaces'];
  return <section className="section about-section" id="about" aria-labelledby="about-title"><SectionMarker number="01">THE WAY I THINK</SectionMarker>
    <div className="about-grid"><div className="about-title"><div className="eyebrow">MORE THAN THE INTERFACE</div><h2 id="about-title">I don't just build<br />websites. I build <span>systems.</span></h2></div>
      <div className="about-copy"><span className="about-star" aria-hidden="true"><Layers3 size={22} strokeWidth={1.5} /></span><p>I build across the frontend and backend, connecting user interfaces to APIs, databases, and the workflows people rely on.</p><p className="about-note">My projects include an e-commerce platform and a parking system for managing spaces, sessions, and payments.</p></div>
    </div>
    <div className="discipline-row"><span className="eyebrow">WHERE I WORK</span><div className="discipline-list">{items.map((item, i) => <span className="discipline" key={item}><span className="discipline-index">0{i + 1}</span>{item}<span className="discipline-mark">↗</span></span>)}</div></div>
  </section>;
}

function CaseStudy({ project, onClose, onNext, onPrev }) {
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event) => { if (event.key === 'Escape') onClose(); if (event.key === 'ArrowRight') onNext(); if (event.key === 'ArrowLeft') onPrev(); };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = previous; window.removeEventListener('keydown', onKey); };
  }, [onClose, onNext, onPrev]);
  return <div className="case-overlay" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
    <article className="case-panel" role="dialog" aria-modal="true" aria-labelledby="case-title">
      <div className="case-topbar"><span className="eyebrow">SELECTED WORK <span className="case-dot">●</span> {project.number} / 03</span><button className="icon-button" onClick={onClose} aria-label="Close case study"><X size={19} /></button></div>
      <div className="case-scroll"><div className={`case-art ${!project.image ? 'case-art-empty' : ''}`}>{project.image ? <img src={project.image} alt={project.imageAlt} width={project.imageWidth} height={project.imageHeight} decoding="async" /> : <div className="case-art-placeholder"><span>IN DEVELOPMENT</span><Layers3 size={44} /></div>}<span className="case-art-caption">{project.category} <span>—</span> {project.year}</span></div>
        <div className="case-heading-row"><div><div className="eyebrow">{project.category} / {project.year}</div><h2 id="case-title">{project.title}<span>.</span></h2><p className="case-subtitle">{project.subtitle}</p></div><div className="case-counter">{project.number}<span> / 03</span></div></div>
        <div className="case-description">{project.description}</div>
        <div className="case-story"><div className="story-block"><span className="story-index">01</span><div><h3>The challenge</h3><p>{project.challenge}</p></div></div><div className="story-block"><span className="story-index">02</span><div><h3>The approach</h3><p>{project.solution}</p></div></div><div className="story-block"><span className="story-index">03</span><div><h3>The result</h3><p>{project.outcome}</p></div></div></div>
        <div className="case-stack"><span className="eyebrow">BUILT WITH</span><div className="tag-list">{project.stack.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></div>
        <div className="case-pagination"><button className="case-pager" onClick={onPrev}><ArrowLeft size={16} /><span>PREVIOUS PROJECT</span></button><button className="case-pager case-pager-next" onClick={onNext}><span>NEXT PROJECT</span><ArrowRight size={16} /></button></div>
      </div>
    </article>
  </div>;
}

function Projects() {
  const [active, setActive] = useState(null);
  const select = (id) => setActive(id);
  const change = (direction) => setActive((current) => { const i = projects.findIndex((project) => project.id === current); return projects[(i + direction + projects.length) % projects.length].id; });
  const close = () => setActive(null);
  const current = projects.find((project) => project.id === active);
  return <section id="projects" className="section projects-section" aria-labelledby="projects-title"><SectionMarker number="02">A FEW THINGS I'VE MADE</SectionMarker>
    <div className="projects-heading"><div><div className="eyebrow">THOUGHTFULLY BUILT, MADE TO WORK</div><h2 id="projects-title">Selected <span>work.</span></h2></div><p>Software projects spanning parking operations, e-commerce, APIs, and product management.</p></div>
    <div className="project-list">{projects.map((project) => <article className="project-card" key={project.id}>
      <button className="project-visual" onClick={() => select(project.id)} aria-label={`Open ${project.title} case study`}><div className={`project-image ${project.image ? '' : 'project-image-empty'}`}>{project.image ? <img src={project.image} alt={project.imageAlt} width={project.imageWidth} height={project.imageHeight} decoding="async" loading="lazy" /> : <div className="project-soon"><span>MEDIA COMING SOON</span><Layers3 size={42} /><span>JASIRI / 2026</span></div>}</div><span className="visual-topline"><span>AM / WORK—{project.number}</span><span>↗</span></span><span className="visual-open"><span>VIEW CASE STUDY</span><ArrowUpRight size={14} /></span><span className="project-image-shade" /></button>
      <div className="project-info"><div className="project-meta"><span><i>{project.number}</i> / {project.category}</span><span>{project.year}</span></div><button className="project-title-button" onClick={() => select(project.id)}><h3>{project.title}</h3><ArrowUpRight size={20} /></button><div className="project-subtitle">{project.subtitle}</div><p className="project-description">{project.description}</p><div className="project-bottom"><div className="tag-list">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div><button className="text-link" onClick={() => select(project.id)}>EXPLORE PROJECT <ArrowUpRight size={13} /></button></div></div>
    </article>)}</div>
    {current && <CaseStudy project={current} onClose={close} onNext={() => change(1)} onPrev={() => change(-1)} />}
  </section>;
}

function Services() {
  const offerings = [
    ['01', 'UI/UX design', 'User flows, wireframes, and polished interface designs shaped around your customers and their goals.', 'RESEARCH · INTERFACE'],
    ['02', 'Websites & landing pages', 'Responsive, polished websites that explain what you do and make it easy for customers to take the next step.', 'DESIGN · DEVELOPMENT'],
    ['03', 'Full-stack web applications', 'Custom application interfaces, APIs, authentication, and data models built around the way your product needs to work.', 'FRONTEND · BACKEND'],
    ['04', 'E-commerce platforms', 'Product catalogues and online storefronts, with practical tools to manage products, imagery, and customer journeys.', 'STOREFRONT · CATALOGUE'],
    ['05', 'Business systems & dashboards', 'Operational tools and dashboards designed around the workflows your team needs to manage every day.', 'WORKFLOWS · REPORTING'],
    ['06', 'APIs & integrations', 'Backend services, data connections, and third-party integrations that help your products work together.', 'BACKEND · INTEGRATION'],
    ['07', 'SEO', 'Technical SEO foundations and on-page improvements to help search engines understand and surface your website.', 'TECHNICAL · ON-PAGE'],
    ['08', 'Ongoing improvements', 'Post-launch refinements, new features, and technical upkeep to help a product keep pace with its users.', 'ITERATION · SUPPORT']
  ];
  return <section id="services" className="section services-section" aria-labelledby="services-title"><SectionMarker number="03">WAYS I CAN HELP</SectionMarker>
    <div className="services-heading"><div><div className="eyebrow">WHAT I CAN BUILD WITH YOU</div><h2 id="services-title">Services<span>.</span></h2></div><p>From the first screen to the systems behind it, I help turn practical ideas into dependable digital products.</p></div>
    <div className="services-grid">{offerings.map(([number, title, description, scope]) => <a className="service-card" href="#contact-form" key={number}><div className="service-card-top"><span>{number} <i>—</i> {scope}</span><ArrowUpRight size={17} /></div><h3>{title}</h3><p>{description}</p><div className="service-card-link"><span>LET'S DISCUSS YOUR PROJECT</span><span>↗</span></div></a>)}</div>
    <div className="services-foot"><span className="status-dot" /> AVAILABLE FOR SELECT PROJECTS <span className="services-foot-line" /> <a href="#contact-form">TELL ME WHAT YOU HAVE IN MIND <ArrowDownRight size={14} /></a></div>
  </section>;
}

function Technology() {
  const [active, setActive] = useState('React');
  const activeTech = technologies.find((tech) => tech.name === active);
  return <section className="section tech-section" id="technology" aria-labelledby="technology-title"><SectionMarker number="04">THE TOOLS BEHIND THE WORK</SectionMarker>
    <div className="tech-heading"><div><div className="eyebrow">WHAT I BUILD WITH</div><h2 id="technology-title">Technology<span>.</span></h2></div><div className="tech-note"><Code2 size={17} /><span>THE RIGHT TOOL FOR THE RIGHT JOB.</span></div></div>
    <div className="tech-layout"><div className="tech-groups">{[
      { title: '01 / FRONTEND', items: technologies.slice(0, 5) }, { title: '02 / BACKEND', items: technologies.slice(5, 9) }, { title: '03 / DATA & CLOUD', items: technologies.slice(9, 14) }, { title: '04 / WORKFLOW', items: technologies.slice(14) }
    ].map((group) => <div className="tech-group" key={group.title}><div className="eyebrow tech-group-title">{group.title}</div><div className="tech-chips">{group.items.map((tech) => <button key={tech.name} className={`tech-chip ${active === tech.name ? 'is-active' : ''}`} onMouseEnter={() => setActive(tech.name)} onFocus={() => setActive(tech.name)} onClick={() => setActive(tech.name)} aria-pressed={active === tech.name}>{tech.name}<ArrowUpRight size={12} /></button>)}</div></div>)}</div>
      <aside className="tech-detail" aria-live="polite"><div className="tech-detail-top"><span className="eyebrow">A CLOSER LOOK</span><span className="detail-index">0{technologies.findIndex((tech) => tech.name === active) + 1}</span></div><div className="tech-detail-mark">{activeTech?.name === 'SQL' || activeTech?.name === 'Supabase' ? <Database size={27} /> : <Code2 size={27} />}</div><div className="tech-detail-group">{activeTech?.group}</div><h3>{activeTech?.name}<span>.</span></h3><p>{activeTech?.detail}</p><div className="detail-bar"><span /></div></aside>
    </div><p className="tech-hint"><span>↖</span> HOVER OR FOCUS A TECHNOLOGY TO SEE HOW AND WHERE I'VE USED IT.</p>
  </section>;
}

function Experience() {
  return <section id="experience" className="section experience-section" aria-labelledby="experience-title"><SectionMarker number="05">WHERE THE WORK HAPPENED</SectionMarker>
    <div className="experience-heading"><div><div className="eyebrow">THE PATH SO FAR</div><h2 id="experience-title">Experience<span>.</span></h2></div><div className="experience-aside"><span className="status-dot" />OPEN TO OPPORTUNITIES &amp; COLLABORATIONS</div></div>
    <div className="timeline">{experience.map((item, i) => <article className="timeline-item" key={item.role}><div className="timeline-marker"><span>0{i + 1}</span><i /></div><div className="timeline-dates">{item.dates}</div><div className="timeline-content"><div><h3>{item.role}</h3><div className="timeline-company">{item.company}</div></div><p>{item.description}</p></div><span className="timeline-arrow">↗</span></article>)}</div>
  </section>;
}

function Process() {
  return <section id="process" className="section process-section" aria-labelledby="process-title"><SectionMarker number="06">FROM FIRST QUESTION TO FIRST RELEASE</SectionMarker>
    <div className="process-heading"><div><div className="eyebrow">HOW A BUILD MOVES</div><h2 id="process-title">Thoughtful at<br />every <span>step.</span></h2></div><p>I start by understanding the workflow, define scope and data, build in reviewable stages, then test and improve the product as I learn.</p></div>
    <div className="process-track">{process.map(([name, description], i) => <article className="process-step" key={name}><div className="step-top"><span>0{i + 1}</span><ArrowUpRight size={15} /></div><div className="step-marker"><span /></div><h3>{name}<span>.</span></h3><p>{description}</p></article>)}</div>
  </section>;
}

function CodeNote() {
  return <section className="code-note" aria-labelledby="code-note-title"><div className="code-note-bg" /><div className="code-note-main"><div className="eyebrow"><span className="online-mark" /> BACKED BY REAL CODE</div><h2 id="code-note-title">Every project here exists<br />as a <span>repository,</span><br />not a mockup.</h2><p>Commits, branches, and issues are part of how I work. The source is the honest version of a portfolio — read it if you want to see how these systems are actually put together.</p><a className="button button-outline code-link" href="https://github.com/mal161" target="_blank" rel="noreferrer">Explore the code <GithubMark size={16} /><ArrowUpRight size={13} /></a></div><div className="code-note-side"><div className="repo-chip"><span className="repo-chip-dot" /><span>MAL161 / OPEN SOURCE</span><ArrowUpRight size={13} /></div><div className="code-window"><div className="code-window-bar"><div><i /><i /><i /></div><span>building_something_real.js</span><ArrowUpRight size={13} /></div><pre><span className="code-muted">01</span> <span className="code-keyword">const</span> idea = <span className="code-string">"a real problem"</span>;
<span className="code-muted">02</span> <span className="code-keyword">const</span> work = <span className="code-fn">build</span>(idea);
<span className="code-muted">03</span>
<span className="code-muted">04</span> <span className="code-keyword">if</span> (work.<span className="code-prop">ships</span>) {'{'}
<span className="code-muted">05</span>   <span className="code-fn">keepImproving</span>(work);
<span className="code-muted">06</span> {'}'}</pre><div className="code-window-foot"><span><i /> MAIN BRANCH</span><span>COMMIT — PRESENT</span></div></div><div className="code-side-foot"><span>REAL CODE / REAL PROBLEMS</span><span>↗</span></div></div></section>;
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');
    const subject = 'Portfolio conversation from ' + name;
    const body = 'Name: ' + name + '\nEmail: ' + email + '\n\n' + message;
    window.location.href = 'mailto:alexmwangi9999@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    setSubmitted(true);
  };

  return <section id="contact" className="contact-section" aria-labelledby="contact-title">
    <SectionMarker number="07">SOMETHING IN MIND?</SectionMarker>
    <div className="contact-main">
      <div className="contact-head"><div className="eyebrow">THE NEXT GREAT THING STARTS HERE</div><h2 id="contact-title">Have an idea?<br /><span>Let's build it.</span></h2></div>
      <div className="contact-side"><p>Have a project in mind, a problem that needs solving, or just want to connect? I’d love to hear about it.</p><a className="contact-email" href="mailto:alexmwangi9999@gmail.com">alexmwangi9999@gmail.com <ArrowUpRight size={19} /></a><a className="contact-phone" href="tel:+254768354823"><Phone size={15} /> <span>0768 354 823</span><ArrowUpRight size={15} /></a><div className="contact-links"><a href="https://www.linkedin.com/in/alex-mwangi-b4a2b4316/" target="_blank" rel="noreferrer"><LinkedinMark size={15} /> CONNECT ON LINKEDIN <ExternalLink size={12} /></a><a href="https://github.com/mal161" target="_blank" rel="noreferrer"><GithubMark size={15} /> SEE THE REPOSITORIES <ExternalLink size={12} /></a></div></div>
    </div>
    <a className="whatsapp-cta" href="https://wa.me/254768354823?text=Hi%20Alex%2C%20I%27d%20like%20to%20talk%20about%20a%20project." target="_blank" rel="noreferrer"><span className="whatsapp-icon"><MessageCircle size={22} /></span><span className="whatsapp-copy"><span className="eyebrow">PREFER A QUICK CHAT?</span><strong>Message me on WhatsApp</strong><span>Reach me directly at 0768 354 823</span></span><span className="whatsapp-action">CHAT ON WHATSAPP <ArrowUpRight size={16} /></span></a>
    <a className="contact-cta" href="#contact-form"><span>START A CONVERSATION</span><span className="contact-cta-icon"><ArrowUpRight size={20} /></span></a>
    <div className="contact-form-wrap" id="contact-form">
      <div className="contact-form-heading"><div className="eyebrow">TELL ME A LITTLE ABOUT IT</div><h3>Let’s talk<span>.</span></h3><p>Share a few details and your email app will open with your message ready to send.</p></div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label className="form-field"><span>YOUR NAME</span><input name="name" type="text" autoComplete="name" placeholder="Alex Mwangi" required /></label>
        <label className="form-field"><span>EMAIL ADDRESS</span><input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
        <label className="form-field form-message"><span>WHAT WOULD YOU LIKE TO BUILD?</span><textarea name="message" rows="5" placeholder="Tell me about your project, idea, or question…" required /></label>
        <div className="form-submit-row"><p className="form-note" aria-live="polite">{submitted ? 'Your email app should open with your message ready to send.' : 'This opens your email app. You can review the message before sending.'}</p><button className="button button-primary" type="submit">Continue to email <ArrowUpRight size={15} /></button></div>
      </form>
    </div>
    <div className="contact-decoration"><span>AM</span><i>↗</i></div>
  </section>;
}
function Footer() {
  return <footer className="site-footer"><div className="footer-top"><div className="footer-identity"><a href="#top">Alex Mwangi<span>®</span></a><span>Full-Stack Developer · Software Engineer</span><span>Kenya <i>↘</i></span></div><div className="footer-status"><span className="status-dot" />AVAILABLE FOR OPPORTUNITIES &amp; COLLABORATIONS</div><div className="footer-socials"><a href="https://github.com/mal161" target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={12} /></a><a href="https://www.linkedin.com/in/alex-mwangi-b4a2b4316/" target="_blank" rel="noreferrer">LINKEDIN <ArrowUpRight size={12} /></a><a href="mailto:alexmwangi9999@gmail.com">EMAIL <ArrowUpRight size={12} /></a></div></div><div className="footer-bottom"><span>© 2026 ALEX MWANGI</span><span>DESIGNED &amp; BUILT WITH INTENTION <span className="footer-star" aria-hidden="true"><Layers3 size={12} strokeWidth={1.5} /></span></span><a href="#top">BACK TO THE TOP <ArrowUpRight size={12} /></a></div></footer>;
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const cursorRing = useRef(null);
  const cursorDot = useRef(null);
  useEffect(() => {
    const onScroll = () => { setScrolled(window.scrollY > 30); setShowTop(window.scrollY > 800); };
    const progressTrack = document.querySelector('.scroll-progress');
    const progressThumb = progressTrack?.querySelector('.scroll-progress-thumb');
    const updateProgress = () => {
      if (!progressTrack || !progressThumb) return;
      const trackHeight = progressTrack.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const scrollRange = Math.max(0, pageHeight - window.innerHeight);
      const thumbHeight = scrollRange === 0 ? trackHeight : Math.min(trackHeight, Math.max(42, trackHeight * window.innerHeight / pageHeight));
      const progress = scrollRange === 0 ? 0 : Math.min(1, Math.max(0, window.scrollY / scrollRange));
      progressThumb.style.height = `${thumbHeight}px`;
      progressThumb.style.transform = `translate3d(0, ${progress * (trackHeight - thumbHeight)}px, 0)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true }); window.addEventListener('scroll', updateProgress, { passive: true }); window.addEventListener('resize', updateProgress, { passive: true }); onScroll(); updateProgress();
    const parallax = gsap.matchMedia();
    parallax.add('(prefers-reduced-motion: no-preference)', () => {
      const hero = document.querySelector('.hero');
      if (hero) {
        gsap.to('.hero-bg', {
          yPercent: 13,
          ease: 'none',
          scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true }
        });
        gsap.to('.hero-grid', {
          yPercent: -11,
          ease: 'none',
          scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true }
        });
      }
      const codeNote = document.querySelector('.code-note');
      if (codeNote) gsap.to('.code-note-bg', {
        yPercent: -12,
        ease: 'none',
        scrollTrigger: { trigger: codeNote, start: 'top bottom', end: 'bottom top', scrub: .6 }
      });
    });
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); }), { threshold: 0.1 });
    document.querySelectorAll('.section-marker, .about-grid, .discipline-row, .projects-heading, .project-card, .services-heading, .service-card, .services-foot, .tech-heading, .tech-layout, .tech-hint, .experience-heading, .timeline-item, .process-heading, .process-step, .code-note-main, .code-note-side, .contact-main').forEach((element) => observer.observe(element));
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('scroll', updateProgress); window.removeEventListener('resize', updateProgress); parallax.revert(); observer.disconnect(); };
  }, []);
  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    if (!media.matches || !cursorRing.current || !cursorDot.current) return;

    const ring = cursorRing.current;
    const dot = cursorDot.current;
    document.body.classList.add('magnetic-cursor-enabled');
    gsap.set([ring, dot], { xPercent: -50, yPercent: -50 });
    const moveRingX = gsap.quickTo(ring, 'x', { duration: .2, ease: 'power3.out' });
    const moveRingY = gsap.quickTo(ring, 'y', { duration: .2, ease: 'power3.out' });
    const moveDotX = gsap.quickTo(dot, 'x', { duration: .08, ease: 'power2.out' });
    const moveDotY = gsap.quickTo(dot, 'y', { duration: .08, ease: 'power2.out' });
    let magnetTarget = null;

    const moveCursor = (event) => {
      if (event.pointerType && event.pointerType !== 'mouse') return;
      moveRingX(event.clientX); moveRingY(event.clientY);
      moveDotX(event.clientX); moveDotY(event.clientY);
      const target = event.target instanceof Element ? event.target.closest('a, button, [role="button"]') : null;
      if (target !== magnetTarget) {
        if (magnetTarget) gsap.to(magnetTarget, { x: 0, y: 0, duration: .3, ease: 'power3.out', overwrite: 'auto' });
        magnetTarget = target;
        ring.classList.toggle('is-active', Boolean(target));
      }
      if (target) {
        const rect = target.getBoundingClientRect();
        const strength = target.matches('.desktop-nav a') ? .12 : .18;
        gsap.to(target, {
          x: (event.clientX - rect.left - rect.width / 2) * strength,
          y: (event.clientY - rect.top - rect.height / 2) * strength,
          duration: .28,
          ease: 'power3.out',
          overwrite: 'auto'
        });
      }
    };
    const leaveTarget = (event) => {
      if (!magnetTarget || (event.relatedTarget instanceof Node && magnetTarget.contains(event.relatedTarget))) return;
      gsap.to(magnetTarget, { x: 0, y: 0, duration: .35, ease: 'elastic.out(1, .45)', overwrite: 'auto' });
      magnetTarget = null;
      ring.classList.remove('is-active');
    };

    document.addEventListener('pointermove', moveCursor, { passive: true });
    document.addEventListener('pointerout', leaveTarget, { passive: true });
    return () => {
      document.removeEventListener('pointermove', moveCursor);
      document.removeEventListener('pointerout', leaveTarget);
      document.body.classList.remove('magnetic-cursor-enabled');
      if (magnetTarget) gsap.set(magnetTarget, { x: 0, y: 0 });
      gsap.killTweensOf([ring, dot]);
    };
  }, []);
  return <><div className="scroll-progress" aria-hidden="true"><span className="scroll-progress-thumb" /></div><Header /><main><Hero /><About /><Projects /><Services /><Technology /><Experience /><Process /><CodeNote /><Contact /></main><Footer /><a className={`back-to-top ${showTop ? 'visible' : ''}`} href="#top" aria-label="Back to top"><ArrowUpRight size={17} /></a><div className="magnetic-cursor" ref={cursorRing} aria-hidden="true"><span /></div><div className="magnetic-cursor-dot" ref={cursorDot} aria-hidden="true" /></>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
