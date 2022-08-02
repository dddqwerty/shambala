import Typography from 'components/typography'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const GarchigBonus = ({data}) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div className="md:flex-row flex-col flex md:items-center md:gap-[10px] gap-[20px]">
      <Typography variant={matches ? 'title-big' : 'h3'} className="text-primary-white">
        <p> {data.small} </p>
      </Typography>
      <Typography variant={matches ? 'h3' : 'h2'} className="text-primary-white">
          {data.big}
      </Typography>
    </div>
  )
}
export default GarchigBonus
