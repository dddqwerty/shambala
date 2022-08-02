import { MainLayout } from 'layout'
import { Modd, Arttech } from 'components'
import { Easy } from 'components/telmun/arttecheasy'
import Apart from 'components/telmun/tusdaa'
import Text from 'components/text/text1'

const WhatWeDoing = () => {
  return (
    <>
      <MainLayout classname={'bg-backgroundColor-darkGray'}>
        <Arttech />
        <Text />
        <Modd />
        <Easy />
        <Apart />
      </MainLayout>
    </>
  )
}

export default WhatWeDoing
