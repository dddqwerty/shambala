import MobileSwiper from 'components/mobileSwiper'

const sheesh = 'assets/bigPictureSH.png'

export const Mobile = (props) => {
  const { data } = props
  return (
    <div className="visible md:invisible relative md:absolute z-0 md:-z-50 md:top-0">
      <MobileSwiper data={data} dataLength={6} slideClassName="px-[55px]" />
      <div className="h-[100px]"></div>
    </div>
  )
}
