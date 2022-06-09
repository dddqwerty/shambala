import Typography from 'components/typography'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

type Props = {
  headerEl: React.ReactNode
  title: string
  desc: string
}

const GlobeCard = (props: Props) => {
  const { headerEl, title, desc } = props
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div className="md:max-w-[585px] md:gap-30 leading-8 gap-12">
      <div className=" mb-[60px] md:mb-[48px] flex items-center gap-6">
        <div className={`bg-[#404040] ${matches ? 'w-[48px] h-[48px]' : 'w-[60px] h-[60px]'} rounded-[8px]`}>
          <p className={`text-primary-white ${matches ? 'm-[11px]' : 'm-[15px]'}`}>{headerEl}</p>
        </div>
        <Typography variant={matches ? 'body-mobile' : 'body-web'} className=" opacity-[.85]  text-primary-white">
          {title}
        </Typography>
      </div>

      <Typography variant="body-web" className="hidden md:block opacity-60 text-primary-white">
        {desc}
      </Typography>
    </div>
  )
}
export default GlobeCard
