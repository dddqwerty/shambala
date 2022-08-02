import { BidYuHiijBainaVeCard, Title, Buurunhii } from 'components'
import { PADDINGX } from 'constants/layout'
import { motion } from 'framer-motion'



const Whatarewedoing = ({data}) => {
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
    <div className="grid place-items-center">
      <img src="/assets/davalgaa.svg" className="w-full hidden md:block mb-[130px]" alt="" />
      <div className={`relative flex max-w-shambWidth mx-auto ${PADDINGX}`}>
        <Buurunhii />

        <div>
          <motion.div variants={container} initial="hidden" whileInView="visible">
            <motion.div variants={item} className="flex flex-col items-center">
              <Title text = {data.header} />
            </motion.div>
            <motion.div variants={item} className="flex flex-col items-center">
              <BidYuHiijBainaVeCard data = {data.list} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
export default Whatarewedoing
