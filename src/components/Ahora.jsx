import React from "react";
import ahora from "../img/ahora.jpg";


export const Ahora = () => {

    return (

        <div >
            <article className="ahora">
                <h1 className="text-center">
                    ¿Qué hago ahora mismo?
                </h1>
                <aside className="section section-ahora">
                    <img className="container" src={ahora} alt="¿Qué estoy haciendo ahora mismo?" loading="lazy"/>
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
                    <p className ="fluid-1 text-right">
                    <b><i>...menos pero mejor.</i></b>
                    </p>
                </aside>

                <aside className="section section-2-ahora">
                    <h3>Actualmente enfocado en:</h3>
                    <ol>
                        <li>Grado en Ingeniería Informática.</li>
                        <li className="fluid-1">Desarrollo de Portfolio para el atleta olímpico<a href="https://es.wikipedia.org/wiki/Ignacio_Fontes_Garc%C3%ADa-Balibrea" target="_blank"
                            rel="noreferrer"> Ignacio Fontes</a>.</li>
                        <li className="fluid-1">Desarrollo de Proyecto para <a href="http://www.millanchiclana.com/" target="_blank"
                            rel="noreferrer">Millán Chiclana</a>.</li>
                        <li className="fluid-1">¿Tienes un proyecto? escríbeme a...</li>
                        <a className="btn btn-success" href="mailto:rafaelrodriguezcalvente@gmail.com" target="_blank" rel="noreferrer">
                            <small>rafaelrodriguezcalvente@gmail.com</small>
                        </a>
                    </ol>
                    <br/>
                    <p className ="text-right">
                    <small>
                    <b><i>Última actualización: <span id="now-date">Dic 16 2021</span>.</i></b>
                    </small>
                    </p>
                </aside>
            </article>
        </div>
    );
};
