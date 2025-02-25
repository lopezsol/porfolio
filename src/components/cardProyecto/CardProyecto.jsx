import { Boton } from "../boton/Boton";
import "./cardProyecto.css";
export function CardProyecto({ proyecto }) {
  return (
    <article className="proyecto">
      <div className="imagen-container">
        <img src={proyecto.url_imagen} alt={proyecto.alt_imagen}/>
      </div>
      <div className="informacion-container">
        <h2 className="proyecto-nombre">{proyecto.nombre}</h2>
        <p className="proyecto-descripcion">{proyecto.descripcion}</p>
        <p className="proyecto-tecnologias">{proyecto.tecnologias}</p>
        <div className="botones-container">
          {proyecto.url_git && (
            <Boton tipo="github" url_proyecto={proyecto.url_git} />
          )}
          {proyecto.url_sitio && (
            <Boton tipo="sitioWeb" url_proyecto={proyecto.url_sitio} />
          )}
        </div>
      </div>
    </article>
  );
}
