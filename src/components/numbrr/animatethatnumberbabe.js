import { motion } from 'framer-motion'
import React, { useEffect, useState, useRef } from 'react'
import Typography from 'components/typography'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

function formatForDisplay(number = 0) {
  return parseFloat(Math.max(number, 0)).toFixed(0).split('').reverse()
}

function NumberColumn({ digit }) {
  const [position, setPosition] = useState(0)

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  const variants = {
    visible: {
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        duration: 1,
        delay: 0.3,
      },
      y: position,
    },
    hidden: { y: 0 },
  }

  const columnContainer = useRef()

  const setColumnToNumber = (number) => {
    setPosition(columnContainer.current.clientHeight * parseInt(number))
  }

  useEffect(() => setColumnToNumber(digit), [digit])

  return (
    <div className="ticker-column-container" ref={columnContainer}>
      <Typography variant={matches ? 'h4' : 'h2'} className=" text-white">
        <motion.div whileInView={'visible'} initial="hidden" variants={variants} className="ticker-column">
          {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((num) => (
            <div key={num} className="ticker-digit">
              <span>{num}</span>
            </div>
          ))}
        </motion.div>
      </Typography>
      <span className="number-placeholder">0</span>
    </div>
  )
}

export default function AnimatingNumber({ value, suffix }) {
  const numArray = formatForDisplay(value)

  return (
    <div className="ticker-view">
      <span>{suffix}</span>
      {numArray.map((number, index) => (
        <NumberColumn key={index} digit={number} />
      ))}
    </div>
  )
}
