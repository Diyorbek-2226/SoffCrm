/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'min-sm': '440px', // Custom breakpoint for 440px
        'min-xs': '330px', // Custom breakpoint for 330px
      },
    },
  },
  plugins: [],
}
