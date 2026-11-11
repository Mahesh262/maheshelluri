
import { useParams, Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import projects from "../data/projects.js";
import NotFound from "./NotFound.jsx";
import site from "../data/site.js";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <NotFound />;
  }

  const path = `/projects/${project.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: site.url.replace(/\/$/, "") + path,
    creator: {
      "@type": "Person",
      name: site.name,
    },
  };

  return (
    <>
      <SEO
        title={`${project.title} | SEO Case Study`}
        path={path}
        description={project.summary}
        type="article"
        jsonLd={schema}
      />

      <main id="main" className="container page">
        <Breadcrumbs
          items={[
            { label: "Home", to: "/" },
            { label: "Projects", to: "/projects" },
            { label: project.title },
          ]}
        />

        <p className="eyebrow">{project.category}</p>
        <h1>{project.title}</h1>
        <p className="lead">{project.summary}</p>

        <section className="prose">
          <h2>Scope of Work</h2>

          <ul>
            {project.work.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>{project.result?.heading || "Key Outcomes"}</h2>

          {project.result?.metrics?.length > 0 && (
            <div className="result-metrics">
              {project.result.metrics.map((metric, index) => (
                <div className="result-metric" key={index}>
                  <h3>{metric.value}</h3>
                  <p>{metric.label}</p>
                </div>
              ))}
            </div>
          )}

          {project.result?.achievements?.length > 0 && (
            <ul>
              {project.result.achievements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}

          <p className="notice">
            Results should reflect verified work and evidence.
            No unverified ranking or traffic improvements are claimed.
          </p>
        </section>

        <Link className="link" to="/projects">
          ← Back to projects
        </Link>
      </main>
    </>
  );
}
