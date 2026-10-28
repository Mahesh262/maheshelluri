export default function SkillCard({ skill }) {
  return (
    <article className="card">
      <h2>{skill.name}</h2>
      <p>{skill.description}</p>
    </article>
  );
}