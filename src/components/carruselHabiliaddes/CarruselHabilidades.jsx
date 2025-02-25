import "./carruselHabilidades.css";
import habilidades from "../../mocks/habilidades.json";
import { useEffect } from "react";

export function CarruselHabilidades() {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    function agregarAnimacion() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller-inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      agregarAnimacion();
    }
  }, []);

  return (
    <section className="scroller" data-direction="left" data-speed="slow">
      <div className="scroller-inner">
        {habilidades.map((habilidad) => {
          return (
            <div className="habilidad" key={habilidad.id}>
              <img
                src={habilidad.url_imagen}
                alt={habilidad.alt}
                key={habilidad.id}
              ></img>
              <p>{habilidad.nombre}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
