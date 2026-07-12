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
    techs: ["Python", "Flask", "SQL", "JavaScript"],
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
  },
    {
    id: 3,
    title: "Simulador Da Copa Do Mundo FIFA 2026",
    description: "Um simulador interativo no qual o usuário pode simular partidas e a coapa do mundo de forma realista.",
    techs: [ "Python"],
    github: "https://github.com/Printkaue/WorldCup2026_Simulador",
    demo: null,
    image: ["/worldcup_img01.png", "/worldcup_img02.png", "/worldcup_img03.png"]
  },
    {
    id: 4,
    title: "Museu Digital Da Igualdade",
    description: "Um projeto criativo que busca promover a igualdade entre culturas, apresentado no ENEX 2026.",
    techs: [ "Java Script", "HTML-5", "CSS"],
    github: "https://github.com/Printkaue/Museu-Digital",
    demo: "https://museu-digital.onrender.com",
    image: ["/Captura de tela 2026-07-12 121315.png", "/Captura de tela 2026-07-12 121250.png", "/Captura de tela 2026-07-12 121229.png", "/Captura de tela 2026-07-12 121206.png", "/Captura de tela 2026-07-12 121138.png"]
  }
];