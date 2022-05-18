export const atText = (props) => {
  const { headText, bodyText } = props
  return (
    <div id="text-half" className="w-planWidth h-full flex flex-col justify-center">
      <div id="header text" className="text-semibold text-title1 text-white">
        {headText}
      </div>
      <div id="body text" className="text-body text-primary-white/50">
        {bodyText}
      </div>
    </div>
  )
}
export default atText
