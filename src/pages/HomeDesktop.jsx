// src/pages/HomeDesktop.jsx
import React from 'react';
import '../styles/HomeDesktop.css';
// Importa la imagen para que Vite la procese correctamente
import desktopImg from '../assets/imagen-desktop.png';
// GIFs para tecnologías que domino
import jsGif    from '../assets/js.gif';
import htmlGif  from '../assets/HTML5.gif';
import cssGif   from '../assets/Css.gif';
import reactGif from '../assets/icono-react.gif';
import nodeGif  from '../assets/nodejs.gif';
import sqlGif   from '../assets/sql.gif';
// GIFs para tecnologías que aprendo
import tsGif     from '../assets/TypeScript.gif';
import nextJsGif from '../assets/nextjs.gif';
import angularGif from '../assets/angular.gif'
// Nuevos GIFs / iconos para “Otras herramientas
import figmaGif     from '../assets/figma.gif';
import photoshopGif from '../assets/photoshop.gif';
import illustratorGif from '../assets/illustrator.gif';
import procreate from '../assets/procreate.webp';
import wordpressGif from '../assets/wordpress.gif';
import wooGif      from '../assets/woocomerce.gif';
import postmanGif from '../assets/postman.gif';
import slackGif from '../assets/slack.gif';
import notionGif from '../assets/notion.gif';
import githubGif from '../assets/github.gif';

export default function HomeDesktop() {
  return (
    <>
      {/* HERO */}
      <section className="hero-desktop">
        <div className="hero-desktop__left">
          <p className="hero-desktop__subtitle">
            UX/UI Designer, Graphic Designer &amp; FullStack Developer
          </p>
          <h1 className="hero-desktop__title">
            ¡Hola, soy <span className="highlight">Zoe Ruiz</span>!
          </h1>
          <p className="hero-desktop__text">
            Profesional multidisciplinar que une el mundo del diseño gráfico y la tecnología.  
            Llevo varios años creando ilustraciones, banners y logotipos, y en 2023 di el salto al UX/UI: diseño de wireframes, prototipos interactivos y pruebas de usabilidad para garantizar interfaces claras y accesibles. También maqueto pixel-perfect responsive en HTML y CSS y, tras completar el Bootcamp FullStack Developer en mayo de 2025, desarrollo frontends con React y gestiono la lógica backend, creando soluciones web completas.
          </p>
          <p className="hero-desktop__text hero-desktop__full">
            Combino creatividad y un enfoque centrado en el usuario para diseñar interfaces intuitivas, accesibles y visualmente impactantes.
          </p>
          </div>
        <div className="hero-desktop__right">
          <img
            className="hero-desktop__img"
            src={desktopImg}
            alt="Ilustración Zoe"
          />
        </div>
      </section>

      {/* SECCIONES LADO A LADO */}
      <div className="desktop-techs">
        {/* Tecnologías que domino y uso */}
        <section className="skills-section">
          <h3 className="skills-heading">Manejo y uso</h3>
          <div className="skills-grid">
            {[
              { icon: jsGif,    label: 'JavaScript' },
              { icon: htmlGif,  label: 'HTML5'      },
              { icon: cssGif,   label: 'CSS3'       },
              { icon: reactGif, label: 'React'      },
              { icon: nodeGif,  label: 'Node.js'    },
              { icon: sqlGif,   label: 'SQL'        },
            ].map(({ icon, label }) => (
              <div key={label} className="skill-card">
                <img src={icon} alt={label} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Tecnologías que estoy aprendiendo */}
        <section className="learning-section">
          <h3 className="learning-heading">Estoy aprendiendo</h3>
          <div className="learning-grid">
            {[
              { icon: nextJsGif, label: 'Next.js'     },
              { icon: tsGif,     label: 'TypeScript' },
              { icon: angularGif,     label: 'Angular' },
              
            ].map(({ icon, label }) => (
              <div key={label} className="learning-card">
                <img src={icon} alt={label} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
      {/* — OTRAS HABILIDADES — */}
      <section className="other-skills-section">
        <h3 className="other-skills-heading">Otras herramientas y plataformas que manejo</h3>
        <div className="other-skills-grid">
          {[
            { icon: figmaGif,      label: 'Figma'        },
            { icon: photoshopGif, label: 'Photoshop'    },
            { icon: illustratorGif,label: 'Illustrator'  },
            { icon: procreate,  label: 'Procreate'    },
            { icon: wordpressGif,  label: 'WordPress'    },
            { icon: wooGif,        label: 'WooCommerce'  },
            { icon: postmanGif,    label: 'Postman'     },
            { icon: slackGif,      label: 'Slack'       },
            { icon: notionGif,     label: 'Notion'      },
            { icon: githubGif,     label: 'GitHub'      },
          ].map(({icon,label})=>(
            <div key={label} className="other-skill-card">
              <img src={icon} alt={label}/>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>
      {/* — Metodologías y buenas prácticas — */}
<section className="methodologies-section">
  <h4>Metodologías, buenas prácticas y más </h4>
  <p>
    SCRUM • Kanban • SEO (optimización para buscadores) • Mobile first • Design Thinking • Agile • Maquetación Pixel Perfect  
  </p>
</section>
 {/* CONTACTO */}
      <h3 className="contact-text" >Puedes contactar conmigo por:</h3>
      <div className="hero-buttons hero-buttons--bottom">
        <a href="mailto:zoraida.ruiz89@gmail.com" className="btn-primary">
          E-mail
        </a>
        <a
          href="https://www.linkedin.com/in/zoe-ruiz-917979336"
          target="_blank" rel="noopener noreferrer"
          className="btn-outline"
        >
          LinkedIn
        </a>
      </div>
    </>
  );
}