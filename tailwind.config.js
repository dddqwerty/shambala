const colors = require('./src/theme/colors')
module.exports = {
  content: ['./src/**/**/*.{js,ts,jsx,tsx}'],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: {
          white: colors.primary.white,
          yellow: colors.primary.yellow
        },
        secondary: {
          blue: colors.secondary.blue,
        },
        textColor: {
          secondary: {
            lightGray: colors.textColor.secondary['light-gray'],
            darkGray: colors.textColor.secondary['dark-gray'],
          }
        },
        backgroundColor: {
          darkGray: colors.backgroundColor['dark-gray'],
        }
      },
    },
  },
  plugins: [],
}
