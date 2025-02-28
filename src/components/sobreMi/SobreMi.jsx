import "./sobreMi.css";

export function SobreMi() {
  return (
    <section className="container">
      <h1 className="titulo-seccion">&lt;/&gt; Sobre mí</h1>
      <article className="sobre-mi">
        <img src="/images/foto-perfil.webp" alt="" />
        <div>
          <p>
            Me llamo <b className="verde">María Sol López Ríos</b> y soy de
            <b className="verde"> Chubut, Argentina</b>. Mi primer contacto con
            la programación en la universidad fue un desafío, pero cuando todo
            hizo "click", supe que quería dedicarme a ello.
          </p>
          <p>
            Mi enfoque principal está en el{" "}
            <b className="verde">desarrollo full stack</b> , pero también estoy
            interesada en el
            <span className="italic">
              {" "}
              análisis de datos, QA y soporte técnico
            </span>
            .
          </p>
          <p>
            Una de mis grandes pasiones son los
            <b className="verde"> videojuegos</b>. Creo que programar y jugar
            tienen mucho en común: en ambos casos se trata de{" "}
            <b className="verde">
              resolver desafíos, aprender de los errores y mejorar
              constantemente
            </b>
            .
          </p>
          <p>
            <b className="verde">
              Mi objetivo es seguir creciendo en el sector IT
            </b>{" "}
            y convertir ideas en soluciones reales a través del código.
          </p>
        </div>
      </article>
    </section>
  );
}
