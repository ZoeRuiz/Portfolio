// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Zoe Ruiz. Todos los derechos reservados.</p>
      <div className="socials">
        <a href="https://github.com/ZoeRuiz" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/zoe-ruiz-917979336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}
