import { Header } from './main'

export const MainLayout = (props) => {
  const { children } = props

  return (
    <div id="Main Layout">
      <Header />

      {children}
    </div>
  )
}

export default MainLayout
