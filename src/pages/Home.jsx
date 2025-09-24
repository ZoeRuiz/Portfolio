import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import HomeDesktop      from './HomeDesktop';
import Carousel         from '../components/Carousel';
import '../styles/Home.css';

import heroDesktopImg from '../assets/imagen-desktop.png';
import heroTabletImg  from '../assets/hero-blob-tablet.png';
import heroMobileImg  from '../assets/hero-blob.png';

import jsGif    from '../assets/js.gif';
import htmlGif  from '../assets/HTML5.gif';
import cssGif   from '../assets/Css.gif';
import reactGif from '../assets/icono-react.gif';
import nodeGif  from '../assets/nodejs.gif';
import sqlGif   from '../assets/sql.gif';

import nextJsGif from '../assets/nextjs.gif';
import tsGif     from '../assets/TypeScript.gif';
import angularGif from '../assets/angular.gif'

import figmaGif      from '../assets/figma.gif';
import photoshopGif from '../assets/photoshop.gif';
import illustratorGif from '../assets/illustrator.gif';
import procreate     from '../assets/procreate.webp';
import wordpressGif  from '../assets/wordpress.gif';
import wooGif        from '../assets/woocomerce.gif';
import postmanGif    from '../assets/postman.gif';
import slackGif      from '../assets/slack.gif';
import notionGif     from '../assets/notion.gif';
import githubGif     from '../assets/github.gif';

export default function Home() {
  const isDesktop = useMediaQuery('(min-width:1024px)');
  const isMobile  = useMediaQuery('(max-width:767px)');
  const fullText  = '¡Hola, soy Zoe Ruiz!';
  const [displayedText, setDisplayedText] = useState('');

  // Typewriter effect
  useEffect(() => {
    let idx = 0;
    const timer = setInterval(() => {
      setDisplayedText(fullText.slice(0, idx + 1));
      idx++;
      if (idx > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, [fullText]);

  // Desktop fallback
  if (isDesktop) return <HomeDesktop />;

  // Datos de las secciones
  const skills = [
    { icon: jsGif,    label: 'JavaScript' },
    { icon: htmlGif,  label: 'HTML5' },
    { icon: cssGif,   label: 'CSS3' },
    { icon: reactGif, label: 'React' },
    { icon: nodeGif,  label: 'Node.js' },
    { icon: sqlGif,   label: 'SQL' },
  ];
  const learnings = [
    { icon: nextJsGif, label: 'NextJs' },
    { icon: tsGif,     label: 'TypeScript' },
    { icon: angularGif,     label: 'Angular' },

  ];
  const others = [
    { icon: figmaGif,       label: 'Figma' },
    { icon: photoshopGif,  label: 'Photoshop' },
    { icon: illustratorGif, label: 'Illustrator' },
    { icon: procreate,      label: 'Procreate' },
    { icon: wordpressGif,   label: 'WordPress' },
    { icon: wooGif,         label: 'WooCommerce' },
    { icon: postmanGif,     label: 'Postman' },
    { icon: slackGif,       label: 'Slack' },
    { icon: notionGif,      label: 'Notion' },
    { icon: githubGif,      label: 'GitHub' },
  ];

  // Render limpio sin recuadro
  const renderCleanCard = ({ icon, label }) => (
    <div className="clean-card">
      <img src={icon} alt={label} />
      <span>{label}</span>
    </div>
  );

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
               Profesional multidisciplinar que une el mundo del diseño gráfico y la tecnología.  
               Llevo varios años creando ilustraciones, banners y logotipos, y en 2023 di el salto al UX/UI: diseño de wireframes, prototipos interactivos y pruebas de usabilidad para garantizar interfaces claras y accesibles. También maqueto pixel-perfect responsive en HTML y CSS y, tras completar el Bootcamp FullStack Developer en mayo de 2025, desarrollo frontends con React y gestiono la lógica backend, creando soluciones web completas.
          </p>            
            <p className="description description-full">
              Combino creatividad y un enfoque centrado en el usuario para diseñar interfaces intuitivas, accesibles y visualmente impactantes.
            </p>
          </div>

          {/* SECCIÓN “Manejo y uso” */}
          <div className="skills-section">
            <h3 className="skills-heading">Manejo y uso:</h3>
            {isMobile ? (
              <Carousel
                items={skills}
                renderItem={renderCleanCard}
                slidesPerView={2}
              />
            ) : (
              <div className="skills-grid">
                {skills.map((s, i) => (
                  <div key={s.label || i} className="clean-card">
                    <img src={s.icon} alt={s.label} />
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* SECCIÓN “Estoy aprendiendo” */}
          <div className="learning-section">
            <h3 className="learning-heading">Estoy aprendiendo:</h3>
            {isMobile ? (
              <Carousel
                items={learnings}
                renderItem={renderCleanCard}
                slidesPerView={2}
              />
            ) : (
              <div className="learning-grid">
                {learnings.map((l, i) => (
                  <div key={l.label || i} className="clean-card">
                    <img src={l.icon} alt={l.label} />
                    <span>{l.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* SECCIÓN “Otras herramientas” */}
          <section className="other-skills-section">
            <h3 className="other-skills-heading">
              Otras herramientas y plataformas que manejo
            </h3>
            {isMobile ? (
              <Carousel
                items={others}
                renderItem={renderCleanCard}
                slidesPerView={2}
              />
            ) : (
              <div className="other-skills-grid">
                {others.map((o, i) => (
                  <div key={o.label || i} className="clean-card">
                    <img src={o.icon} alt={o.label} />
                    <span>{o.label}</span>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* METODOLOGÍAS */}
          <section className="methodologies-section">
            <h4>Metodologías, buenas prácticas y más</h4>
            <p>
              SCRUM • Kanban • SEO • Mobile first • Design Thinking • Agile • Pixel Perfect
            </p>
          </section>

          {/* CONTACTO */}
          <h3 className="contact-text">Puedes contactar conmigo por:</h3>
          <div className="hero-buttons hero-buttons--bottom">
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

        {/* DERECHA: imagen + typewriter */}
        <div className="hero-image-wrapper">
          <picture className="hero-image">
            <source media="(min-width:1024px)" srcSet={heroDesktopImg} />
            <source media="(min-width:768px)"  srcSet={heroTabletImg}  />
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
