import React from "react";

export const Ahora = () => {

    return (

        <div >
            <article class="ahora">
                <h1 class="text-center">
                    ¿Qué hago ahora mismo?
                </h1>
                <aside class="section section-ahora">
                    <img class="container" src="../assets/img/ahora.jpg" alt="¿Qué estoy haciendo ahora mismo?" loading="lazy"/>
                    <p>
                    He de decir que aprecio mucho mi calidad de vida.Respeto mi tiempo y
                    el de los demás.
                    </p>
                    <p>
                    Nunca me comprometo a realizar más proyectos de los
                    que pueda contar con mi mano 🖐🏻.
                    </p>
                    <p>
                    <i>
                    Esto me permite mantenerme enfocado e invertir de la manera más
                    inteligente posible mi tiempo y energía para dar la mayor
                    contribución posible...
                    </i>
                    </p>
                    <p class ="fluid-1 text-right">
                    <b><i>...menos pero mejor.</i></b>
                    </p>
                </aside>

                <aside class="section section-2-ahora">
                    <h3>Actualmente enfocado en:</h3>
                    <ol>
                        <li>Desarrollo web en <i><a href="https://webimpacto.agency/">WebImpacto</a></i>.</li>
                        <li>Grado en Ingeniería Informática.</li>
                        <li class="fluid-1">Desarrollo de Proyecto para <a href="http://www.millanchiclana.com/" target="_blank"
                            rel="noopener">Millán Chiclana</a>.</li>
                        <li class="fluid-1">¿Tienes un proyecto? escríbeme a...</li>
                        <a class="btn btn-success" href="mailto:rafaelrodriguezcalvente@gmail.com" target="_blank" rel="noopener">
                            <small>rafaelrodriguezcalvente@gmail.com</small>
                        </a>
                    </ol>
                    <br/>
                    <p class ="text-right">
                    <small>
                    <b><i>Última actualización: <span id="now-date">Oct 11 2020</span>.</i></b>
                    </small>
                    </p>
                </aside>
            </article>
        </div>
    );
};
