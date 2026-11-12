
import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useLocation,
  useParams,
} from "react-router-dom";

import site from "../data/site.js";
import projects from "../data/projects.js";
import ResumeButton from "../components/ResumeButton.jsx";

const navigation = [
  ["/", "Home"],
  ["/about", "About"],
  ["/projects", "Projects"],
  ["/skills", "Skills"],
  ["/services", "Services"],
  ["/contact", "Contact"],
];

function MobileHeader({ theme, setTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="bm-header">
      <Link to="/" className="bm-brand" onClick={() => setOpen(false)}>
        <span className="bm-logo">SEO</span>
        <span className="bm-brand-text">
          <strong>{site.name || "SEO Specialist"}</strong>
          <small>ORGANIC GROWTH</small>
        </span>
      </Link>

      <div className="bm-header-actions">
        <button
          className="bm-theme-toggle"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle color theme"
          title="Toggle theme"
        >
          {theme === "dark" ? "☀" : "☾"}
        </button>

        <button
          className={`bm-menu-btn ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className="bm-navigation">
          <span className="bm-label">MENU / NAVIGATION</span>

          {navigation.map(([path, label], index) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              onClick={() => setOpen(false)}
            >
              <small>0{index + 1}</small>
              {label}
              <span>↗</span>
            </NavLink>
          ))}

          <div className="bm-resume">
            <ResumeButton />
          </div>
        </nav>
      )}
    </header>
  );
}

function MobileFooter() {
  return (
    <footer className="bm-footer">
      <p>© {new Date().getFullYear()} {site.name || "SEO Specialist"}</p>
      <span>Built for organic growth.</span>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}

function PageTitle({ number, label, title, description }) {
  return (
    <section className="bm-page-title">
      <span className="bm-label">{number} / {label}</span>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </section>
  );
}

function HomeMobile() {
  return (
    <main className="bm-main" id="top">
      <section className="bm-hero">
        <span className="bm-label">
          DIGITAL MARKETING / SEO / ORGANIC GROWTH
        </span>

        <h1>
          SEO Strategies
          <br />
          for <span>Sustainable</span>
          <br />
          Organic Growth.
        </h1>

        <p>
          I help businesses improve search visibility, attract relevant
          audiences and build sustainable organic growth through SEO.
        </p>

        <div className="bm-actions">
          <Link to="/projects" className="bm-btn bm-btn-primary">
            Explore Projects ↗
          </Link>
          <Link to="/contact" className="bm-btn bm-btn-outline">
            Contact Me
          </Link>
        </div>

        <div className="bm-hero-bottom">
          <span>SEO EXECUTIVE</span>
          <span>HYDERABAD, INDIA</span>
        </div>
      </section>

      <section className="bm-section">
        <span className="bm-label">01 / EXPERTISE</span>
        <h2>What I Do</h2>

        <div className="bm-service-list">
          {[
            ["01", "Technical SEO", "Website health, crawling and indexing."],
            ["02", "On-Page SEO", "Content, keywords and page optimization."],
            ["03", "Off-Page SEO", "Link building and authority growth."],
            ["04", "Local SEO", "Google Business Profile and local visibility."],
            ["05", "Analytics", "GSC, GA4 and performance tracking."],
            ["06", "Paid Ads", "Google Ads and Meta Ads fundamentals."],
          ].map(([number, title, description]) => (
            <div className="bm-service-item" key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <span>↗</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bm-section">
        <span className="bm-label">02 / SELECTED WORK</span>
        <h2>Featured Projects</h2>
        <ProjectCards limit={3} />
        <Link to="/projects" className="bm-text-link">
          View all projects →
        </Link>
      </section>

      <section className="bm-cta">
        <span className="bm-label">LET'S WORK TOGETHER</span>
        <h2>Have a project in mind?</h2>
        <p>Let's discuss how SEO can help grow your business.</p>
        <Link to="/contact" className="bm-btn bm-btn-primary">
          Get in Touch ↗
        </Link>
      </section>
    </main>
  );
}

function AboutMobile() {
  return (
    <main className="bm-main">
      <PageTitle
        number="01"
        label="ABOUT ME"
        title="A little about my journey."
        description="Digital marketing professional focused on SEO, organic visibility and sustainable growth."
      />

      <section className="bm-section">
        <span className="bm-label">MY BACKGROUND</span>
        <h2>SEO meets strategy.</h2>
        <p>
          I work on improving website visibility through keyword research,
          technical SEO, on-page optimization, content strategy and
          performance analysis.
        </p>
        <p>
          My approach combines search data, user intent and continuous
          optimization to support long-term organic growth.
        </p>
      </section>

      <section className="bm-section">
        <span className="bm-label">MY APPROACH</span>
        <div className="bm-service-list">
          {[
            ["01", "Research", "Understand the business, audience and search intent."],
            ["02", "Audit", "Identify technical and content opportunities."],
            ["03", "Strategy", "Build an actionable SEO roadmap."],
            ["04", "Optimize", "Implement improvements and monitor results."],
          ].map(([number, title, description]) => (
            <div className="bm-service-item" key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bm-cta">
        <h2>Let's connect.</h2>
        <Link to="/contact" className="bm-btn bm-btn-primary">
          Contact Me ↗
        </Link>
      </section>
    </main>
  );
}

function ProjectCards({ limit }) {
  const items = limit ? projects.slice(0, limit) : projects;

  if (!items?.length) {
    return <p>Project details will be updated soon.</p>;
  }

  return (
    <div className="bm-project-list">
      {items.map((project, index) => (
        <Link
          to={`/projects/${project.slug}`}
          className="bm-project-card"
          key={project.slug || index}
        >
          <div className="bm-project-top">
            <span>PROJECT / 0{index + 1}</span>
            <span>↗</span>
          </div>
          <h3>{project.title || project.name}</h3>
          <p>
            {project.description ||
              project.summary ||
              "SEO strategy, optimization and organic growth."}
          </p>
          <span className="bm-project-link">View Case Study →</span>
        </Link>
      ))}
    </div>
  );
}

function ProjectsMobile() {
  return (
    <main className="bm-main">
      <PageTitle
        number="02"
        label="MY WORK"
        title="Projects & case studies."
        description="A selection of SEO and digital marketing projects."
      />

      <section className="bm-section">
        <ProjectCards />
      </section>
    </main>
  );
}

function ProjectDetailMobile() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) return <NotFoundMobile />;

  return (
    <main className="bm-main">
      <PageTitle
        number="03"
        label="CASE STUDY"
        title={project.title || project.name}
        description={project.description || project.summary}
      />

      <section className="bm-section">
        <span className="bm-label">PROJECT OVERVIEW</span>
        <p>
          {project.details ||
            project.content ||
            project.description ||
            "Project overview and optimization details."}
        </p>
      </section>

      <Link to="/projects" className="bm-text-link">
        ← Back to projects
      </Link>
    </main>
  );
}

function SkillsMobile() {
  const skills = [
    ["Technical SEO", "Crawling, indexing, site audits"],
    ["On-Page SEO", "Content optimization, metadata, internal linking"],
    ["Off-Page SEO", "Backlink analysis and link building"],
    ["Keyword Research", "Search intent and competitor analysis"],
    ["Local SEO", "Google Business Profile optimization"],
    ["Google Analytics 4", "Traffic and conversion analysis"],
    ["Google Search Console", "Search performance monitoring"],
    ["Google Ads", "Campaign setup and optimization basics"],
    ["Meta Ads", "Campaign setup and audience targeting basics"],
  ];

  return (
    <main className="bm-main">
      <PageTitle
        number="04"
        label="CAPABILITIES"
        title="Skills & tools."
        description="The skills and platforms I use to plan, execute and measure digital growth."
      />

      <section className="bm-section">
        <div className="bm-skill-list">
          {skills.map(([name, detail], index) => (
            <div className="bm-skill-item" key={name}>
              <span>0{index + 1}</span>
              <div>
                <h3>{name}</h3>
                <p>{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function ServicesMobile() {
  const services = [
    ["SEO Audit", "Technical checks, indexing analysis and website health review."],
    ["Keyword Research", "Keyword opportunities based on relevance, intent and competition."],
    ["On-Page SEO", "Titles, descriptions, headings, content and internal links."],
    ["Local SEO", "Google Business Profile optimization and local search visibility."],
    ["Content Optimization", "Content improvements aligned with search intent."],
    ["SEO Reporting", "Performance tracking using Google Search Console and GA4."],
  ];

  return (
    <main className="bm-main">
      <PageTitle
        number="05"
        label="WHAT I OFFER"
        title="SEO services."
        description="Practical SEO support to improve website performance and organic visibility."
      />

      <section className="bm-section">
        <div className="bm-service-list">
          {services.map(([title, description], index) => (
            <div className="bm-service-item" key={title}>
              <span>0{index + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <span>↗</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bm-cta">
        <h2>Need SEO support?</h2>
        <Link to="/contact" className="bm-btn bm-btn-primary">
          Discuss Your Project ↗
        </Link>
      </section>
    </main>
  );
}

function ContactMobile() {
  return (
    <main className="bm-main">
      <PageTitle
        number="06"
        label="CONTACT"
        title="Let's start a conversation."
        description="Have an SEO project, opportunity or collaboration in mind? Get in touch."
      />

      <section className="bm-section">
        <div className="bm-contact-card">
          <span className="bm-label">EMAIL</span>
          <h3>{site.email || "Contact me by email"}</h3>
          {site.email && (
            <a href={`mailto:${site.email}`} className="bm-btn bm-btn-primary">
              Send an Email ↗
            </a>
          )}
        </div>

        <div className="bm-contact-card">
          <span className="bm-label">LOCATION</span>
          <h3>Hyderabad, India</h3>
          <p>Open to suitable opportunities and collaborations.</p>
        </div>

        {site.linkedin && (
          <div className="bm-contact-card">
            <span className="bm-label">LINKEDIN</span>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="bm-text-link"
            >
              Connect on LinkedIn ↗
            </a>
          </div>
        )}
      </section>
    </main>
  );
}

function NotFoundMobile() {
  return (
    <main className="bm-main bm-not-found">
      <span className="bm-label">404 / PAGE NOT FOUND</span>
      <h1>Lost in search?</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="bm-btn bm-btn-primary">
        Back to Home
      </Link>
    </main>
  );
}

export default function MobileExperience() {
  const { pathname } = useLocation();

  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";

    const saved = window.localStorage.getItem("bm-theme");

    if (saved === "light" || saved === "dark") return saved;

    return window.matchMedia?.("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("bm-theme", theme);
    }
  }, [theme]);

  let page;

  if (pathname === "/") page = <HomeMobile />;
  else if (pathname === "/about") page = <AboutMobile />;
  else if (pathname === "/projects") page = <ProjectsMobile />;
  else if (pathname.startsWith("/projects/")) page = <ProjectDetailMobile />;
  else if (pathname === "/skills") page = <SkillsMobile />;
  else if (pathname === "/services") page = <ServicesMobile />;
  else if (pathname === "/contact") page = <ContactMobile />;
  else page = <NotFoundMobile />;

  return (
    <div className="bruno-mobile-site" data-theme={theme}>
      <MobileHeader theme={theme} setTheme={setTheme} />
      {page}
      <MobileFooter />
    </div>
  );
}
