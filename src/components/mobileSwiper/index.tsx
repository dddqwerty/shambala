import { Typography } from 'components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

type Props = {
  data: object[]
  dataLength: number
  slideClassName: string
}

const MobileSwiper = (props: Props) => {
  const { dataLength, data, slideClassName } = props

  return (
    <div className='flex justify-center' style={{ width: `calc(${dataLength} * 230px)` }}>
      <Swiper
        slidesPerView={dataLength - 2}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
          hideOnClick: true,
        }}
        modules={[Pagination]}
        className="w-full"
      >
        {data.map((info, index) => {
          return (
            <SwiperSlide key={index} className="bg-transparent flex justify-center">
              {({ isActive }) => (
                <div className="relative w-[310px] h-[381px] flex items-center">
                  <img
                    src={info.picture}
                    alt=""
                    className={isActive ? 'brightness-[.56] duration-300 z-[2]' : 'opacity-[0]'}
                  />
                  <div
                    className={
                      isActive ? `absolute opacity-[100] z-[3] text-primary-white ${slideClassName}` : 'opacity-[0]'
                    }
                  >
                    <Typography variant="title-big" className="text-center">
                      {index + 1}
                    </Typography>
                    <div id="spacer" className=" h-6"></div>
                    <Typography variant="body-mobile" className="text-left">
                      {info.text}
                    </Typography>
                  </div>
                </div>
              )}
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
export default MobileSwiper
