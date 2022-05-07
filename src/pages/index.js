import { MainLayout } from 'layout'

import Fournumber from 'components/telmun/hedentoo'
export default function Home() {
  return (
    <div>
      <MainLayout classname={'bg-backgroundColor-darkGray'}>
        <div className="h-[500px]" />

        <Fournumber />
      </MainLayout>
    </div>
  )
}
