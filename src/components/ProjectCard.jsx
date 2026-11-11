
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  const achievements = project.result?.achievements || [];

  return (
    <article className="card project-card">
      <p className="eyebrow">{project.category}</p>

      <h2>{project.title}</h2>

      <p className="project-summary">
        {project.summary}
      </p>

      {achievements.length > 0 && (
        <div className="project-outcomes">
          <h3>Key Outcomes</h3>

          <ul>
            {achievements.slice(0, 2).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      <Link
        className="link"
        to={`/projects/${project.slug}`}
        aria-label={`Read the ${project.title} case study`}
      >
        Explore Case Study <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
