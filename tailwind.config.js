/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {

    extend: {
      colors: {
        hoobank: {
          dark: '#090D18',
          cyan: '#03F8FD',
          white: '#FFFFFF',
          gray: '#A5A4A9',
          pink: '#FB4487',
          green: '#03B138',
        },

         "yellow-black": {
          primary: "#FFD700", // Un jaune doré pour l'accent
          secondary: "#1A1A1A", // Un noir profond pour le fond
          text: "#FFFFFF", // Texte blanc pour le contraste
          gray: "#B0B0B0", // Gris clair pour les textes secondaires
          darkgray: "#333333", // Gris foncé pour les bordures et fonds subtils
        },
        
      },
      fontFamily: {
          sans: ["Inter", "sans-serif"],
          heading: ["Space Grotesk", "sans-serif"],
          mono: ["JetBrains Mono", "monospace"],
          poppins: ["Poppins", "sans-serif"],
          manrope: ["Manrope", "sans-serif"],
          outfit: ["Outfit", "sans-serif"],
          sora: ["Sora", "sans-serif"],
      },
    },
  },
  plugins: [],
};