/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,svg}"],
  theme: {
    extend: {
      colors: {
        primary: {
          cream: "#FDF0D5",
          navy: "#003049",
          red: "#C1121F",
          maroon: "#780000",
        },
      },
    },
  },
  plugins: [],
}
