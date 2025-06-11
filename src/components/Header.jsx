import { NavLink, Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
       <Link to="/" className="logo">
         <img src="/logo.png" alt="Logo ZR" className="logo-img" />
       </Link>
        <nav className="nav">
          <NavLink to="/about"  className={({isActive})=>isActive?'active':''}>Sobre mí</NavLink>
          <NavLink to="/projects" className={({isActive})=>isActive?'active':''}>Proyectos</NavLink>
          <NavLink to="/contact" className={({isActive})=>isActive?'active':''}>Contacto</NavLink>
        </nav>
      </div>
    </header>
  );
}
