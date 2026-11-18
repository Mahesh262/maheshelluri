import SEO from "../components/SEO.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import projects from "../data/projects.js";

export default function Projects() {
  return (
    <div className="cinema-home">
      <SEO
        title="SEO Projects and Case Studies | Elluri Mahesh"
        path="/projects"
        description="Explore SEO project examples covering technical audits, local SEO, keyword research and content optimization."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "SEO Projects and Case Studies"
        }}
      />

      <main id="main" className="ch-projects-page">
        <section className="ch-projects-section">
          <div className="ch-section-top ch-animate ch-delay-1">
            <span className="ch-section-number">01</span>
            <span className="ch-section-line" />
            <span className="ch-section-category">PORTFOLIO & CASE STUDIES</span>
          </div>

          <div className="ch-animate ch-delay-2" style={{ marginBottom: "25px" }}>
            <Breadcrumbs
              items={[
                { label: "Home", to: "/" },
                { label: "Projects" }
              ]}
            />
          </div>

          <div className="ch-project-heading ch-animate ch-delay-3">
            <div>
              <p className="ch-red-label">FEATURED WORKS</p>
              <h2>
                SEO projects and <br />
                <span>case studies.</span>
              </h2>
            </div>
            <p className="ch-lead-text">
              Explore my SEO workflows and case studies. Replace the starter
              examples with genuine work and verified results before publishing.
            </p>
          </div>

          <div className="ch-project-grid ch-animate ch-delay-4">
            {projects.map((project, index) => (
              <div 
                className="ch-project-item home-reveal home-visible" 
                style={{ "--card-index": index + 1 }}
                key={project.slug}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}