import { MainLayout } from 'layout'
import Titi from 'layout/bobo'

export default function Home() {
  return (
    <div>
      <MainLayout classname={'bg-backgroundColor-darkGray'}>
        <div className="w-[500px] h-[500px] bg-red-800" />
        <Titi />
      </MainLayout>
    </div>
  )
}
