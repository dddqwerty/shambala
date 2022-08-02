import { motion } from 'framer-motion'

export const BigPicture = (props) => {
  const { bgPicture, mainPicture } = props

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
    <motion.div
      variants={item}
      initial="hidden"
      whileInView={'visible'}
      className="max-w-shambWidth w-screen flex justify-center items-center  "
    >
      <div className="absolute mt-[620px] ml-[400px] invisible md:visible">
        <svg width="269" height="269" viewBox="0 0 269 269" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.3">
            <circle cx="134.5" cy="134.5" r="134" stroke="white" />
          </g>
        </svg>
      </div>
      <div className="absolute z-[2] mb-96 invisible md:visible">
        <img src={bgPicture} alt="" />
      </div>

      <img src={mainPicture} className=" w-full z-10 " alt="" />
    </motion.div>
  )
}
export default BigPicture
