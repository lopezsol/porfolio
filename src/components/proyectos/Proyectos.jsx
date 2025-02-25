import "./proyectos.css";
import proyectos from "../../mocks/proyectos.json";
import { CardProyecto } from "../cardProyecto/CardProyecto";
export function Proyectos() {
  return (
    <section className="proyectos container">
      <h1 className="titulo-seccion">&lt;/&gt; Proyectos</h1>
      <section className="proyectos-layout">
        {proyectos.map((proyecto) => {
          return <CardProyecto key={proyecto.id} proyecto={proyecto} />;
        })}
      </section>
    </section>
  );
}
