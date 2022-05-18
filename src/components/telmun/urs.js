import React, { useState } from 'react'
import Carousel from 'react-simply-carousel'

function Urs() {
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <div>
      <div>
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
      <div>
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
