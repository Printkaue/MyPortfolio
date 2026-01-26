export type Project = {
  id: number;
  title: string;
  description: string;
  techs: string[];
  github: string;
  demo?: string | null;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Looped",
    description: "Plataforma completa voltada para ensinar progamação, desenvolvida para meu TCC.",
    techs: ["Python", "Flask", "SQL"],
    github: "https://github.com/Printkaue/LOOPED-TCC",
    demo: "https://looped-tcc.onrender.com/"
  },
  {
    id: 2,
    title: "Br Fut",
    description: "API que permite a consulta de todos os resultados do braisileirão de qualquer time",
    techs: ["React", "Python", "Flask", "SQL"],
    github: "https://github.com/Printkaue/BR-k-Fut",
    demo: null
  },
  {
    id: 3,
    title: "The Last Train of Midnight",
    description: "Jogo 2d de sobrevivencia, desenvolvi junto de um amigo para testes.",
    techs: ["Pygame", "Python"],
    github: "https://github.com/Printkaue/TheLastTraimGame",
    demo: null
  }
];