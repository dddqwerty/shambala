import { backgroundColor } from 'theme/colors'
import { handleIcon } from 'utils'

export const AtLine = (props) => {
  const { icon, style = ' ', b = false, act1, act2, sml = false, btm } = props
  let bStyle = 0
  let smlStyle = ''
  let size = 32
  let mmm = 'h-[calc(50%-25px)]'
  if (b) {
    bStyle = 100
  } else {
    bStyle = 0
  }
  if (sml) {
    smlStyle = 'h-[40px] w-[40px]'
    size = 23
    mmm = 'h-[calc(50%-14px)]'
  } else {
    smlStyle = 'h-[50px] w-[50px]'
  }

  return (
    <div id="spliter" className="px-[20px] w-fit flex justify-center items-center flex-col">
      <div id="line" className={`w-[10px] h-[calc(50%-25px)]  ${act1} ${style}`}></div>
      <div
        id="icon"
        className={`${smlStyle} rounded-[50%] border-4 border-backgroundColor-darkGray ${act2} flex items-center justify-center`}
      >
        {handleIcon({
          icon: icon,
          size: size,
          className: 'text-black',
        })}
      </div>
      <div id="line" className={`w-[10px] ${mmm} ${btm} ${act1}`}></div>
    </div>
  )
}
export default AtLine
