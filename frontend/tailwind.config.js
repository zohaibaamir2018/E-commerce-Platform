/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Corrected here
        text: "#2a2a2a",
        hover: "#fa8c16",
      },
    },
  },
  plugins: [],
};
