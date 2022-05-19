import { handleIcon } from 'utils'

export const AtLine = (props) => {
  const { icon, style = ' ', b = false, act1, act2, sml = false, btm } = props
  let bStyle = 'h-[0px] w-[0px]'
  let smlStyle = ''
  let size = 32
  let mmm = 'h-[calc(450px/2-25px)]'
  if (b) {
    bStyle = 'h-[50px] w-[50px]'
  }
  if (sml) {
    smlStyle = 'h-[40px] w-[40px]'
    size = 23
    mmm = 'h-[calc(450px/2-14px)]'
  } else {
    smlStyle = 'h-[50px] w-[50px]'
  }

  return (
    <div id="spliter" className="px-[20px] w-fit flex justify-center items-center flex-col">
      <div id="line" className={`w-[6px] h-[calc(450px/2-25px)]  ${act1} ${style}`}></div>
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
      <div id="line" className={`w-[6px] ${mmm} ${btm} ${act1}`}></div>

      <div className={` ${bStyle} flex justify-center items-start`}>
        <img src="assets/arrow.svg" alt="" />
      </div>
    </div>
  )
}
export default AtLine
