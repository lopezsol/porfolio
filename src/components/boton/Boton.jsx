import "./boton.css";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { IoIosLink } from "react-icons/io";

const config = {
  curriculum: {
    title: "Currículum",
    url: "/documents/CV Lopez Rios Sol 2025.pdf",
    icon: <IoCloudDownloadOutline className="btn__icono" />,
    download: true,
  },
  linkedin: {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/lrsol/",
    icon: <CiLinkedin className="btn__icono" />,
    download: false,
  },
  github: {
    title: "GitHub",
    url: "https://github.com/lopezsol",
    icon: <FiGithub className="btn__icono--sm" />,
    download: false,
  },
  correo: {
    title: "Contáctame",
    url: "mailto:lopezrios.sol@gmail.com",
    icon: <CiMail className="btn__icono" />,
    download: false,
  },
  sitioWeb: {
    title: "Sitio Web",
    url: "",
    icon: <IoIosLink className="btn__icono--sm" />,
    download: false,
  },
};

export function Boton({ tipo, url_proyecto, className }) {
  const { title, url, icon, download } = config[tipo];
  const esEstiloPrimario = className === "primario";
  const urlBtn = url_proyecto || url;

  return (
    <a
      href={urlBtn}
      target="_blank"
      className={`btn ${className ? `btn--${className}` : ""}`}
      download={download}
      rel="noopener noreferrer"
      aria-label={title}
    >
      {esEstiloPrimario && icon}
      <span className="btn__texto">{title}</span>
    </a>
  );
}
