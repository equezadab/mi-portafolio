import React, { useState, useRef } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs, faAngular, faPython, faGit, faDev } from '@fortawesome/free-brands-svg-icons';
import CustomHook from './CostumHooks';


const Skills = () => {
    const [listaSkills] = useState([
        {
            name: 'HTML',
            icon: faHtml5
        },
        {
            name: 'CSS',
            icon: faCss3
        },
        {
            name: 'Javascript',
            icon: faJs},
        {
            name: 'ReactJs',
            icon: faReact
        },
        {
            name: 'Angular',
            icon: faAngular
        },
        {
            name: 'Python',
            icon: faPython
        },
        {
            name: 'Git',
            icon: faGit
        },
        {
            name: 'SQL',
            icon: faDev
           
        }
    ]);
    const divs = useRef([]);
    const scrollTab = useRef();
    CustomHook(scrollTab, divs);
    return (
        <section className='skills' ref={scrollTab}>
        <div className="nombre">
         Skills
        </div>
        <div className="des">
         Diferentes habilidades técnicas que he podido aprender y usar en este tiempo, entre ellas hay lenguajes, bases de datos, frameworks y herramientas.
        </div>
        <div className="lista">
         {
           listaSkills.map((value, key) => (
             <div key={key} className='item'>
               <FontAwesomeIcon icon={value.icon} />
               <h3>{ value.name }</h3>
             </div>
           ))
         }
       </div>
     </section>
    )
}

export default Skills