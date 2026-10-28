import SEO from "../components/SEO.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import SkillCard from "../components/SkillCard.jsx";
import skills from "../data/skills.js";

export default function Skills() {
  return (
    <>
      <SEO
        title="SEO Skills and Tools | Your Name"
        path="/skills"
        description="Explore SEO skills including technical audits, keyword research, on-page SEO, local SEO, GA4 and Search Console."
      />

      <main id="main" className="container page">
        <Breadcrumbs
          items={[
            { label: "Home", to: "/" },
            { label: "Skills" }
          ]}
        />

        <p className="eyebrow">CAPABILITIES</p>
        <h1>SEO skills</h1>

        <p className="lead">
          Practical skills across website health, content relevance,
          local search and measurement.
        </p>

        <div className="grid three">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>

        <section className="section">
          <h2>Tools and workflows</h2>

          <div className="tags">
            {[
              "Google Search Console",
              "Google Analytics 4",
              "Google Business Profile",
              "Keyword Research",
              "Technical Audits",
              "Structured Data"
            ].map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>

          <p className="muted">
            Only list tools you have actually used and can discuss confidently.
          </p>
        </section>
      </main>
    </>
  );
}