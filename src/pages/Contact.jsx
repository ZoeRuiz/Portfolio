// src/pages/Contact.jsx
import React, { useState } from 'react';
import '../styles/Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación: todos los campos deben estar rellenos
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('Error. Debes rellenar todos los campos.');
      return;
    }

    setStatus('Enviando…');
    try {
      const res = await fetch('https://formspree.io/f/xanbbrrl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('¡Mensaje enviado con éxito! 😊');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('Error al enviar, inténtalo de nuevo.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Error de red, inténtalo más tarde.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contacto</h2>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
        action="https://formspree.io/f/xanbbrrl"
        method="POST"
        noValidate
      >
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Tu nombre"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="tu@ejemplo.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            placeholder="¿En qué puedo ayudarte?"
          />
        </div>

        <button type="submit" className="btn-send">
          Enviar mensaje
        </button>
      </form>

      {status && (
        <p className={`form-status ${status.startsWith('Error') ? 'error' : 'success'}`}>
          {status}
        </p>
      )}
    </section>
  );
}
