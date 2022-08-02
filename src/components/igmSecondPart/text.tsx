import { Emphasis } from 'components'
import Typography from 'components/typography'
import { motion } from 'framer-motion'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

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

export const IgmSecondPartText = (props) => {
  const { title, description } = props

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <motion.div
      variants={item}
      initial="hidden"
      whileInView={'visible'}
      className="w-screen flex items-center flex-col justify-center z-40 relative"
    >
      <div className={matches ? 'absolute -top-[50px] left-[65%] z-10' : 'hidden'}>
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1355_18198)">
            <circle r="5" transform="matrix(-1 0 0 1 25 25)" fill="#FFD217" />
          </g>
          <defs>
            <filter
              id="filter0_d_1355_18198"
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
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1355_18198" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1355_18198" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className={matches ? 'absolute top-[70px] left-[15%] z-10' : 'hidden'}>
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1355_18200)">
            <circle r="3" transform="matrix(-1 0 0 1 23 23)" fill="#FFD217" />
          </g>
          <defs>
            <filter
              id="filter0_d_1355_18200"
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
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1355_18200" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1355_18200" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className={matches ? 'absolute top-[230px] z-10' : 'hidden'}>
        <svg width="107" height="276" viewBox="0 0 107 276" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="53.5" cy="138" rx="53.5" ry="138" fill="url(#paint0_linear_1355_18151)" />
          <defs>
            <linearGradient
              id="paint0_linear_1355_18151"
              x1="53.5"
              y1="0"
              x2="53.7931"
              y2="224.607"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2A2C2C" />
              <stop offset="1" stop-color="#2A2C2C" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className={matches ? 'absolute top-[200px] -left-[10%] z-10' : 'hidden'}>
        <svg width="107" height="276" viewBox="0 0 107 276" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="53.5" cy="138" rx="53.5" ry="138" fill="url(#paint0_linear_1355_18151)" />
          <defs>
            <linearGradient
              id="paint0_linear_1355_18151"
              x1="53.5"
              y1="0"
              x2="53.7931"
              y2="224.607"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2A2C2C" />
              <stop offset="1" stop-color="#2A2C2C" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className={matches ? 'absolute top-[170px] left-[81%] z-10' : 'hidden'}>
        <svg width="107" height="276" viewBox="0 0 107 276" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="53.5" cy="138" rx="53.5" ry="138" fill="url(#paint0_linear_1355_18151)" />
          <defs>
            <linearGradient
              id="paint0_linear_1355_18151"
              x1="53.5"
              y1="0"
              x2="53.7931"
              y2="224.607"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2A2C2C" />
              <stop offset="1" stop-color="#2A2C2C" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className={matches ? 'absolute top-[275px] left-[64%] z-10' : 'hidden'}>
        <svg width="107" height="276" viewBox="0 0 107 276" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="53.5" cy="138" rx="53.5" ry="138" fill="url(#paint0_linear_1355_18151)" />
          <defs>
            <linearGradient
              id="paint0_linear_1355_18151"
              x1="53.5"
              y1="0"
              x2="53.7931"
              y2="224.607"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2A2C2C" />
              <stop offset="1" stop-color="#2A2C2C" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className={matches ? 'absolute top-[300px] left-[13%] z-10' : 'hidden'}>
        <svg width="107" height="276" viewBox="0 0 107 276" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="53.5" cy="138" rx="53.5" ry="138" fill="url(#paint0_linear_1355_18151)" />
          <defs>
            <linearGradient
              id="paint0_linear_1355_18151"
              x1="53.5"
              y1="0"
              x2="53.7931"
              y2="224.607"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2A2C2C" />
              <stop offset="1" stop-color="#2A2C2C" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Emphasis children={title} />
      <div className="h-[55px]"></div>
      <Typography
        variant={matches ? 'body-web' : 'body-mobile'}
        className="text-center w-[90%] md:w-[49%] md:text-title2 text-white/50 z-40"
      >
        {matches ? `${description.mobile}` : `${description.desktop}`}
      </Typography>
      <div className="h-[55px]"></div>
    </motion.div>
  )
}

export default IgmSecondPartText
