import "./home.css";
import { Boton } from "../boton/Boton";

export function Home() {
  return (
    <section className="container home">
      <div className="informacion-layout">
        <img
          src="/images/avatar.png"
          alt="avatar mujer programando"
          className="avatar"
        />

        <h2 className="titulo">Desarrolladora de software</h2>
        <h1 className="nombre verde">Sol López Ríos</h1>
        <p className="tag-disponible ">Disponible para trabajar</p>

        <p className="sobre-mi">
          Estudiante del último año de{" "}
          <b className="verde">Ingeniería en Sistemas de Información</b>.
          <br />
          Con conocimientos en React, Java, Spring Boot y MySQL.
        </p>
        <nav className="container-botones">
          <Boton tipo={"curriculum"} />
          <Boton tipo={"linkedin"} />
          <Boton tipo={"github"} />
          <Boton tipo={"correo"} />
        </nav>
      </div>
    </section>
  );
}
