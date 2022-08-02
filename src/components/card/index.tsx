import Button from 'components/Button'
import Typography from 'components/typography'
import {} from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

type Props = {
  headerEl: string
  title: string
  desc: string
  className: string
  buttonEl: React.ReactNode
  onClick: React.ReactNode
}

const Card = (props: Props) => {
  const { headerEl, title, desc, buttonEl, onClick, className } = props
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))


  return (
    <div className={`md:w-[50%] w-full flex flex-col ${className}`}>
      <div className="flex flex-col">
        <Typography  variant={matches ? 'p-small' : 'title-normal'} className="text-[#C7B36D] opacity-80 uppercase">
          {headerEl}
        </Typography>
        <Typography variant={matches ? 'h4' : 'h3'} className="text-primary-white">
          {title}
        </Typography>
      </div>

      <Typography variant={matches ? 'body-mobile' : 'body-web'} className="text-primary-white">
        {desc}
      </Typography>
      <div className=" w-[60%] md:w-[32%]">{buttonEl}</div>
    </div>
  )
}

export default Card
