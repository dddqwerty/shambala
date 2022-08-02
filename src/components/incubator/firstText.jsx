import Typography from 'components/typography'
import Emphasis from 'components/ligature'
import { PADDINGX } from 'constants/layout'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { motion } from 'framer-motion'

export const FirstText = (props) => {
  const { bigText, subText, paragraph } = props

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  const up = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      transition: {
        delay: 0.3,
        duration: 0.8,
      },
      opacity: 1,
      y: 0,
    },
  }

  return (
    <div className={`flex flex-col md:flex-row justify-between items-center min-h-fit max-w-shambWidth ${PADDINGX} `}>
      <div className=" absolute left-0 z-0 md:block hidden">
        <svg width="498" height="634" viewBox="0 0 498 634" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="181" cy="317" r="317" fill="url(#paint0_linear_1355_18024)" />
          <defs>
            <linearGradient
              id="paint0_linear_1355_18024"
              x1="181"
              y1="0"
              x2="181.261"
              y2="515.945"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2A2C2C" />
              <stop offset="1" stop-color="#2A2C2C" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <motion.div
        variants={up}
        initial="hidden"
        whileInView={'visible'}
        className="absolute block md:hidden left-[calc(50%+100px)]"
      >
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1355_18206)">
            <circle r="3" transform="matrix(-1 0 0 1 23 23)" fill="#FFD217" />
          </g>
          <defs>
            <filter
              id="filter0_d_1355_18206"
              x="0"
              y="0"
              width="46"
              height="46"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.972549 0 0 0 0 0.815686 0 0 0 0 0.294118 0 0 0 1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1355_18206" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1355_18206" result="shape" />
            </filter>
          </defs>
        </svg>
      </motion.div>
      <motion.div variants={up} initial="hidden" whileInView={'visible'} className="z-10 w-full md:w-[40%] text-white">
        <Typography variant={matches ? 'h4' : 'h3'} className="">
          {bigText}
        </Typography>
      </motion.div>
      <div className=" h-14 md:h-0"></div>
      <motion.div variants={up} initial="hidden" whileInView={'visible'} className=" flex flex-col w-full md:w-[50%]">
        <Typography variant="yeloo" className=" z-10 text-[#C7B36D]">
          {subText}
        </Typography>
        <Typography variant="body-web" className="z-10 text-white py-5">
          {paragraph}
        </Typography>
        <p className=" z-10 underline text-white/60 underline-offset-1">See more</p>
      </motion.div>
    </div>
  )
}
