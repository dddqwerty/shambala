import { handleIcon } from 'utils'
import Typography from 'components/typography'

export const Box = (props) => {
  const { icon, text } = props

  return (
    <div className="invisible absolute -z-50 md:relative md:z-0 md:visible max-w-[370px] h-[250px] rounded-[8px] m-[5px] bg-[#373A3A4D] flex justify-center flex-col items-center">
      <div className="h-[50%] w-full flex justify-center items-end">
        {handleIcon({
          icon: icon,
          size: '45px',
          className: 'text-white mb-[17px]',
        })}
      </div>

      <div className="h-[50%] w-full flex justify-center items-start text-white/75">
        <Typography variant={'title-small'} className="w-[90%] text-center">
          {text}
        </Typography>
      </div>
    </div>
  )
}

export default Box
