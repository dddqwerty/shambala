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
        <motion.div
          animate={animControls}
          className="right-[596px] relative bg-blue-600 h-[1000px] w-24 z-50 rotate-45"
          onAnimationComplete={() => setAnim(false)}
        ></motion.div>
        <div
          className="absolute bg-white w-[256px] h-[218px] rounded-md transform"
          onMouseEnter={() => {
            if (!anim) {
              setAnim(true)
              animControls
                .start({
                  x: 398,
                  y: -292,
                  rotate: 222,
                  transition: { duration: 0.05, type: 'tween' },
                })
                .catch(console.error)
            }
          }}
          onMouseLeave={() => {
            setAnim(false)
            animControls
              .start({
                x: -999,
                y: 99,
                rotate: -45,
                transition: { duration: 1, type: 'tween' },
              })
              .catch(console.error)
          }}
        >
          <Image
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.izismile.com%2Fimg%2Fimg2%2F20090811%2Fugly_people_23.jpg&f=1&nofb=1"
            alt="CEO"
            width="256px"
            height="218px"
            layout="fixed"
            objectFit="fill"
            quality={100}
          />
        </div>
        <div className="flex flex-col gap-2 mt-4">
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
        </div>
      </div>
    </div>
  )
}
