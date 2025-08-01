# Portfolio de Zoe Ruiz

**Landing page personal responsive** construida para mostrar mi perfil profesional, proyectos destacados y un formulario de contacto funcional. 

---

## 🎨 Acerca de mí

¡Hola! Soy Zoe Ruiz, UX/UI Designer & FullStack Developer. Me apasiona:
- Investigar y comprender las necesidades de los usuarios  
- Crear prototipos interactivos y experiencias accesibles  
- Maquetar páginas web con precisión y detalle  
- Combinar creatividad y tecnología para interfaces intuitivas  

---

## 🚀 Demo

Puedes ver la versión en vivo aquí:  
[https://zoeruiz.github.io/Portfolio/](https://zoeruiz.github.io/Portfolio/)

---

## 🛠️ Tecnologías

- **React v18** + **Vite**  
- **CSS puro** con variables y media queries (mobile-first)  
- **Formspree** para formularios sin servidor  
- **Git & GitHub** para control de versiones  

---

## 🌟 Características

1. **Mobile-first & Responsive**  
   - Diseño adaptado a móviles, tablet y desktop con breakpoints claros.  
2. **Secciones bien diferenciadas**  
   - **Sobre mí** con efecto *typewriter* y navegación anclada.  
   - **Proyectos** en tarjetas verticales (móvil) o grid con alternancia (desktop).  
   - **Contacto** con validación de campos y envío real a tu email.  
3. **Header fijo y scroll-spy**  
   - El header permanece siempre visible y resalta la sección activa.  
4. **Accesibilidad básica**  
   - Etiquetas `<label>` asociadas a inputs, mensajes claros de error/éxito.  
5. **Hook personalizado**  
   - `useMediaQuery` para renderizar contenido diferente en desktop/móvil.  

---

## 📂 Estructura del proyecto

portfolio/
├─ public/
│ └─ assets/ # Imágenes y recursos estáticos
├─ src/
│ ├─ components/
│ │ ├─ Header.jsx
│ │ └─ Projects.jsx
│ ├─ pages/
│ │ ├─ Home.jsx
│ │ ├─ HomeDesktop.jsx
│ │ └─ Contact.jsx
│ ├─ hooks/
│ │ └─ useMediaQuery.js
│ ├─ styles/
│ │ ├─ Header.css
│ │ ├─ Home.css
│ │ ├─ Projects.css
│ │ └─ Contact.css
│ ├─ App.jsx
│ └─ main.jsx
├─ .gitignore
├─ package.json
└─ README.md

---

## ⚙️ Instalación

1. **Clona el repositorio**  
   
   git clone https://github.com/tuusuario/portfolio.git
   cd portfolio

2. **Instala dependencias**  
   
   npm install
 o
   yarn install

---

## 💻 Estructura del proyecto

npm run dev
# o
yarn dev

---

## 📫 Contacto

Si tienes dudas o quieres una demo en vivo, escríbeme:

✉️ zoraida.ruiz89@gmail.com

¡Gracias por visitar mi portfolio!
Estoy siempre abierta a nuevos retos y colaboraciones en UX/UI y maquetación. 😊
