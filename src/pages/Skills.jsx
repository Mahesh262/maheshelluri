import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import SkillCard from "../components/SkillCard.jsx";
import skills from "../data/skills.js";

export default function Skills() {
  return (
    <div className="cinema-home">
      <SEO
        title="SEO Skills and Tools | Elluri Mahesh"
        path="/skills"
        description="Explore SEO skills including technical audits, keyword research, on-page SEO, local SEO, GA4 and Search Console."
      />

      <main id="main" className="ch-skills-page">
        {/* SKILLS SECTION */}
        <section className="ch-expertise-section">
          <div className="ch-section-top ch-animate ch-delay-1">
            <span className="ch-section-number">01</span>
            <span className="ch-section-line" />
            <span className="ch-section-category">CAPABILITIES & EXPERTISE</span>
          </div>

          <div className="ch-animate ch-delay-2" style={{ marginBottom: "25px" }}>
            <Breadcrumbs
              items={[
                { label: "Home", to: "/" },
                { label: "Skills" }
              ]}
            />
          </div>

          <div className="ch-expertise-heading ch-animate ch-delay-3">
            <div>
              <p className="ch-red-label">WHAT I DO</p>
              <h2>
                SEO skills & <br />
                <span>capabilities.</span>
              </h2>
            </div>
            <p className="ch-lead-text">
              Practical skills across website health, content relevance,
              local search and measurement.
            </p>
          </div>

          <div className="ch-expertise-grid ch-animate ch-delay-4">
            {skills.map((skill, index) => (
              <div 
                className="home-reveal home-visible" 
                style={{ "--card-index": index + 1 }}
                key={skill.name}
              >
                <SkillCard skill={skill} />
              </div>
            ))}
          </div>
        </section>

        {/* TOOLS & WORKFLOWS SECTION */}
        <section className="ch-intro-section" style={{ background: "#131313" }}>
          <div className="ch-section-top">
            <span className="ch-section-number">02</span>
            <span className="ch-section-line" />
            <span className="ch-section-category">STACK & TECH</span>
          </div>

          <div className="ch-intro-grid" style={{ alignItems: "center" }}>
            <div className="ch-intro-heading">
              <p className="ch-red-label">PLATFORMS</p>
              <h2>Tools and <br /><span>workflows</span></h2>
              <p className="ch-intro-lead" style={{ marginTop: "20px" }}>
                Industry-standard analytics, search performance tools, and technical frameworks used daily.
              </p>
            </div>

            <div className="ch-tools-cloud">
              {[
                "Google Search Console",
                "Google Analytics 4",
                "Google Business Profile",
                "Keyword Research",
                "Technical Audits",
                "Structured Data"
              ].map((tool, index) => (
                <div 
                  className="ch-tool-pill home-reveal home-visible" 
                  style={{ "--card-index": index + 1 }}
                  key={tool}
                >
                  <span className="ch-tool-dot">✦</span>
                  <span>{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}