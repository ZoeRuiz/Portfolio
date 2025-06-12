import { useState, useEffect } from 'react';
import '../styles/Home.css';

export default function Home() {
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

  return (
    <section className="hero" id="about">
      <div className="hero-container">
        {/* Texto + tipo máquina */}
        <div className="hero-text">
          <div className="title-wrapper">
            <h1 className="typewriter-text">{displayedText}</h1>
          </div>
          <p className="subheadline">
            UX/UI Designer, Graphic Designer & FullStack Developer
          </p>
          <p className="description">
            Soy diseñadora UX/UI y especialista en diseño gráfico, recién salida de un bootcamp intensivo en desarrollo frontend. 
            Me apasiona investigar las necesidades de los usuarios, crear prototipos interactivos y validar soluciones con pruebas de usabilidad. 
            Combino creatividad y un enfoque centrado en el usuario para diseñar interfaces intuitivas, accesibles y visualmente impactantes.
          </p>
        </div>

        {/* Botones CTA */}
        <div className="hero-buttons">
          <button className="btn-primary">Proyectos</button>
          <button className="btn-outline">Contactar</button>
        </div>

        {/* Ilustración */}
        <div className="hero-image">
          <img src="/hero-blob.png" alt="Ilustración Zoe con bocadillo" />
        </div>
      </div>
    </section>
  );
}
