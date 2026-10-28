
import { Link } from "react-router-dom";
import { useEffect } from "react";
import SEO from "../components/SEO.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import projects from "../data/projects.js";
import skills from "../data/skills.js";
import site from "../data/site.js";
import ResumeButton from "../components/ResumeButton.jsx";

const skillIcons = ["⚙", "⌕", "▤", "⌖", "↗", "✦"];

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    url: site.url,
    sameAs: [site.linkedin, site.github].filter(Boolean)
  };

  return (
    <>
      <SEO
        title={`${site.name} | SEO Executive Portfolio`}
        path="/"
        description="Explore my SEO portfolio, technical SEO audits, keyword research, local SEO projects and digital marketing skills."
        jsonLd={schema}
      />

      <main id="main">
        <section className="hero hero-modern">
          <div className="hero-orb hero-orb-one" aria-hidden="true" />
          <div className="hero-orb hero-orb-two" aria-hidden="true" />

          <div className="container hero-layout">
            <div className="hero-copy">
              <p className="eyebrow hero-badge">
                SEO EXECUTIVE <span>•</span> DIGITAL MARKETING
              </p>

              <h1>
                Growing search
                <br />
                visibility with
                <br />
                <span className="gradient-text">practical SEO</span>
              </h1>

              <p className="lead">
                I work on technical SEO, keyword research, on-page optimization,
                local SEO and content strategy to improve organic search visibility.
              </p>

              <div className="actions">
                <Link className="button button-primary" to="/projects">
                  Explore Projects <span aria-hidden="true">→</span>
                </Link>
                <Link className="button button-outline" to="/contact">
                  Contact Me <span aria-hidden="true">↗</span>
                </Link>
                <ResumeButton />
              </div>

              <div className="hero-benefits">
                <span><b>⌕</b> Better Rankings</span>
                <span><b>↗</b> More Traffic</span>
                <span><b>☆</b> Real Growth</span>
              </div>
            </div>

            <div className="hero-visual" aria-label="Illustrative SEO analytics dashboard">
              <div className="floating-icon google-icon" aria-hidden="true">G</div>
              <div className="floating-icon chart-icon" aria-hidden="true">▥</div>
              <div className="floating-icon search-icon" aria-hidden="true">⌕</div>
              <div className="floating-icon location-icon" aria-hidden="true">●</div>

              <div className="analytics-window">
                <div className="window-top">
                  <span /><span /><span />
                  <small>SEO PERFORMANCE</small>
                </div>

                <div className="analytics-content">
                  <div className="traffic-heading">
                    <div>
                      <small>Organic Traffic</small>
                      <h3>Search visibility</h3>
                    </div>
                    <span className="growth-chip">SEO</span>
                  </div>

                  <div className="chart-area">
                    <div className="chart-y-labels">
                      <span>High</span>
                      <span>Medium</span>
                      <span>Low</span>
                    </div>

                    <svg
                      className="traffic-chart"
                      viewBox="0 0 360 125"
                      role="img"
                      aria-label="Illustrative upward organic traffic trend"
                    >
                      <defs>
                        <linearGradient id="trafficFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3985ff" stopOpacity=".3" />
                          <stop offset="100%" stopColor="#3985ff" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      {[25, 60, 95].map((y) => (
                        <line
                          key={y}
                          x1="0"
                          y1={y}
                          x2="360"
                          y2={y}
                          stroke="#e5edfa"
                          strokeDasharray="4 5"
                        />
                      ))}
                      <path
                        d="M0 104 L30 88 L60 95 L88 68 L116 77 L145 55 L172 65 L204 42 L230 51 L260 29 L289 37 L320 14 L360 8 L360 125 L0 125 Z"
                        fill="url(#trafficFill)"
                      />
                      <path
                        d="M0 104 L30 88 L60 95 L88 68 L116 77 L145 55 L172 65 L204 42 L230 51 L260 29 L289 37 L320 14 L360 8"
                        fill="none"
                        stroke="#3478f6"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="360" cy="8" r="5" fill="#3478f6" />
                    </svg>
                  </div>

                  <div className="dashboard-bottom">
                    <div>
                      <span className="dashboard-icon blue">⌕</span>
                      <div><small>Keyword research</small><b>Search intent</b></div>
                    </div>
                    <div>
                      <span className="dashboard-icon purple">✦</span>
                      <div><small>Content strategy</small><b>On-page SEO</b></div>
                    </div>
                    <div>
                      <span className="dashboard-icon green">⌖</span>
                      <div><small>Local SEO</small><b>Local visibility</b></div>
                    </div>
                    <div>
                      <span className="dashboard-icon orange">↗</span>
                      <div><small>Reporting</small><b>Measure results</b></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="floating-note">
                <span className="note-check">✓</span>
                <div>
                  <strong>SEO strategy</strong>
                  <small>Research · Optimize · Measure</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section">
          <div className="container skills-layout">
            <div className="skills-intro reveal">
              <p className="eyebrow section-badge">MY SKILLS</p>
              <h2>Core SEO skills</h2>
              <p>
                Practical skills across website health, content relevance,
                local search and measurement.
              </p>
              <Link className="link" to="/skills">
                View all skills <span>→</span>
              </Link>
            </div>

            <div className="skills-grid">
              {skills.slice(0, 6).map((skill, index) => (
                <article
                  className={`skill-card reveal skill-card-${index + 1}`}
                  key={skill.name}
                  style={{ "--reveal-delay": `${index * 80}ms` }}
                >
                  <span className={`skill-icon skill-icon-${index + 1}`} aria-hidden="true">
                    {skillIcons[index % skillIcons.length]}
                  </span>
                  <div>
                    <h3>{skill.name}</h3>
                    <p>{skill.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects-section">
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <p className="eyebrow">FEATURED PROJECTS</p>
                <h2>Selected projects</h2>
                <p>SEO work, strategies and practical projects.</p>
              </div>
              <Link className="link desktop-project-link" to="/projects">
                View all projects <span>→</span>
              </Link>
            </div>

            <div className="grid three project-grid">
              {projects.slice(0, 3).map((project, index) => (
                <div
                  className="reveal project-reveal"
                  key={project.slug}
                  style={{ "--reveal-delay": `${index * 100}ms` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>

            <Link className="link mobile-project-link" to="/projects">
              View all projects →
            </Link>
          </div>
        </section>

        <section className="closing-section">
          <div className="container closing-card reveal">
            <div>
              <p className="eyebrow">LET'S CONNECT</p>
              <h2>Have an SEO project in mind?</h2>
              <p>Let's discuss website visibility, technical SEO and content opportunities.</p>
            </div>
            <Link className="button button-primary" to="/contact">
              Get in touch <span>→</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
