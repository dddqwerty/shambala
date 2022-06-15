import Typography from 'components/typography'

export const Cells = (props) => {
  const { text, pic, className } = props
  return (
    <div className={`${className} w-72 h-72`}>
      <img src={pic} className="absolute w-72 h-72" alt="" />
      <div
        id="haa"
        className="absolute z-10 hover:cursor-pointer w-72 h-72 hover:bg-black/50 text-transparent hover:text-white/50 flex justify-center items-center"
      >
        <Typography className={'w-[80%]'} children={text} variant={'body-mobile'} />
      </div>
    </div>
  )
}
