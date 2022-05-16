const colors = require('./src/theme/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // important: true, why why why why why why why why why why why why why why w hyw hwy hwy hwy hwy hwy hwy hwh whwyhwywhywhy why why wh ywh ywh w
  content: ['./src/**/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
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
            gray: colors.textColor.secondary['gray'],
            lightGray: colors.textColor.secondary['light-gray'],
            darkGray: colors.textColor.secondary['dark-gray'],
          },
        },
        backgroundColor: {
          darkGray: colors.backgroundColor['dark-gray'],
          hover: colors.backgroundColor.hover,
        },
        button: {
          hover: colors.button.hover,
          ghost: {
            hover: 'rgba(255, 255, 255, 0.3)',
          },
        },
        earthBg: 'rgba(0, 0, 0, 0.71)',
      },
      fontSize: {
        h1: '64px',
        h2: '48px',
        h3: '40px',
        h4: '32px',
        title1: '26px',
        title2: '20px',
        body: '16px',
        p1: '14px',
        p2: '12px',
        bodyMobile: '14px',
      },
      borderRadius: {
        buttonRadius: '8px',
      },
      maxWidth: {
        shambWidth: '1200px',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
