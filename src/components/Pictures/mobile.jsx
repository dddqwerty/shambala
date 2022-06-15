import { Cells } from './cells'

const sheesh = 'assets/bigPictureSH.png'

export const Mobile = () => {
  return (
    <div className="visible md:invisible relative md:absolute z-0 md:-z-50 md:top-0">
      Mobile
      <Cells pic={sheesh} />
      <div className="h-[100px]"></div>
    </div>
  )
}
