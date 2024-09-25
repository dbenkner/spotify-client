/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    './projects/**/*.{html,ts}'
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans' : ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
    }
  },
  plugins: [],
}

