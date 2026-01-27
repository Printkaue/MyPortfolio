import { useEffect, useState } from "react";

type ProjectProps = {
  title: string;
  description: string;
  techs: string[];
  github: string;
  demo?: string | null;
  image: string[];
};

function ProjectCard({ title, description, techs, github, demo, image }: ProjectProps) {

  const [Current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % image.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [image.length]);


  return (
    <div className="project-card">

      <div className="project-img">
        <div
          className="project-img-track"
          style={{
            transform: `translateX(-${Current * 100}%)`
          }}
        >
          {image.map((img, index) => (
            <div
              key={index}
              className="project-img-slide"
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
      </div>

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
