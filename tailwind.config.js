/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Pastikan path ini mencakup file React Anda
  ],
  theme: {
    extend: {
      colors: {
         primary: "#22979",
         secondary: "#0000FF",
      },
    },
  },
  plugins: [],
};
