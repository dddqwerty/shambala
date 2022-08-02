import MobileSwiper from 'components/mobileSwiper'

const MobileIgmSecondPart = (props) => {
  const { cells } = props

  return (
    <div className="visible md:invisible relative md:absolute z-40 md:-z-50 md:top-0">
      <MobileSwiper data={cells} dataLength={5} slideClassName="px-[17px]" />
      <div className="h-[100px]"></div>
    </div>
  )
}

export default MobileIgmSecondPart
