import { Typography } from 'components'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useEffect, useRef, useState } from 'react'
import { useDimensions } from 'hooks'
import Emphasis from 'components/ligature/emphasis'
import { PADDINGX } from 'constants/layout'
import { motion } from 'framer-motion'

const item = {
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

const NaadamFirst = (props) => {
  const { btext, loc, location, title, bgPicture, locationPicture} = props

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  const [height, setHeight] = useState(0)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (!imageRef) return
    setHeight(imageRef.current.offsetHeight)
  }, [imageRef])

  return (
    <div className="relative w-screen z-[2] h-screen">
      <div
        style={{
          background: '#1A2025',
          opacity: '0.6',
        }}
        className="absolute top-0 left-0 z-10 hidden h-screen w-screen md:block lg:block opacity-40"
      />

      <div
        style={{
          bottom: `calc(100vh - ${height * 2}px)`,
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 4.13%, #141515 100%)',
        }}
        className={`invisible md:visible absolute md:bottom-0 h-[100px] md:h-[40%] z-10 w-full`}
      />
      <img
        ref={imageRef}
        src={bgPicture}
        className="absolute translate-y-1/2 md:translate-y-0 top-0 md:top-0 left-0 md:h-screen md:w-screen md:block scale-[2] md:scale-100"
      />

      <motion.div
        variants={item}
        initial="hidden"
        whileInView={'visible'}
        className="flex flex-row items-center invisible md:visible md:relative md:z-40 absolute -z-50"
      >
        <div className=" w-1/2 h-screen z-10"></div>
        <div className=" w-1/2 h-screen  z-10  flex flex-col justify-center max-w-shambWidth">
          <Emphasis hrClasses="justify-start" className="my-12 text-primary-yellow">
            {title}
          </Emphasis>
          <div className=" mr-36 text-white/60">{btext}</div>

          <div className="flex flex-row items-center mt-20">
            <div id="icon" className="w-[80px] h-[80px]">
              <img src={locationPicture} alt="" />
            </div>
            <div className=" ml-6 flex flex-col justify-around h-full text-white">
              <div id="location" className="font-medium text-[20px]">
                {loc}
              </div>
              <div id="da location" className=" text-[18px]">
                {location}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={item}
        initial="hidden"
        whileInView={'visible'}
        className=" w-full h-full flex flex-col z-40 top-0 items-center absolute md:hidden md:h-0 md:w-0"
      >
        <div className="text-h1 mt-[80%] text-primary-yellow font-semibold">Naadam</div>
        <div id="text" className={`text-white/60 mt-16 font-light ${PADDINGX}`}>
          {btext}
        </div>
      </motion.div>

      {/* <div className="hidden md:block z-10 absolute bottom-24 left-1/2 transform -translate-x-1/2">
        <img src="assets/svgs/mouse.svg" alt="" />
      </div> */}
    </div>
  )
}

export default NaadamFirst
