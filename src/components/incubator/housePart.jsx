import Typography from 'components/typography'
import { PADDINGX } from 'constants/layout'
import { motion } from 'framer-motion'

export const House = (props) => {
  const { subText, bigText, paragraph, bigHouse } = props
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
    <div className={` min-h-[650px] items-end  md:items-center flex flex-col md:flex-row  `}>
      <motion.div
        variants={up}
        initial="hidden"
        whileInView={'visible'}
        className=" absolute z-20 left-[calc(50%-300px)] mb-80 md:block hidden "
      >
        <svg width="597" height="367" viewBox="0 0 597 367" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_452_1383)">
            <circle cx="275" cy="342" r="5" fill="#FFD217" />
          </g>
          <g filter="url(#filter1_d_452_1383)">
            <circle cx="572" cy="25" r="5" fill="#FFD217" />
          </g>
          <g filter="url(#filter2_d_452_1383)">
            <circle cx="32" cy="117" r="8" fill="#FFD217" />
          </g>
          <defs>
            <filter
              id="filter0_d_452_1383"
              x="250"
              y="317"
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
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_452_1383" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_452_1383" result="shape" />
            </filter>
            <filter
              id="filter1_d_452_1383"
              x="547"
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
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_452_1383" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_452_1383" result="shape" />
            </filter>
            <filter
              id="filter2_d_452_1383"
              x="0"
              y="85"
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
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_452_1383" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_452_1383" result="shape" />
            </filter>
          </defs>
        </svg>
      </motion.div>

      <motion.div
        variants={up}
        initial="hidden"
        whileInView={'visible'}
        className="block md:hidden absolute right-0 opacity-60 mt-[600px]"
      >
        <svg width="189" height="356" viewBox="0 0 189 356" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse rx="53.5" ry="138" transform="matrix(-1 0 0 1 141.5 138)" fill="url(#paint0_linear_452_1383)" />
          <ellipse rx="53.5" ry="138" transform="matrix(-1 0 0 1 53.5 218)" fill="url(#paint1_linear_452_1383)" />
          <defs>
            <linearGradient
              id="paint0_linear_452_1383"
              x1="53.5"
              y1="0"
              x2="53.7931"
              y2="224.607"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2A2C2C" />
              <stop offset="1" stop-color="#2A2C2C" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_452_1383"
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
        className="md:absolute flex w-[350px] md:w-[800px] px-0 right-0 "
      >
        <img src={bigHouse} alt="" />
      </motion.div>

      <div className=" h-28 md:h-0"></div>

      <motion.div
        variants={up}
        initial="hidden"
        whileInView={'visible'}
        className={` ${PADDINGX} flex flex-col z-10 w-full md:w-[50%]`}
      >
        <Typography variant="yeloo" className=" text-[#C7B36D]">
          {subText}
        </Typography>
        <Typography variant="h3" className="text-white py-2">
          {bigText}
        </Typography>
        <Typography variant="body-web" className="text-white py-2">
          {paragraph.one}
        </Typography>
        <Typography variant="body-web" className="text-white py-2">
          {paragraph.two}
        </Typography>
        <Typography variant="body-web" className="text-white py-2">
          {paragraph.three}
        </Typography>
      </motion.div>
    </div>
  )
}
