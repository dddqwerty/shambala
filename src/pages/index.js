import { MainLayout } from 'layout'
import Fournumber from 'components/telmun/hedentoo'
import FirstPart from 'layout/indexPageComponents/first'
import OurGoalsPart from 'layout/indexPageComponents/ourGoalsPart'
import Titi from 'layout/bobo'
import CardWithIconn from './style/cardWithIcon'

export default function Home() {
  return (
    <MainLayout classname={'bg-mainBg'}>
      <FirstPart />
      <Titi />
      <CardWithIconn />
      <Fournumber />
      <OurGoalsPart />
    </MainLayout>
  )
}
