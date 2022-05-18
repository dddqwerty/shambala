import { motion } from 'framer-motion'

const Urs = () => {
  let width = 1268

  return (
    <div className="h-[300px] bg-black">
      <div className="h-[100px]" />
      <motion.div
        animate={{
          x: [`${width - 12682}px`, `${12682}px`],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
        }}
      >
        <img className="max-w-none h-[112px]" src="assets/1ad.svg" />
      </motion.div>
      <motion.div
        animate={{
          x: [`${-12682}px`, `${12682}px`],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          delay: 9,
        }}
      >
        <img className="max-w-none h-[112px]" src="assets/1ad.svg" />
      </motion.div>
    </div>
  )
}
// `
export default Urs
