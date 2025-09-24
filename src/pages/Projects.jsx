// src/components/Projects.jsx
import React, { useState, useRef, useEffect, useMemo } from 'react';
import '../styles/Projects.css';

// === Imágenes Desarrollo ===
import ahorcadoImg from '../assets/ahorcado-juego.png';
import comercioImg  from '../assets/Comercio-gris.png';
import maquetaImg   from '../assets/Maqueta.png';

// === Imágenes Diseño / Logos ===
import logoAurora        from '../assets/AuroraTech.png';
import logoFrikisfera    from '../assets/frikisfera.png';
import recetasVeganas    from '../assets/veganas.png';
import bannerElectronica from '../assets/electronica.jpg';
import bannerEstetica    from '../assets/estetica.png';
import logoZoe           from '../assets/zoeweb.png';
import logoArmario       from '../assets/armario.png';
import tarjetaDentista   from '../assets/dentista.png';
import flyerRestaurante  from '../assets/restaurante.jpg';
import packagingCosmetica from '../assets/cosmetica.png';
import packagingVino     from '../assets/vino.png';
import packagingBurger   from '../assets/burger.jpg';
import posterExplora     from '../assets/explora.png';
import tarjetaGrafica    from '../assets/tarjetaGrafica.jpg';

// === Datos Desarrollo ===
const devProjects = [
  {
    title: 'El juego del Ahorcado',
    description:
      'Primer proyecto de Bootcamp FullStack Developer. Juego interactivo desarrollado con HTML, CSS y JavaScript. Incluye funcionalidad de selección de categorías, un sistema de control de intentos, música de fondo según la categoría elegida y un sonido de victoria al ganar.',
    image: ahorcadoImg,
    demoLink: 'https://authorgg.github.io/Juego-Ahorcado/',
    codeLink: 'https://github.com/ZoeRuiz/Juego-Ahorcado.git',
    tags: ['Frontend', 'JavaScript', 'Game', 'HTML', 'CSS'],
  },
  {
    title: 'SegundaTec',
    description:
      'Proyecto Final Bootcamp: plataforma de compra y venta de artículos de tecnología de segunda mano entre particulares. Desarrollado con Vite, React y CSS puro, consumiendo los endpoints de la API REST del backend.',
    image: comercioImg,
    demoLink: 'https://zoeruiz.github.io/PFB_Compra_Venta/',
    codeLink: 'https://github.com/ZoeRuiz/PFB_Compra_Venta.git',
    tags: ['Backend', 'Frontend', 'React', 'Vite', 'Postman', 'JavaScript', 'CSS', 'Node.js'],
  },
  {
    title: 'Maquetación web',
    description:
      'Maquetación pixel perfect y responsive, siguiendo los diseños proporcionados en Figma.',
    image: maquetaImg,
    demoLink: 'https://zoeruiz.github.io/prueba-maquetacion/',
    codeLink: 'https://github.com/ZoeRuiz/prueba-maquetacion.git',
    tags: ['Maquetación', 'Responsive', 'Pixel Perfect'],
  },
];

