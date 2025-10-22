import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import HomeDesktop from './HomeDesktop';
import Carousel from '../components/Carousel';
import '../styles/Home.css';

import heroDesktopImg from '../assets/imagen-desktop.png'; // Imagen sin bocadillo
import jsGif from '../assets/js.gif';
import htmlGif from '../assets/HTML5.gif';
import cssGif from '../assets/Css.gif';
import reactGif from '../assets/icono-react.gif';
import nodeGif from '../assets/nodejs.gif';
import sqlGif from '../assets/sql.gif';
import nextJsGif from '../assets/nextjs.gif';
import tsGif from '../assets/TypeScript.gif';
import angularGif from '../assets/angular.gif';
import figmaGif from '../assets/figma.gif';
import photoshopGif from '../assets/photoshop.gif';
import illustratorGif from '../assets/illustrator.gif';
import procreate from '../assets/procreate.webp';
import wordpressGif from '../assets/wordpress.gif';
import wooGif from '../assets/woocomerce.gif';
import postmanGif from '../assets/postman.gif';
import slackGif from '../assets/slack.gif';
import notionGif from '../assets/notion.gif';
import githubGif from '../assets/github.gif';

export default function Home() {
  const isDesktop = useMediaQuery('(min-width:1024px)');
  const isMobile  = useMediaQuery('(max-width:767px)');
  const fullText  = '¡Hola, soy Zoe R.!';
  const [displayedText, setDisplayedText] = useState('');

  // Typewriter effect
useEffect(() => {
  let idx = 0;
  const timer = setInterval(() => {
    idx++;
    setDisplayedText(fullText.slice(0, idx));
    if (idx === fullText.length) clearInterval(timer);
  }, 100);

  return () => clearInterval(timer);
}, []);

  if (isDesktop) return <HomeDesktop />;

  const skills = [
    { icon: jsGif, label: 'JavaScript' },
    { icon: htmlGif, label: 'HTML5' },
    { icon: cssGif, label: 'CSS3' },
    { icon: reactGif, label: 'React' },
    { icon: nodeGif, label: 'Node.js' },
    { icon: sqlGif, label: 'SQL' },
  ];
  const learnings = [
    { icon: nextJsGif, label: 'NextJs' },
    { icon: tsGif, label: 'TypeScript' },
    { icon: angularGif, label: 'Angular' },
  ];
  const others = [
    { icon: figmaGif, label: 'Figma' },
    { icon: photoshopGif, label: 'Photoshop' },
    { icon: illustratorGif, label: 'Illustrator' },
    { icon: procreate, label: 'Procreate' },
    { icon: wordpressGif, label: 'WordPress' },
    { icon: wooGif, label: 'WooCommerce' },
    { icon: postmanGif, label: 'Postman' },
    { icon: slackGif, label: 'Slack' },
    { icon: notionGif, label: 'Notion' },
    { icon: githubGif, label: 'GitHub' },
  ];

  const renderCleanCard = ({ icon, label }) => (
    <div className="clean-card">
      <img src={icon} alt={label} />
      <span>{label}</span>
    </div>
  );

  return (
    <section className="hero" id="about">
      <div className="hero-container">
        <div className="hero-content-left">
          <div className="hero-text">
            <p className="subheadline">
              UX/UI Designer, Graphic Designer &amp; FullStack Developer
            </p>
            <p className="description">
              Trabajo en la intersección entre diseño y tecnología. Empecé diseñando ilustraciones, banners y logotipos, pero pronto descubrí que podía ir más allá: en 2023 me sumergí en el mundo del UX/UI. Para mí, UX/UI no es solo diseñar interfaces bonitas, sino pensar en cómo las personas las usan: desde wireframes y prototipos interactivos hasta pruebas de usabilidad, mi objetivo es que cada producto sea intuitivo, accesible y agradable de navegar. Un buen diseño UX/UI hace que la tecnología se sienta natural, que los usuarios entiendan qué hacer sin esfuerzo y disfruten cada interacción.
              Pero no me quedo solo en la parte visual: maqueto interfaces pixel-perfect y responsive en HTML y CSS, y tras completar el Bootcamp FullStack Developer en 2025, desarrollo frontends con React y gestiono la lógica backend, llevando mis ideas hasta soluciones web completas y funcionales.
            </p>           
            <p className="description description-full">
              Combino creatividad y un enfoque centrado en el usuario para diseñar interfaces intuitivas, accesibles y visualmente impactantes.
            </p>
          </div>

          <div className="skills-section">
            <h3 className="skills-heading">Manejo y uso:</h3>
            {isMobile ? (
              <Carousel items={skills} renderItem={renderCleanCard} slidesPerView={2} />
            ) : (
              <div className="skills-grid">{skills.map(renderCleanCard)}</div>
            )}
          </div>

          <div className="learning-section">
            <h3 className="learning-heading">Estoy aprendiendo:</h3>
            {isMobile ? (
              <Carousel items={learnings} renderItem={renderCleanCard} slidesPerView={2} />
            ) : (
              <div className="learning-grid">{learnings.map(renderCleanCard)}</div>
            )}
          </div>

          <section className="other-skills-section">
            <h3 className="other-skills-heading">Otras herramientas y plataformas que manejo</h3>
            {isMobile ? (
              <Carousel items={others} renderItem={renderCleanCard} slidesPerView={2} />
            ) : (
              <div className="other-skills-grid">{others.map(renderCleanCard)}</div>
            )}
          </section>

          <section className="methodologies-section">
            <h4>Metodologías, buenas prácticas y más</h4>
            <p>
              SCRUM • Kanban • SEO • Mobile first • Design Thinking • Agile • Pixel Perfect
            </p>
          </section>

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

        <div className="hero-image-wrapper">
          <picture className="hero-image">
            <source media="(min-width:1024px)" srcSet={heroDesktopImg} />
            <source media="(min-width:768px)" srcSet={heroDesktopImg} />
            <img src={heroDesktopImg} alt="Ilustración Zoe" />
          </picture>
          <div className="title-wrapper">
            <h1 className="typewriter-text">{displayedText}</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
