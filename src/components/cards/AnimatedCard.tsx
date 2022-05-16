import * as React from 'react'
import Image from 'next/image'
import Typography from 'components/typography'
import { motion, useAnimation } from 'framer-motion'

export const Member = () => {
  const [anim, setAnim] = React.useState(false)
  const animControls = useAnimation()

  return (
    <div className="ml-20 z-50 h-[256px] w-[218px]">
      <div className="flex flex-col gap-3 overflow-hidden relative">
        <div
          className="relative bg-white w-[256px] h-[218px] rounded-md transform overflow-hidden"
          // onMouseEnter={() => {
          //   if (!anim) {
          //     setAnim(true)
          //     animControls
          //       .start({
          //         x: 0,
          //         y: 0,
          //         rotate: -45,
          //         transition: { duration: 0.3, type: 'tween' },
          //       })
          //       .catch(console.error)
          //   }
          // }}
          // onMouseLeave={() => {
          //   setAnim(false)
          //   animControls
          //     .start({
          //       x: 10,
          //       y: 0,
          //       rotate: -45
            
          //     })
          //     .catch(console.error)
          // }}
        >
          {/* <Image
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.izismile.com%2Fimg%2Fimg2%2F20090811%2Fugly_people_23.jpg&f=1&nofb=1"
            alt="CEO"
            width="256px"
            height="218px"
            layout="fixed"
            objectFit="fill"
            quality={100}
          /> */}

          <motion.div
            animate={animControls}
            initial={{x: 0, y: 0}}
            className="absolute -left-[35%] -top-10 bg-blue-600  z-50 border-b-[30px] border-l-[150px] border-r-[150px] border-red"
            onAnimationComplete={() => setAnim(false)}
          />
          {/* <motion.div
            animate={animControls}
            // initial={{x: 10}}
            className="absolute -right-[20%] -bottom-10 bg-blue-600 h-[60%] w-[100%] z-50 -rotate-45"
            onAnimationComplete={() => setAnim(false)}
          /> */}
          {/* <motion.div
            animate={animControls}
            className="absolute right-[596px] bg-blue-600 h-[100px] w-24 z-50 rotate-45"
            onAnimationComplete={() => setAnim(false)}
          /> */}
        </div>

        {/* <div className="flex flex-col gap-2 mt-4">
          <div className="">
            <Typography variant="p-small" className="text-white opacity-40 text-lg font-normal">
              Шижирбат
            </Typography>
            <Typography variant="h2" className="text-white !text-p2 uppercase font-bold text-xl">
              Бямбасүрэн
            </Typography>
          </div>
          <Typography variant="h2" className="text-white opacity-80 !text-xs">
            CEO
          </Typography>
        </div> */}
      </div>
    </div>
  )
}
