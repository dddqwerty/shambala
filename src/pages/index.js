import { MainLayout } from 'layout'
import { Plans } from 'components'

export default function Home() {
  return (
    <div>
      <MainLayout classname={'bg-backgroundColor-darkGray'}>
        <div className="w-[500px] h-[500px] bg-red-800" />
        <Plans />
      </MainLayout>
    </div>
  )
}
