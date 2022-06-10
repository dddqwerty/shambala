import { CardWithIcon } from 'components'
import { handleIcon } from 'utils'
import { Emphasis } from 'components'
import { motion } from 'framer-motion'

const CardWithIconn = ({classname}) => {
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
    },
  }

  return (
    <div className="  flex flex-col items-center p-20 h-screen relative flex max-w-shambWidth items-center mx-auto ${PADDINGX} hidden md:block">
      {/* <div className="hidden md:block absolute ">
        <img src="/assets/footer1.png" alt="" />
      </div> */}
      <div>
      <motion.div variants={container} initial="hidden" whileInView="visible" className="">
        <motion.div variants={item} className="flex flex-col items-center">
          <Emphasis>Terrain Features </Emphasis>
        </motion.div>
      </motion.div>

      <motion.div variants={container} initial="hidden" whileInView="visible" className="">
        <div className=" grid grid-cols-2 gap-x-72 pt-16 pb-48 h-screen">
          <motion.div variants={item} className="flex flex-col items-center">
            <CardWithIcon
              headerEl={handleIcon({ icon: 'riDirection', size: 33, className: 'text-[#A3935B]' })}
              title={`Roads & Infrastructure`}
              desc={`Asian Highway 3 - Zamyn-Uud and Tavan Tolgoi Zuunbayan railways, oil refinery, wind farm.`}
            ></CardWithIcon>
          </motion.div>

          <motion.div variants={item} className="flex flex-col items-center">
            <CardWithIcon
              headerEl={handleIcon({ icon: 'leaf', size: 33, className: 'text-[#A3935B]' })}
              title={`Opportunity to run a greenhouse`}
              desc={`Able to work all year round. It is more suitable for Mongolian conditions, has relatively low cost, easily retains heat for a long time, and has a lot of potential to use solar energy.`}
            ></CardWithIcon>
          </motion.div>

          <motion.div variants={item} className="flex flex-col items-center">
            <CardWithIcon
              headerEl={handleIcon({ icon: 'lightning', size: 33, className: 'text-[#A3935B]' })}
              title={`Renewable energy resources`}
              desc={`In the Gobi region, the time of sunshine is 2900-3000 hours and the amount of solar energy per square meter is 5.5-6.0 kW * h / m2 per day.`}
            ></CardWithIcon>
          </motion.div>

          <motion.div variants={item} className="flex flex-col items-center">
            <CardWithIcon
              headerEl={handleIcon({ icon: 'mapPin', size: 33, className: 'text-[#A3935B]' })}
              title={`Geographical Location`}
              desc={`Zamiin-Uud and Khangii border crossings in Dornogovi aimag are the largest border crossings from Mongolia to China. In summer, the average wind speed is 4.2-4.6 m/sec, with temperatures reaching +41 degrees celsius.`}
            ></CardWithIcon>
          </motion.div>
          
        </div>
      </motion.div>
      </div>
    </div>
  )
}

export default CardWithIconn;
