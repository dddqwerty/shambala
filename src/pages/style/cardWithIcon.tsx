import { CardWithIcon } from 'components'
import { handleIcon } from 'utils'
import { Emphasis } from 'components'
import { motion } from 'framer-motion'

const CardWithIconn = ({data}) => {

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
      <img
        src="/assets/enjinerxd.webp"
        className="md:w-[512px] md:opacity-30 w-[200px] absolute transform -translate-x-1/2 left-1/2"
        alt=""
      />
      <div className="mt-[60px] md:mt-[190px]">
        {/* <motion.div variants={container} initial="hidden" whileInView="visible" className=""> */}
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="visible"
          className="mb-20 flex flex-col items-center text-center"
        >
          <Emphasis>{data.header}</Emphasis>
        </motion.div>
        {/* </motion.div> */}

        <motion.div variants={container} initial="hidden" whileInView="visible" className="">
          <div className="flex flex-wrap justify-center max-w-shambWidth w-screen">
            {data.four.map((el) => {
              return (
                <motion.div variants={item} className="flex flex-col items-center">
                  <CardWithIcon
                    headerEl={handleIcon({ icon: el.headerEl, size: 33, className: 'text-[#A3935B]' })}
                    title={el.title}
                    desc={el.desc}
                  ></CardWithIcon>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CardWithIconn
