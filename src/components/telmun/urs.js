import React, { useState } from 'react'
import Carousel from 'react-simply-carousel'

function Urs() {
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <div className="relative pb-[180px]">
      <div className="h-[340px] w-full absolute z-50 "></div>

      <div className="z-10 mb-[30px] ">
        <Carousel
          autoplay={1}
          infinite={true}
          easing="linear"
          speed={200000}
          updateOnItemClick
          containerProps={{
            style: {
              width: '100%',
              justifyContent: 'space-between',
            },
          }}
          activeSlideIndex={activeSlide}
          onRequestChange={setActiveSlide}
          itemsToShow={1}
        >
          {Array.from({ length: 10 }).map((item, index) => (
            <img className="max-w-none" src="assets/1ad.svg" key={index} />
          ))}
        </Carousel>
      </div>
      <div className="mb-[30px]">
        <Carousel
          autoplayDirection="backward"
          autoplay={1}
          infinite={true}
          easing="linear"
          speed={500000}
          updateOnItemClick
          containerProps={{
            style: {
              width: '100%',
              justifyContent: 'space-between',
            },
          }}
          activeSlideIndex={activeSlide}
          onRequestChange={setActiveSlide}
          itemsToShow={1}
        >
          {Array.from({ length: 10 }).map((item, index) => (
            <img className="max-w-none" src="assets/1ad.svg" key={index} />
          ))}
        </Carousel>
      </div>
      <div>
        <Carousel
          autoplay={1}
          infinite={true}
          easing="linear"
          speed={100000}
          updateOnItemClick
          containerProps={{
            style: {
              width: '100%',
              justifyContent: 'space-between',
            },
          }}
          activeSlideIndex={activeSlide}
          onRequestChange={setActiveSlide}
          itemsToShow={1}
        >
          {Array.from({ length: 10 }).map((item, index) => (
            <img className="max-w-none" src="assets/1ad.svg" key={index} />
          ))}
        </Carousel>
      </div>
    </div>
  )
}
export default Urs
