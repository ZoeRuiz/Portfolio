import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src="/logo.png" alt="Logo ZR" className="logo-img" />
        </div>
        <nav className="nav">
          <NavLink to="/"        className={({isActive})=>isActive?'active':''}>Sobre mí</NavLink>
          <NavLink to="/projects"className={({isActive})=>isActive?'active':''}>Proyectos</NavLink>
          <NavLink to="/contact" className={({isActive})=>isActive?'active':''}>Contacto</NavLink>
        </nav>
      </div>
    </header>
  );
}
