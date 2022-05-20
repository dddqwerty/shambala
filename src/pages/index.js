import * as React from 'react'
import { MainLayout } from 'layout'
import Fournumber from 'components/telmun/hedentoo'
import FirstPart from 'layout/indexPageComponents/first'
import OurGoalsPart from 'layout/indexPageComponents/ourGoalsPart'
import Titi from 'layout/bobo'
import { Plans } from 'components/Plans'

export default function Home() {
  // React.useEffect(() => {
  //   window.location.href = 'https://www.youtube.com/watch?v=W9QVQvGSsKI'
  // }, [])

  return (
    <MainLayout classname={'bg-mainBg'}>
      <FirstPart />
      <Titi />
      <Fournumber />
      <Plans />
      <OurGoalsPart />
    </MainLayout>
  )
}
