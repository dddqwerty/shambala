import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useEffect, useRef, useState } from 'react'
import { MainLayout } from 'layout'
import { Yellow } from 'components'
import { handleIcon } from 'utils'
import { PADDINGX } from 'constants/layout'
import { motion } from 'framer-motion'

import Content from "../../public/assets/data.js"

const data = Content.recomended

const FirstPart = () => {
  const data = {
    mouse: 'assets/svgs/mouse.svg',
    bgPicture1: 'assets/homelogo.webp',
    bgPicture2: '/assets/be human 1.webp',
    title: 'Be human',
    paragraph:
      'In 2021, “Lantuun Dohio” NGO and “Id Shidiin Oron” child protection center joined forces to create a “BE HUMAN” land art with 18,000 trees under the motto “Be a person who loves nature”. In addition, “One Choice, Two Solutions” or one tree planted in the Gobi was replanted in the Uliastai ger area.',
    location: 'Dornogovi aimag',
  }

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
  const mouse = {
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
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  const [height, setHeight] = useState(0)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (!imageRef) return
    setHeight(imageRef.current.offsetHeight)
  }, [imageRef])

  return (
    <MainLayout classname={'bg-recomended'}>
      <div className="relative w-screen h-screen">
        <div className={`absolute flex justify-center h-[220px] items-center z-50`}>
          <img src={data.bgPicture1} alt="" className={`max-w-[65%]  md:max-w-full md:hidden md:mt-52`} />
        </div>

        <motion.div
          variants={item}
          initial="hidden"
          whileInView={'visible'}
          className={`h-screen relative flex max-w-shambWidth mx-auto ${PADDINGX} z-10`}
        >
          <Yellow
            className="mt-52"
            title={data.title}
            desc={data.paragraph}
            headerEl={handleIcon({ icon: 'nav', size: 30 })}
            loc={data.location}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView={'visible'}
          variants={mouse}
          className="hidden md:block z-30 absolute bottom-24 left-1/2 transform -translate-x-1/2"
        >
          <img src={data.mouse} alt="" />
        </motion.div>
        <div
          style={{
            bottom: `calc(100vh - ${height + 10}px)`,
            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 4.13%, #212222 100%)',
          }}
          className={`absolute md:bottom-0 h-[375px] md:h-[40%] z-20 w-full`}
        />
        <img
          ref={imageRef}
          src={data.bgPicture2}
          className="absolute md:translate-y-0 top-0 md:top-0 left-0 md:h-screen md:w-screen md:block md:scale-100"
        />
      </div>
    </MainLayout>
  )
}

export default FirstPart
