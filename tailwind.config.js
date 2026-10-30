/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Fixo em dark mode
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#030712', // Preto profundo para o fundo global
          card: '#0A1120',    // Azul ultra-escuro para superfícies/cards
          elevated: '#0F172A' // Azul escuro elevado para hovers e bordas
        },
        brand: {
          dark: '#0B132B',
          navy: '#1C2541',
          primary: '#2563EB', // Azul de destaque para CTAs e ícones
          cyan: '#38BDF8',    // Azul ciano para gradientes e destaques de texto
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}