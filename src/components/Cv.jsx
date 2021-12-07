import React from "react";

export const Cv = () => {

    return (

        <div >
            <section>
                <nav class="cv-index text-center">
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

            <section class="hello hello-cv">
                <article>
                    <img src="../assets/img/me.jpg" alt="Foto retrato Rafa Calvente" />
                    <h1>Rafa Calvente</h1>
                    <p class="text-center">
                        Estudiante de Ingerniería Informática y Programador <i>Web</i>
                    </p>
                    <a href="../assets/rafacalvente-cv.pdf" target="_blank" rel="noopener"
                    >versión 🖨️ impresa</a
                    >
                </article>
            </section>

            <article id="contacto" class="cv-contact section">
                <h2 class="">contacto</h2>
                <ul class="text-left">
                    <li>Soy Rafael Rodríguez Calvente</li>
                    <li>Nací en España. Febrero 23, 1997</li>
                    <li>Vivo en Chiclana de la Fra, Cádiz</li>
                    <li class="li-small">rafaelrodriguezcalvente@gmail.com</li>
                    <li><a href="/">rafacalventeweb.es</a></li>
                </ul>
            </article>

            <article id="acerca" class="cv-about section">
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

            <article id="educacion" class="cv-edu section">
                <h2>educación</h2>
                <ul class="fluid-1">
                    <li>Eterno autodidacta.</li>
                    <li>
                        Actualmente, Ingeniería Informática en
                        <a href="https://www.uca.es/" target="_blank" rel="noopener">UCA</a>
                    </li>
                    <li>
                        2015, Bachillerato científico-tecnológico en
                        <a href="https://www.iespicasso.com/" target="_blank" rel="noopener"
                        >IES Pablo Ruíz Picasso</a
                        >
                    </li>
                    <li>
                        2014, Grado Profesional de Música, especialidad en Viola en
                        <a
                            href="https://conservatoriomanueldefalla.es/"
                            target="_blank"
                            rel="noopener"
                        >Real Conservatorio Profesional de Música</a
                        >
                    </li>
                </ul>
            </article>

            <article id="habilidades" class="cv-skills section">
                <h2>habilidades</h2>
                <ul class="">
                    <li>Programación <i>Web</i> <i>Frontend</i></li>
                    <li>Programación <i>Web</i> <i>Backend</i></li>
                    <li>Diseño y Maquetación <i>Web</i></li>
                    <li><i>UI</i> - <i>UX</i></li>
                    <li>Autodidacta</li>
                </ul>
            </article>

            <article id="tecnologias" class="cv-tech section">
                <h2>tecnologías</h2>
                <aside>
                    <img class="icon-x5" src="../assets/img/html5.svg" alt="HTML5" />
                    <img class="icon-x5" src="../assets/img/css.svg" alt="CSS" />
                    <img
                        class="icon-x5"
                        src="../assets/img/javascript.svg"
                        alt="JavaScript"
                    />
                    <img
                        class="icon-x5"
                        src="../assets/img/bootstrap.svg"
                        alt="Bootstrap"
                    />
                    <img class="icon-x5" src="../assets/img/react.svg" alt="React" />
                    <img class="icon-x5" src="../assets/img/node.svg" alt="Node" />
                    <img class="icon-x5" src="../assets/img/php.svg" alt="PHP" />
                    <img class="icon-x5" src="../assets/img/mysql.svg" alt="MySQL" />
                    <img class="icon-x5" src="../assets/img/git.svg" alt="Git" />
                    <img class="icon-x5" src="../assets/img/github.svg" alt="GitHub" />
                    <img class="icon-x5" src="../assets/img/markdown.svg" alt="MarkDown" />
                    <img class="icon-x5" src="../assets/img/jquery.svg" alt="jQuery" />
                </aside>
            </article>

            <article id="intereses" class="cv-interests section">
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
                            rel="noopener"
                        >canal en YouTube</a
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

            <article id="experiencia-profesional" class="cv-developer section">
                <h2>experiencia profesional</h2>
                <aside id="projects">
                    <a href="https://webimpacto.agency/" target="_blank" rel="noopener">
                        <figure>
                            <img
                                class="webimpacto-img"
                                src="../assets/img/webimpacto.png"
                                alt="Web Impacto"
                            />
                            <figcaption>
                                <span>Web Impacto<small>( 2020 )</small></span>
                                <small>Desarrollador Web Front/Back End.</small>
                            </figcaption>
                        </figure>
                    </a>
                    <a
                        href="http://webmusicaltalent.weebly.com/"
                        target="_blank"
                        rel="noopener"
                    >
                        <figure>
                            <img src="../assets/img/musicaltalent.jpg" alt="Musical Talent" />
                            <figcaption>
                                <span>Musical Talent <small>( 2015-2020 )</small></span>
                                <small>Violista principal de la empresa.</small>
                            </figcaption>
                        </figure>
                    </a>
                </aside>
            </article>
        </div>
    );
};