// === Datos Diseño (con description + tags) ===
const designProjects = [
  { id: 1, title: 'Logo – AuroraTech', img: logoAurora, isLogo: true, tags: ['Logo', 'Branding'], description: 'Identidad visual para empresa de tecnología, versión web y multiuso.' },
  { id: 2, title: 'Logo – Frikisfera', img: logoFrikisfera, isLogo: true, tags: ['Logo', 'Branding'], description: 'Logo para e-commerce con estilo juvenil y versátil.' },
  { id: 3, title: 'Banner de cocina', img: recetasVeganas, tags: ['Banner', 'Tipografía'], description: 'Banner de sección para web de recetas veganas con foco en tipografía clara.' },
  { id: 4, title: 'Banner Electrónica', img: bannerElectronica, tags: ['Banner', 'Tipografía'], description: 'Composición gráfica para e-commerce de electrónica (hero image).' },
  { id: 5, title: 'Banner blog Estética', img: bannerEstetica, tags: ['Banner', 'Branding'], description: 'Banner para blog de estética.' },
  { id: 6, title: 'Logo – Web Personal', img: logoZoe, isLogo: true, tags: ['Logo'], description: 'Logo para marca personal, pensado para uso en cabeceras y favicon.' },
  { id: 7, title: 'Logo – El Armario de Zoe', img: logoArmario, isLogo: true, tags: ['Logo'], description: 'Logo para blog de moda.' },
  { id: 8, title: 'Tarjeta Clínica Dental', img: tarjetaDentista, tags: ['Tarjeta', 'Tipografía'], description: 'Tarjeta de visita con jerarquía tipográfica y datos de contacto claros.' },
  { id: 9, title: 'Flyer Restaurante', img: flyerRestaurante, tags: ['Flyer', 'Branding', 'Tipografía'], description: 'Flyer promocional para restaurante — formato A5 para imprimir.' },
  { id: 10, title: 'Packaging Cosmética', img: packagingCosmetica, tags: ['Packaging', 'Branding'], description: 'Packaging para línea de cosmética con patrón y color branding.' },
  { id: 11, title: 'Packaging Vino', img: packagingVino, tags: ['Packaging', 'Branding'], description: 'Packaging de vino con enfoque premium.' },
  { id: 12, title: 'Packaging Hamburguesa', img: packagingBurger, tags: ['Packaging', 'Branding'], description: 'Packaging hamburguesa calidad óptima.' },
  { id: 13, title: 'Póster Inspirador', img: posterExplora, tags: ['Poster'], description: 'Póster con mensaje inspirador y composición tipográfica.' },
  { id: 14, title: 'Tarjeta Freelance', img: tarjetaGrafica, tags: ['Tarjeta'], description: 'Tarjeta para freelance con datos claros.' },
];

