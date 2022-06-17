import MobileSwiper from 'components/mobileSwiper'
import { NaadamPlanPictureData } from '../../../public/assets/naadamPlanPictureData'
import { Cells } from './cells'

const sheesh = 'assets/bigPictureSH.png'

export const Mobile = () => {
  return (
    <div className="visible md:invisible relative md:absolute z-0 md:-z-50 md:top-0">
      <MobileSwiper data={NaadamPlanPictureData} dataLength={6} slideClassName="px-[55px]" />
      <div className="h-[100px]"></div>
    </div>
  )
}
