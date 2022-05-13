import { Header, Footer } from './main'

export const MainLayout = (props) => {
  const { children, classname } = props

  return (
    <div id="Main Layout">
      <Header />
      <main className={`w-full ${classname}`}>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
