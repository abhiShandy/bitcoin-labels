/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#28272d",
        secondary: {
          100: "#d7d7d9",
          200: "#bebdc0",
          300: "#a5a4a7",
          400: "#8C8b8f",
        },
      },
    },
  },
  plugins: [],
};
