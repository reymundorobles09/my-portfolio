/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#66c2ff", //F6A64A
        secondary: "#99d6ff",
        third: "#ccebff",
        fourth: "#99d6ff",
        background: "#f2fafd",
        white: "#FBFBFB",
        navy: "#3B6790",
        dark: "#212121"
      },

      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #99d6ff, #66c2ff)',
        'gradient-secondary': 'linear-gradient(to right, #99d6ff, #ccebff)',
      }
    },
  },
  plugins: [],
}