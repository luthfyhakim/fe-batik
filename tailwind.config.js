/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Baskervville SC', 'serif'],
        basker: ['Baskervville', 'sans-serif'],
      },
      colors: {
        'orangprim': '#CF7500',
        'ellowsec': '#F0A500',
      },
    },
  },
  plugins: [],
}