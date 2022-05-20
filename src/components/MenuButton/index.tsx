import * as React from 'react'
import { motion } from 'framer-motion'

const MenuToggle = ({
  toggle,
  isOpen,
  width = 25,
  height = 15,
  strokeWidth = 5,
  color = 'white',
  transition = null,
  lineProps = null,
  ...props
}) => {
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 2,
    },
  }

  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -2,
    },
  }
  const unitHeight = 4
  const unitWidth = (unitHeight * (width as number)) / (height as number)
  const variant = isOpen ? 'opened' : 'closed'
  lineProps = {
    stroke: color,
    strokeWidth: strokeWidth as number,
    vectorEffect: 'non-scaling-stroke',
    initial: 'closed',
    animate: variant,
    transition,
    ...lineProps,
  }
  return (
    <button
      style={{
        backdropFilter: 'blur(10px)',
        boxShadow: '0px 0px 34px rgba(255, 255, 255, 0.34)',
      }}
      className={`absolute hover:cursor-pointer border-none outline-none w-[64px] h-[64px] rounded-full flex justify-center items-center bg-backgroundColor-navBar z-50 ${
        isOpen ? 'bottom-10 right-8' : 'top-0 left-0'
      }`}
      onClick={toggle}
    >
      <motion.svg
        viewBox={`0 0 ${unitWidth} ${unitHeight}`}
        overflow="visible"
        preserveAspectRatio="none"
        width={width}
        height={height}
        {...props}
      >
        <motion.line x1="0" x2={unitWidth} y1="0" y2="0" strokeLinecap="round" variants={top} {...lineProps} />
        <motion.line x1="0" x2={unitWidth} strokeLinecap="round" y1="4" y2="4" variants={bottom} {...lineProps} />
      </motion.svg>
    </button>
  )
}

export default MenuToggle
