/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#FF2E2E',
      secondary: '#00B5FF',
      accent: '#41F677',
      text: "#FFFFFF",
      background: "#000000",
    },
  },
  plugins: [],
}