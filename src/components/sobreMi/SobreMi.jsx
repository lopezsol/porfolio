import "./sobreMi.css";

export function SobreMi() {
  return (
    <section className="container" id="sobre-mi">
      <h1 className="titulo-seccion">&lt;/&gt; Sobre mí</h1>
      <article className="sobre-mi">
        <img src="/images/foto-perfil.webp" alt="" />
        <div>
          <p>
            Me llamo <strong className="destacado">María Sol López Ríos</strong>{" "}
            y soy de
            <strong className="destacado"> Chubut, Argentina</strong>. Mi
            enfoque principal está en el{" "}
            <strong className="destacado">desarrollo full stack</strong> , pero
            también estoy interesada en el{" "}
            <em className="destacado-cursiva">
              análisis de datos, QA y soporte técnico
            </em>
            .
          </p>
          <p>
            Me encantan los <strong className="destacado"> videojuegos</strong>.
            Creo que programar y jugar tienen mucho en común: en ambos casos se
            trata de{" "}
            <strong className="destacado">
              resolver desafíos, aprender de los errores y mejorar
              constantemente
            </strong>
            .
          </p>
          <p>
            Mi objetivo es convertir{" "}
            <strong className="destacado">ideas en soluciones reales </strong> a
            través del código, creando experiencias significativas para los
            usuarios.
          </p>
        </div>
      </article>
    </section>
  );
}
