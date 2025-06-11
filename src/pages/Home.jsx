import '../styles/Home.css';

export default function Home() {
  return (
    <section className="hero" id="about">
      <div className="hero-container">
        <div className="hero-text">
         <div className="bubble">
          <h1>¡Hola, soy <span className="highlight">Zoe Ruiz</span>!</h1> </div>
          <p className="subheadline">UX/UI Designer, Graphic Designer & Fullstack Developer</p>
          <p className="description">
            “Soy diseñadora UX/UI y especialista en diseño gráfico, recién salida de un bootcamp intensivo en desarrollo frontend. Me apasiona investigar las necesidades de los usuarios, crear prototipos interactivos y validar soluciones con pruebas de usabilidad. Combino creatividad y un enfoque centrado en el usuario para diseñar interfaces intuitivas, accesibles y visualmente impactantes.”
          </p> </div>
          <div className="hero-buttons">
            <button className="btn-primary">Proyectos</button>
            <button className="btn-outline">LinkedIn</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/hero-blob.png" alt="Ilustración Zoe" />
        </div>
    </section>
  );
}
