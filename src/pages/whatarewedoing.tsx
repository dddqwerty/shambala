import {} from 'react'
import { MainLayout } from 'layout'
import { Yellow } from 'components'
import { handleIcon } from 'utils'
import { PADDINGX } from 'constants/layout'
import { Emphasis } from 'components'
const WhatWeDoing = () => {
  return (
    <>
      <MainLayout classname={'bg-backgroundColor-darkGray'}>
        <div className="w-full">
          <div className="relative hidden md:block lg:block">
            <img src="assets/shono.webp" className="absolute left-0 top-0 w-screen h-screen" />
            <div style={{ background: '#060B27' }} className="absolute top-0 left-0 w-screen h-screen opacity-40 " />
            <div style={{ background: '#060B27' }} className="absolute top-0 left-0 w-screen h-screen opacity-40" />
          </div>

          <div className={`h-screen relative flex max-w-shambWidth mx-auto ${PADDINGX}`}>
            <Yellow
              className='mt-72'
              title={'Art Tech Empire'}
              desc={
                'Бидний "Art-Tech Empire" Лэнд Арт төсөл маань Дорноговь аймгийн, Төхөмийн хөндий, Ар цацын ус гэх байршлын 5 га газарт нийт 30,000 ширхэг буюу 10,000 бортоготой мод тарих төсөл юм.'
              }
              headerEl={handleIcon({ icon: 'nav', size: 30 })}
            />
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default WhatWeDoing
