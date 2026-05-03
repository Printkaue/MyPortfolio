export type Project = {
  id: number;
  title: string;
  description: string;
  techs: string[];
  github: string;
  demo?: string | null;
  image: string[]
};

export const projects: Project[] = [
  {
    id: 2,
    title: "Looped",
    description: "Plataforma completa voltada para ensinar progamação, desenvolvida para meu TCC.",
    techs: ["Python", "Flask", "SQL"],
    github: "https://github.com/Printkaue/LOOPED-TCC",
    demo: "https://looped-tcc.onrender.com/",
    image: ["/looped01.png", "/looped02.png", "/looped03.png"]
  },

    {
    id: 1,
    title: "Dasboard de Vendas Interativo",
    description: "Um dashboard simples pensado para administração de vendas e visualizações estatistícas.",
    techs: ["FastAPI", "Python", "React", "Axios"],
    github: "https://github.com/Printkaue/DASHBOARD-De-Vendas",
    demo: null,
    image: ["/Captura de tela 2026-05-03 083737.png", "/Captura de tela 2026-05-03 083752.png"]
  }
];