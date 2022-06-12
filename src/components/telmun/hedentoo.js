import Typography from 'components/typography'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { motion } from 'framer-motion'
import AnimatingNumber from 'components/numbrr/animatethatnumberbabe'

const Fournumber = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  console.log(matches)
  const container = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  // const item = {
  //   hidden: { y: 20, opacity: 0 },
  //   visible: {
  //     y: 0,
  //     opacity: 1,
  //   },
  // }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      className="relative md:h-[19rem]  flex items-center overflow-x-hidden  md:overflow-hidden py-10"
    >
      <div className="absolute top-0 left-0 w-full hidden md:block lg:block h-full bg-earthBg z-10" />
      <div className="absolute md:blur-[4px] opacity-30 md:opacity-100 w-[500px]  md:w-[100%] md:max-w-shambWidth z-0 -left-12  md:left-1/2 md:transform md:-translate-x-1/2">
        <img src="assets/earth.webp" />
      </div>
      <div className="flex w-full mx-auto max-w-shambWidth z-20">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 w-full gap-[40px]">
          <div className="flex flex-col items-center">
            <Typography variant="h2" className="hidden md:block text-white">
              <AnimatingNumber value={'24533'} />
            </Typography>
            <Typography variant="h4" className="md:hidden text-white">
              <AnimatingNumber value={'24533'} />
            </Typography>
            <Typography variant="title-small" className="text-white opacity-50">
              Tree
            </Typography>
          </div>
          <div className="flex flex-col items-center">
            <Typography variant="h2" className="hidden md:block text-white">
              <AnimatingNumber value={'7200'} />
            </Typography>
            <Typography variant="h4" className="md:hidden text-white">
              <AnimatingNumber value={'7200'} />
            </Typography>
            <Typography variant="title-small" className="text-white opacity-50">
              Reserved water
            </Typography>
          </div>
          <div className="flex flex-col items-center">
            <Typography variant="h2" className="hidden md:block text-white">
              <AnimatingNumber value={'4000'} suffix="m2" />
            </Typography>
            <Typography variant="h4" className="md:hidden text-white">
              <AnimatingNumber value={'4000'} suffix="m2" />
            </Typography>
            <Typography variant="title-small" className="text-white opacity-50">
              Restored
            </Typography>
          </div>
          <div className="flex flex-col items-center">
            <Typography variant="h2" className="hidden md:block text-white">
              <AnimatingNumber value={'166133'} />
            </Typography>
            <Typography variant="h4" className="md:hidden text-white">
              <AnimatingNumber value={'166133'} />
            </Typography>
            <Typography variant="title-small" className="text-white opacity-50">
              Organic access
            </Typography>
          </div>
        </div>

        {/* {Array.from({ length: 4 }).map((_, index) => {
            return (
              <motion.div key={index} variants={item} className="flex flex-col items-center">
                <Typography variant="h2" className="hidden md:block text-white">
                  <AnimatingNumber value={'24533'} />
                </Typography>
                <Typography variant="h4" className="md:hidden text-white">
                  <AnimatingNumber value={'24533'} />
                </Typography>
                <Typography variant="title-small" className="text-white opacity-50">
                  Tree
                </Typography>
              </motion.div>
            )
          })} */}

        {/*
        <div className="flex flex-col items-center  ">
          <Typography variant="h4 md:h2 lg:h2      " className=" text-white" children="24,533" />
          <Typography variant="title-small" className="text-white opacity-50" children="Reserved water" />
        </div>
        <div className="flex flex-col items-center  ">
          <Typography variant="h2" className=" text-white" children="24,533" />
          <Typography variant="title-small" className="text-white opacity-50" children="Restored" />
        </div>
        <div className="flex flex-col items-center  ">
          <Typography variant="h2" className=" text-white" children="24,533" />
          <Typography variant="title-small" className="text-white opacity-50" children="Organic access" />
        </div> */}
      </div>
    </motion.div>
  )
}
export default Fournumber
