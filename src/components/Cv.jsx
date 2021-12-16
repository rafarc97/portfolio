import React from "react";
import me from "../img/me.jpg";
import html5 from "../img/html5.svg";
import css from "../img/css.svg";
import javascript from "../img/javascript.svg";
import bootstrap from "../img/bootstrap.svg";
import react from "../img/react.svg";
import node from "../img/node.svg";
import php from "../img/php.svg";
import mysql from "../img/mysql.svg";
import git from "../img/git.svg";
import github from "../img/github.svg";
import markdown from "../img/markdown.svg";
import jquery from "../img/jquery.svg";
import webimpacto from "../img/webimpacto.png";
import musicaltalent from "../img/musicaltalent.jpg";
import pdf from "../Rafael_Rodríguez_Calvente_CV_EN.pdf";

export const Cv = () => {

    return (

        <div >
            <section>
                <nav className="cv-index text-center">
                    <a href="#inicio" title="inicio">🏠</a>
                    <a href="#contacto" title="contacto">📇</a>
                    <a href="#acerca" title="acerca">🧑</a>
                    <a href="#educacion" title="educación">🎓</a>
                    <a href="#habilidades" title="habilidades">🤓</a>
                    <a href="#tecnologias" title="tecnologías">💻</a>
                    <a href="#intereses" title="intereses">🏃&zwj;♂️</a>
                    <a href="#experiencia-profesional" title="experiencia profesional"
                    >👨&zwj;💻</a
                    >
                </nav>
            </section>

            <section className="hello hello-cv">
                <article>
                    <img src={me} alt="Foto retrato Rafa Calvente" />
                    <h1>Rafa Calvente</h1>
                    <p className="text-center">
                        Estudiante de Ingerniería Informática y Programador <i>Web</i>
                    </p>
                    <a href={pdf} target="_blank" rel="noreferrer"
                    >versión 🖨️ impresa</a
                    >
                </article>
            </section>

            <article id="contacto" className="cv-contact section">
                <h2 className="">contacto</h2>
                <ul className="text-left">
                    <li>Soy Rafael Rodríguez Calvente</li>
                    <li>Nací en España. Febrero 23, 1997</li>
                    <li>Vivo en Chiclana de la Fra, Cádiz</li>
                    <li className="li-small">rafaelrodriguezcalvente@gmail.com</li>
                    <li><a href="/" target="_blank" rel="noreferrer"s>rafacalventeweb.com</a></li>
                </ul>
            </article>

            <article id="acerca" className="cv-about section">
                <h2>acerca</h2>
                <p>
                    A raíz del confinamiento vivido durante los meses de Marzo y Mayo de
                    2020 en España, fue por ello que comencé a realizar cursos en el área
                    del desarrollo <i>web</i> y posteriormente proyectos personales para
                    poner mis conocimientos en práctica.
                </p>
                <p>
                    Estoy más orientado al <i>Frontend</i>, pero también hago
                    <i>Backend</i>.
                </p>
                <p>
                    Disfruto llevar a cabo la maquetación e interactividad de interfaces
                    <i>web</i>, así como la optimización, para el buen posicionamiento de
                    sitios y aplicaciones web.
                </p>
            </article>

            <article id="educacion" className="cv-edu section">
                <h2>educación</h2>
                <ul className="fluid-1">
                    <li>Eterno autodidacta.</li>
                    <li>
                        Actualmente, Ingeniería Informática en
                        <a href="https://www.uca.es/" target="_blank" rel="noreferrer"> UCA</a>
                    </li>
                    <li>
                        2015, Bachillerato científico-tecnológico en
                        <a href="https://www.iespicasso.com/" target="_blank" rel="noreferrer"
                        > IES Pablo Ruíz Picasso</a
                        >
                    </li>
                    <li>
                        2014, Grado Profesional de Música, especialidad en Viola en
                        <a
                            href="https://conservatoriomanueldefalla.es/"
                            target="_blank"
                            rel="noreferrer"
                        > Real Conservatorio Profesional de Música</a
                        >
                    </li>
                </ul>
            </article>

            <article id="habilidades" className="cv-skills section">
                <h2>habilidades</h2>
                <ul className="">
                    <li>Programación <i>Web</i> <i>Frontend</i></li>
                    <li>Programación <i>Web</i> <i>Backend</i></li>
                    <li>Diseño y Maquetación <i>Web</i></li>
                    <li><i>UI</i> - <i>UX</i></li>
                    <li>Autodidacta</li>
                </ul>
            </article>

            <article id="tecnologias" className="cv-tech section">
                <h2>tecnologías</h2>
                <aside>
                    <img className="icon-x5" src={html5} alt="HTML5" />
                    <img className="icon-x5" src={css} alt="CSS" />
                    <img
                        className="icon-x5"
                        src={javascript}
                        alt="JavaScript"
                    />
                    <img
                        className="icon-x5"
                        src={bootstrap}
                        alt="Bootstrap"
                    />
                    <img className="icon-x5" src={react} alt="React" />
                    <img className="icon-x5" src={node} alt="Node" />
                    <img className="icon-x5" src={php} alt="PHP" />
                    <img className="icon-x5" src={mysql} alt="MySQL" />
                    <img className="icon-x5" src={git} alt="Git" />
                    <img className="icon-x5" src={github} alt="GitHub" />
                    <img className="icon-x5" src={markdown} alt="MarkDown" />
                    <img className="icon-x5" src={jquery} alt="jQuery" />
                </aside>
            </article>

            <article id="intereses" className="cv-interests section">
                <h2>intereses</h2>
                <ul>
                    <li>
                        <b>Autodidacta</b>, me encanta aprender cosas nuevas, aplicarlas y
                        enseñarlas.
                    </li>
                    <li>
                        <b><i>MusicTuber</i></b
                        >, tengo un
                        <a
                            href="https://www.youtube.com/SferaMusicalC%C3%A1diz"
                            target="_blank"
                            rel="noreferrer"
                        >canal en YouTube </a
                        >
                        donde enseño sobre el maravilloso mundo de la <i>música</i>.
                    </li>
                    <li>
                        <b>Entusiasta del <i>Fitness</i></b
                        >, hago ejercicio todos los días y llevo un estilo de vida sana.
                    </li>
                    <li><b>Triatleta</b>, corro, nado y monto en bici.</li>
                    <li>
                        <b>Amante de los perros</b>, tengo una perrita, se llama <i>Xena</i>.
                    </li>
                </ul>
            </article>

            <article id="experiencia-profesional" className="cv-developer section">
                <h2>experiencia profesional</h2>
                <aside id="projects">
                    <a href="https://webimpacto.agency/" target="_blank" rel="noreferrer">
                        <figure>
                            <img
                                className="webimpacto-img"
                                src={webimpacto}
                                alt="Web Impacto"
                            />
                            <figcaption>
                                <span>Web Impacto<small> ( 2020 )</small></span>
                                <small> Desarrollador Web Front/Back End.</small>
                            </figcaption>
                        </figure>
                    </a>
                    <a
                        href="http://webmusicaltalent.weebly.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <figure>
                            <img src={musicaltalent} alt="Musical Talent" />
                            <figcaption>
                                <span>Musical Talent <small>( 2015-2020 )</small></span>
                                <small> Violista principal de la empresa.</small>
                            </figcaption>
                        </figure>
                    </a>
                </aside>
            </article>
        </div>
    );
};