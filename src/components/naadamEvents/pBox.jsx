import Typography from 'components/typography'
import { handleIcon } from 'utils'

export const PBox = (props) => {
  const { text, icon } = props

  return (
    <div className="max-w-shambWidth w-screen px-5 text-white/75 visible md:absolute z-0 relative md:-z-50 md:invisible m-[12px] flex flex-row justify-between items-center">
      <div className="w-[50px] h-[50px] rounded-[8px] bg-[#404040] mr-4 flex justify-center items-center">
        {handleIcon({
          icon: icon,
          size: '30px',
          className: 'text-white',
        })}
      </div>
      <Typography className={'w-[80%]'} children={text} variant={'body-mobile'} />
    </div>
  )
}
