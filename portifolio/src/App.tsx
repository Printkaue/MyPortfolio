import "./App.css";
import Hero from "./Hero"
import Navbar from "./Navbar";
import Sobre from "./Sobre";
import Projetos from "./Projetos";
import Habilidades from "./Habilidades";
import Contato from "./Contato";
import Footer from "./Footer";

function App() {
  return (
    <>
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

      {/* Footer */}
      <Footer />

    </>
  );
}

export default App;
