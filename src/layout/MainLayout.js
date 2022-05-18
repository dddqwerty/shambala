import { Header, Footer, MobileHeader } from './main'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

export const MainLayout = (props) => {
  const { children, classname } = props
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <div>
      {matches ? <MobileHeader /> : <Header />}
      <main className={`w-full ${classname}`}>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
