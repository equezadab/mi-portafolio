import React, {useRef, useState} from "react";
import CustomHook from "./CostumHooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contacto = () => {
    const [listaContactos] = useState([
        {
            titulo:'Número Teléfonico',
            valor:'+56937493263'
        }
        ,
        {
            titulo:'Correo Eléctronico',
            valor:'estefanyquezadab@gmail.com'
        }
        ,
        {
            titulo:'Linkedin',
            icon: faLinkedin
        }

    ])
    const divs = useRef([]);
    const scrollTab = useRef();
    CustomHook(scrollTab, divs);
    return (
       <section className="contacto" ref={scrollTab}>
            <div className="titulo" ref={(el) => el && divs.current.push(el)}>
                Contáctame
            </div>
            <div className="des" ref={(el) => el && divs.current.push(el)}>
                Puedes hablarme por estos medios.
            </div>
            <div className="lista" ref={(el) => el && divs.current.push(el)}>
                <div className="card">
                    {
                        listaContactos.map((value, key) => (
                            <div className='item' key={key}>
                                
                                    <h3>{value.titulo}</h3>
                                    <div>{value.valor}</div>
                                    <a href="https://www.linkedin.com/in/estefany-quezada-0402a2247/"><FontAwesomeIcon className="icono" icon={value.icon}></FontAwesomeIcon></a>
                                </div>
                
                    ))
                }</div>
            </div>
       </section>
    )
}

export default Contacto