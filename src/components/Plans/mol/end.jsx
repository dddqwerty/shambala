import { atDate, atLine, atText } from './atoms'
export const End = (props) => {
  const { headText, bodyText, icon, date, l } = props

  if (!l) {
    return (
      <div className=" h-[450px] w-full flex flex-row justify-center">
        <atDate />
        <atLine />
        <atText />
      </div>
    )
  }
}

export default End
