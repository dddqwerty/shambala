import { Desk } from './desk'
import { Mobile } from './mobile'
import GoalCard from 'components/goalCard'

export const CompanyGoals = ({ data }) => {
  return (
    <div className='flex flex-row flex-wrap justify-center mt-24'>
    
      {data.map((el, index) => {
        return <GoalCard className='min-w-[370px] p-5' index={`0${index}`} desc={el.text} />
      })}
    </div>
  )
}

export default CompanyGoals
