// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [active, setActive] = useState('about');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const links = [
    { id: 'about',    label: 'Sobre mí' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'contact',  label: 'Contacto' },
  ];

  return (
    <header className="header">
      <div className="container">
        <a href="#about" className="logo">
          <img
            src="/logo.png"
            alt="Logo ZR"
            className="logo-img"
          />
        </a>
        <nav className="nav">
          {links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'active' : ''}
              onClick={() => setActive(id)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
