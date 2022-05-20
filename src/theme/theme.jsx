/* eslint-disable @typescript-eslint/no-empty-interface */
import { createTheme } from '@mui/material/styles'
import colors from './colors'

export const MuiTheme = createTheme({
  typography: {
    fontFamily: `"Poppins", sans-serif`,
    h1: {
      fontSize: '98px',
      fontWeight: 600,
    },
    h2: {
      fontSize: '60px',
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
      fontSize: '50px',
    },
    h4: {
      fontWeight: 600,
      fontSize: '36px',
    },
    h5: {
      fontWeight: 700,
      fontSize: '24px',
    },
    h6: {
      fontWeight: 600,
      fontSize: '20px',
    },
    body1: {
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '16px',
    },
    body2: {
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
    },
    subtitle1: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '16px',
    },
    subtitle1Bold: {
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '16px',
    },
    subtitle2: {
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
    },
    caption: {
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '12px',
    },
    buttonSmall: {
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '12px',
    },
    buttonMedium: {
      fontStyle: 'medium',
      fontWeight: 600,
      fontSize: '14px',
    },
    buttonLarge: {
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '18px',
    },
  },
  palette: {
    primary: {
      main: colors.primary.yellow,
    },
  },
})
