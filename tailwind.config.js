/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // paleta da marca LogoMorph
        fundo: '#04070F',
        navy: '#0A1630',
        'navy-claro': '#0E1D3E',
        ouro: '#F5C542',
        'ouro-escuro': '#D99A1B',
        cromo: '#EEF2F9',
        tinta: '#E7ECF5',
        apagado: '#9DACC8',
        zap: '#22C55E',
      },
      fontFamily: {
        sans: ['Archivo', 'system-ui', 'sans-serif'],
        display: ['"Archivo Black"', 'Archivo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
