/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#CAD2C5",
          200: "#84A98C",
          300: "#52796F",
          400: "#354F52",
          500: "#2F3E46",
          600: "#18262e",
        },
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "948px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
      // => @media (max-width: 639px) { ... }
      mobile: { min: "414px", max: "810px" },
    },
  },
  plugins: [],
};
