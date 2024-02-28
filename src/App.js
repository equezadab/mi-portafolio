import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import Contacto from './components/contacto';
import Home from './components/home';
import Experiencia from './components/experiencia';
import Skills from './components/skills';
import Proyectos from './components/proyectos';

function App() {
  return (
   
      <main>
        <NavBar></NavBar>
        <Home></Home>
        <Experiencia></Experiencia>
        <Proyectos></Proyectos>
        <Skills></Skills>
        <Contacto></Contacto>
      </main>
      
  );
}

export default App;
