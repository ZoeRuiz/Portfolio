// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Home   from './pages/Home';      // <-- tu componente único para todas las resoluciones
import Projects from './pages/Projects';
import Contact  from './pages/Contact';
import Footer   from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Home />       {/* sección "Sobre mí", id="about" dentro */}
        <Projects />   {/* sección Proyectos, id="projects" */}
        <Contact />    {/* sección Contacto, id="contact" */}
      </main>
      <Footer />
    </>
  );
}
