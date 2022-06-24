import { Cells } from './cells'
import { NaadamPlanPictureData } from '../../../public/assets/naadamPlanPictureData'
import { PADDINGX } from 'constants/layout'

export const Desk = () => {
  return (
    <div
      className={`max-w-shambWidth w-screen invisible md:visible -z-50 md:z-0 absolute md:relative flex justify-center items-center top-0 ${PADDINGX}`}
    >
      <div className="grid grid-cols-3 gap-y-[72px] gap-x-[61px]">
        {NaadamPlanPictureData.map((el) => {
          return <Cells pic={el.picture} text={el.text} textClassName={' w-[90%] text-[#C0C0C0]'} />
        })}
      </div>
    </div>
  )
}
