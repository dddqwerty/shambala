import Typography from '../typography'
import CountUp from 'react-countup'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import AnimatingNumber from 'components/numbrr/animatethatnumberbabe'

const Info = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div className="flex flex-col items-center  md:flex-row max-w-shambWidth mx-auto md:gap-20 pt-36">
      <div className="bg-components-30 h-[200px] md:h-[283px] gap-y-3.5 w-[365px] flex flex-col justify-center  items-center rounded-[8px] md:bg-too">
        
        <Typography variant={matches ? 'h4' : 'h2'} className=" text-primary-white ">
          <AnimatingNumber value={"2832000"} />
        </Typography>
        <Typography variant={matches ? 'p-small' : 'title-small'} className="text-white opacity-50">
          Produced Oxygen
        </Typography>
      </div>
      <div className=" bg-components-30 h-[200px] md:h-[283px] gap-y-3.5 w-[365px] flex flex-col justify-center items-center rounded-[8px] md:bg-too ">
        <Typography variant={matches ? 'h4' : 'h2'} className=" text-primary-white ">
          <AnimatingNumber value={'494'}/>
        </Typography>
        <Typography variant={matches ? 'p-small' : 'title-small'} className="text-white opacity-50">
          GENERATED BIOMASS
        </Typography>
      </div>
      <div className=" bg-components-30 h-[200px] md:h-[283px] gap-y-3.5 w-[365px] flex flex-col justify-center items-center rounded-[8px] md:bg-too ">
        <Typography variant={matches ? 'h4' : 'h2'} className=" text-primary-white ">
          <AnimatingNumber value={539726}/>
          {/* <CountUp start={0} end={539726} duration={2} separator="," decimals={0} decimal="," suffix="кг">
            {({ countUpRef, start }) => (
              <div>
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp> */}
        </Typography>
        <Typography variant={matches ? 'p-small' : 'title-small'} className="text-white opacity-50">
              ABSORBED CARBON
        </Typography>
      </div>
    </div>
  )
}
export default Info
