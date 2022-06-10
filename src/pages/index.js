import { MainLayout } from 'layout'
import Fournumber from 'components/telmun/hedentoo'
import FirstPart from 'layout/indexPageComponents/first'
import OurGoalsPart from 'layout/indexPageComponents/ourGoalsPart'
import Titi from 'layout/bobo'
import CardWithIconn from './style/cardWithIcon'

import { Plans } from 'components/Plans'
import { Info } from 'components'
import Whatarewedoing from './style/globeCard'

// import { Easy } from 'components/telmun/arttecheasy'
import Urs from 'components/telmun/urs'
// import Apart from 'components/telmun/tusdaa'
export default function Home() {
  return (
    <MainLayout classname={'bg-mainBg'}>
      <FirstPart />
      <Titi />
      <CardWithIconn />
      <Fournumber />
      <Plans />
      <Info />
      <OurGoalsPart />
      <Whatarewedoing />
      <Urs />
    </MainLayout>
  )
}
1
