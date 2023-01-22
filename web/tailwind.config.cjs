/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html", "./App.{js,jsx,ts,tsx}"],
  theme: {
    extend: {}
  },
  theme: {
    extend: {
      colors: {
        background: "#09090a"
      },
      gridTemplateRows: {
        7: "repeat(7, minmax(0, 1fr))"
      }
    }
  },
  plugins: []
}
