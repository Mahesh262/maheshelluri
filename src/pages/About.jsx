import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import ResumeButton from "../components/ResumeButton.jsx";
import site from "../data/site.js";

const strengths = [
  {
    icon: "01",
    title: "Technical SEO",
    description:
      "Identify crawlability, indexability, redirects, canonical and website health issues."
  },
  {
    icon: "02",
    title: "Search intent",
    description:
      "Research keywords, understand search intent and map opportunities to relevant pages."
  },
  {
    icon: "03",
    title: "Organic growth",
    description:
      "Improve on-page content, internal linking, local visibility and ongoing measurement."
  }
];

export default function About() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    url: site.url,
    sameAs: [site.linkedin, site.github].filter(Boolean)
  };

  return (
    <div className="cinema-home">
      <SEO
        title={`About ${site.name} | SEO Experience`}
        path="/about"
        description="Learn about Mahesh Elluri, an SEO Specialist with 2.5+ years of digital marketing experience in technical SEO, keyword research, content optimization, on-page SEO, link building, and organic growth strategies."
        jsonLd={schema}
      />

      <main id="main" className="ch-about-page">
        {/* INTRO SECTION */}
        <section className="ch-intro-section">
          <div className="ch-section-top ch-animate ch-delay-1">
            <span className="ch-section-number">01</span>
            <span className="ch-section-line" />
            <span className="ch-section-category">ABOUT ME</span>
          </div>

          <div className="ch-animate ch-delay-2" style={{ marginBottom: "25px" }}>
            <Breadcrumbs
              items={[
                { label: "Home", to: "/" },
                { label: "About" }
              ]}
            />
          </div>

          <div className="ch-about-intro-grid">
            <div className="ch-intro-copy ch-animate ch-delay-3">
              <p className="ch-red-label">MAHESH ELLURI</p>
              <h1 className="ch-about-title">
                SEO Specialist & <br />
                <span>Digital Marketer</span>
              </h1>
              <p className="ch-intro-lead">
                I am Mahesh Elluri, an SEO Specialist with 2.5+ years of
                digital marketing experience, specializing in technical SEO,
                keyword research, on-page optimization, content strategy
                and organic search growth.
              </p>

              <div className="ch-hero-actions">
                <ResumeButton className="ch-button ch-button-primary" />
                <Link className="ch-button ch-button-outline" to="/contact">
                  Let's connect <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>

            <aside className="ch-about-highlight ch-animate ch-delay-4">
              <span className="ch-highlight-icon" aria-hidden="true">✦</span>
              <p className="ch-red-label">MY APPROACH</p>
              <h2>Research. Optimize. Measure.</h2>
              <p>
                Understand the problem, prioritize useful improvements,
                and measure what changes over time.
              </p>
              <div className="ch-highlight-line">
                <span />
                <span />
                <span />
              </div>
              <small>Focused on sustainable organic visibility</small>
            </aside>
          </div>
        </section>

        {/* STRENGTHS SECTION */}
        <section className="ch-expertise-section">
          <div className="ch-section-top">
            <span className="ch-section-number">02</span>
            <span className="ch-section-line" />
            <span className="ch-section-category">PROCESS & EXPERTISE</span>
          </div>

          <div className="ch-expertise-heading">
            <div>
              <p className="ch-red-label">HOW I WORK</p>
              <h2>SEO with a <br /><span>clear process</span></h2>
            </div>
            <p>
              Practical work built around website quality, search intent
              and meaningful performance measurement.
            </p>
          </div>

          <div className="ch-expertise-grid">
            {strengths.map((item, index) => (
              <div 
                className="ch-expertise-card home-reveal home-visible" 
                style={{ "--card-index": index + 1 }}
                key={item.title}
              >
                <div className="ch-card-top">
                  <span>{item.icon}</span>
                  <span className="ch-card-icon">✦</span>
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <span className="ch-card-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        {/* WORKFLOW SECTION */}
        <section className="ch-intro-section" style={{ background: "#131313" }}>
          <div className="ch-section-top">
            <span className="ch-section-number">03</span>
            <span className="ch-section-line" />
            <span className="ch-section-category">SEO WORKFLOW</span>
          </div>

          <div className="ch-intro-grid">
            <div className="ch-intro-heading">
              <p className="ch-red-label">STEP-BY-STEP</p>
              <h2>Actionable <br /><span>improvements</span></h2>
              <p className="ch-intro-lead" style={{ marginTop: "20px" }}>
                I review website health, research relevant queries, identify
                optimization opportunities and use performance data to guide
                the next steps.
              </p>
            </div>

            <div className="ch-workflow-list">
              {[
                ["01", "Audit", "Review technical and on-page issues."],
                ["02", "Prioritize", "Focus on relevant, achievable improvements."],
                ["03", "Optimize", "Improve content, links and search relevance."],
                ["04", "Measure", "Track results and identify next actions."]
              ].map(([number, title, description]) => (
                <div className="ch-workflow-item" key={number}>
                  <span className="ch-workflow-num">{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="ch-cta-section">
          <div className="ch-cta-background">
            <span>HIRE</span>
          </div>
          <div className="ch-cta-content">
            <p className="ch-red-label">LET'S CONNECT</p>
            <h2>
              Want to know more <br />
              <span>about my experience?</span>
            </h2>
            <p>
              View my resume or get in touch to discuss SEO opportunities.
            </p>
            <div className="ch-hero-actions" style={{ marginTop: "35px" }}>
              <ResumeButton className="ch-button ch-button-primary" />
              <Link className="ch-button ch-button-outline" to="/contact">
                Contact me <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}