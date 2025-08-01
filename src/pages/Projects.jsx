// src/components/Projects.jsx
import React from 'react';
import '../styles/Projects.css';

// Importa tus imágenes para que Vite gestione las rutas
import ahorcadoImg from '../assets/ahorcado-juego.png';
import comercioImg  from '../assets/Comercio-gris.png';
import maquetaImg   from '../assets/Maqueta.png';

const projectData = [
  {
    title: 'El juego del Ahorcado',
    description:
      'Primer proyecto de Bootcamp FullStack Developer. Juego interactivo desarrollado con HTML, CSS y JavaScript. Incluye funcionalidad de selección de categorías, un sistema de control de intentos, música de fondo según la categoría elegida y un sonido de victoria al ganar.',
    image: ahorcadoImg,
    demoLink: 'https://authorgg.github.io/Juego-Ahorcado/',
    codeLink: 'https://github.com/ZoeRuiz/Juego-Ahorcado.git',
  },
  {
    title: 'SegundaTec',
    description:
      'Proyecto Final Bootcamp: plataforma de compra y venta de artículos de tecnología de segunda mano entre particulares. Desarrollado con Vite, React y CSS puro, consumiendo los endpoints de la API REST del backend.',
    image: comercioImg,
    demoLink: 'https://zoeruiz.github.io/PFB_Compra_Venta/',
    codeLink: 'https://github.com/ZoeRuiz/PFB_Compra_Venta.git',
  },
  {
    title: 'Maquetación web',
    description:
      'Maquetación pixel perfect y responsive, siguiendo los diseños proporcionados en Figma.',
    image: maquetaImg,
    demoLink: 'https://zoeruiz.github.io/prueba-maquetacion/',
    codeLink: 'https://github.com/ZoeRuiz/prueba-maquetacion.git',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Proyectos</h2>
      <div className="projects-grid">
        {projectData.map((proj, idx) => (
          <div
            key={idx}
            className={`project-card ${idx % 2 === 1 ? 'reverse' : ''}`}
          >
            <div className="project-content">
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-description">{proj.description}</p>
              <div className="project-links">
                <a
                  href={proj.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary btn-small"
                >
                  Demo
                </a>
                <a
                  href={proj.codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline btn-small"
                >
                  Código
                </a>
              </div>
            </div>
            <div className="project-image-wrapper">
              <img
                src={proj.image}
                alt={proj.title}
                className="project-image"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
