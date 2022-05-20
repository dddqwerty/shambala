import * as React from 'react'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import Typography from 'components/typography'

type Props = {
  pictureURL: string
}

export const Member = (props: Props) => {
  const [anim, setAnim] = React.useState(false)
  const [animControls] = React.useState([useAnimation(), useAnimation(), useAnimation(), useAnimation()]) // very sloppy... too bad

  return (
    <div className="ml-20 z-50 h-[256px] w-[218px]">
      <div className="flex flex-col gap-3 overflow-hidden relative">
        <div className="relative">
          <div
            className="relative bg-white w-[256px] h-[218px] rounded-md transform overflow-hidden transition hover:bg-gray-800 z-0"
            onMouseEnter={() => {
              if (!anim) {
                setAnim(true)
                animControls[0]
                  .start({
                    x: 0,
                    y: 0,
                    rotate: -40,
                    transition: { duration: 0.07, type: 'tween' },
                  })
                  .catch(console.error)
                animControls[1]
                  .start({
                    x: 0,
                    y: 0,
                    rotate: -45,
                    transition: { duration: 0.07, type: 'tween' },
                  })
                  .catch(console.error)

                animControls[2]
                  .start({
                    x: -100,
                    y: 0,
                    rotate: -45,
                    transition: { duration: 0.2, type: 'tween' },
                  })
                  .catch(console.error)
                animControls[3]
                  .start({
                    x: -100,
                    y: 15,
                    rotate: -45,
                    transition: { duration: 0.2, type: 'tween' },
                  })
                  .catch(console.error)
              }
            }}
            onMouseLeave={() => {
              setAnim(false)
              animControls[0]
                .start({
                  x: 100,
                  y: 100,
                  rotate: -30,
                  transition: { duration: 0.4, type: 'tween' },
                })
                .catch(console.error)
              animControls[1]
                .start({
                  x: -100,
                  y: -100,
                  rotate: -45,
                  transition: { duration: 0.4, type: 'tween' },
                })
                .catch(console.error)
              animControls[2]
                .start({
                  x: -100,
                  y: 150,
                  rotate: -45,
                  transition: { duration: 0.4, type: 'tween' },
                })
                .catch(console.error)
              animControls[3]
                .start({
                  x: 100,
                  y: -100,
                  rotate: -45,
                  transition: { duration: 0.4, type: 'tween' },
                })
                .catch(console.error)
            }}
          >
            <motion.div
              animate={animControls[0]}
              initial={{ x: 900, rotate: -30 }}
              className="absolute -right-[40%] -bottom-[20%] bg-blue-600 h-[80%] z-10 w-[100%] -rotate-30"
              onAnimationComplete={() => setAnim(false)}
            />
            <motion.div
              animate={animControls[1]}
              initial={{ x: -900, rotate: -45 }}
              className="absolute -left-[50%] bottom-[50%] bg-blue-600 h-[100%] z-10 w-[100%] -rotate-45"
              onAnimationComplete={() => setAnim(false)}
            />
            <motion.div
              animate={animControls[2]}
              initial={{ x: -999, rotate: -45, skew: '45deg' }}
              className="absolute -left-[5%] bottom-[5%] bg-white h-[20%] z-10 w-[80%] -rotate-45 rounded-md"
              onAnimationComplete={() => setAnim(false)}
            />
            <motion.div
              animate={animControls[3]}
              initial={{ x: -999, rotate: -45, skew: '45deg' }}
              className="absolute -right-[40%] top-0 bg-yellow-300 h-[20%] z-10 w-[45%] rotate-45 rounded-md"
              onAnimationComplete={() => setAnim(false)}
            />
            <Image
              src={props.pictureURL}
              alt="CEO"
              width="256px"
              height="218px"
              layout="fixed"
              className="absolute"
              objectFit="fill"
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
