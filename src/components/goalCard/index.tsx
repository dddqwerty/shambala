import Typography from 'components/typography'
import {} from 'react'

type Props = {
  index: string
  desc: string
  className?: string
  bclass?: string
}

const GoalCard = (props: Props) => {
  const { index, desc, className, bclass } = props

  return (
    <div className={`sm:max-w-[370px] flex gap-8  ${className}`}>
      <Typography variant="title-big" className="text-[#646464] mt-2 opacity-70">
        {index}
      </Typography>
      <Typography
        variant="body-web"
        className={`md:text-primary-white text-start text-[#A6A6A6] font-normal ${bclass}`}
      >
        {desc}
      </Typography>
    </div>
  )
}

export default GoalCard
