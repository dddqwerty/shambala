import { MainLayout } from 'layout'
import Fournumber from 'components/telmun/hedentoo'
import FirstPart from 'layout/indexPageComponents/first'
import OurGoalsPart from 'layout/indexPageComponents/ourGoalsPart'

export default function Home() {
  return (
    <MainLayout>
      <FirstPart />
      <Fournumber />
      <OurGoalsPart />
    </MainLayout>
  )
}
