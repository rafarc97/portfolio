import React from "react";
import logo from "../img/xena.png";


export const Header = () => {

  return (
    <header className="header">
      <h2 className="logo">
        <a className="logo_a" href="./">
          <img className="icon-x2" src={logo} alt="xena" />
          <span>rafacalventeweb</span>
        </a>
      </h2>

      <nav className="nav">
        <a href="projects"> Proyectos </a>
        <a href="cv"> CV </a>
        <a href="ahora"> Ahora </a>
        <a href="contacto"> Contáctame </a>
      </nav>
    </header>
  );
};
