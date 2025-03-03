import { useEffect } from "react";
import "./navbar.css";

const navItems = [
  {
    title: "Inicio",
    label: "inicio",
    url: "/#",
  },
  {
    title: "Proyectos",
    label: "proyectos",
    url: "/#proyectos",
  },
  {
    title: "Sobre mí",
    label: "sobre-mi",
    url: "/#sobre-mi",
  },
  {
    title: "Contacto",
    label: "contacto",
    url: "mailto:lopezrios.sol@gmail.com",
  },
];

export function Navbar() {

  useEffect(() => {
    const navigation = document.querySelector(".nav-principal");

    if (navigation) {
      const navigationHeight = navigation.offsetHeight;
      document.documentElement.style.setProperty(
        "--scroll-padding",
        `${navigationHeight}px`
      );
    }
  }, []);

  return (
    <nav className="nav-principal">
      <ul>
        {navItems.map((link) => {
          const { url, label, title } = link;
          return (
            <li key={url}>
              <a href={url} aria-label={label}>
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
