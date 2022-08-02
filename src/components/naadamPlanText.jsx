import { Emphasis } from 'components'
import Typography from 'components/typography'
import { motion } from 'framer-motion'

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

export const NaadamPlanText = (props) => {
  const { title, paragraph } = props

  return (
    <motion.div
      variants={item}
      initial="hidden"
      whileInView={'visible'}
      className="max-w-shambWidth w-full flex items-center flex-col justify-center"
    >
      <div className="absolute mt-20 visible md:invisible">
        <svg width="244" height="168" viewBox="0 0 244 168" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_452_1383)">
            <circle cx="130" cy="143" r="5" fill="#FFD217" />
          </g>
          <g filter="url(#filter1_d_452_1383)">
            <circle cx="25" cy="82" r="5" fill="#FFD217" />
          </g>
          <g filter="url(#filter2_d_452_1383)">
            <circle cx="221" cy="23" r="3" fill="#FFD217" />
          </g>
          <defs>
            <filter
              id="filter0_d_452_1383"
              x="105"
              y="118"
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
              x="0"
              y="57"
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
              x="198"
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
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_452_1383" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_452_1383" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <Emphasis children={title} />
      <div className="h-[55px]"></div>
      <Typography variant={'body-mobile'} className="text-center w-[90%] md:w-[60%] md:text-title2 text-white/50">
        {paragraph}
      </Typography>
      <div className="h-[55px]"></div>
    </motion.div>
  )
}

export default NaadamPlanText
