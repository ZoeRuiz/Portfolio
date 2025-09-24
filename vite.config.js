// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import purgecss from 'vite-plugin-purgecss';

export default defineConfig({
  base: '/Portfolio/', // <-- nombre exacto de tu repo en GitHub
  plugins: [
    react(),
    purgecss({
      content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}'
      ],
      safelist: [
        /^swiper-/,
        /^clean-card/,
        /^hero-/,
        /^btn-/,
      ],
      verbose: true,
      // enabled: process.env.NODE_ENV === 'production'
    })
  ]
});
