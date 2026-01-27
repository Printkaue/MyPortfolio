import "./App.css";
import Hero from "./Hero"
import Navbar from "./Navbar";
import Sobre from "./Sobre";
import Projetos from "./Projetos";
import Habilidades from "./Habilidades";
import Contato from "./Contato";
import Footer from "./Footer";
import Cinclos from "./cinclos";

function App() {
  return (
    <>

      {/*background*/}

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* SOBRE */}
      <Sobre />

      {/* PROJETOS */}
      <Projetos />

      {/* HABILIDADES */}
      <Habilidades />

      {/* CONTATO */}
      <Contato />

      {/* efeito */}
      <Cinclos />

      {/* Footer */}
      <Footer />

    </>
  );
}

export default App;
