import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import GoalCard from 'components/goalCard'
import Emphasis from 'components/ligature/emphasis'
import { PADDINGX } from 'constants/layout'
import { motion } from 'framer-motion'

const OurPlanetSecond = (props) => {
  const { ourPlanetSecond } = props

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  const mid = useMediaQuery(theme.breakpoints.down('md'))
  const titleAni = {
    hidden: {
      opacity: 0,
      y: -20,
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
  const goalAni = {
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
    <div className="relative">
      <motion.div
        variants={titleAni}
        initial="hidden"
        whileInView={'visible'}
        className={matches ? 'hidden' : 'absolute top-[20%] -left-[3%] z-10'}
      >
        <svg width="634" height="634" viewBox="0 0 634 634" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="180" cy="317" r="317" fill="url(#paint0_linear_1355_18021)" />
          <defs>
            <linearGradient
              id="paint0_linear_1355_18021"
              x1="180"
              y1="0"
              x2="180.261"
              y2="515.945"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2A2C2C" />
              <stop offset="1" stop-color="#2A2C2C" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
      <motion.div
        variants={goalAni}
        initial="hidden"
        whileInView={'visible'}
        className={matches ? 'hidden' : 'absolute top-[30%] left-[10%] z-20'}
      >
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1355_18097)">
            <circle cx="32" cy="32" r="8" fill="#FFD217" />
          </g>
          <defs>
            <filter
              id="filter0_d_1355_18097"
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
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1355_18097" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1355_18097" result="shape" />
            </filter>
          </defs>
        </svg>
      </motion.div>
      <motion.div
        variants={goalAni}
        initial="hidden"
        whileInView={'visible'}
        className={matches ? 'hidden' : 'absolute top-[18%] left-[27%] z-20'}
      >
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1355_18088)">
            <circle cx="25" cy="25" r="5" fill="#FFD217" />
          </g>
          <defs>
            <filter
              id="filter0_d_1355_18088"
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
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1355_18088" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1355_18088" result="shape" />
            </filter>
          </defs>
        </svg>
      </motion.div>
      <motion.div
        variants={titleAni}
        initial="hidden"
        whileInView={'visible'}
        className={matches ? 'absolute top-0 left-[16.5%] z-20' : 'hidden'}
      >
        <svg width="276" height="276" viewBox="0 0 276 276" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="138" cy="138" r="138" fill="url(#paint0_linear_1355_18143)" />
          <defs>
            <linearGradient
              id="paint0_linear_1355_18143"
              x1="138"
              y1="0"
              x2="138.114"
              y2="224.607"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2A2C2C" />
              <stop offset="1" stop-color="#2A2C2C" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
      <motion.div
        variants={titleAni}
        initial="hidden"
        whileInView={'visible'}
        className={matches ? 'absolute top-[10px] left-[27%] z-20' : 'hidden'}
      >
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1355_18197)">
            <circle cx="25" cy="25" r="5" fill="#FFD217" />
          </g>
          <defs>
            <filter
              id="filter0_d_1355_18197"
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
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1355_18197" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1355_18197" result="shape" />
            </filter>
          </defs>
        </svg>
      </motion.div>
      <motion.div
        variants={goalAni}
        initial="hidden"
        whileInView={'visible'}
        className={matches ? 'absolute top-[130px] left-[70%] z-20' : 'hidden'}
      >
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1355_18199)">
            <circle cx="23" cy="23" r="3" fill="#FFD217" />
          </g>
          <defs>
            <filter
              id="filter0_d_1355_18199"
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
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1355_18199" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1355_18199" result="shape" />
            </filter>
          </defs>
        </svg>
      </motion.div>

      <div className="flex justify-center items-center absolute top-[45%] left-[75%] z-20">
        <div className={mid ? 'hidden' : 'w-[463px] absolute'}>
          <img src="assets\igm\igmBackground.png" alt="" />
        </div>
        <div className={mid ? 'hidden' : 'absolute '}>
          <svg width="666" height="666" viewBox="0 0 666 666" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.3" cx="333" cy="333" r="332.5" stroke="white" />
          </svg>
        </div>
        <div className={mid ? 'hidden' : 'absolute '}>
          <svg width="1160" height="1160" viewBox="0 0 1160 1160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.2" cx="580" cy="580" r="579.5" stroke="white" />
          </svg>
        </div>
        <div className={mid ? 'hidden' : 'absolute '}>
          <svg width="1952" height="1952" viewBox="0 0 1952 1952" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.1" cx="976" cy="976" r="975.5" stroke="white" />
          </svg>
        </div>
      </div>

      <div id="spacer" className={matches ? 'h-20' : 'h-72'}></div>

      <div className="flex flex-col items-center">
        <div className={matches ? 'w-full flex flex-col items-center' : 'w-[60%] flex flex-col'}>
          <motion.div variants={titleAni} initial="hidden" whileInView={'visible'}>
            <Emphasis
              ts={matches ? ' flex justify-center py-2 ' : ' flex justify-start '}
              content={ourPlanetSecond.title}
              className={'text-primary-white z-40'}
            />
          </motion.div>
          <div id="spacer" className={matches ? 'h-20' : 'h-10'}></div>
          <motion.div
            variants={goalAni}
            initial="hidden"
            whileInView={'visible'}
            className={`grid grid-rows-3 gap-4 sm:gap-16 z-40 ${PADDINGX} max-w-shambWidth`}
          >
            {ourPlanetSecond.goals.map((el) => {
              return <GoalCard index={el.index} desc={matches ? `${el.textMobile}` : `${el.textDesktop}`} />
            })}
          </motion.div>
        </div>

        <div id="spacer" className={matches ? 'h-20' : 'h-64'}></div>

        <motion.div
          variants={goalAni}
          initial="hidden"
          whileInView={'visible'}
          className={` grid grid-cols-3 gap-9 sm:gap-40 z-40 ${PADDINGX}`}
        >
          <div className={matches ? 'w-[81px]' : 'max-w-[200px]'}>
            <img src={ourPlanetSecond.igmIncubator} alt="" />
          </div>
          <div className={matches ? 'w-[81px]' : 'max-w-[200px]'}>
            <img src={ourPlanetSecond.igmLabs} alt="" />
          </div>
          <div className={matches ? 'w-[81px]' : 'max-w-[200px]'}>
            <img src={ourPlanetSecond.igmGarden} alt="" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default OurPlanetSecond
