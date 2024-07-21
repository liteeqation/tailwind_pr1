const { BiFontFamily } = require("react-icons/bi");

// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust paths as needed
  ],
  theme: {
    extend: {
      fontFamily:{
        playfair: "'Playfair Display', serif",
        lato: "'Lato', sans-serif",
      }
    },
  },
  plugins: [],
}
