import { Box } from './box'
import { PBox } from './pBox'
import { Emphasis } from 'components'

const list = [
  { icon: 'drone', text: 'Replace horse racing with drone racing' },
  { icon: 'controller', text: 'Replace wrestling with e-sports and information security competitions' },
  { icon: 'rocket-2', text: 'Replacing archery with missiles and free flight' },
]

export const NaadamEvents = () => {
  return (
    <div className=" max-w-shambWidth w-full flex flex-col items-center justify-center">
      <Emphasis left={true}>Naadam events</Emphasis>
      <div className="h-[55px]"></div>
      <div className="flex flex-col items-center md:flex-row">
        {list.map((el, index) => {
          return (
            <div key={`kay${index}`}>
              <Box icon={el.icon} text={el.text} />
              <PBox icon={el.icon} text={el.text} />
            </div>
          )
        })}
      </div>
      <div className="h-[55px]"></div>
    </div>
  )
}

export default NaadamEvents
