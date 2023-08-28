/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter' , 'serif'],
      }
    },
  },
  plugins: [],
}

// const plugin = require('tailwindcss/plugin');

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     /** other settings */
//     plugins: [
//         plugin(function({ addVariant }) {
//             addVariant('current', '&.active');
//         })
//     ],
// }