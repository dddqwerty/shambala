import * as React from 'react'
import { Typography } from 'components'
import { MainLayout } from 'layout'
import { handleIcon } from 'utils'

// import Fournumber from 'components/telmun/hedentoo'

export default function Home() {
  // React.useEffect(() => {
  //   window.location.href = 'https://www.youtube.com/watch?v=W9QVQvGSsKI'
  // }, [])

  return (
    <div className="bg-backgroundColor-darkGray relative w-screen h-screen">
      {/* <img src="assets/homePageBg.png" className="w-screen absolute overflow-hidden z-[-2]" alt="" /> */}
      <MainLayout>
        <div
          style={{
            background: '#060B27',
          }}
          className="absolute top-0 left-0 z-10 hidden h-screen w-screen md:block lg:block opacity-40"
        />
        <div className="absolute z-10 -left-[9%] -top-[20%] w-[37%]">
          <img src="assets/shadowEllipse/ellipseBig.svg" className="max-w-full" alt="" />
        </div>
        <div className="absolute z-10 right-[8%] top-[-5%] w-[19%]">
          <img src="assets/shadowEllipse/ellipseMd.svg" className="max-w-full" alt="" />
        </div>
        <div className="absolute z-10 right-[-4%] bottom-[11%] w-[15%]">
          <img src="assets/shadowEllipse/ellipseSm.svg" className="max-w-full" alt="" />
        </div>

        <div
          className="absolute top-0 left-0 h-screen w-screen bg-no-repeat bg-cover hidden md:block"
          style={{
            background: `url('assets/homePageBg.png')`,
          }}
        ></div>
        <div className="h-screen flex justify-center items-center flex-col">
          <div className="flex flex-col gap-10">
            <div className="z-10 flex justify-center">
              <img src="assets/homeLogo.svg" alt="" className="max-w-full" />
            </div>

            <Typography
              variant="body-web"
              className="opacity-60 text-textColor-secondary-lightGray lg:w-[808px] w-[322px] text-center"
            >
              2056 он гэхэд Монгол Улсын тогтвортой хөгжлийн зорилтонд нийцсэн олон улсын инженер, судалгааны хүрээлэнг
              байгуулна.
            </Typography>
          </div>
        </div>
        <div className="z-10 absolute bottom-12 left-1/2 transform -translate-x-1/2">
          {handleIcon({
            icon: 'mouse',
            size: 40,
            className: 'text-white',
          })}
        </div>
      </MainLayout>
    </div>
  )
}
