import { motion } from 'framer-motion'
import Typography from 'components/typography'
export const Easy = () => {

  //   const theme = useTheme()
  //   const matches = useMediaQuery(theme.breakpoints.down('hbr'))
  const container = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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
    <div className="relative ">
      <motion.div variants={container} initial="hidden" whileInView="visible" className="mt-24 relative">
        <div>
          <div className="h-[40vh] md:h-[100vh] lg:h-[100vh] w-full  flex flex-row">
              <div className=' md:w-[50vw] lg:w-[50vw]'>

              <motion.div className="h-[100vh] absolute md :left-[-400px]  lg:left-[-400px]  ">
                <img className='md:h-[100%] lg:h-[100%] max-w-none md:w-auto  mx-auto lg:w-auto  w-[90%]' src="assets/trangle.svg" />
                </motion.div>
              </div>

                <div className="mx-auto md:w-[50vw] lg:w-[50vw] flex items-center">
                <motion.div variants={item} className="h-[360px] flex flex-col  justify-between">
                    <div>
                    <div className="  hidden md:block lg:block w-[65px] h-[5px] bg-primary-yellow rounded-2xl mb-[24px] "></div>
                    <Typography  className=" opacity-60 md:opacity-100 lg:opacity-100 flex w-[311px] md:w-auto  lg:w-auto max-w-[585px] text-bodyMobile font-normal  leading-[26px] md:text-title2 md:leading-[37.2px] lg:text-title2 lg:leading-[37.2px]  text-white">
                        Уг лэнд арт нь эртний чойжүн тамгын хэлбэртэй бөгөөд үүний бэлэгдэл болох хүмүүн, тэнгэр, газар гэх
                        гурван их мандлыг онгин тамга буюу наран тамганд уяж, аргамжсан гэсэн санааг илэрхийлж байгаа юм.
                    </Typography>
                    </div>
                    <div className=" flex-row hidden  md:flex lg:flex">
                    <img className="hidden md:block lg:block w-20 h-20 mr-[50px]" src="assets/arc.webp" />
                    <div className="flex flex-col justify-center">
                        <Typography className=" text-bodyMobile font-normal  leading-[26px] md:semi-bold md:text-[22px] lg:semi-bold lg:text-[22px]  text-white">Хээ</Typography>
                        <Typography className=" text-bodyMobile font-normal  leading-[26px] md:font-light lg:text-[18px] lg:font-light md:text-[18px]  text-white">Чойжүн тамганы хээ</Typography>
                    </div>
                    </div>
                </motion.div>
                </div>

          </div>
        </div>
      </motion.div>
    </div>
  )
}

