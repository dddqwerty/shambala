import Button from 'components/Button'
import Typography from 'components/typography'
import {} from 'react'

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

  return (
    <div className={`w-[527px] flex flex-col gap-[24px] ${className}`}>
      <div className="flex flex-col gap-[8px]">
        <Typography variant="title-normal" className="text-[#C7B36D] opacity-80 uppercase">
          {headerEl}
        </Typography>
        <Typography variant="h3" className="text-primary-white">
          {title}
        </Typography>
      </div>

      <Typography variant="body-web" className="text-primary-white">
        {desc}
      </Typography>
      <div className='w-[32%]'>{buttonEl}</div>
    </div>
  )
}

export default Card
