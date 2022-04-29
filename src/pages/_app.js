import 'styles/globals.css'
import { ThemeProvider } from '@mui/material'
import { MuiTheme } from 'theme/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={MuiTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
