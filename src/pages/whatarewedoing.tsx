import { } from 'react'
import { MainLayout } from 'layout'
import { Yellow, Bonusnuud, GarchigBonus, Mod } from 'components'
import { handleIcon } from 'utils'
import { PADDINGX } from 'constants/layout'
import { Easy } from 'components/telmun/arttecheasy'
import Apart from 'components/telmun/tusdaa'
import Text from 'components/text/text1'

const WhatWeDoing = () => {
  return (
    <>
      <MainLayout classname={'bg-backgroundColor-darkGray'}>
        <div className="h-screen w-screen relative">
          <div className="relative hidden md:block lg:block ">
            <img src="assets/shono.webp" className="absolute left-0 top-0 w-screen h-screen" />
            <div style={{ background: '#060B27' }} className="absolute top-0 left-0 w-screen h-screen opacity-40 " />
            <div style={{ background: '#060B27' }} className="absolute top-0 left-0 w-screen h-screen opacity-40" />

          </div>


          <div className={`h-screen relative flex flex-col items-center md:items-start max-w-shambWidth mx-auto ${PADDINGX}`}>
            <img src="assets/homelogo.webp" alt="" className="max-w-[65%] md:max-w-full md:hidden z-10 my-28 md:mt-52" />
            <Yellow
              className='md:mt-[15%]'
              title={'Art Tech Empire'}
              desc={
                'Бидний "Art-Tech Empire" Лэнд Арт төсөл маань Дорноговь аймгийн, Төхөмийн хөндий, Ар цацын ус гэх байршлын 5 га газарт нийт 30,000 ширхэг буюу 10,000 бортоготой мод тарих төсөл юм.'
              }
              headerEl={handleIcon({ icon: 'nav', size: 30 })}
            />
            <div className="hidden md:block z-10 absolute bottom-24 left-1/2 transform -translate-x-1/2">
              <img src="assets/svgs/mouse.svg" alt="" />
            </div>
          </div>
          <div style={{
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 4.13%, #212222 100%)"
          }} className={`absolute md:bottom-0 h-[100px] md:h-[40%] z-10 w-full`} />
        </div>

        <Text />

        <div className={`flex flex-col md:flex-row relative py-10 gap-20`}>
          <div
            style={{
              background: 'linear-gradient(180deg, rgba(248, 208, 75, 0) 0%, rgba(248, 208, 75, 0.21) 100%)',
            }}
            className="absolute w-full h-[656px] bottom-[10%] md:bottom-0  md:hidden"
          />

          <div className={`flex z-40 flex-col h-screen max-w-shambWidth mx-auto ${PADDINGX} w-full`}>
            <div className="flex space-x-4">
              <div className="flex flex-col items-start gap-28">
                <GarchigBonus />
                <Bonusnuud />
              </div>
            </div>
          </div>
          <Mod />
        </div>
        <Easy />
        <Apart />
      </MainLayout>
    </>
  )
}

export default WhatWeDoing
