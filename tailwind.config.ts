import type { Config } from "tailwindcss";

const config: Config = {
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
        serif: ["Playfair Display", "serif"],
        sansSerif: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addBase }: { addBase: (styles: Record<string, any>) => void }) {
      addBase({
        heading: {
          fontFamily: "theme('fontFamily.serif')",
          fontSize: "theme('fontSize.9xl')",
          textTransform: "uppercase",
        },
        h1: {
          fontFamily: "theme('fontFamily.serif')",
          fontSize: "theme('fontSize.4xl')",
        },
        h3: {
          fontFamily: "theme('fontFamily.sansSerif')",
          fontSize: "theme('fontSize.2xl')",
          textTransform: "uppercase",
        },
        p: {
          fontFamily: "theme('fontFamily.sansSerif')",
          fontSize: "theme('fontSize.base')",
        },
        "h5, h6, a, ul, ol, li": {
          fontFamily: "theme('fontFamily.sansSerif')",
        },
      });
    },
  ],
};

export default config;
