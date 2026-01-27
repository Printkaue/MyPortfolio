import { projects } from "./data/projects";
import ProjectCard from "./progectcard";

function Projetos() {
  return (
    <section id="projetos" className="section">
      <h2>Meus Trabalhos</h2>
      <p>Alguns de meus projetos</p>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            image={project.image}
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
