import { CardWithIcon } from 'components'
import { handleIcon } from 'utils'
import { Emphasis } from 'components'
import { motion } from 'framer-motion'

const CardWithIconn = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      transition: {
        duration: 0.5,
      },
      y: 0,
      opacity: 1,
    },
  }

  return (
    <div className="flex-col items-center md:p-20 relative flex max-w-shambWidth mx-auto ${PADDINGX} mb-36 md:mb-[304px]">
      <img src="/assets/enjinerxd.webp" className='md:w-[512px] md:opacity-30 w-[200px] absolute transform -translate-x-1/2 left-1/2' alt="" />
      <div className='mt-[60px] md:mt-[190px]'>
        {/* <motion.div variants={container} initial="hidden" whileInView="visible" className=""> */}
        <motion.div variants={item} initial="hidden" whileInView="visible" className="mb-20 flex flex-col items-center text-center">
          <Emphasis>Terrain Features </Emphasis>
        </motion.div>
        {/* </motion.div> */}

        <motion.div variants={container} initial="hidden" whileInView="visible" className="">
          <div className="flex flex-wrap justify-center max-w-shambWidth w-screen">
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
