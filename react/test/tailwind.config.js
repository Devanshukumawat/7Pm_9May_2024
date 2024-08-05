/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "image":"url('/src/Weather/media/Bg.jpg')",
        "left":"url('/src/Weather/media/right.jpg')"
      }
    },
  },
  plugins: [],
}

