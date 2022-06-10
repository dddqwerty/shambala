import { HoveringCard, ImageSlider, Typography } from 'components'
import { Emphasis, GoalCard } from 'components'
import { animate, motion } from 'framer-motion'
import { PADDINGX } from 'constants/layout'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NaadamPlan = () => {
  const settings = {
    dots: true,
  }

  return (
    <div className={`flex justify-center flex-col items-center relative`}>
      <div className="flex flex-col items-center w-[800px] mb-[177px]">
        <Emphasis children="‘’Naadam’’ plan" />
        <Typography variant="body-web" className=" text-primary-white opacity-60 text-center">
          Эрчим хүчний сүлжээ, сансарын технологи хөгжүүлэлт, Блокчейн технологи хөгжүүлэлт, Дижитал артистууд
          хөгжүүлэлт, Уран баримал хөгжүүлэлт арт инсталляция, Дижитал хувцас загвар зэрэг сэдвээр салбар салбарын
          экспертүүдийг хамарсан хэлэлцүүлэг болно.
        </Typography>
      </div>
      <div className="hidden md:block">
        <div className="grid grid-cols-3 gap-y-[72px] gap-x-[61px]">
          <HoveringCard
            text="There are also three types of competitions and technologies from traditional festivals Exhibitions, comedies and podcasts will be broadcast live."
            picture="assets/hoverCardImages/hogiinSavBioNoil.jpg"
          />
          <HoveringCard
            text="There are also three types of competitions and technologies from traditional festivals Exhibitions, comedies and podcasts will be broadcast live."
            picture="assets/hoverCardImages/pond.jpg"
          />
          <HoveringCard
            text="There are also three types of competitions and technologies from traditional festivals Exhibitions, comedies and podcasts will be broadcast live."
            picture="assets/hoverCardImages/taiz.jpg"
          />
          <HoveringCard
            text="There are also three types of competitions and technologies from traditional festivals Exhibitions, comedies and podcasts will be broadcast live."
            picture="assets/hoverCardImages/pondHoloos.jpg"
          />
          <HoveringCard
            text="There are also three types of competitions and technologies from traditional festivals Exhibitions, comedies and podcasts will be broadcast live."
            picture="assets/hoverCardImages/odHarahHesegShono.jpg"
          />
          <HoveringCard
            text="There are also three types of competitions and technologies from traditional festivals Exhibitions, comedies and podcasts will be broadcast live."
            picture="assets/hoverCardImages/zadgaiKino.jpg"
          />
        </div>
      </div>
      {/* <div className="">
        <ImageSlider />
      </div> */}
    </div>
  )
}

export default NaadamPlan
