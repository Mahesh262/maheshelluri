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
    <>
      <SEO
        title={`About ${site.name} | SEO Experience`}
        path="/about"
        description="Learn about my SEO experience, technical SEO skills, keyword research, local SEO and digital marketing approach."
        jsonLd={schema}
      />

      <main id="main" className="about-page">
        <section className="inner-hero">
          <div className="container">
            <Breadcrumbs
              items={[
                { label: "Home", to: "/" },
                { label: "About" }
              ]}
            />

            <div className="about-intro">
              <div className="about-copy">
                <p className="eyebrow">
                  <span className="eyebrow-dot" />
                  A LITTLE ABOUT ME
                </p>

                <h1>
                  Making search work better with{" "}
                  <span className="gradient-text">practical SEO.</span>
                </h1>

                <p className="lead">
                  I am an SEO Executive focused on helping websites become
                  easier to discover, understand and navigate through
                  user-focused optimization and data-informed decisions.
                </p>

                <div className="actions">
                  <ResumeButton />
                  <Link className="button outline" to="/contact">
                    Let's connect <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>

              <aside className="about-highlight">
                <span className="highlight-icon" aria-hidden="true">
                  ✦
                </span>
                <p className="eyebrow">MY APPROACH</p>
                <h2>Research. Optimize. Measure.</h2>
                <p>
                  Understand the problem, prioritize useful improvements,
                  and measure what changes over time.
                </p>

                <div className="highlight-line">
                  <span />
                  <span />
                  <span />
                </div>
                <small>Focused on sustainable organic visibility</small>
              </aside>
            </div>
          </div>
        </section>

        <section className="section about-strengths">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">HOW I WORK</p>
              <h2>SEO with a clear process</h2>
              <p>
                Practical work built around website quality, search intent
                and meaningful performance measurement.
              </p>
            </div>

            <div className="grid three">
              {strengths.map((item) => (
                <article className="modern-card reveal-card" key={item.title}>
                  <span className="number-icon">{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-details">
          <div className="container details-layout">
            <div>
              <p className="eyebrow">MY SEO WORKFLOW</p>
              <h2>From website analysis to actionable improvements</h2>
              <p>
                I review website health, research relevant queries, identify
                optimization opportunities and use performance data to guide
                the next steps.
              </p>
            </div>

            <div className="workflow-list">
              {[
                ["01", "Audit", "Review technical and on-page issues."],
                ["02", "Prioritize", "Focus on relevant, achievable improvements."],
                ["03", "Optimize", "Improve content, links and search relevance."],
                ["04", "Measure", "Track results and identify next actions."]
              ].map(([number, title, description]) => (
                <div className="workflow-item" key={number}>
                  <span>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container section">
          <div className="resume-cta">
            <div>
              <p className="eyebrow">LET'S CONNECT</p>
              <h2>Want to know more about my experience?</h2>
              <p>
                View my resume or get in touch to discuss SEO opportunities.
              </p>
            </div>

            <div className="actions">
              <ResumeButton />
              <Link className="button outline" to="/contact">
                Contact me
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}