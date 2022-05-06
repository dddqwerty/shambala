import { Header, Footer } from './main'

export const MainLayout = (props) => {
  const { children } = props

  return (
    <div id="Main Layout">
      <Header />

      {children}

      <Footer />
    </div>
  )
}

export default MainLayout
