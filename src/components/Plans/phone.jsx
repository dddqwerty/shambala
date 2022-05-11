import React from 'react'
import { handleIcon } from 'utils'
import Typography from 'components/typography'
import { AtLine } from './line'

export const Phone = (props) => {
  const { headText, bodyText, date, l = false, icon, arrow = false, active = false, top = false, className } = props
  let styleTop = ' '
  let styleActive1 = ''
  let styleActive2 = ''
  if (top) {
    styleTop = 'rounded-t-[10px]'
  }
  if (active) {
    styleActive1 = 'bg-primary-yellow'
    styleActive2 = 'bg-primary-yellow'
  } else {
    styleActive1 = 'bg-[#C5C6CD]/30'
    styleActive2 = 'bg-textColor-secondary-lightGray'
  }

  return (
    <div className={`min-h-[250px] h-fit w-full flex flex-row justify-center ${className}`}>
      <AtLine icon={icon} sml style={styleTop} b={arrow} act1={styleActive1} act2={styleActive2} />

      <div className=" flex flex-col justify-center">
        <div className=" flex flex-col w-planWidth justify-center">
          <Typography variant="p-small" className="w-planWidth text-textColor-secondary-lightGray/40">
            {date}
          </Typography>
        </div>

        <div className=" flex flex-col w-planWidth justify-center">
          <Typography variant="title-small" className="text-white my-[5px] ">
            {headText}
          </Typography>
          <Typography variant="body-mobile" className="text-textColor-secondary-lightGray/40">
            {bodyText}
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default Phone
