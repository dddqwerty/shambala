import { Cells } from './cells'
import { data } from '../../../public/assets/naadamPlanPictureData'

export const Desk = () => {
  return (
    <div className="max-w-shambWidth w-screen invisible md:visible -z-50 md:z-0 absolute md:relative flex justify-center items-center top-0 ">
      <div className="grid grid-cols-3 gap-y-[72px] gap-x-[61px]">
        {data.map((el) => {
          return <Cells pic={el.picture} text={el.text} />
        })}
      </div>
    </div>
  )
}
