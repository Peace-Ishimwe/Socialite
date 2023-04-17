/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        "lightBackground": "#F9FAFB",
        "mainDark":"#181820",
        "subMainDark": "#1D1D24",
        "majorDark": "#1F1F27",
        "subMajorDark": "#2A2A32",
      }
    },
  },
  plugins: [],
}