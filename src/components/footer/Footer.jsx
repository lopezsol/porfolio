import { Boton } from "../boton/Boton";
import "./footer.css";
export function Footer() {
  return (
    <footer className="footer container">
      <Boton tipo="correo" className="link" />
      <Boton tipo="linkedin" className="link" />
      <Boton tipo="github" className="link" />
    </footer>
  );
}
