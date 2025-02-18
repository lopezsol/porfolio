import "./boton.css";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

export function Boton({ tipo }) {
  const TIPOS = {
    curriculum: "Currículum",
    linkedin: "LinkedIn",
    github: "GitHub",
    correo: "Correo",
  };

  const URL = {
    curriculum: "/documents/CV Lopez Rios Sol 2025.pdf",
    linkedin: "https://www.linkedin.com/in/lrsol/",
    github: "https://github.com/lopezsol",
    correo: "mailto:lopezrios.sol@gmail.com",
  };

  const ICONOS = {
    curriculum: <IoCloudDownloadOutline className="icono" />,
    linkedin: <CiLinkedin className="icono" />,
    github: <FiGithub className="icono-github" />,
    correo: <CiMail className="icono" />,
  };
  return (
    <>
      <a href={URL[tipo]} target="_blank" className="boton boton-texto" download>
        {ICONOS[tipo]}
        {TIPOS[tipo]}
      </a>

      <a href={URL[tipo]} target="_blank" className="boton boton-icono" download>
        {ICONOS[tipo]}
      </a>
    </>
  );
}
