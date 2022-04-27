const colors = require('./src/theme/colors')
module.exports = {
  content: ['./src/**/**/*.{js,ts,jsx,tsx}'],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: {
          white: colors.primary.white,
          yellow: colors.primary.yellow,
        },
        secondary: {
          blue: colors.secondary.blue,
        },
        textColor: {
          secondary: {
            lightGray: colors.textColor.secondary['light-gray'],
            darkGray: colors.textColor.secondary['dark-gray'],
          },
        },
        backgroundColor: {
          darkGray: colors.backgroundColor['dark-gray'],
        },
      },
      fontSize: {
        h1: '4rem',
        h2: '3rem',
        h3: '2.5rem',
        h4: '2rem',
        title1: '1.625rem',
        title2: '1.25rem',
        body: '0.875rem',
        p1: '0.875rem',
        p2: '0.75rem',
      },
    },
  },
  plugins: [],
}
