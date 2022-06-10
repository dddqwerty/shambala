import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function ImageSlider() {
    return (
        <div className="h-full bg-black">
            <Swiper
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true
                }}
                modules={[Pagination]}
                className="h-[381px]"
            >
                <SwiperSlide>
                    <img src="/assets/hoverCardImages/hogiinSavBioNoil.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/hoverCardImages/pond.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/hoverCardImages/taiz.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/hoverCardImages/pondHoloos.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/hoverCardImages/odHarahHesegShono.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/hoverCardImages/zadgaiKino.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
