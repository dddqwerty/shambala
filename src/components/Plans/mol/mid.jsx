import { AtText, AtLine, AtDate } from './atoms'
export const Mid = (props) => {
  const { headText, bodyText, icon, date, l } = props

  if (!l) {
    return (
      <div className="h-[450px] w-full flex flex-row justify-center">
        <AtText bodyText={bodyText} headText={headText} />
        <AtLine icon={icon} />
        <AtDate date={date} />
      </div>
    )
  } else {
    return (
      <div className="h-[450px] w-full flex flex-row justify-center">
        <AtDate date={date} />
        <AtLine icon={icon} />
        <AtText bodyText={bodyText} headText={headText} />
      </div>
    )
  }
}

export default Mid
