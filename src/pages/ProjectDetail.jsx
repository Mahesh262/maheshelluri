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
      name: site.name
    }
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
            { label: project.title }
          ]}
        />

        <p className="eyebrow">{project.category}</p>
        <h1>{project.title}</h1>
        <p className="lead">{project.summary}</p>

        <section className="prose">
          <h2>Scope of work</h2>

          <ul>
            {project.work.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>Outcome</h2>
          <p>{project.result}</p>

          <p className="notice">
            Replace this sample copy with accurate work, evidence and
            verified results. Do not claim unverified ranking or traffic growth.
          </p>
        </section>

        <Link className="link" to="/projects">
          ← Back to projects
        </Link>
      </main>
    </>
  );
}