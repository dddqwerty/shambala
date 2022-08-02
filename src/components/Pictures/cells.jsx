import Typography from 'components/typography'

export const Cells = (props) => {
  const { text, pic, className, textClassName } = props
  return (
    <div className={`group relative flex justify-center items-center ${className}`}>
      <img src={pic} alt="" className="group-hover:opacity-[.56] duration-300" />
      <Typography
        variant="body-web"
        className={`text-primary-white absolute bottom-50 group-hover:block hidden duration-300 lg:text-[16px] md:text-[11px] ${textClassName}`}
      >
        {text}
      </Typography>
    </div>
  )
}
