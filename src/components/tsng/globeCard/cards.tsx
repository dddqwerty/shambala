import { GlobeCard } from 'components'
import { handleIcon } from 'utils'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const BidYuHiijBainaVeCard = ({data}) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div className={`grid`}>
      <div className="md:mb-[150px] mb-0 grid md:grid-cols-2  md:gap-30">
        {data.map((el)=> {
          return (
            <GlobeCard
            headerEl={handleIcon({ icon: 'globe', size: matches ? 25 : 30 })}
            title={el.head}
            desc={
            el.body
            }
          />

          )
        })}
     

       
      </div>
    </div>
  )
}

export default BidYuHiijBainaVeCard
