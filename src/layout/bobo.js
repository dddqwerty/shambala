// import Gurvaljinurd from "pages/style/card"
import { Card, Button, Typography } from 'components'
import { motion } from 'framer-motion'
import { PADDINGX } from 'constants/layout'

const container = {
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.5,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    // transition: {
    //   delay: 0.2
    // }
  },
}
const Titi = ({ classname }) => {
  return (
    <div className={`w-full ${PADDINGX}`}>
      {/* <div className="hidden md:block lg:block md:absolute lg:absolute border-solid border-2 w-[455px] h-[455px] rounded-full opacity-40   top-[115px] left-[-170px]" /> */}
      <div className={`max-w-shambWidth relative mx-auto flex flex-col ${classname} mb-36 md:mb-60 mt-10 md:mt-32`}>
        <div className="absolute w-[170%] z-0 t-25 md:w-[90%] lg:w-[90%] left-[29%] md:top-4 md:left-1/2 md:transform md:-translate-x-1/2 lg:top-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 ">
          <img src="assets/trangle.svg" />
          <div className="hidden md:block md:top-[47%] md:left-1/2 md:transform md:-translate-x-1/2 md:absolute lg:block lg:top-[47%] lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:absolute">
            <img src="assets/ep.svg" />
          </div>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="md:mt-[140px] flex flex-col gap-32 py-10 z-10"
        >
          <motion.div variants={item} className="flex flex-col">
            <div className="grid grid-cols-1">
              <Card
                headerEl={`our new project`}
                title={`Art Tech Empire`}
                desc={`"Art-Tech Empire" land art with 36,000 trees will be created on 5 hectares of the Shambala 2056 project area.`}
                buttonEl={
                  <Button variant="primary">
                    <Typography variant="p-big">See more</Typography>
                  </Button>
                }
              />
            </div>
          </motion.div>

          <motion.div variants={item} className="flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="hidden md:blcok lg:block" />
              <Card
                headerEl={`our new project`}
                title={`Why Gobi ?`}
                desc={`77% of Mongolia's territory is affected by desertification, and if no specific measures are taken, 92% of Mongolia's territory is expected to be desertified by 2080.`}
                buttonEl={
                  <Button variant="primary">
                    <Typography variant="p-big">See more</Typography>
                  </Button>
                }
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Titi
