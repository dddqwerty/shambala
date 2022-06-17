import { Box } from './box'
import { PBox } from './pBox'
import { Emphasis } from 'components'
import { motion } from 'framer-motion'

const list = [
  { icon: 'drone', text: 'Replace horse racing with drone racing' },
  { icon: 'controller', text: 'Replace wrestling with e-sports and information security competitions' },
  { icon: 'rocket-2', text: 'Replacing archery with missiles and free flight' },
]
const cont = {
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.2,
      duration: 0.8,
    },
  },
}
const head = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    transition: {
      delay: 0.4,
      duration: 0.8,
    },
    opacity: 1,
    y: 0,
  },
}
const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    transition: {
      delay: 0.5,
      duration: 0.8,
    },
    opacity: 1,
    y: 0,
  },
}

export const NaadamEvents = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={cont}
      className="max-w-shambWidth mx-auto w-screen flex flex-col items-center justify-center"
    >
      <div className="absolute mt-[60%] visible md:invisible ">
        <svg width="451" height="405" viewBox="0 0 451 405" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M107 187C107 263.215 83.0472 325 53.5 325C23.9528 325 0 263.215 0 187C0 110.785 23.9528 49 53.5 49C83.0472 49 107 110.785 107 187Z"
            fill="url(#paint0_linear_603_19)"
          />
          <path
            d="M279 206C279 282.215 255.047 344 225.5 344C195.953 344 172 282.215 172 206C172 129.785 195.953 68 225.5 68C255.047 68 279 129.785 279 206Z"
            fill="url(#paint1_linear_603_19)"
          />
          <path
            d="M195 267C195 343.215 171.047 405 141.5 405C111.953 405 88 343.215 88 267C88 190.785 111.953 129 141.5 129C171.047 129 195 190.785 195 267Z"
            fill="url(#paint2_linear_603_19)"
          />
          <path
            d="M451 138C451 214.215 427.047 276 397.5 276C367.953 276 344 214.215 344 138C344 61.7847 367.953 0 397.5 0C427.047 0 451 61.7847 451 138Z"
            fill="url(#paint3_linear_603_19)"
          />
          <path
            d="M384 239C384 315.215 360.047 377 330.5 377C300.953 377 277 315.215 277 239C277 162.785 300.953 101 330.5 101C360.047 101 384 162.785 384 239Z"
            fill="url(#paint4_linear_603_19)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_603_19"
              x1="330.5"
              y1="101"
              x2="330.793"
              y2="325.607"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2A2C2C" />
              <stop offset="1" stopColor="#2A2C2C" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_603_19"
              x1="330.5"
              y1="101"
              x2="330.793"
              y2="325.607"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2A2C2C" />
              <stop offset="1" stopColor="#2A2C2C" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_603_19"
              x1="330.5"
              y1="101"
              x2="330.793"
              y2="325.607"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2A2C2C" />
              <stop offset="1" stopColor="#2A2C2C" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_603_19"
              x1="330.5"
              y1="101"
              x2="330.793"
              y2="325.607"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2A2C2C" />
              <stop offset="1" stopColor="#2A2C2C" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_603_19"
              x1="330.5"
              y1="101"
              x2="330.793"
              y2="325.607"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2A2C2C" />
              <stop offset="1" stopColor="#2A2C2C" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute mb-96 ml-56 visible md:invisible">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1898_17905)">
            <circle r="5" transform="matrix(-1 0 0 1 25 25)" fill="#FFD217" />
          </g>
          <defs>
            <filter
              id="filter0_d_1898_17905"
              x="0"
              y="0"
              width="50"
              height="50"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1898_17905" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1898_17905" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <motion.div variants={head} initial="hidden" whileInView={'visible'}>
        <Emphasis left={true}>Naadam events</Emphasis>
      </motion.div>
      <div className="h-[55px]"></div>
      <div className=" w-full flex flex-col justify-between md:flex-row">
        {list.map((el, index) => {
          return (
            <motion.div variants={item} key={`kay${index}`}>
              <Box icon={el.icon} text={el.text} />
              <PBox icon={el.icon} text={el.text} />
            </motion.div>
          )
        })}
      </div>
      <div className="h-[55px]"></div>
    </motion.div>
  )
}

export default NaadamEvents
