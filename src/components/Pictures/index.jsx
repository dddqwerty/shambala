import { Desk } from './desk'
import { Mobile } from './mobile'
import { motion } from 'framer-motion'

export const Pictures = (props) => {
  const { pictures } = props

  const item = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      transition: {
        delay: 0.5,
        duration: 0.8,
      },
      opacity: 1,
      y: 0,
    },
  }

  return (
    <motion.div variants={item} initial="hidden" whileInView={'visible'}>
      <Desk data={pictures} />
      <Mobile data={pictures} />
    </motion.div>
  )
}

export default Pictures
