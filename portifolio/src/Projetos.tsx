import { projects } from "./data/projects";
import ProjectCard from "./progectcard";

function Projetos() {
  return (
    <section id="projetos" className="section">
      <h2>Projetos</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            techs={project.techs}
            github={project.github}
            demo={project.demo}
          />
        ))}
      </div>
    </section>
  );
}

export default Projetos;
