import Typography from '../typography'
// import CountUp from 'react-countup'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import AnimatingNumber from 'components/numbrr/animatethatnumberbabe'
import { PADDINGX } from 'constants/layout'

const Info = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div className={`w-full ${PADDINGX}`}>
      <div className="flex flex-col items-center  md:flex-row max-w-shambWidth mx-auto md:gap-20 pt-36">
        <div className="bg-components-30 h-[200px] md:h-[283px] gap-y-3.5 w-[365px] flex flex-col justify-center  items-center rounded-[8px] md:bg-too">
          <Typography variant="h2" className="hidden md:block text-white">
            <AnimatingNumber value={'2832000'} suffix="" />
          </Typography>
          <Typography variant="h4" className="md:hidden text-white">
            <AnimatingNumber value={'2832000'} suffix="" />
          </Typography>
          <Typography variant={matches ? 'p-small' : 'title-small'} className="text-white opacity-50">
            Produced Oxygen
          </Typography>
        </div>
        <div className=" bg-components-30 h-[200px] md:h-[283px] gap-y-3.5 w-[365px] flex flex-col justify-center items-center rounded-[8px] md:bg-too ">
          <Typography variant="h2" className="hidden md:block text-white">
            <AnimatingNumber value={'494'} suffix="тн" />
          </Typography>
          <Typography variant="h4" className="md:hidden text-white">
            <AnimatingNumber value={'494'} suffix="тн" />
          </Typography>
          <Typography variant={matches ? 'p-small' : 'title-small'} className="text-white opacity-50">
            GENERATED BIOMASS
          </Typography>
        </div>
        <div className=" bg-components-30 h-[200px] md:h-[283px] gap-y-3.5 w-[365px] flex flex-col justify-center items-center rounded-[8px] md:bg-too ">
          <Typography variant="h2" className="hidden md:block text-white">
            <AnimatingNumber value={'539726'} suffix="кг" />
          </Typography>
          <Typography variant="h4" className="md:hidden text-white">
            <AnimatingNumber value={'539726'} suffix="кг" />
          </Typography>
          <Typography variant={matches ? 'p-small' : 'title-small'} className="text-white opacity-50">
            ABSORBED CARBON
          </Typography>
        </div>
      </div>
    </div>
  )
}
export default Info
