import { AtLine, AtDate, AtText } from './atoms'
export const Start = (props) => {
  const { headText, bodyText, icon, date, l } = props

  if (!l) {
    return (
      <div className="h-[450px] w-full flex flex-row justify-center">
        <AtText bodyText={bodyText} headText={headText} />
        <AtLine icon={icon} style={'rounded-t-[10px]'} b={false} />
        <AtDate date={date} />
      </div>
    )
  } else {
    return (
      <div className="h-[450px] w-full flex flex-row justify-center">
        <AtDate date={date} />
        <AtLine icon={icon} style={'rounded-t-[10px]'} b={false} />
        <AtText bodyText={bodyText} headText={headText} />
      </div>
    )
  }
}

export default Start
