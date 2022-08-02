import Yellow from 'components/yellowtitle'
import { motion } from 'framer-motion'
import { PADDINGX } from 'constants/layout'
import { handleIcon } from 'utils'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const Arttech = ({ data }) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

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
  return (
    <div className="h-screen w-screen relative">
      <div className="relative hidden md:block lg:block ">
        <img src="assets/shono.webp" className="absolute left-0 top-0 w-screen h-screen" />
        <div style={{ background: '#060B27' }} className="absolute top-0 left-0 w-screen h-screen opacity-40 " />
        <div style={{ background: '#060B27' }} className="absolute top-0 left-0 w-screen h-screen opacity-40" />
      </div>

      <div
        className={`h-screen relative flex flex-col items-center md:items-start max-w-shambWidth mx-auto ${PADDINGX}`}
      >
        <img src="assets/homelogo.webp" alt="" className="max-w-[65%] md:max-w-full md:hidden z-10 my-28 md:mt-52" />
        <div
          // variants={container}
          className="md:mt-[15%] "
        >
          <motion.div variants={item} initial="hidden" whileInView={'visible'}>
            <Yellow
              title={data.title}
              desc={data.subTitle}
              headerEl={handleIcon({ icon: data.locationThing.icon, size: matches ? 25 : 30 })}
              loc={data.locationThing.loc}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView={'visible'}
            variants={mouse}
            className="hidden md:block z-20 absolute bottom-24 left-1/2 transform -translate-x-1/2"
          >
            <img src="assets/svgs/mouse.svg" alt="" />
          </motion.div>
        </div>
      </div>
      <div
        style={{
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 4.13%, #212222 100%)',
        }}
        className={`absolute md:bottom-0 h-[100px] md:h-[40%] z-10 w-full`}
      />
    </div>
  )
}
export default Arttech
