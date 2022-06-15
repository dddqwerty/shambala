import React from 'react'
import { MainLayout } from 'layout'
import FirstPart from 'layout/indexPageComponents/firstNaadam'
import { PADDINGX } from 'constants/layout'
import { NaadamEvents, BigPicture, NaadamPlanText, GoalCard, Emphasis, Pictures } from 'components'

const Naadam = () => {
  return (
    <MainLayout classname={'bg-mainBg flex flex-col items-center'}>
      <FirstPart
        btext={
          "Within the framework of the Global Sustainable Development Goals in Mongolia's desertified region, the aim is to promote the influence of Mongolian culture to the world by circulating national culture and Mongolian intellectual creations based on innovation and copyright, and developing cultural production."
        }
        loc={'location'}
        location={'Dornogobi aimag'}
      ></FirstPart>

      <div id="spacer" className="h-32"></div>

      {/* <Goals title="Goals"></Goals> */}

      {/* just some decor */}

      <div className=" absolute top-[1400px] left-[580px]">
        <svg width="284" height="284" viewBox="0 0 284 284" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="142" cy="142" r="141.5" stroke="white" />
        </svg>
      </div>
      <div className=" absolute top-[1150px] left-[1300px]">
        <svg width="269" height="269" viewBox="0 0 269 269" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="134.5" cy="134.5" r="134" stroke="white" />
        </svg>
      </div>
      <div className=" absolute right-0">
        <svg width="1920" height="3221" viewBox="0 0 1920 3221" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.4" filter="url(#filter0_f_1897_17332)">
            <circle cx="1797" cy="1317" r="404" fill="#007AFF" />
          </g>
          <defs>
            <filter
              id="filter0_f_1897_17332"
              x="-107"
              y="-587"
              width="3808"
              height="3808"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="750" result="effect1_foregroundBlur_1897_17332" />
            </filter>
          </defs>
        </svg>
      </div>

      <div className=" absolute top-[2700px] right-[700px] z-0">
        <svg width="269" height="269" viewBox="0 0 269 269" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="134.5" cy="134.5" r="134" stroke="white" />
        </svg>
      </div>

      <div className="flex flex-col gap-16">
        <div className="text-center">
          <Emphasis children="Goals" left={true} />
        </div>
        <div className={`max-w-shambWidth mx-auto ${PADDINGX}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-20 gap-x-24">
            <GoalCard
              index={'01'}
              desc="To promote Mongolia's heritage, art and culture internationally through technology"
            />
            <GoalCard index={'02'} desc="Rehabilitation through desertification in Mongolia's arts" />
            <GoalCard index={'03'} desc="Long-term protection of Mongolia's terrestrial ecosystem" />
            <GoalCard
              index={'04'}
              desc="To introduce the development of Mongolian art and technology to the world and to exchange international experience"
            />
            <GoalCard index={'05'} desc="Disseminate Mongolian heritage" />
            <GoalCard index={'06'} desc="Introduce the value of art and technology to society" />
          </div>
          {/* <div className=" w-full flex items-center flex-wrap">
          <div className="md:w-[75%] w-[90%] flex justify-around flex-col md:flex-row">
          
          </div>
          <div className="md:w-[75%] w-[90%] flex justify-around flex-col md:flex-row">
            
          </div>
        </div> */}
          <div id="spacer" className="h-32"></div>
        </div>
      </div>

      <NaadamEvents />
      <BigPicture />
      <div className="h-[55px]"></div>
      <NaadamPlanText />
      <div className="h-[55px]"></div>
      <Pictures />
      <div className=" h-[200px]"></div>
    </MainLayout>
  )
}

export default Naadam
