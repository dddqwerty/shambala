import Typography from 'components/typography'

export const Cells = (props) => {
  const { text, pic, className } = props
  return (
    <div className={`group relative flex justify-center items-center ${className}`}>
      <img src={pic} alt="" className="group-hover:opacity-[.56] duration-300" />
      <Typography
        variant="body-web"
        className="text-[#C0C0C0] absolute bottom-50% w-[60%] group-hover:block hidden duration-300 text-[11px] lg:text-[16px]"
      >
        {text}
      </Typography>
    </div>
  )
}
