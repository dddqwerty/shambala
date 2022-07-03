import React from 'react'
import { handleIcon } from 'utils'
import Typography from 'components/typography'
import { AtLine } from './line'
import { motion } from 'framer-motion'

const item1 = {
  hidden: { x: 80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
}
const item2 = {
  hidden: { x: -80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
}

export const Dir = (props) => {
  const {
    headText,
    bodyText,
    date,
    l = false,
    icon,
    arrow = false,
    active = false,
    top = false,
    className,
    b = false,
  } = props
  let styleTop = ' '
  let styleActive1 = ''
  let styleActive2 = ''
  let styleB = 'min-h-[450px]'
  if (top) {
    styleTop = 'rounded-t-[10px]'
  }
  if (b) {
    styleB = 'min-h-[500px] '
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
      <div className={`${styleB}  h-fit w-full flex flex-row justify-center  ${className}`}>
        <motion.div variants={item1} className=" flex flex-col w-planWidth h-[450px] mx-6 justify-center ">
          <Typography variant="title-big" className="text-white ">
            {headText}
          </Typography>
          <Typography variant="body-web" className="text-textColor-secondary-lightGray/50 ">
            {bodyText}
          </Typography>
        </motion.div>

        <AtLine icon={icon} style={styleTop} b={b} act1={styleActive1} act2={styleActive2} />

        <div className=" flex flex-col w-planWidth h-[450px] justify-center mx-6">
          <Typography variant="p-small" className="w-planWidth text-textColor-secondary-lightGray/40">
            {date}
          </Typography>
        </div>
      </div>
    )
  } else {
    return (
      <div className={`${styleB}  h-fit w-full flex flex-row justify-center  ${className}`}>
        <div className={` flex flex-col w-planWidth h-[450px] justify-center mx-6`}>
          <Typography variant="p-small" className="w-planWidth text-textColor-secondary-lightGray/40">
            {date}
          </Typography>
        </div>
        <AtLine icon={icon} style={styleTop} b={b} act1={styleActive1} act2={styleActive2} />
        <motion.div variants={item2} className=" flex flex-col w-planWidth h-[450px] justify-center mx-6">
          <Typography variant="title-big" className="text-white ">
            {headText}
          </Typography>
          <Typography variant="body-web" className="text-textColor-secondary-lightGray/50 ">
            {bodyText}
          </Typography>
        </motion.div>
      </div>
    )
  }
}

export default Dir
