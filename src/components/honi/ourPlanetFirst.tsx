import BigTitle from './bigTitle'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { PADDINGX } from 'constants/layout'
import { motion } from 'framer-motion'

const OurPlanetFirst = (props) => {
  const { ourPlanetFirst } = props

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  const title = {
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

  return (
    <motion.div variants={title} initial="hidden" whileInView={'visible'} className="relative h-screen w-screen">
      <div id="spacer" className="h-[242px] md:h-72"></div>
      <div className={matches ? `w-screen ${PADDINGX}` : 'w-full flex justify-center'}>
        <div className={matches ? 'hidden' : 'absolute top-[16%] left-[11%] z-20'}>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1355_18086)">
              <circle cx="32" cy="32" r="8" fill="#FFD217" />
            </g>
            <defs>
              <filter
                id="filter0_d_1355_18086"
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
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1355_18086" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1355_18086" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
        <div className={matches ? 'hidden' : 'absolute top-[80%] left-[29%] z-20'}>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1355_18096)">
              <circle cx="32" cy="32" r="8" fill="#FFD217" />
            </g>
            <defs>
              <filter
                id="filter0_d_1355_18096"
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
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1355_18096" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1355_18096" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
        <div className={matches ? 'absolute top-[270px] left-[25%] z-20' : 'absolute top-[55%] left-[47%] z-20'}>
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1355_18087)">
              <circle cx="25" cy="25" r="5" fill="#FFD217" />
            </g>
            <defs>
              <filter
                id="filter0_d_1355_18087"
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
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1355_18087" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1355_18087" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
        <div className={matches ? 'absolute top-[550px] left-[8%] z-20' : 'hidden'}>
          <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1355_18196)">
              <circle cx="23" cy="23" r="3" fill="#FFD217" />
            </g>
            <defs>
              <filter
                id="filter0_d_1355_18196"
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
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1355_18196" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1355_18196" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
        <div className={matches ? 'hidden' : 'absolute top-[34%] -left-[1.5%] z-20'}>
          <svg width="277" height="580" viewBox="0 0 277 580" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="138.5" cy="290" rx="138.5" ry="290" fill="url(#paint0_linear_1355_18020)" />
            <defs>
              <linearGradient
                id="paint0_linear_1355_18020"
                x1="138.5"
                y1="0"
                x2="139"
                y2="472"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#2A2C2C" />
                <stop offset="1" stop-color="#2A2C2C" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className={matches ? 'hidden' : 'absolute top-[16%] -left-[8%] z-10'}>
          <svg width="277" height="580" viewBox="0 0 277 580" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="138.5" cy="290" rx="138.5" ry="290" fill="url(#paint0_linear_1355_18020)" />
            <defs>
              <linearGradient
                id="paint0_linear_1355_18020"
                x1="138.5"
                y1="0"
                x2="139"
                y2="472"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#2A2C2C" />
                <stop offset="1" stop-color="#2A2C2C" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className={matches ? 'absolute top-[600px] left-[63%] z-20' : 'hidden'}>
          <svg width="101" height="276" viewBox="0 0 101 276" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="50.5" cy="138" rx="50.5" ry="138" fill="url(#paint0_linear_1355_18145)" />
            <defs>
              <linearGradient
                id="paint0_linear_1355_18145"
                x1="50.5"
                y1="0"
                x2="50.8105"
                y2="224.607"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#2A2C2C" />
                <stop offset="1" stop-color="#2A2C2C" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className={matches ? 'absolute top-[500px] left-[85%] z-20' : 'hidden'}>
          <svg width="101" height="276" viewBox="0 0 101 276" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="50.5" cy="138" rx="50.5" ry="138" fill="url(#paint0_linear_1355_18145)" />
            <defs>
              <linearGradient
                id="paint0_linear_1355_18145"
                x1="50.5"
                y1="0"
                x2="50.8105"
                y2="224.607"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#2A2C2C" />
                <stop offset="1" stop-color="#2A2C2C" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className={matches ? 'hidden' : 'absolute bottom-24 w-screen'}>
          <div
            className="z-10 absolute bottom-0 w-full h-[366px]"
            style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 4.13%, #141515 100%)' }}
          ></div>
          <div
            className="z-10 absolute -bottom-[366px] w-full h-[366px]"
            style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0) 4.13%, #141515 100%)' }}
          ></div>
        </div>
        <div className={matches ? 'hidden' : 'z-40 absolute bottom-14 left-1/2 transform -translate-x-1/2'}>
          <img src={ourPlanetFirst.mouse} alt="" />
        </div>

        <div
          className={
            matches
              ? 'absolute w-[400px] -top-[12%] -right-[45%] z-30 animate-spin-slow'
              : 'absolute w-[1200px] -top-[23%] -right-[20%] z-30 animate-spin-slow'
          }
        >
          <img src={ourPlanetFirst.earth} alt="" />
        </div>

        <div id="spacer" className={matches ? 'h-20' : 'h-72'}></div>

        <motion.div variants={title} initial="hidden" whileInView={'visible'} className={` w-full md:w-[80%] z-40 md:px-10`}>
          <BigTitle
            titleTop={ourPlanetFirst.bigTitle.titleTop}
            titleBtm={ourPlanetFirst.bigTitle.titleBtm}
            category1={ourPlanetFirst.bigTitle.category1}
            category2={ourPlanetFirst.bigTitle.category2}
            category3={ourPlanetFirst.bigTitle.category3}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default OurPlanetFirst
