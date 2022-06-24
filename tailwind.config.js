const colors = require('./src/theme/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  important: true,
  content: ['./src/**/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        headerBpoint: '1040px',
      },
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
        menuIcon: {
          gray: colors.menu['gray'],
        },
        backgroundColor: {
          darkGray: colors.backgroundColor['dark-gray'],
          hover: colors.backgroundColor.hover,
          navBar: 'rgba(255, 255, 255, 0.34)',
        },
        button: {
          hover: colors.button.hover,
          ghost: {
            hover: 'rgba(255, 255, 255, 0.3)',
          },
        },
        earthBg: 'rgba(0, 0, 0, 0.71)',
        mainBg: '#141515',
        recomended: '#202121',
        mobileBg: 'rgba(0, 0, 0, 0.6)',
        too: 'rgba(55, 58, 58, 0.3)',
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
        shambWidth: '1180px',
        araiUrt: '1440px',
      },
      width: {
        planWidth: '100%',
      },
      height: {
        lineHeight: '450px',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      gap: {
        30: '123px',
      },
      animation: {
        'spin-slow': 'spin 40s linear infinite',
      },
    },
  },
}
