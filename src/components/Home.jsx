import React from "react";
import me from "../img/me.jpg";
import pdf from "../Rafael_Rodríguez_Calvente_CV_EN.pdf";
import logoFondo from "../img/logo-fondo.jpeg";


export const Home = () => {

  /* let text_src = {foto11};
  console.log(text_src);
  window.addEventListener("resize", function (event) {
    console.log(document.body.clientWidth + " wide by " + document.body.clientHeight + " high");
    if(document.body.clientWidth < 991 ){
      console.log("hola");
      let $carousel1 = document.getElementById("carousel-img-1");
      $carousel1.src = text_src;
    }
  }); */

  return (

    <div >
      <section className="hello">
        <article>
          <h2>Hola, aquí encontrarás toda mi información</h2>
          <h1>Soy Rafa Calvente</h1>
          <img src={me} alt="Foto retrato Rafa Calvente" />
        </article>
      </section>

      <section className="presentation">
        <h4>
          Hola, soy estudiante de <span>Ingeniería Informática</span> y
          <span> programador web</span> ubicado en Cádiz, España.
          <br />
          En este portafolio podrás encontrar todos mis proyectos personales
          desarrollados hasta el momento, en los cuales he practicado tecnologías
          como
          <i> HTML, CSS, Vanilla JavaScript, ReactJS, Bootstrap</i> en el
          <span> Front-End</span> y
          <i> PHP, Laravel, Symfony, NodeJs y Python</i> para el
          <span> Back-End</span>. Para más información profesional descarga mi
          <a
            href={pdf}
            target="_blank"
            className="cv-presentation"
            rel="noreferrer"
          > CV</a
          >.
        </h4>
      </section>

      <img className="logo-fondo-home" src={logoFondo} alt="Logo de Fondo"></img>
    </div>
  );
};