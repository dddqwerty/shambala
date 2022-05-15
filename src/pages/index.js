import { MainLayout } from 'layout'
import Fournumber from 'components/telmun/hedentoo'

export default function Home() {
  return (
    <div>
      <MainLayout classname={'bg-backgroundColor-darkGray'}>
        <div className="h-[2000px] w-[500px] bg-primary-yellow" />
        <Fournumber />
      </MainLayout>
    </div>
  )
}
