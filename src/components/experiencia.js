import React, {useState,useRef}from "react";
import CustomHook from "./CostumHooks";

const Experiencia = () => {
    const [listaExperiencia] = useState([
        {
            empresa:'PRODUCTORA PIUM SPA',
            periodo:'23/10/2023 – 22/12/2023',
            cargo:'FullStack Developer - Práctica Profesional',
            detalles:'- Desarrollé una aplicación web Notarium desde etapa temprana.',
            detalles1:'- Programé diferentes APIs utilizando Python alojadas en AWS, asegurando la funcionalidad y la eficiencia del Backend.',
            detalles2:'- Implementé el FrontEnd de la aplicación con Angular, diseñando la interfaz y desarrollando funcionalidades clave para mejorar la experiencia del usuario.',
            detalles3:'- Colaboré estrechamente con mis pares para asegurar la integración fluida entre el FrontEnd y el BackEnd.'
        }


    ]);
    const divs = useRef([]);
    const scrollTab = useRef();
    CustomHook(scrollTab, divs);
    return (
       <section className="experiencia" ref={scrollTab}>
            <div className="empresa" ref={(el) => el && divs.current.push(el)}>
                Experiencia
            </div>
            <div className="des" ref={(el) => el && divs.current.push(el)}>
                
            </div>
            <div className="cardExperiencia">
                <div className="detalles" ref={(el) => el && divs.current.push(el)}>
                    {
                        listaExperiencia.map((value, key) => (
                            <div className='item' key={key}>
                            <h3>{value.empresa}</h3>
                            <div className="periodo">{value.periodo}</div>
                            <div className="cargo">{value.cargo}</div>
                            <div>{value.detalles}</div>
                            <div>{value.detalles1}</div>
                            <div>{value.detalles2}</div>
                            <div>{value.detalles3}</div>
                            </div>
                        ))
                    }
                </div>
        </div>
       </section>
    )                   
}

export default Experiencia