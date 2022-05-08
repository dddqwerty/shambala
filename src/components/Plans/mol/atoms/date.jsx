export const AtDate = (props) => {
  const { date } = props
  return (
    <div id="date-half" className=" w-planWidth mx-[20px] h-full flex justify-center items-center">
      <div id="actual date " className="font-medium text-p2 text-primary-white/50">
        {date}
      </div>
    </div>
  )
}
export default AtDate