export default function Projects() {
  const [tab, setTab] = useState('dev');
  const [activeTag, setActiveTag] = useState('Todos');
  const [lightbox, setLightbox] = useState({ open: false, src: '', title: '' });
  const carouselRef = useRef(null);

  // Filtros y tags para diseño -> ahora con contadores y orden (Logo primero)
  const designTags = useMemo(() => {
    const counts = {};
    designProjects.forEach(p => p.tags?.forEach(t => {
      counts[t] = (counts[t] || 0) + 1;
    }));
    const tagsArray = Object.keys(counts).map(name => ({ name, count: counts[name] }));
    tagsArray.sort((a, b) => {
      if (a.name === 'Logo') return -1;
      if (b.name === 'Logo') return 1;
      return a.name.localeCompare(b.name);
    });
    const total = designProjects.length;
    return [{ name: 'Todos', count: total }, ...tagsArray];
  }, []);

  const filteredDesignProjects = useMemo(() => {
    if (activeTag === 'Todos') return designProjects;
    return designProjects.filter(p => p.tags?.includes(activeTag));
  }, [activeTag]);

  // Lightbox
  const openLightbox = (src, title) => setLightbox({ open: true, src, title });
  const closeLightbox = () => setLightbox({ open: false, src: '', title: '' });

  // Carrusel móvil
  const scrollByCard = (dir = 1) => {
    const el = carouselRef.current;
    if (!el) return;
    const card = el.querySelector('.masonry-item');
    const gap = 12;
    const step = card ? card.getBoundingClientRect().width + gap : el.clientWidth * 0.8;
    el.scrollBy({ left: step * dir, behavior: 'smooth' });
  };

  // Cerrar lightbox con ESC
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') closeLightbox(); };
    if (lightbox.open) {
      window.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightbox.open]);

  // UX: actualizar document.title para mostrar la pestaña + conteo
  useEffect(() => {
    const base = 'Proyectos';
    if (tab === 'dev') {
      document.title = `${base} — Desarrollo (${devProjects.length})`;
    } else {
      document.title = `${base} — Diseño (${designProjects.length})`;
    }
    // limpieza no necesaria aquí ya que reasignamos siempre, pero podría guardarse prevTitle si se desea
  }, [tab]);

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Proyectos</h2>

      {/* Tabs */}
      <div className="tabs" role="tablist" aria-label="Categorías de proyectos">
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'dev'}
          className={`tab ${tab === 'dev' ? 'active' : ''}`}
          onClick={() => setTab('dev')}
        >
          Desarrollo
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'design'}
          className={`tab ${tab === 'design' ? 'active' : ''}`}
          onClick={() => setTab('design')}
        >
          Diseño
        </button>
      </div>

      {/* --- DESARROLLO --- */}
      {tab === 'dev' && (
        <div className="projects-grid" role="region" aria-label="Proyectos de desarrollo">
          {devProjects.map((proj, idx) => (
            <div key={idx} className={`project-card ${idx % 2 === 1 ? 'reverse' : ''}`}>
              <div className="project-content">
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-description">{proj.description}</p>
                {proj.tags?.length > 0 && (
                  <ul className="tag-list" aria-label={`Etiquetas ${proj.title}`}>
                    {proj.tags.map(t => <li key={t} className="tag">{t}</li>)}
                  </ul>
                )}
                <div className="project-links">
                  {proj.demoLink && (
                    <a href={proj.demoLink} target="_blank" rel="noreferrer" className="btn-primary btn-small">
                      Demo
                    </a>
                  )}
                  {proj.codeLink && (
                    <a href={proj.codeLink} target="_blank" rel="noreferrer" className="btn-outline btn-small">
                      Código
                    </a>
                  )}
                </div>
              </div>
              <div className="project-image-wrapper" aria-hidden={false}>
                <img src={proj.image} alt={proj.title} className="project-image" loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* --- DISEÑO --- */}
      {tab === 'design' && (
        <>
          <div className="filters" aria-label="Filtros de diseño">
            {designTags.map(tag => (
              <button
                key={tag.name}
                type="button"
                className={`btn-chip ${activeTag === tag.name ? 'active' : ''}`}
                onClick={() => setActiveTag(tag.name)}
                aria-pressed={activeTag === tag.name}
                aria-label={`Filtrar por ${tag.name} (${tag.count})`}
                title={`${tag.name} (${tag.count})`}
              >
                <span className="chip-label">{tag.name}</span>
                <span className="chip-count" aria-hidden="true"> ({tag.count})</span>
              </button>
            ))}
          </div>

          <div style={{ position: 'relative' }}>
            <div className="masonry" aria-live="polite" ref={carouselRef}>
              {filteredDesignProjects.map(p => (
                <article key={p.id} className={`masonry-item design-card ${p.isLogo ? 'logo' : ''}`}>
                  <button
                    type="button"
                    className="design-thumb"
                    onClick={() => openLightbox(p.img, p.title)}
                    aria-label={`Ver ${p.title} en grande`}
                  >
                    <img src={p.img} alt={p.title} loading="lazy" />
                  </button>

                  <div className="design-meta">
                    <h3 className="project-title">{p.title}</h3>

                    {/* DESCRIPCIÓN */}
                    {p.description && <p className="project-description">{p.description}</p>}

                    {/* TAGS */}
                    {p.tags?.length > 0 && (
                      <ul className="tag-list" aria-label={`Etiquetas ${p.title}`}>
                        {p.tags.map(t => <li key={t} className="tag">{t}</li>)}
                      </ul>
                    )}

                    {/* Link externo si existe */}
                    {p.externalLink && (
                      <a href={p.externalLink} target="_blank" rel="noreferrer" className="btn-outline btn-small">
                        Ver proyecto
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <button type="button" className="carousel-btn prev" aria-label="Anterior" onClick={() => scrollByCard(-1)}>‹</button>
            <button type="button" className="carousel-btn next" aria-label="Siguiente" onClick={() => scrollByCard(1)}>›</button>
          </div>
        </>
      )}

      {/* LIGHTBOX */}
      {lightbox.open && (
        <div className="lightbox" onClick={closeLightbox} role="dialog" aria-modal="true" aria-label={lightbox.title}>
          <button className="lightbox-close" onClick={(e) => { e.stopPropagation(); closeLightbox(); }} aria-label="Cerrar vista ampliada">×</button>
          <img className="lightbox-img" src={lightbox.src} alt={lightbox.title} onClick={(e) => e.stopPropagation()} />
          <p className="lightbox-caption">{lightbox.title}</p>
        </div>
      )}
    </section>
  );
}
