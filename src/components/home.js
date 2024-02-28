import React, {useRef} from "react";
import CustomHook from "./CostumHooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


const Home = () => {
    const scrollTab = useRef();
    CustomHook(scrollTab);
    return (
        <section className="home" ref={scrollTab}>
            <div className="contenido">
                <div className="nombre">
                    MI NOMBRE ES <span>ESTEFANY QUEZADA</span>
                </div>
                <div className="descripcion">
                Profesional de TI apasionada por el desarrollo de software, con enfoque en el desarrollo web. Habilidades en FrontEnd y BackEnd demostradas en prácticas. Capacidad para aprender y adaptarse rápidamente, trabajando efectivamente en equipos de desarrollo.
                </div>
                <div className="botones">
                    <a href="/EstefanyQuezada.pdf" className="botonCV" target="_black" rel="noopener noreferrer">Descarga mi CV </a>
                    <a className="iconoHome" href="https://www.linkedin.com/in/estefany-quezada-0402a2247/"><FontAwesomeIcon className="icono" icon={faLinkedin}></FontAwesomeIcon></a>
                    <a className="iconoHome" href="https://github.com/equezadab"><FontAwesomeIcon className="icono" icon={faGithub}></FontAwesomeIcon></a>
                </div>
            </div>
            <div className="avatar">
                <div className="card">
                    <img src="/avatart.png" alt=""></img>
                    <div className="info">
                        <div>FullStack Developer</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home