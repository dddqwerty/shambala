import { handleIcon } from 'utils'
export const Mid = (props) => {
  const { headText, bodyText, icon, date, l } = props

  if (!l) {
    return (
      <div className="h-[450px] w-full flex flex-row justify-center">
        <div id="text-half" className="w-planWidth h-full flex flex-col justify-center">
          <div id="header text" className="text-semibold text-title1 text-white">
            {headText}
          </div>
          <div id="body text" className="text-body text-primary-white/50">
            {bodyText}
          </div>
        </div>
        <div id="spliter" className="w-fit flex justify-center items-center flex-col">
          <div id="line" className="w-[10px] h-[calc(50%-25px)] bg-[#C5C6CD]/30 "></div>
          <div
            id="icon"
            className="h-[50px] w-[50px] rounded-[50%] border-4 border-backgroundColor-darkGray bg-textColor-secondary-lightGray flex items-center justify-center"
          >
            {handleIcon({
              icon: icon,
              size: 32,
              className: 'text-black',
            })}
          </div>
          <div id="line" className="w-[10px] h-[calc(50%-25px)] bg-[#C5C6CD]/30"></div>
        </div>
        <div id="date-half" className=" w-planWidth h-full flex justify-center items-center">
          <div id="actual date " className="font-medium text-p2 text-primary-white/50">
            {date}
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="h-[450px] w-full flex flex-row justify-center">
        <div id="date-half" className=" w-planWidth h-full flex justify-center items-center">
          <div id="actual date " className="font-medium text-p2 text-primary-white/50">
            {date}
          </div>
        </div>

        <div id="spliter" className="w-fit flex justify-center items-center flex-col">
          <div id="line" className="w-[10px] h-[calc(50%-25px)] bg-[#C5C6CD]/30 "></div>
          <div
            id="icon"
            className="h-[50px] w-[50px] rounded-[50%] border-4 border-backgroundColor-darkGray bg-textColor-secondary-lightGray flex items-center justify-center"
          >
            {handleIcon({
              icon: icon,
              size: 32,
              className: 'text-black',
            })}
          </div>
          <div id="line" className="w-[10px] h-[calc(50%-25px)] bg-[#C5C6CD]/30"></div>
        </div>

        <div id="text-half" className="w-planWidth h-full flex flex-col justify-center">
          <div id="header text" className="text-semibold text-title1 text-white">
            {headText}
          </div>
          <div id="body text" className="text-body text-primary-white/50">
            {bodyText}
          </div>
        </div>
      </div>
    )
  }
}

export default Mid
