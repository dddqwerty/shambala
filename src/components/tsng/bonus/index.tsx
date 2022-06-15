import Typography from 'components/typography'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

type Props = {
  headerEl: React.ReactNode
  title: string
}

const GantsBonus = (props: Props) => {
  const { headerEl, title } = props
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  console.log(matches)
  return (
    <div className="leading-8 gap-12">
      <div className="w-[316px] flex items-center gap-6">
        <div className={`bg-[#404040] ${matches ? 'w-[48px] h-[48px]' : 'w-[60px] h-[60px]'} rounded-[8px]`}>
          <p className={`text-primary-white ${matches ? 'm-[11px]' : 'm-[15px]'}`}>{headerEl}</p>
        </div>
        <Typography variant={matches ? 'body-mobile' : 'body-web'} className='opacity-[.85] text-primary-white'>
          {title}
        </Typography>
      </div>
    </div>
  )
}
export default GantsBonus
