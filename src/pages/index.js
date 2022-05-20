import { MainLayout } from 'layout'
import Fournumber from 'components/telmun/hedentoo'
import FirstPart from 'layout/indexPageComponents/first'
import OurGoalsPart from 'layout/indexPageComponents/ourGoalsPart'
import Titi from 'layout/bobo'
import { Plans } from 'components/Plans'
import { Info } from 'components'
import Whatarewedoing from './style/globeCard'
import Urs from 'components/telmun/urs'
export default function Home() {
  return (
    <MainLayout classname={'bg-mainBg'}>
      <FirstPart />
      <Titi />
      <Fournumber />
      <Plans />
      <Info />
      <OurGoalsPart />
      <Whatarewedoing />
      <Urs />
    </MainLayout>
  )
}
