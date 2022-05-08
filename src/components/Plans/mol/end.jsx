import { AtDate, AtLine, AtText } from './atoms'
export const End = (props) => {
  const { headText, bodyText, icon, date, l } = props

  if (!l) {
    return (
      <div className=" h-[450px] w-full flex flex-row justify-center">
        <AtText headText={headText} bodyText={bodyText} />
        <AtLine b style={'rounded-b-[10px]'} icon={icon} />
        <AtDate date={date} />
      </div>
    )
  } else {
    return (
      <div className=" h-[450px] w-full flex flex-row justify-center">
        <AtDate date={date} />
        <AtLine b style={'rounded-b-[10px]'} icon={icon} />
        <AtText headText={headText} bodyText={bodyText} />
      </div>
    )
  }
}

export default End
