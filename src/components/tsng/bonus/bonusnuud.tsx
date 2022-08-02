import { handleIcon } from 'utils'
import GantsBonus from '.'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const Bonusnuud = ({ data }) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div className="flex flex-col w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[154px] gap-y-[58px] md:gap-y-[97px]">
        {data.map((el) => {
          return (
            <GantsBonus
              headerEl={handleIcon({ icon: el.icon, size: matches ? 25 : 30 })}
              title={el.text}
            />
          )
        })}
      </div>
    </div>
  )
}
export default Bonusnuud
