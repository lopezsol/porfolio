import { Habilidades } from "./components/habilidades/Habilidades";
import { Home } from "./components/home/Home";
import { Proyectos } from "./components/proyectos/Proyectos";
import { SobreMi } from "./components/sobreMi/SobreMi";

function App() {
  return (
    <>
      <Home />
      <Proyectos />
      <Habilidades />
      <SobreMi />
      <footer className="container"></footer>
    </>
  );
}

export default App;
