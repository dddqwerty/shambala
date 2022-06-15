import { Emphasis } from 'components'
import Typography from 'components/typography'
export const NaadamPlanText = () => {
  return (
    <div className="max-w-shambWidth w-full flex items-center flex-col justify-center">
      <Emphasis children="‘’Naadam’’ plan" />
      <div className="h-[55px]"></div>
      <Typography variant={'body-mobile'} className="text-center w-[90%] md:w-[60%] md:text-title2 text-white/50 ">
        Power grid, space technology development, Blockchain technology development, Digital artists development,
        sculpture development art installations, digital clothing design There will be a panel discussion with industry
        experts on the topic.
      </Typography>
      <div className="h-[55px]"></div>
    </div>
  )
}

export default NaadamPlanText
