import "./home.css";
import { Boton } from "../boton/Boton";

export function Home() {
  return (
    <section className="container home">
      <div className="informacion-layout">
        <img
          src="/images/avatar.webp"
          alt="avatar mujer programando"
          className="avatar"
        />
        <h2 className="titulo">Desarrolladora de software</h2>
        <h1 className="nombre destacado">Sol López Ríos</h1>
        <p className="tag-disponible ">Disponible para trabajar</p>

        <p className="resumen">
          Estudiante del último año de
          <strong className="destacado"> Ingeniería en Sistemas de Información</strong>.
          <br />
          Con conocimientos en React, Java, Spring Boot y MySQL.
        </p>
        <nav className="container-botones">
          <Boton tipo="curriculum" className="primario" />
          <Boton tipo="correo" className="primario" />
          <Boton tipo="linkedin" className="primario" />
          <Boton tipo="github" className="primario" />
        </nav>
      </div>
    </section>
  );
}
