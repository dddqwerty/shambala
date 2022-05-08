import { backdropClasses } from '@mui/material'
import { handleIcon } from 'utils'

export const AtLine = (props) => {
  const { icon, style, b = false } = props

  if (!b) {
    return (
      <div id="spliter" className="w-fit flex justify-center items-center flex-col">
        <div id="line" className={`w-[10px] h-[calc(50%-25px)] bg-[#C5C6CD]/30 ${style}`}></div>
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
    )
  } else {
    return (
      <div id="spliter" className="w-fit flex justify-center items-center flex-col">
        <div id="line" className={`w-[10px] h-[calc(50%-25px)] bg-[#C5C6CD]/30`}></div>
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
        <div id="line" className={`w-[10px] h-[calc(50%-25px)] bg-[#C5C6CD]/30 ${style}`}></div>
      </div>
    )
  }
}
export default AtLine
