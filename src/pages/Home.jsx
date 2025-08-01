// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import HomeDesktop from './HomeDesktop';
import '../styles/Home.css';

// Importa las imágenes para que Vite gestione las rutas correctamente
import heroDesktopImg from '../assets/imagen-desktop.png';
import heroTabletImg  from '../assets/hero-blob-tablet.png';
import heroMobileImg  from '../assets/hero-blob.png';

export default function Home() {
  // 1) Hook para detectar desktop VS móvil
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  // 2) Lógica de máquina de escribir
  const fullText = '¡Hola, soy Zoe Ruiz!';
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let idx = 0;
    const speed = 100;
    const timer = setInterval(() => {
      setDisplayedText(fullText.slice(0, idx + 1));
      idx++;
      if (idx === fullText.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [fullText]);

  // 3) Render condicional para desktop / móvil
  if (isDesktop) {
    return <HomeDesktop />;
  }

  return (
    <section className="hero" id="about">
      <div className="hero-container">
        {/* IZQUIERDA */}
        <div className="hero-content-left">
          <div className="hero-text">
            <p className="subheadline">
              UX/UI Designer, Graphic Designer &amp; FullStack Developer
            </p>
            <p className="description">
              Soy diseñadora UX/UI y especialista en diseño gráfico, recién salida
              de un bootcamp intensivo en desarrollo frontend. Me apasiona investigar
              las necesidades de los usuarios, crear prototipos interactivos y validar
              soluciones con pruebas de usabilidad. Combino creatividad y un enfoque
              centrado en el usuario para diseñar interfaces intuitivas, accesibles y
              visualmente impactantes.
            </p>
          </div>
          <div className="hero-buttons">
            <a href="mailto:zoraida.ruiz89@gmail.com" className="btn-primary">
              E-mail
            </a>
            <a
              href="https://www.linkedin.com/in/zoe-ruiz-917979336"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* DERECHA */}
        <div className="hero-image-wrapper">
          <picture className="hero-image">
            <source media="(min-width: 1024px)" srcSet={heroDesktopImg} />
            <source media="(min-width: 768px)" srcSet={heroTabletImg} />
            <img src={heroMobileImg} alt="Ilustración Zoe con bocadillo" />
          </picture>
          <div className="title-wrapper image-title">
            <h1 className="typewriter-text">{displayedText}</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
