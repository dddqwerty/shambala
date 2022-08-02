import { MainLayout } from 'layout'
import Fournumber from 'components/telmun/hedentoo'
import FirstPart from 'layout/indexPageComponents/first'
import OurGoalsPart from 'layout/indexPageComponents/ourGoalsPart'
import Titi from 'layout/bobo'
import CardWithIconn from './style/cardWithIcon'

import { Plans } from 'components/Plans'
import { Info } from 'components'
import Whatarewedoing from './style/globeCard'
import Content from '../../public/assets/data.js'

const data = Content.index

// import { Easy } from 'components/telmun/arttecheasy'
import Urs from 'components/telmun/urs'
// import Apart from 'components/telmun/tusdaa'
export default function Home() {
  return (
    <MainLayout classname={'bg-mainBg'}>
      <FirstPart data={data.firstPart} />
      <Titi data={data.titi} />
      <CardWithIconn data={data.cardWithIconn} />
      <Fournumber data={data.fournumbers} />
      <Plans data={data.plans} />
      <Info data={data.info} />
      <OurGoalsPart data={data.ourGoals} />
      <Whatarewedoing data={data.whatAreWeDoing} />
      <Urs />
    </MainLayout>
  )
}
