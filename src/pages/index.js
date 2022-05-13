import * as React from 'react'
import { MainLayout } from 'layout'
import Fournumber from 'components/telmun/hedentoo'

export default function Home() {
  // React.useEffect(() => {
  //   window.location.href = 'https://www.youtube.com/watch?v=W9QVQvGSsKI'
  // }, [])

  return (
    <div>
      <MainLayout classname={'bg-backgroundColor-darkGray'}>
        <div className="h-[2000px] w-[500px] bg-primary-yellow" />
        <Fournumber />
      </MainLayout>
    </div>
  )
}
