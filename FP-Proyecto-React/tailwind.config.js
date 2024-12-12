/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "sm-450": "450px",
        "sm-658": "658px",
        "sm-690": "690px",
      },
    },
  },
  plugins: [],
}

