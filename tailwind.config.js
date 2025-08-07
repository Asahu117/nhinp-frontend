// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
// module.exports = {
//     theme: {
//       extend: {
//         animation: {
//           'infinite-scroll': 'infinite-scroll 25s linear infinite',
//         },
//         keyframes: {
//           'infinite-scroll': {
//             from: { transform: 'translateX(0)' },
//             to: { transform: 'translateX(-50%)' },
//           }
//         }
//       },
//     },
//     plugins: [],
//   }
/**
 *  
 * 
 * /** @type {import('tailwindcss').Config} */
module.exports = {
  // This line tells Tailwind to scan all your component files for class names.
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // This section adds the custom fonts from Google Fonts.
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        serif: ['Libre Baskerville', 'serif'],
      },
      // This section adds the custom animation for the LogoScroller component.
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
