import React from 'react'
import { MainLayout } from 'layout'
import FirstPart from 'layout/indexPageComponents/firstNaadam'
import { PADDINGX } from 'constants/layout'
import { NaadamEvents, BigPicture, NaadamPlanText, GoalCard, Emphasis, Pictures, Zavaan, Zavaan2 } from 'components'

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

      <div id="spacer" className=" h-5 md:h-32"></div>

      {/* just some decor */}

      <Zavaan />
      <Zavaan2 />

      <div className="flex flex-col gap-16">
        <div className="text-center z-10">
          <Emphasis children="Goals" left={true} />
        </div>
        <div className={`max-w-shambWidth mx-auto ${PADDINGX}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-20 gap-x-24 z-10">
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
      <div className=" h-[55px] md:h-[200px]"></div>
    </MainLayout>
  )
}

export default Naadam
