import {} from 'react'
import { MainLayout } from 'layout'
import { Modd, Arttech } from 'components'
import { Easy } from 'components/telmun/arttecheasy'
import Apart from 'components/telmun/tusdaa'
import Text from 'components/text/text1'
import Content from "../../public/assets/data.js"

const data = Content.whatAreWeDoing

const WhatWeDoing = () => {
  return (
    <>
      <MainLayout classname={'bg-backgroundColor-darkGray'}>
        <Arttech data={data.artech} />
        <Text data = {data.text} />
        <Modd data = {data.modd}/>
        <Easy data = {data.easy} />
        <Apart data = {data.apart} />
      </MainLayout>
    </>
  )
}

export default WhatWeDoing
