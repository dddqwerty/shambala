import { Cells } from 'components/Pictures/cells'

const DeskIgmSecondPart = (props) => {
  const { cells } = props

  return (
    <div className="max-w-shambWidth w-screen invisible md:visible -z-40 md:z-40 absolute md:relative flex justify-center items-center top-0 mt-[180px]">
      <div className="grid grid-cols-3 gap-y-[34px] gap-x-[25px] z-40">
        <img src="assets/IgmSecondPartPictures/lifeOnLand.jpg" alt="" />
        {cells.map((el) => {
          return <Cells pic={el.picture} text={el.text} textClassName={'px-[18px]'} />
        })}
      </div>
    </div>
  )
}

export default DeskIgmSecondPart
