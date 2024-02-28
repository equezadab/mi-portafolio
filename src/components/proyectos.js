import React, {useState, useRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from "./CostumHooks";
import { faChrome } from "@fortawesome/free-brands-svg-icons";

const Proyectos = () => {
    const [listaProyectos] = useState([
        {
            name: 'Práctica Profesional',
            des: 'Desarrolló de aplicación web Notarium.',
            mission: 'Participé como FullStack Developer y fui parte del diseño',
            language: 'HTML5, CSS3, Angular, TypeScript y PostgreSQL',
            web:'',
            images: '/web-practica.png'
          },
          {
            name: 'Filtrador de Noticias',
            des: 'Consumo de una Api(newsapi) para filtrar noticias, según país y categoría',
            mission: 'FullStack Developer',
            language: 'Angular y Typescript',
            web:'https://filtrador-noticias.netlify.app/',
            images: '/web-apiNoticias.PNG'
          },
          {
            name: 'Landing-Page para emprendimiento Familiar - Aún en desarrollo',
            des: 'Página para mostrar información y algunos productos',
            mission: 'FullStack Developer',
            language: 'React y jsx',
            web: 'https://eljardindeemilia.netlify.app/',
            images: '/web-jardin-emilia.png'
          },
        
    ])
    const divs = useRef([]);
    const scrollTab = useRef();
    CustomHook(scrollTab, divs);
    return (
        <section className='proyectos' ref={scrollTab}>
            <div className="title" ref={(el) => el && divs.current.push(el)}>
                Mis Proyectos
            </div>
            <div className="des" ref={(el) => el && divs.current.push(el)}>
               Algunos de los proyectos realizados.
            </div>
            <div className="lista" ref={(el) => el && divs.current.push(el)}>
                {
                listaProyectos.map((value, key) => (
                    <div className='item' key={key}>
                    <div className="images">
                        <img src={value.images} alt="" />
                    </div>
                    <div className="content">
                        <h3>{value.name}</h3>
                        <div className="des">{value.des}</div>
                        <div className="mission">
                            <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                            <div>
                                <h4>Cargo</h4>
                                <div className="des">{value.mission}</div>
                            </div>
                        </div>
                        <div className="mission">
                            <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                            <div>
                                <h4>Languajes</h4>
                                <div className="des">{value.language}</div>
                            </div>
                        </div>
                        {value.web &&
                        <div className="mission">
                            <div><FontAwesomeIcon icon={faChrome} /></div>
                            <div>
                                <h4>Página Web</h4>
                                <div className="des"><a className="button-link" href={value.web} target="_blank" rel="noopener noreferrer">Ir a web</a></div>
                            </div>
                        </div>
                        }
                    </div>
                    </div>
                ))
                }
            </div>
    </section>
    )
}

export default Proyectos