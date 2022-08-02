import Emphasis from 'components/ligature'
import Card from 'components/card'
import Typography from 'components/typography'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Button from 'components/Button'
import { PADDINGX } from 'constants/layout'
import { motion } from 'framer-motion'

const IGMLAB = (props) => {
  const { igmLab } = props

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  const down = {
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
    <div className={` ${PADDINGX}  max-w-shambWidth flex items-center flex-col justify-center relative`}>
      <motion.div
        variants={up}
        initial="hidden"
        whileInView={'visible'}
        className={matches ? 'hidden' : 'absolute left-[70%] -top-[2.5%] z-20'}
      >
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1355_18099)">
            <circle cx="32" cy="32" r="8" fill="#FFD217" />
          </g>
          <defs>
            <filter
              id="filter0_d_1355_18099"
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
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1355_18099" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1355_18099" result="shape" />
            </filter>
          </defs>
        </svg>
      </motion.div>
      <motion.div
        variants={up}
        initial="hidden"
        whileInView={'visible'}
        className={matches ? 'hidden' : 'absolute left-[100%] top-[30%] z-20'}
      >
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1355_18091)">
            <circle cx="25" cy="25" r="5" fill="#FFD217" />
          </g>
          <defs>
            <filter
              id="filter0_d_1355_18091"
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
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1355_18091" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1355_18091" result="shape" />
            </filter>
          </defs>
        </svg>
      </motion.div>
      <motion.div
        variants={up}
        initial="hidden"
        whileInView={'visible'}
        className={matches ? 'hidden' : 'absolute left-0 top-[20%] z-20'}
      >
        <svg width="135" height="135" viewBox="0 0 135 135" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.3">
            <circle cx="67.5" cy="67.5" r="67" stroke="white" />
          </g>
        </svg>
      </motion.div>
      <motion.div
        variants={up}
        initial="hidden"
        whileInView={'visible'}
        className={matches ? 'hidden' : 'absolute left-[5.5%] top-[43%] z-20'}
      >
        <svg width="584" height="584" viewBox="0 0 584 584" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="292" cy="292" r="292" fill="url(#paint0_linear_1355_18023)" />
          <defs>
            <linearGradient
              id="paint0_linear_1355_18023"
              x1="292"
              y1="0"
              x2="292.24"
              y2="475.256"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2A2C2C" />
              <stop offset="1" stop-color="#2A2C2C" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
      <motion.div
        variants={up}
        initial="hidden"
        whileInView={'visible'}
        className={matches ? 'hidden' : 'absolute left-[2%] top-[42.5%] z-20'}
      >
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1355_18100)">
            <circle cx="32" cy="32" r="8" fill="#FFD217" />
          </g>
          <defs>
            <filter
              id="filter0_d_1355_18100"
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
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1355_18100" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1355_18100" result="shape" />
            </filter>
          </defs>
        </svg>
      </motion.div>
      <motion.div
        variants={up}
        initial="hidden"
        whileInView={'visible'}
        className={matches ? 'hidden' : 'absolute left-[30%] top-[70%] z-20'}
      >
        <svg width="339" height="339" viewBox="0 0 339 339" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.3">
            <circle cx="169.5" cy="169.5" r="169" stroke="white" />
          </g>
        </svg>
      </motion.div>
      <motion.div
        variants={up}
        initial="hidden"
        whileInView={'visible'}
        className={matches ? 'hidden' : 'absolute left-[45%] top-[75%] z-20'}
      >
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1355_18092)">
            <circle cx="25" cy="25" r="5" fill="#FFD217" />
          </g>
          <defs>
            <filter
              id="filter0_d_1355_18092"
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
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1355_18092" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1355_18092" result="shape" />
            </filter>
          </defs>
        </svg>
      </motion.div>
      <motion.div
        variants={up}
        initial="hidden"
        whileInView={'visible'}
        className={matches ? 'absolute left-[65%] -top-[40px] z-20' : 'hidden'}
      >
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1355_18202)">
            <circle cx="23" cy="23" r="3" fill="#FFD217" />
          </g>
          <defs>
            <filter
              id="filter0_d_1355_18202"
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
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1355_18202" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1355_18202" result="shape" />
            </filter>
          </defs>
        </svg>
      </motion.div>
      <motion.div
        variants={up}
        initial="hidden"
        whileInView={'visible'}
        className={matches ? 'absolute left-[15%] top-[10px] z-20' : 'hidden'}
      >
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1355_18201)">
            <circle cx="25" cy="25" r="5" fill="#FFD217" />
          </g>
          <defs>
            <filter
              id="filter0_d_1355_18201"
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
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1355_18201" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1355_18201" result="shape" />
            </filter>
          </defs>
        </svg>
      </motion.div>
      <motion.div
        variants={up}
        initial="hidden"
        whileInView={'visible'}
        className={matches ? 'absolute left-[60%] top-[300px] z-20' : 'hidden'}
      >
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1355_18203)">
            <circle cx="23" cy="23" r="3" fill="#FFD217" />
          </g>
          <defs>
            <filter
              id="filter0_d_1355_18203"
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
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1355_18203" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1355_18203" result="shape" />
            </filter>
          </defs>
        </svg>
      </motion.div>
      <motion.div
        variants={up}
        initial="hidden"
        whileInView={'visible'}
        className={matches ? 'absolute left-[73%] top-[780px] z-20' : 'hidden'}
      >
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
      </motion.div>
      <motion.div
        variants={up}
        initial="hidden"
        whileInView={'visible'}
        className={matches ? 'absolute left-[50%] top-[700px] z-20' : 'hidden'}
      >
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
      </motion.div>
      <motion.div
        variants={up}
        initial="hidden"
        whileInView={'visible'}
        className={matches ? 'absolute left-[62%] top-[1200px] z-20' : 'hidden'}
      >
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
      </motion.div>
      <motion.div
        variants={up}
        initial="hidden"
        whileInView={'visible'}
        className={matches ? 'absolute left-[40%] top-[1270px] z-20' : 'hidden'}
      >
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
      </motion.div>

      <motion.div
        variants={up}
        initial="hidden"
        whileInView={'visible'}
        className="grid grid-rows-2 place-items-center gap-[25px] mb-[150px]"
      >
        <Emphasis>
          <Typography variant={matches ? 'title-big' : 'h1'}>{igmLab.title}</Typography>
        </Emphasis>

        <Typography
          className="text-primary-white opacity-60 max-w-[800px] text-center"
          variant={matches ? 'body-mobile' : 'body-web'}
        >
          {igmLab.paragraph}
        </Typography>
      </motion.div>
      <div className="flex items-center justify-end w-full relative">
        <img
          src={igmLab.bgPicture}
          className="hidden md:block absolute right-[calc(52%)] z-30 opacity-60 w-[791px]"
          alt=""
        />

        <motion.div
          variants={up}
          initial="hidden"
          whileInView={'visible'}
          className="z-20 flex flex-col w-full items-end"
        >
          {igmLab.cards.map((el) => {
            return (
              <Card
                headerEl={el.headerEl}
                title={el.title}
                desc={el.desc}
                className={el.className + " py-8 "}
                buttonEl={
                  <Button variant="underline">
                    <Typography variant="body-web">{el.buttonText}</Typography>
                  </Button>
                }
                onClick={''}
              />
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
export default IGMLAB
