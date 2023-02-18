/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        toxicyellow: "#D4F82D",
        secondary: "#1c1c24",
        primary: "#111111",
      },
    },
  },
  plugins: [],
}
