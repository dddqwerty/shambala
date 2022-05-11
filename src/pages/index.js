import { MainLayout } from 'layout'
import { Plans } from 'components'

export default function Home() {
  return (
    <div>
      <MainLayout classname={'bg-backgroundColor-darkGray'}>
        <div className=" w-1/2 h-[500px] bg-red-600"></div>
        <Plans />
      </MainLayout>
    </div>
  )
}
