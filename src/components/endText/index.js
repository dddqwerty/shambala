import { PADDINGX } from 'constants/layout'
import { Title } from './title'
import { Body } from './body'
import { motion } from 'framer-motion'

const Ecard = (props) => {
  const { ecard } = props
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
    <motion.div
      variants={up}
      initial="hidden"
      whileInView={'visible'}
      className={` max-w-shambWidth ${PADDINGX} flex flex-col items-center w-full justify-center `}
    >
      <div className="hidden md:block absolute left-[calc(50%+30px)] z-0 ">
        <svg width="634" height="634" viewBox="0 0 634 634" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="317" cy="317" r="317" fill="url(#paint0_linear_1355_18505)" />
          <defs>
            <linearGradient
              id="paint0_linear_1355_18505"
              x1="317"
              y1="0"
              x2="317.261"
              y2="515.945"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2A2C2C" />
              <stop offset="1" stopColor="#2A2C2C" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute mt-[200px] left-[calc(50%+150px)] hidden md:block ">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1355_18507)">
            <circle cx="32" cy="32" r="8" fill="#FFD217" />
          </g>
          <defs>
            <filter
              id="filter0_d_1355_18507"
              x="0"
              y="0"
              width="64"
              height="64"
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
              <feGaussianBlur stdDeviation="12" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.972549 0 0 0 0 0.815686 0 0 0 0 0.294118 0 0 0 1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1355_18507" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1355_18507" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="absolute mt-[500px] right-[calc(50%+80px)] hidden md:block">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1355_18506)">
            <circle cx="25" cy="25" r="5" fill="#FFD217" />
          </g>
          <defs>
            <filter
              id="filter0_d_1355_18506"
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
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1355_18506" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1355_18506" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="absolute mt-[600px] right-[calc(50%+250px)] hidden md:block">
        <svg width="496" height="830" viewBox="0 0 496 830" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="148.5" cy="317" rx="148.5" ry="317" fill="url(#paint0_linear_0_1)" />
          <ellipse cx="347.5" cy="513" rx="148.5" ry="317" fill="url(#paint1_linear_0_1)" />
          <defs>
            <linearGradient
              id="paint0_linear_0_1"
              x1="148.5"
              y1="0"
              x2="149.057"
              y2="515.945"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2A2C2C" />
              <stop offset="1" stopColor="#2A2C2C" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_0_1"
              x1="347.5"
              y1="196"
              x2="348.057"
              y2="711.945"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2A2C2C" />
              <stop offset="1" stopColor="#2A2C2C" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="block md:hidden absolute ml-[40%]">
        <svg width="195" height="356" viewBox="0 0 195 356" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M107 138C107 214.215 83.0472 276 53.5 276C23.9528 276 0 214.215 0 138C0 61.7847 23.9528 0 53.5 0C83.0472 0 107 61.7847 107 138Z"
            fill="url(#paint0_linear_613_5)"
          />
          <path
            d="M195 218C195 294.215 171.047 356 141.5 356C111.953 356 88 294.215 88 218C88 141.785 111.953 80 141.5 80C171.047 80 195 141.785 195 218Z"
            fill="url(#paint1_linear_613_5)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_613_5"
              x1="141.5"
              y1="80"
              x2="141.793"
              y2="304.607"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2A2C2C" />
              <stop offset="1" stopColor="#2A2C2C" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_613_5"
              x1="141.5"
              y1="80"
              x2="141.793"
              y2="304.607"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2A2C2C" />
              <stop offset="1" stopColor="#2A2C2C" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Title title={ecard.title} subTitle={ecard.subTitle} />
      <div className=" h-24"></div>
      <Body db={ecard.body1} l />
      <Body db={ecard.body2} />

      <div className=" h-44"></div>
    </motion.div>
  )
}

export default Ecard
