import "./sobreMi.css";

export function SobreMi() {
  return (
    <section className="container" id="sobre-mi">
      <h1 className="titulo-seccion">&lt;/&gt; Sobre mí</h1>
      <article className="sobre-mi">
        <img src="/images/foto-perfil.webp" alt="" />
        <div>
          <p>
            Me llamo <b className="destacado">María Sol López Ríos</b> y soy de
            <b className="destacado"> Chubut, Argentina</b>. Mi enfoque
            principal está en el{" "}
            <b className="destacado">desarrollo full stack</b> , pero también
            estoy interesada en el{" "}
            <span className="destacado-cursiva">
              análisis de datos, QA y soporte técnico
            </span>
            .
          </p>
          <p>
            Me encantan los <b className="destacado"> videojuegos</b>. Creo que
            programar y jugar tienen mucho en común: en ambos casos se trata de{" "}
            <b className="destacado">
              resolver desafíos, aprender de los errores y mejorar
              constantemente
            </b>
            .
          </p>
          <p>
            <b className="destacado">
              Mi objetivo es seguir creciendo en el sector IT
            </b>{" "}
            y convertir ideas en soluciones reales a través del código.
          </p>
        </div>
      </article>
    </section>
  );
}
