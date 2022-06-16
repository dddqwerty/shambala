import React from 'react'
import { Dir } from './director.jsx'
import { Phone } from './phone'
import Typography from 'components/typography'
import { Emphasis } from 'components'
import { motion } from 'framer-motion'

const container = {
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.05,
      duration: 0.8,
    },
  },
}
const item = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export const Plans = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      className="w-full flex items-center justify-center"
    >
      <div className="absolute">
        <svg width="1318" height="1331" viewBox="0 0 1318 1331" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.4">
            <circle cx="124" cy="830" r="123.5" stroke="white" />
          </g>
          <g opacity="0.4">
            <circle cx="1249" cy="1262" r="68.5" stroke="white" />
          </g>
          <g opacity="0.4">
            <path
              d="M1020.79 154.856C996.508 179.135 970.789 197.344 948.848 207.166C937.876 212.078 927.874 214.881 919.484 215.313C911.094 215.746 904.374 213.806 899.871 209.304C895.369 204.801 893.429 198.081 893.862 189.691C894.294 181.301 897.097 171.299 902.009 160.327C911.831 138.386 930.04 112.667 954.319 88.3883C978.597 64.11 1004.32 45.9011 1026.26 36.0787C1037.23 31.1668 1047.23 28.3635 1055.62 27.9313C1064.01 27.4992 1070.73 29.4386 1075.23 33.9411C1079.74 38.4436 1081.68 45.1638 1081.24 53.5539C1080.81 61.9438 1078.01 71.946 1073.1 82.9181C1063.27 104.859 1045.07 130.578 1020.79 154.856Z"
              stroke="#C4C4C4"
            />
            <path
              d="M999.716 167.021C966.551 175.907 935.173 178.817 911.261 176.353C899.303 175.121 889.239 172.547 881.757 168.727C874.275 164.906 869.425 159.866 867.777 153.716C866.129 147.565 867.809 140.775 872.379 133.726C876.948 126.676 884.377 119.415 894.117 112.369C913.593 98.279 942.222 85.11 975.387 76.2235C1008.55 67.337 1039.93 64.4272 1063.84 66.8912C1075.8 68.1234 1085.86 70.6967 1093.35 74.5175C1100.83 78.3382 1105.68 83.378 1107.33 89.5285C1108.97 95.679 1107.29 102.469 1102.72 109.518C1098.16 116.568 1090.73 123.829 1080.99 130.875C1061.51 144.965 1032.88 158.134 999.716 167.021Z"
              stroke="#C4C4C4"
            />
          </g>
        </svg>
      </div>
      <div className=" max-w-shambWidth flex flex-col items-center">
        <motion.div
          variants={item}
          id="headers"
          className="my-[130px] md:my-[260px] flex justify-center items-center flex-col"
        >
          <div id="backthing" className="absolute blur-3xl bg-white/20 w-[15%] h-[100px]"></div>
          <div className="flex flex-col items-center gap-5">
            <Emphasis left={true}>Our future plan</Emphasis>
            <Typography
              variant={'title-big'}
              className={'text-[#bababa] font-light md:font-semibold md:text-h3 md:text-white'}
            >
              2020 - 2032
            </Typography>
          </div>
        </motion.div>

        <Phone
          className=" md:-z-50 md:absolute"
          index={'middle'}
          icon={'rocket'}
          headText={'The second four years'}
          bodyText={'The infrastructure of the Renewable Energy Research Center.'}
          date={'Apr 15, 2020 - Nov 1, 2024'}
          active
          top
        />
        <Phone
          className=" md:-z-50 md:absolute"
          index={'middle'}
          icon={'rocket'}
          headText={'The second four years'}
          bodyText={'The infrastructure of the Renewable Energy Research Center.'}
          date={'Apr 15, 2020 - Nov 1, 2024'}
        />
        <Phone
          className=" md:-z-50 md:absolute"
          index={'middle'}
          icon={'plane'}
          headText={'The second four years'}
          bodyText={'The infrastructure of the Renewable Energy Research Center.'}
          date={'Apr 15, 2020 - Nov 1, 2024'}
          btm
        />

        <Dir
          className=" md:visible md:z-40 md:relative sm:-z-50 sm: absolute sm: invisible"
          index={'first'}
          icon={'location'}
          headText={'The first four years'}
          bodyText={'A Green zone will be established on an area of 16 hectares.'}
          date={'Apr 15, 2020 - Nov 1, 2024'}
          top
          active
        />
        <Dir
          className=" md:visible md:z-40 md:relative sm:-z-50 sm: absolute sm: invisible"
          l
          index={'middle'}
          icon={'plane'}
          headText={'The second four years'}
          bodyText={'The infrastructure of the Renewable Energy Research Center.'}
          date={'Apr 15, 2020 - Nov 1, 2024'}
        />
        <Dir
          className=" md:visible md:z-40 md:relative sm:-z-50 sm: absolute sm: invisible"
          index={'end'}
          icon={'rocket'}
          headText={'The third four years'}
          bodyText={'The Research Center building and other construction will be completed.'}
          date={'Apr 15, 2020 - Nov 1, 2024'}
          b
        />

        <div id="spacer" className=" h-[100px]"></div>
      </div>
    </motion.div>
  )
}

export default Plans
