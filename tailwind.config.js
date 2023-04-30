/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "normal-color" : "var(--normal-color)",
        "fighting-color" : "var(--fighting-color)",
        "flying-color" : "var(--flying-color)",
        "poison-color" : "var(--poison-color)",
        "ground-color" : "var(--ground-color)",
        "rock-color" : "var(--rock-color)",
        "bug-color" : "var(--bug-color)",
        "ghost-color" : "var(--ghost-color)",
        "steel-color" : "var(--steel-color)",
        "fire-color" : "var(--fire-color)",
        "water-color" : "var(--water-color)",
        "grass-color" : "var(--grass-color)",
        "electric-color" : "var(--electric-color)",
        "psychic-color" : "var(--psychic-color)",
        "ice-color" : "var(--ice-color)",
        "dragon-color" : "var(--dragon-color)",
        "dark-color" : "var(--dark-color)",
        "fairy-color" : "var(--fairy-color)",
        "unknown-color" : "var(--unknown-color)",
        "shadow-color" : "var(--shadow-color)",
      }
    },
  },
  plugins: [],
}