import "./boton.css";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { IoIosLink } from "react-icons/io";

export function Boton({ tipo, url_proyecto }) {
  const tipos = {
    curriculum: "Currículum",
    linkedin: "LinkedIn",
    github: "GitHub",
    correo: "Contáctame",
    sitioWeb: "Sitio Web",
  };

  const url = {
    curriculum: "/documents/CV Lopez Rios Sol 2025.pdf",
    linkedin: "https://www.linkedin.com/in/lrsol/",
    github: url_proyecto || "https://github.com/lopezsol",
    correo: "mailto:lopezrios.sol@gmail.com",
    sitioWeb: url_proyecto,
  };

  const iconos = {
    curriculum: <IoCloudDownloadOutline className="icono" />,
    linkedin: <CiLinkedin className="icono" />,
    github: <FiGithub className="icono-github" />,
    correo: <CiMail className="icono" />,
    sitioWeb: <IoIosLink className="icono-github" />,
  };

  const esDescargable = tipo === "curriculum";
  return (
    <>
      <a
        href={url[tipo]}
        target="_blank"
        className="boton boton-texto"
        download={esDescargable}
        rel="noopener noreferrer"
      >
        {iconos[tipo]}
        {tipos[tipo]}
      </a>

      <a
        href={url[tipo]}
        target="_blank"
        className="boton boton-icono"
        aria-label={tipos[tipo]}
        download={esDescargable}
        rel="noopener noreferrer"
      >
        {iconos[tipo]}
      </a>
    </>
  );
}
