import { Emphasis } from 'components/ligature/emphasis'
import Typography from 'components/typography'
import { PADDINGX } from 'constants/layout'
import { GoalCard } from 'components'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { motion } from 'framer-motion'

export const Text2 = (props) => {
  const { bigText, paragraph, goals } = props

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  const left = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      transition: {
        delay: 0.3,
        duration: 0.8,
      },
      opacity: 1,
      x: 0,
    },
  }
  const right = {
    hidden: {
      opacity: 0,
      x: 30,
    },
    visible: {
      transition: {
        delay: 0.3,
        duration: 0.8,
      },
      opacity: 1,
      x: 0,
    },
  }

  return (
    <div className={` ${PADDINGX} max-w-shambWidth flex flex-col md:flex-row items-center justify-between z-20 `}>
      <motion.div
        variants={left}
        initial="hidden"
        whileInView={'visible'}
        className=" hidden md:block absolute mb-[450px]"
      >
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1355_18517)">
            <circle cx="25" cy="25" r="5" fill="#FFD217" />
          </g>
          <defs>
            <filter
              id="filter0_d_1355_18517"
              x="0"
              y="0"
              width="50"
              height="50"
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
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1355_18517" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1355_18517" result="shape" />
            </filter>
          </defs>
        </svg>
      </motion.div>

      <motion.div
        variants={left}
        initial="hidden"
        whileInView={'visible'}
        className="hidden md:block absolute mt-40 left-[calc(50%-100px)] "
      >
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1355_18516)">
            <circle cx="32" cy="32" r="8" fill="#FFD217" />
          </g>
          <defs>
            <filter
              id="filter0_d_1355_18516"
              x="0"
              y="0"
              width="64"
              height="64"
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
              <feGaussianBlur stdDeviation="12" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.972549 0 0 0 0 0.815686 0 0 0 0 0.294118 0 0 0 1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1355_18516" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1355_18516" result="shape" />
            </filter>
          </defs>
        </svg>
      </motion.div>

      <motion.div
        variants={left}
        initial="hidden"
        whileInView={'visible'}
        className="block md:hidden absolute left-0 mt-96"
      >
        <svg width="166" height="288" viewBox="0 0 166 288" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="22" cy="144" r="144" fill="url(#paint0_linear_1355_18141)" />
          <defs>
            <linearGradient
              id="paint0_linear_1355_18141"
              x1="22"
              y1="0"
              x2="22.1186"
              y2="234.373"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2A2C2C" />
              <stop offset="1" stop-color="#2A2C2C" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      <motion.div
        variants={left}
        initial="hidden"
        whileInView={'visible'}
        className="block md:hidden absolute left-[calc(50%-100px)] mb-72 z-20"
      >
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1355_18216)">
            <circle r="5" transform="matrix(-1 0 0 1 25 25)" fill="#FFD217" />
          </g>
          <defs>
            <filter
              id="filter0_d_1355_18216"
              x="0"
              y="0"
              width="50"
              height="50"
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
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1355_18216" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1355_18216" result="shape" />
            </filter>
          </defs>
        </svg>
      </motion.div>

      <motion.div
        variants={left}
        initial="hidden"
        whileInView={'visible'}
        className="flex flex-col w-full md:w-[51%] justify-center items-center z-20"
      >
        <Emphasis
          ts=" flex justify-center md:justify-start"
          hrClasses="my-3"
          className=" text-center md:text-left text-white"
        >
          {bigText}
        </Emphasis>
        <div className="h-14 md:h-0"></div>
        <Typography variant="body-web" className="text-white/60">
          {paragraph}
        </Typography>
      </motion.div>

      <motion.div
        variants={right}
        initial="hidden"
        whileInView={'visible'}
        className="flex flex-col items-end justify-center w-full md:w-[45%]"
      >
        {goals.map((el) => {
          return <GoalCard index={el.index} desc={el.text} className="items-center my-8 z-40" />
        })}
      </motion.div>
    </div>
  )
}
