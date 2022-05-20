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
    <motion.div variants={container} initial="hidden" whileInView="visible" className="w-full flex justify-center">
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
