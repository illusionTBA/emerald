/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js,ts,tsx}", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#CAD2C5",
          200: "#84A98C",
          300: "#52796F",
          400: "#354F52",
          500: "#2F3E46",
        }
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
