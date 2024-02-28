import React, {useState, useRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from "./CostumHooks";

const Proyectos = () => {
    const [listaProyectos] = useState([
        {
            name: 'Práctica Profesional',
            des: 'Desarrolló de aplicación web Notarium.',
            mission: 'Participé como FullStack Developer y fui parte del diseño',
            language: 'HTML5, CSS3, Angular, TypeScript y PostgreSQL',
            images: '/project1.PNG'
          },
          {
            name: 'Project Real-time chating in website',
            des: 'Eu voluptate sit do labore consectetur in ad esse qui laborum ad eiusmod. Esse ea velit culpa exercitation anim enim reprehenderit. Fugiat nostrud non dolore aliquip quis in ea amet duis.',
            mission: 'Back-end Developer, system analysis and design',
            language: 'HTML5, CSS3, React JS, SockerIO,...',
            images: '/project2.PNG'
          },
          {
            name: 'Project Real-time chating in website',
            des: 'Eu voluptate sit do labore consectetur in ad esse qui laborum ad eiusmod. Esse ea velit culpa exercitation anim enim reprehenderit. Fugiat nostrud non dolore aliquip quis in ea amet duis.',
            mission: 'Back-end Developer, system analysis and design',
            language: 'HTML5, CSS3, React JS, SockerIO,...',
            images: '/avatart.png'
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis quae veniam amet nesciunt voluptatibus quis consectetur consequatur quisquam harum.
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
                                <h4>Objetivo Proyecto</h4>
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
                    </div>
                    </div>
                ))
                }
            </div>
    </section>
    )
}

export default Proyectos