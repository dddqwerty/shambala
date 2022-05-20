import React from 'react'
import { handleIcon } from 'utils'
import Typography from 'components/typography'
import { AtLine } from './line'
import { motion } from 'framer-motion'

const item3 = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
}

export const Phone = (props) => {
  const {
    headText,
    bodyText,
    date,
    l = false,
    icon,
    arrow = false,
    active = false,
    top = false,
    btm = false,
    className,
  } = props
  let styleTop = ' '
  let styleActive1 = ''
  let styleActive2 = ''
  let styleBtm = ''
  if (top) {
    styleTop = 'bg-gradient-to-t rounded-t-[20%] from-[#C5C6CD]/30 to-backgroundColor-darkGray '
    if (active) {
      styleTop = 'bg-gradient-to-t rounded-t-[20%] from-primary-yellow to-backgroundColor-darkGray '
    }
  }
  if (btm) {
    styleBtm = 'bg-gradient-to-b rounded-b-[20%] from-[#C5C6CD]/30 to-backgroundColor-darkGray '
    if (active) {
      styleBtm = 'bg-gradient-to-b rounded-b-[20%] from-primary-yellow to-backgroundColor-darkGray'
    }
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
      <AtLine icon={icon} sml style={styleTop} btm={styleBtm} b={arrow} act1={styleActive1} act2={styleActive2} />

      <motion.div variants={item3} className=" flex flex-col justify-center">
        <div className=" flex flex-col w-planWidth justify-center">
          <Typography variant="p-small" className="w-planWidth text-textColor-secondary-lightGray/40">
            {date}
          </Typography>
        </div>

        <div className=" flex flex-col w-planWidth justify-center">
          <Typography variant="title-small" className="text-white my-[5px] ">
            {headText}
          </Typography>
          <Typography variant="body-mobile" className="text-textColor-secondary-lightGray/60">
            {bodyText}
          </Typography>
        </div>
      </motion.div>
    </div>
  )
}

export default Phone
