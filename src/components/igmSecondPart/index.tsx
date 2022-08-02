import DeskIgmSecondPart from './desk'
import MobileIgmSecondPart from './mobile'
import IgmSecondPartText from './text'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { motion } from 'framer-motion'

const IgmSecondPart = (props) => {
  const { igmSecondPart } = props

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
    <motion.div
      variants={up}
      initial="hidden"
      whileInView={'visible'}
      className="flex items-center flex-col justify-center relative"
    >
      <div className={matches ? 'hidden' : 'absolute flex justify-center -top-[15%] z-10'}>
        <svg width="634" height="634" viewBox="0 0 634 634" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="317" cy="317" r="317" fill="url(#paint0_linear_1355_18022)" />
          <defs>
            <linearGradient
              id="paint0_linear_1355_18022"
              x1="317"
              y1="0"
              x2="317.261"
              y2="515.945"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2A2C2C" />
              <stop offset="1" stop-color="#2A2C2C" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className={matches ? 'hidden' : 'absolute -top-[10%] left-[42%] z-10'}>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1355_18098)">
            <circle cx="32" cy="32" r="8" fill="#FFD217" />
          </g>
          <defs>
            <filter
              id="filter0_d_1355_18098"
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
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1355_18098" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1355_18098" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className={matches ? 'hidden' : 'absolute top-[11%] left-[75.5%] z-10'}>
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1355_18089)">
            <circle cx="25" cy="25" r="5" fill="#FFD217" />
          </g>
          <defs>
            <filter
              id="filter0_d_1355_18089"
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
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1355_18089" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1355_18089" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className={matches ? 'hidden' : 'absolute top-[30%] left-[12%] z-10'}>
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1355_18090)">
            <circle cx="25" cy="25" r="5" fill="#FFD217" />
          </g>
          <defs>
            <filter
              id="filter0_d_1355_18090"
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
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1355_18090" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1355_18090" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className={matches ? 'hidden' : 'absolute top-[47%] -left-[2.5%] z-10'}>
        <svg width="255" height="634" viewBox="0 0 255 634" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="127.5" cy="317" rx="127.5" ry="317" fill="url(#paint0_linear_1355_18028)" />
          <defs>
            <linearGradient
              id="paint0_linear_1355_18028"
              x1="127.5"
              y1="0"
              x2="128.149"
              y2="515.945"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2A2C2C" />
              <stop offset="1" stop-color="#2A2C2C" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className={matches ? 'hidden' : 'absolute top-[73%] left-[6%] z-10'}>
        <svg width="255" height="634" viewBox="0 0 255 634" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="127.5" cy="317" rx="127.5" ry="317" fill="url(#paint0_linear_1355_18028)" />
          <defs>
            <linearGradient
              id="paint0_linear_1355_18028"
              x1="127.5"
              y1="0"
              x2="128.149"
              y2="515.945"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2A2C2C" />
              <stop offset="1" stop-color="#2A2C2C" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className={matches ? 'hidden' : 'absolute top-[58%] left-[11%] z-10'}>
        <svg width="255" height="634" viewBox="0 0 255 634" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="127.5" cy="317" rx="127.5" ry="317" fill="url(#paint0_linear_1355_18028)" />
          <defs>
            <linearGradient
              id="paint0_linear_1355_18028"
              x1="127.5"
              y1="0"
              x2="128.149"
              y2="515.945"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2A2C2C" />
              <stop offset="1" stop-color="#2A2C2C" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className={matches ? 'hidden' : 'absolute top-[47%] left-[93%] z-10'}>
        <svg width="255" height="634" viewBox="0 0 255 634" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="127.5" cy="317" rx="127.5" ry="317" fill="url(#paint0_linear_1355_18028)" />
          <defs>
            <linearGradient
              id="paint0_linear_1355_18028"
              x1="127.5"
              y1="0"
              x2="128.149"
              y2="515.945"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2A2C2C" />
              <stop offset="1" stop-color="#2A2C2C" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className={matches ? 'hidden' : 'absolute top-[73%] left-[85%] z-10'}>
        <svg width="255" height="634" viewBox="0 0 255 634" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="127.5" cy="317" rx="127.5" ry="317" fill="url(#paint0_linear_1355_18028)" />
          <defs>
            <linearGradient
              id="paint0_linear_1355_18028"
              x1="127.5"
              y1="0"
              x2="128.149"
              y2="515.945"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2A2C2C" />
              <stop offset="1" stop-color="#2A2C2C" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className={matches ? 'hidden' : 'absolute top-[58%] left-[75%] z-10'}>
        <svg width="255" height="634" viewBox="0 0 255 634" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="127.5" cy="317" rx="127.5" ry="317" fill="url(#paint0_linear_1355_18028)" />
          <defs>
            <linearGradient
              id="paint0_linear_1355_18028"
              x1="127.5"
              y1="0"
              x2="128.149"
              y2="515.945"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2A2C2C" />
              <stop offset="1" stop-color="#2A2C2C" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <IgmSecondPartText title={igmSecondPart.title} description={igmSecondPart.description} />
      <DeskIgmSecondPart cells={igmSecondPart.cells} />
      <MobileIgmSecondPart cells={igmSecondPart.cells} />
    </motion.div>
  )
}

export default IgmSecondPart
