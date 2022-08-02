import Typography from 'components/typography'
import { PADDINGX } from 'constants/layout'
import { motion } from 'framer-motion'

const data = {
  imageLink: 'assets/bench.png',
}

export const Bench = (props) => {
  const { paragraph, bigText, subText } = props
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
    <div className={` min-h-[650px] h-fit flex-col md:flex-row justify-end flex `}>
      <motion.div
        variants={left}
        initial="hidden"
        whileInView={'visible'}
        className="absolute block md:hidden mb-60 opacity-70  "
      >
        <svg width="293" height="344" viewBox="0 0 293 344" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse rx="167" ry="172" transform="matrix(-1 0 0 1 126 172)" fill="url(#paint0_linear_1355_18154)" />
          <defs>
            <linearGradient
              id="paint0_linear_1355_18154"
              x1="167"
              y1="0"
              x2="167.146"
              y2="279.945"
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
        className="absolute right-[calc(50%)] hidden md:block "
      >
        <svg width="634" height="634" viewBox="0 0 634 634" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="317" cy="317" r="317" fill="url(#paint0_linear_1355_18025)" />
          <defs>
            <linearGradient
              id="paint0_linear_1355_18025"
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
      </motion.div>

      <motion.div
        variants={left}
        initial="hidden"
        whileInView={'visible'}
        className="absolute right-[calc(50%+50px)] mt-60 hidden md:block"
      >
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1355_18094)">
            <circle cx="25" cy="25" r="5" fill="#FFD217" />
          </g>
          <defs>
            <filter
              id="filter0_d_1355_18094"
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
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1355_18094" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1355_18094" result="shape" />
            </filter>
          </defs>
        </svg>
      </motion.div>
      <motion.div
        variants={left}
        initial="hidden"
        whileInView={'visible'}
        className="md:absolute flex right-0 md:right-[calc(50%+170px)] md:w-[500px] w-[320px] mt-0 md:mt-52 z-20"
      >
        <img src={data.imageLink} className="" />
      </motion.div>

      <div className=" h-32 md:h-0"></div>

      <div className={` ${PADDINGX} w-full md:w-[50%] flex flex-col mt-12`}>
        <motion.div variants={right} initial="hidden" whileInView={'visible'} className=" hidden md:block">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1355_18103)">
              <circle cx="32" cy="32" r="8" fill="#FFD217" />
            </g>
            <defs>
              <filter
                id="filter0_d_1355_18103"
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
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1355_18103" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1355_18103" result="shape" />
              </filter>
            </defs>
          </svg>
        </motion.div>

        <motion.div variants={right} initial="hidden" whileInView={'visible'}>
          <Typography variant="yeloo" className=" z-20  text-[#C7B36D]">
            {subText}
          </Typography>
          <Typography variant="h3" className=" z-20 text-white">
            {bigText}
          </Typography>

          <Typography variant="body-web" className=" z-20 text-white py-3">
            {paragraph}
          </Typography>
          <p className=" z-20 underline text-white/60 underline-offset-1">See more</p>
        </motion.div>
      </div>
    </div>
  )
}
