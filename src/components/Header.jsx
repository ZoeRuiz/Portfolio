// src/components/Header.jsx
import React from 'react';
import useScrollSpy from '../hooks/useScrollSpy';
import './Header.css';
import logoImg from '../assets/logo.png';

export default function Header() {
  const sectionIds = ['about', 'projects', 'contact'];
  const activeSection = useScrollSpy(sectionIds, {
    rootMargin: '0px 0px -50% 0px',
    threshold: [0.1, 0.5, 1.0]
  });

  const links = [
    { id: 'about',    label: 'Sobre mí' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'contact',  label: 'Contacto' },
  ];

  return (
    <header className="header">
      <div className="container">
        <a href="#about" className="logo">
          <img src={logoImg} alt="Logo ZR" className="logo-img" />
        </a>
        <nav className="nav">
          {links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? 'active' : ''}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
