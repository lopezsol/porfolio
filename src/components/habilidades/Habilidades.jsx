import { CarruselHabilidades } from "../carruselHabiliaddes/CarruselHabilidades";
import "./habilidades.css";
export function Habilidades() {
  return (
    <section className="habilidades" id="habilidades">
      <div className="container">
        <h1 className="titulo-seccion">&lt;/&gt; Habilidades</h1>
        <CarruselHabilidades />
      </div>
    </section>
  );
}
