import Typography from 'components/typography'
import React from 'react'

type Props = {
  headerEl: React.ReactNode
  title: string
  desc: string
}

const CardWithIcon = (props: Props) => {
  const { headerEl, title, desc } = props

  return (
    <div className="md:flex-col md:my-5 md:mx-10 md:w-[500px] my-10 w-[90%] ">
      <div className="w-full">
        <p className="">{headerEl}</p>
        <Typography variant="title-big" className='text-title2 md:text-title1'>
          <p className="text-primary-white h-[44px] leading-11 mt-5">{title}</p>
        </Typography>
        <Typography variant="body-web">
          <p className="text-primary-white h-[96px] opacity-70 leading-8 mt-5 w-full subtitle1">{desc}</p>
        </Typography>
      </div>
    </div>
  )
}

export default CardWithIcon
