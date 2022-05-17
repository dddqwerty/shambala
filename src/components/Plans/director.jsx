import React from 'react'
import { handleIcon } from 'utils'
import Typography from 'components/typography'
import { AtLine } from './line'

export const Dir = (props) => {
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

  if (!l) {
    return (
      <div className={`min-h-[450px]  h-fit w-full flex flex-row justify-center  ${className}`}>
        <div className=" flex flex-col w-planWidth h-full justify-center">
          <Typography variant="title-big" className="text-white ">
            {headText}
          </Typography>
          <Typography variant="body-web" className="text-textColor-secondary-lightGray/40 ">
            {bodyText}
          </Typography>
        </div>

        <AtLine icon={icon} style={styleTop} b={arrow} act1={styleActive1} act2={styleActive2} />

        <div className=" flex flex-col w-planWidth h-full justify-center">
          <Typography variant="p-small" className="w-planWidth text-textColor-secondary-lightGray/40">
            {date}
          </Typography>
        </div>
      </div>
    )
  } else {
    return (
      <div className={`min-h-[450px]  h-fit w-full flex flex-row justify-center  ${className}`}>
        <div className=" flex flex-col w-planWidth h-full justify-center">
          <Typography variant="p-small" className="w-planWidth text-textColor-secondary-lightGray/40">
            {date}
          </Typography>
        </div>
        <AtLine icon={icon} style={styleTop} b={arrow} act1={styleActive1} act2={styleActive2} />
        <div className=" flex flex-col w-planWidth h-full justify-center">
          <Typography variant="title-big" className="text-white ">
            {headText}
          </Typography>
          <Typography variant="body-web" className="text-textColor-secondary-lightGray/40 ">
            {bodyText}
          </Typography>
        </div>
      </div>
    )
  }
}

export default Dir
