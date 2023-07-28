/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
      secular: ["Secular One", "sans-serif"],
    },
    colors: {
      primary: {
        DEFAULT: "#413CCB",
        light: "#0099DE",
        dark: "#007689",
      },

      secondary: {
        DEFAULT: "#D5F08F",
      },

      terciary: {
        DEFAULT: "#797585",
      },

      light: {
        DEFAULT: "#FBF7FF",
      },

      dark: {
        DEFAULT: "#2F4858",
      },

      boxShadowColor: {
        DEFAULT: "#79758540",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary-secondary-mobile":
          "linear-gradient(90deg, #413CCB 0%, #413CCB 86.97%, #D5F08F 86.98%)",
        "gradient-clear":
          "linear-gradient(45deg, rgba(213,240,143,1) 0%, rgba(90,251,217,1) 100%)",
        "gradient-dark":
          "linear-gradient(45deg, rgba(65,60,203,1) 0%, rgba(0,153,222,1) 100%)",
      },
    },
  },
  plugins: [],
};
