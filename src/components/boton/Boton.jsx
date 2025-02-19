import "./boton.css";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { IoIosLink } from "react-icons/io";

export function Boton({ tipo, url_proyecto }) {
  const TIPOS = {
    curriculum: "Currículum",
    linkedin: "LinkedIn",
    github: "GitHub",
    correo: "Correo",
    sitioWeb: "Sitio Web",
  };

  const URL = {
    curriculum: "/documents/CV Lopez Rios Sol 2025.pdf",
    linkedin: "https://www.linkedin.com/in/lrsol/",
    github: url_proyecto || "https://github.com/lopezsol",
    correo: "mailto:lopezrios.sol@gmail.com",
    sitioWeb: url_proyecto,
  };

  const ICONOS = {
    curriculum: <IoCloudDownloadOutline className="icono" />,
    linkedin: <CiLinkedin className="icono" />,
    github: <FiGithub className="icono-github" />,
    correo: <CiMail className="icono" />,
    sitioWeb: <IoIosLink className="icono-github" />,
  };
  return (
    <>
      <a
        href={URL[tipo]}
        target="_blank"
        className="boton boton-texto"
        download
      >
        {ICONOS[tipo]}
        {TIPOS[tipo]}
      </a>

      <a
        href={URL[tipo]}
        target="_blank"
        className="boton boton-icono"
        aria-label={TIPOS[tipo]}
        download
      >
        {ICONOS[tipo]}
      </a>
    </>
  );
}
