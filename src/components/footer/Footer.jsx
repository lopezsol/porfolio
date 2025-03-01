import { Boton } from "../boton/Boton";
import "./footer.css";
export function Footer() {
  return (
    <footer className="footer container">
      <Boton tipo="correo" estilo="link" />
      <Boton tipo="linkedin" estilo="link" />
      <Boton tipo="github" estilo="link" />
    </footer>
  );
}
