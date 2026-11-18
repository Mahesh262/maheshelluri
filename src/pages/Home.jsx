
import { Link } from "react-router-dom";
import { useEffect } from "react";
import SEO from "../components/SEO.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import projects from "../data/projects.js";
import skills from "../data/skills.js";
import site from "../data/site.js";
import ResumeButton from "../components/ResumeButton.jsx";

const skillIcons = ["⌘", "⌕", "▤", "⌖", "↗", "✦"];

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(".home-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) =>
        element.classList.add("home-visible")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("home-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
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
        title={`${site.name} | SEO Specialist Portfolio & Organic Growth`}
        path="/"
        description="Explore my SEO portfolio, technical SEO audits, keyword research, local SEO projects and digital marketing skills."
        jsonLd={schema}
      />

      <main id="main" className="cinema-home">

        {/* ==================================
            HERO
        ================================== */}

        <section className="ch-hero">

          <div className="ch-grid-bg" aria-hidden="true" />
          <div className="ch-red-glow" aria-hidden="true" />

          <div className="ch-hero-inner">

            <div className="ch-hero-copy">

              <div className="ch-overline ch-animate ch-delay-1">
                <span className="ch-status-dot" />
                AVAILABLE FOR OPPORTUNITIES
              </div>

              <p className="ch-kicker ch-animate ch-delay-2">
                SEO SPECIALIST / DIGITAL STRATEGIST
              </p>

              <h1 className="ch-main-title ch-animate ch-delay-3">
                <span>MAHESH</span>
                <span className="ch-title-outline">ELLURI<span className="ch-red-dot">.</span></span>
              </h1>

              <div className="ch-hero-description ch-animate ch-delay-4">
                <span className="ch-description-line" />
                <p>
                  Turning search visibility into meaningful
                  <strong> organic growth.</strong>
                  <br />
                  Building smarter SEO strategies through
                  data, creativity and technical precision.
                </p>
              </div>

              <div className="ch-hero-actions ch-animate ch-delay-5">
                <Link to="/projects" className="ch-button ch-button-primary">
                  EXPLORE MY WORK <span>↗</span>
                </Link>

                <Link to="/contact" className="ch-button ch-button-outline">
                  LET'S TALK <span>→</span>
                </Link>
              </div>

              <div className="ch-resume ch-animate ch-delay-5">
                <ResumeButton />
              </div>

            </div>

            {/* ABSTRACT VISUAL */}

            <div className="ch-hero-art" aria-hidden="true">

              <div className="ch-art-number">01 / 04</div>

              <div className="ch-art-circle ch-circle-one" />
              <div className="ch-art-circle ch-circle-two" />
              <div className="ch-art-circle ch-circle-three" />

              <div className="ch-diagonal-panel">
                <div className="ch-panel-inner">
                  <span className="ch-panel-symbol">E</span>
                  <span className="ch-panel-caption">
                    SEARCH / STRATEGY / GROWTH
                  </span>
                </div>
              </div>

              <div className="ch-art-cross ch-cross-one" />
              <div className="ch-art-cross ch-cross-two" />

              <div className="ch-art-vertical-text">
                DIGITAL GROWTH / EST. 2026
              </div>

              <div className="ch-art-bottom">
                <span>THINK</span>
                <span>OPTIMIZE</span>
                <span>GROW</span>
              </div>

            </div>

          </div>

          <div className="ch-hero-footer">
            <span>PORTFOLIO / 2026</span>
            <span>SCROLL TO EXPLORE <span className="ch-scroll-arrow">↓</span></span>
            <span>01 — INTRODUCTION</span>
          </div>

          <div className="ch-hero-side-label">INDEPENDENT SEO PROFESSIONAL</div>

        </section>

        {/* ==================================
            INTRO / ABOUT
        ================================== */}

        <section className="ch-intro-section">

          <div className="ch-section-top home-reveal">
            <span className="ch-section-number">01 / WHO I AM</span>
            <span className="ch-section-line" />
            <span className="ch-section-category">THE INTRODUCTION</span>
          </div>

          <div className="ch-intro-grid">

            <div className="ch-intro-heading home-reveal">
              <p className="ch-red-label">ABOUT ME</p>

              <h2>
                NOT JUST
                <br />
                <span>RANKINGS.</span>
                <br />
                REAL IMPACT.
              </h2>
            </div>

            <div className="ch-intro-content home-reveal">
              <p className="ch-intro-lead">
                I believe successful SEO is about more than
                getting websites to rank. It's about making
                businesses discoverable, relevant and valuable.
              </p>

              <p>
                I'm Mahesh Elluri, an SEO professional with
                2.5+ years of experience in technical SEO,
                keyword research, on-page optimization,
                content strategy and organic growth.
              </p>

              <Link to="/about" className="ch-text-link">
                DISCOVER MY JOURNEY <span>↗</span>
              </Link>
            </div>

          </div>

          <div className="ch-stats home-reveal">
            <div>
              <strong>2.5<span>+</span></strong>
              <small>YEARS EXPERIENCE</small>
            </div>
            <div>
              <strong>SEO</strong>
              <small>CORE SPECIALIZATION</small>
            </div>
            <div>
              <strong>360°</strong>
              <small>GROWTH APPROACH</small>
            </div>
            <div>
              <strong>∞</strong>
              <small>LEARNING MINDSET</small>
            </div>
          </div>

        </section>

        {/* ==================================
            EXPERTISE
        ================================== */}

      

        {/* ==================================
            PROJECTS
        ================================== */}

        <section className="ch-projects-section">

          <div className="ch-section-top home-reveal">
            <span className="ch-section-number">03 / SELECTED WORK</span>
            <span className="ch-section-line" />
            <span className="ch-section-category">PROJECTS</span>
          </div>

          <div className="ch-project-heading home-reveal">
            <div>
              <p className="ch-red-label">THE PORTFOLIO</p>
              <h2>
                WORK THAT
                <br />
                <span>SPEAKS.</span>
              </h2>
            </div>

            <Link to="/projects" className="ch-button ch-button-outline">
              ALL PROJECTS <span>↗</span>
            </Link>
          </div>

          <div className="ch-project-grid">

            {projects.slice(0, 3).map((project, index) => (
              <div
                className="ch-project-item home-reveal"
                key={project.slug}
                style={{ "--card-index": index }}
              >
                <ProjectCard project={project} />
              </div>
            ))}

          </div>

        </section>

        {/* ==================================
            CLOSING CTA
        ================================== */}

        <section className="ch-cta-section">

          <div className="ch-cta-background" aria-hidden="true">
            <span>GROW</span>
          </div>

          <div className="ch-cta-content home-reveal">
            <p className="ch-red-label">04 / THE NEXT MOVE</p>

            <h2>
              LET'S MAKE
              <br />
              <span>IT HAPPEN.</span>
            </h2>

            <p>
              Have a website that needs better visibility?
              Let's turn opportunities into measurable growth.
            </p>

            <Link to="/contact" className="ch-button ch-button-primary">
              START A CONVERSATION <span>↗</span>
            </Link>
          </div>

          <div className="ch-cta-bottom">
            <span>YOUR NEXT GROWTH STORY STARTS HERE.</span>
            <span>MAHESH ELLURI © 2026</span>
          </div>

        </section>

      </main>
    </>
  );
}
