import { Typography } from 'components'
import { MainLayout } from 'layout'
import { handleIcon } from 'utils'

import Fournumber from 'components/telmun/hedentoo'
export default function Home() {
  return (
    <div className="bg-backgroundColor-darkGray">
      {/* <img src="assets/homePageBg.png" className="w-screen absolute overflow-hidden z-[-2]" alt="" /> */}
      <MainLayout>
        <div className="h-screen flex justify-center items-center flex-col z-[2]">
          <img src="assets/homeLogo.svg" alt="" className="mb-[22px] lg:w-[589px] w-[267px]  " />
          <Typography
            variant="body-web"
            className="opacity-60 text-textColor-secondary-lightGray lg:w-[808px] w-[322px] text-center mb-[294px]"
          >
            2056 он гэхэд Монгол Улсын тогтвортой хөгжлийн зорилтонд нийцсэн олон улсын инженер, судалгааны хүрээлэнг
            байгуулна.
          </Typography>
          {handleIcon({
            icon: 'mouse',
            size: 32,
            className: 'text-white',
          })}
        </div>
      </MainLayout>
    </div>
  )
}
