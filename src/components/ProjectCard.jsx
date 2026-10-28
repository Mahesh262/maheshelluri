import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <article className="card">
      <p className="eyebrow">{project.category}</p>
      <h2>{project.title}</h2>
      <p>{project.summary}</p>

      <Link className="link" to={`/projects/${project.slug}`}>
        Read case study →
      </Link>
    </article>
  );
}