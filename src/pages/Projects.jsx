import SEO from "../components/SEO.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import projects from "../data/projects.js";

export default function Projects() {
  return (
    <>
      <SEO
        title="SEO Projects and Case Studies | Your Name"
        path="/projects"
        description="Explore SEO project examples covering technical audits, local SEO, keyword research and content optimization."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "SEO Projects and Case Studies"
        }}
      />

      <main id="main" className="container page">
        <Breadcrumbs
          items={[
            { label: "Home", to: "/" },
            { label: "Projects" }
          ]}
        />

        <p className="eyebrow">PORTFOLIO</p>
        <h1>SEO projects and case studies</h1>

        <p className="lead">
          Explore my SEO workflows and case studies. Replace the starter
          examples with genuine work and verified results before publishing.
        </p>

        <div className="grid three">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </main>
    </>
  );
}