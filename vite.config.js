// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import purgecss from 'vite-plugin-purgecss';

export default defineConfig({
  plugins: [
    react(),
    purgecss({
      content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}'
      ],
      safelist: [
        // mantiene estas clases aunque no las encuentre en el HTML
        /^swiper-/,
        /^clean-card/,
        /^hero-/,
        /^btn-/,
      ],
      // opcional: activa también en modo desarrollo
      verbose: true,
      // enabled: process.env.NODE_ENV === 'production'  // por defecto
    })
  ]
});
