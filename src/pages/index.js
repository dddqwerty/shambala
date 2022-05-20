import { MainLayout } from 'layout'
import Fournumber from 'components/telmun/hedentoo'
import FirstPart from 'layout/indexPageComponents/first'
import OurGoalsPart from 'layout/indexPageComponents/ourGoalsPart'
import Titi from 'layout/bobo'
import { Plans } from 'components/Plans'
import Whatarewedoing from './style/globeCard'
import { Easy } from 'components/telmun/arttecheasy'
import Apart from 'components/telmun/tusdaa'
export default function Home() {
  return (
    <MainLayout classname={'bg-mainBg'}>
      <FirstPart />
      <Titi />
      <Fournumber />
      <Plans />
      <OurGoalsPart />
      <Whatarewedoing />

      <Easy />
      <Apart />
    </MainLayout>
  )
}
