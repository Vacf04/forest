/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: ".5rem",
        sm: "1rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        serif: ["DM Serif Text", "Georgia", "serif"],
      },
      colors: {
        verde: {
          200: "#ACEF75",
          300: "#91EE77",
          400: "#17E880",
          700: "#2E482C",
          800: "#16281F",
          900: "#0F1C15",
          950: "#030504",
        },
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [],
};
