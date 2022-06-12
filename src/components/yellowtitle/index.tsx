import { Typography, Emphasis } from 'components'
import * as React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import {motion} from 'framer-motion'

type Props = React.PropsWithChildren<{
  content?: string
  right?: boolean
  left?: boolean
  desc?: string
  title?: string
  headerEl: React.ReactNode
  className?: string
}>
const Yellow = (props: Props) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  const item = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      transition: {
        duration: 0.7,
      },
      opacity: 1,
      x: 0,
    }
  }

  const { desc, title, headerEl, className } = props
  return (
    <div className={`flex flex-col ${className} gap-10`}>

      <div className="flex flex-col gap-6 mt-10">
        <div className='flex flex-col gap-2'>
          <div className='md:hidden'>
            <Emphasis />
          </div>
          <Typography
            variant={matches ? 'title-big' : 'h1'}
            className="md:uppercase text-primary-white md:text-[#F8D04B] md:leading-[112px] tracking-[-0.5px] md:w-[553px] md:text-[96px] md:font-extrabold"
          >
            {title}
          </Typography>
        </div>

        <Typography
          variant={matches ? 'body-mobile' : 'body-web'}
          className=" opacity-40 md:opacity-100 text-primary-white md:leading-[35px] md:w-[616px] md:text-p-small md:tracking-[0.5px]"
        >
          {desc}
        </Typography>
        <hr className="hidden md:flex justify-center w-[79px] h-[5px] border-0 bg-primary-yellow" />
      </div>

      <motion.div variants={item} className="flex flex-row md:w-[324px] z-20">
        <div className="mr-[20px] flex">
          <div className={`bg-[#404040] ${matches ? 'w-[48px] h-[48px]' : 'w-[60px] h-[60px]'} rounded-[8px]`}>
            <p className={`text-primary-white ${matches ? 'm-[11px]' : 'm-[15px]'}`}>{headerEl}</p>
          </div>
        </div>
        <div className='flex flex-col justify-center gap-2.5 z-20'>
          <Typography variant="p-big" className="text-primary-white">
            Location
          </Typography>
          <Typography variant="p-small" className="text-primary-white opacity-50">
            Dornogobi aimag
          </Typography>
        </div>
      </motion.div>
    </div>
  )
}
export default Yellow
