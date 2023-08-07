/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1152px',
        }
      },
      backgroundColor: {
        'primary-500': '#3F83F8',
        'primary-600': '#1C64F2',
        'primary-700': '#1A56DB',
        'primary-800': '#1E429F',
        'primary-900': '#233876',
      }
    },
  },
  plugins: [],
}

// // tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       backgroundColor: {
//         'primary': '#your-primary-color-hex',
//       },
//     },
//   },
//   variants: {},
//   plugins: [],
// };
