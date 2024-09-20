/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'white': 'var(--white-color)',
        'black': 'var(--black-color)',
        'primary': 'var(--primary-color)',
        'secondary': 'var(--secondary-color)',
        'tomato': 'var(--tomato-color)',
        'light': 'var(--light-color)',
        'gray': 'var(--gray-color)',
        'dark': 'var(--dark-color)',
      }
    },
  },
  plugins: [],
}