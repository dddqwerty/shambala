import { MainLayout } from 'layout'
import { Plans } from 'components'

export default function Home() {
  return (
    <div className=" bg-[#141515]">
      <MainLayout>
        <div className="w-[500px] h-[500px] bg-red-800" />
        <Plans />
      </MainLayout>
    </div>
  )
}
