import React from "react";
import instafoto from "../img/instafoto.png";
import tienda from "../img/tienda.png";
import blogvideojuegos from "../img/blogvideojuegos.png";
import cdc from "../img/cdc.png";
import adminpacientes from "../img/adminpacientes.png";
import apitiempo from "../img/apitiempo.png";
import gastosemanal from "../img/gastosemanal.png";
import cotizador from "../img/cotizador.png";
import pokemon from "../img/pokemon.png";
import snake from "../img/snake.png";
import python from "../img/python.png";
import esizon from "../img/esizon.png";



export const Projects = () => {

    return (
        <div>
            <article class="container projects-category">
                <h1>Mis Proyectos</h1>
                <p class="">
                    Llevo varios meses realizando proyectos personales aplicando todos los conocimientos que voy adquiriendo en
                    el maravilloso mundo de la <i>web</i>.
                </p>
                <br />
                <p class="">Aquí te los comparto.</p>
            </article>

            <section class="projects-list">
                <article class="project">
                    <a href="https://github.com/rafarc97/PHP-LARAVEL-SYMFONY/tree/master/LARAVEL/PROJECTS/instagramAppLaravel"
                        target="_blank" rel="noopener">
                        <img src={instafoto} alt="Instafoto App" loading="lazy" class="img-project" />
                    </a>
                    <div>
                        <h3>InstaFoto</h3>
                        <p>Se trata de una aplicación similar a instagram desarrollado bajo el framework <i>Laravel</i> y <i>MySQL</i> para las <i>BBDD</i>.

                        </p>

                        <p class="text-right">
                            <a href="https://github.com/rafarc97/PHP-LARAVEL-SYMFONY/tree/master/LARAVEL/PROJECTS/instagramAppLaravel" target="_blank" rel="noopener">
                                Códigos del proyecto
                            </a>
                        </p>

                    </div>
                </article>

                <article class="project">
                    <a href="https://github.com/rafarc97/PHP-LARAVEL-SYMFONY/tree/master/NATIVE-PHP/PROJECTS/TiendaCamisetasPHP"
                        target="_blank" rel="noopener">
                        <img src={tienda}
                            alt="Tienda Online" loading="lazy" class="img-project" />
                    </a>
                    <div>
                        <h3>Tienda Online</h3>
                        <p>Tienda Online Virtual hecha con <i>PHP nativo</i> y <i>MySQL</i> para las <i>BBDD</i>.</p>
                        <p class="text-right">
                            <a href="https://github.com/rafarc97/PHP-LARAVEL-SYMFONY/tree/master/NATIVE-PHP/PROJECTS/TiendaCamisetasPHP" target="_blank" rel="noopener">
                                Códigos del proyecto
                            </a>
                        </p>
                    </div>
                </article>
                <article class="project">
                    <a href="https://github.com/rafarc97/PHP-LARAVEL-SYMFONY/tree/master/NATIVE-PHP/PROJECTS/Blog"
                        target="_blank" rel="noopener">
                        <img src={blogvideojuegos}
                            alt="Blog Videojuegos" loading="lazy" class="img-project" />
                    </a>
                    <div>
                        <h3>Blog Videojuegos</h3>
                        <p>Blog de videojuegos en <i>PHP nativo</i> para compartir tus publicaciones con tus amigos. <i>MySQL</i> para las <i>BBDD</i></p>
                        <p class="text-right">
                            <a href="https://github.com/rafarc97/PHP-LARAVEL-SYMFONY/tree/master/NATIVE-PHP/PROJECTS/Blog" target="_blank" rel="noopener">
                                Códigos del proyecto
                            </a>
                        </p>
                    </div>
                </article>

                <article class="project">
                    <a href="https://github.com/rafarc97/JavaScript/tree/master/Projects/CDC"
                        target="_blank" rel="noopener">
                        <img src={cdc}
                            alt="Club Deportivo Chiclanero" loading="lazy" class="img-project" />
                    </a>
                    <div>
                        <h3>Club Deportivo Chiclanero</h3>
                        <p>Maquetación inicial hecha en HTML, CSS y el Framework Bootstrap la cual desarrollé como idea inicial para la actual página web del Club Deportivo Chiclanero.</p>
                        <p class="text-right">
                            <a href="https://github.com/rafarc97/JavaScript/tree/master/Projects/CDC" target="_blank" rel="noopener">
                                Códigos del proyecto
                            </a>
                        </p>
                    </div>
                </article>

                <article class="project">
                    <a href="https://github.com/rafarc97/ReactJS/tree/master/Administrador%20de%20Pacientes"
                        target="_blank" rel="noopener">
                        <img src={adminpacientes}
                            alt="Administrador de Pacientes" loading="lazy" class="img-project" />
                    </a>
                    <div>
                        <h3>Aministrador de Pacientes</h3>
                        <p>Aplicación en <i>ReactJS</i> para poder administrar las citas de tus pacientes.</p>
                        <p class="text-right">
                            <a href="https://github.com/rafarc97/ReactJS/tree/master/Administrador%20de%20Pacientes" target="_blank" rel="noopener">
                                Códigos del proyecto
                            </a>
                        </p>
                    </div>
                </article>
                <article class="project">
                    <a href="https://github.com/rafarc97/ReactJS/tree/master/Clima"
                        target="_blank" rel="noopener">
                        <img src={apitiempo}
                            alt="El tiempo" loading="lazy" class="img-project" />
                    </a>
                    <div>
                        <h3>El Tiempo</h3>
                        <p>Aplicación en <i>ReactJS</i> que consume una API para obtener el tiempo.</p>
                        <p class="text-right">
                            <a href="https://github.com/rafarc97/ReactJS/tree/master/Clima" target="_blank" rel="noopener">
                                Códigos del proyecto
                            </a>
                        </p>
                    </div>
                </article>

                <article class="project">
                    <a href="https://github.com/rafarc97/ReactJS/tree/master/Administrador%20Gasto%20Semanal"
                        target="_blank" rel="noopener">
                        <img src={gastosemanal}
                            alt="Gasto Semanal" loading="lazy" class="img-project" />
                    </a>
                    <div>
                        <h3>Gasto Semanal</h3>
                        <p>Aplicación en <i>ReactJS</i> para poder guardar tus gastos semanales y administrar tus compras mucho mejor.</p>
                        <p class="text-right">
                            <a href="https://github.com/rafarc97/ReactJS/tree/master/Administrador%20Gasto%20Semanal" target="_blank" rel="noopener">
                                Códigos del proyecto
                            </a>
                        </p>
                    </div>
                </article>

                <article class="project">
                    <a href="https://github.com/rafarc97/ReactJS/tree/master/Cotizador%20de%20Seguros"
                        target="_blank" rel="noopener">
                        <img src={cotizador}
                            alt="Cotizador Seguros" loading="lazy" class="img-project" />
                    </a>
                    <div>
                        <h3>Cotizador Seguros</h3>
                        <p>Aplicación en <i>ReactJS</i> para calcular los diferentes precios sel seguro de tuc coche en función de distintas variables.</p>
                        <p class="text-right">
                            <a href="https://github.com/rafarc97/ReactJS/tree/master/Cotizador%20de%20Seguros" target="_blank" rel="noopener">
                                Códigos del proyecto
                            </a>
                        </p>
                    </div>
                </article>

                <article class="project">
                    <a href="https://github.com/rafarc97/JavaScript/tree/master/Projects/JavaScriptGames/MemoryGame"
                        target="_blank" rel="noopener">
                        <img src={pokemon}
                            alt="Memory Pokemon Game" loading="lazy" class="img-project" />
                    </a>
                    <div>
                        <h3>Memory Pokemon</h3>
                        <p>Juego de pokemons realizado en <i>Vanilla Javascript</i>.</p>
                        <p class="text-right">
                            <a href="https://github.com/rafarc97/JavaScript/tree/master/Projects/JavaScriptGames/MemoryGame" target="_blank" rel="noopener">
                                Códigos del proyecto
                            </a>
                        </p>
                    </div>
                </article>

                <article class="project">
                    <a href="https://github.com/rafarc97/JavaScript/tree/master/Projects/JavaScriptGames/Snake"
                        target="_blank" rel="noopener">
                        <img src={snake}
                            alt="Snake" loading="lazy" class="img-project" />
                    </a>
                    <div>
                        <h3>Snake</h3>
                        <p>El famoso juego Snake desarrollado en <i>Vanilla Javascript</i>.</p>
                        <p class="text-right">
                            <a href="https://github.com/rafarc97/JavaScript/tree/master/Projects/JavaScriptGames/Snake" target="_blank" rel="noopener">
                                Códigos del proyecto
                            </a>
                        </p>
                    </div>
                </article>

                <article class="project">
                    <a href="https://github.com/rafarc97/smallProjects/tree/master/APIRestBottle"
                        target="_blank" rel="noopener">
                        <img src={python}
                            alt="Administrador habitaciones Hotel" loading="lazy" class="img-project" />
                    </a>
                    <div>
                        <h3>Esihotel</h3>
                        <p>Aplicación de Escritorio para aministrador las habitaciones de tu hotel desarrollado con <i>Python</i> y <i>MySQLite</i>.</p>
                        <p class="text-right">
                            <a href="https://github.com/rafarc97/smallProjects/tree/master/APIRestBottle" target="_blank" rel="noopener">
                                Códigos del proyecto
                            </a>
                        </p>
                    </div>
                </article>

                <article class="project">
                    <a href="https://github.com/rafarc97/smallProjects/tree/master/ESIzon"
                        target="_blank" rel="noopener">
                        <img src={esizon}
                            alt="Tienda Online" loading="lazy" class="img-project" />
                    </a>
                    <div>
                        <h3>Esizon</h3>
                        <p>Proyecto de Universidad: Tienda Online desarrollada en lenguaje de programación <i>C</i>.</p>
                        <p class="text-right">
                            <a href="https://github.com/rafarc97/smallProjects/tree/master/ESIzon" target="_blank" rel="noopener">
                                Códigos del proyecto
                            </a>
                        </p>
                    </div>
                </article>
            </section>

        </div>
    );
};