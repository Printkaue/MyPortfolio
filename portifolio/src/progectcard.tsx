type ProjectProps = {
  title: string;
  description: string;
  techs: string[];
  github: string;
  demo?: string | null;
};

function ProjectCard({ title, description, techs, github, demo }: ProjectProps) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>

      <ul className="project-techs">
        {techs.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <div className="project-links">
        <a href={github} target="_blank">GitHub</a>
        {demo && <a href={demo} target="_blank">Demo</a>}
      </div>
    </div>
  );
}

export default ProjectCard;
