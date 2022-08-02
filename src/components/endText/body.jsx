import Typography from 'components/typography'

export const Body = (props) => {
  const { db, l = false } = props

  return (
    <div className={`flex flex-row ${l ? 'justify-start' : 'justify-end'} w-full z-20 `}>
      <div className="flex flex-col max-w-[550px] py-20">
        <Typography variant="yeloo" className="text-[#C7B36D]">
          {db.subTitle}
        </Typography>
        <Typography variant="h3" className="text-white">
          {db.title}
        </Typography>
        <Typography variant="body-web" className="text-white">
          {db.body}
        </Typography>

        <div className="underline underline-offset-1 text-white/60"> See more</div>
      </div>
    </div>
  )
}
