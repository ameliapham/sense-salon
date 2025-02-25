import type { Config } from "tailwindcss";


const config: Config ={
  content: [
    "./components/**/*.{vue,js,ts}", 
    "./layouts/**/*.{vue,js,ts}", "./pages/**/*.{vue,js,ts}", 
    "./plugins/**/*.{js,ts}"
  ],
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
  plugins: [
    function ({ addBase } : { addBase: (styles: Record<string, any>) => void }) {
      addBase({
        "h4, h5, h6, p, a, ul, ol, li": {
          fontFamily: "Montserrat, sans-serif",
        },
        "h1, h2": {
          fontFamily: "Playfair Display, serif",
        },
        "h3": {
          fontFamily: "Montserrat, sans-serif",
          textTransform: "uppercase",
        },
      });
    },
  ],
};

export default config