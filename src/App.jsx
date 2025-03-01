import { Footer } from "./components/footer/Footer";
import { Habilidades } from "./components/habilidades/Habilidades";
import { Home } from "./components/home/Home";
import { Navbar } from "./components/navbar/Navbar";
import { Proyectos } from "./components/proyectos/Proyectos";
import { SobreMi } from "./components/sobreMi/SobreMi";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Proyectos />
      <Habilidades />
      <SobreMi />
      <Footer />
    </>
  );
}

export default App;
