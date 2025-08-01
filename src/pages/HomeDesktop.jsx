import React from 'react';
import '../styles/HomeDesktop.css';

export default function HomeDesktop() {
  return (
    <section className="hero-desktop">
      <div className="hero-desktop__left">
        <p className="hero-desktop__subtitle">
          UX/UI Designer, Graphic Designer & FullStack Developer
        </p>
        <h1 className="hero-desktop__title">
          ¡Hola, soy <span className="highlight">Zoe Ruiz</span>!
        </h1>
        <p className="hero-desktop__text">
          Soy diseñadora UX/UI y especialista en diseño gráfico, recién salida
          de un bootcamp intensivo en desarrollo frontend. Me apasiona investigar
          las necesidades de los usuarios, crear prototipos interactivos y validar
          soluciones con pruebas de usabilidad. Combino creatividad y un enfoque
          centrado en el usuario para diseñar interfaces intuitivas, accesibles
          y visualmente impactantes.
        </p>
        <div className="hero-buttons">
            <a
              href="mailto:zoraida.ruiz89@gmail.com"
              className="btn-primary"
            >
              E-mail
            </a>
            <a
              href="https://www.linkedin.com/in/zoe-ruiz-917979336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      <div className="hero-desktop__right">
        <div className="hero-desktop__blob" aria-hidden="true" />
        <img
          className="hero-desktop__img"
          src="/imagen-desktop.png"
          alt="Ilustración Zoe"
        />
      </div>
    </section>
  );
}
