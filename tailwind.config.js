/** @type {import('tailwindcss').Config} */
export default {
  content: ["./components/**/*.{vue,js,ts}", "./layouts/**/*.{vue,js,ts}", "./pages/**/*.{vue,js,ts}", "./plugins/**/*.{js,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#576238",
        secondary: "#8C834D",
        accent: "#FFD85D",
        background: "#F0EADB",
        textPrimary: "#343B22",
        textSecondary: "#2C323F",
        textAccent: "#F0EADB",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
