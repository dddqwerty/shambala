import React from 'react'
import { MainLayout } from 'layout'
import FirstPart from 'layout/indexPageComponents/firstNaadam'
import { GoalCard, Emphasis } from 'components'
import { PADDINGX } from 'constants/layout'

const Naadam = () => {
  return (
    <MainLayout classname={'bg-mainBg'}>
      <FirstPart
        btext={
          'Монгол орны цөлжилттэй бүс нутагт Дэлхийн Тогтвортой Хөгжлийн зорилтуудын хүрээнд үндэсний соёл уламжлал, Монгол хүний оюуны бүтээлийг инноваци, зохиогчийн эрхэд тулгуурлан эдийн засгийн эргэлтэд оруулж, соёлын үйлдвэрлэлийг хөгжүүлэх замаар Монгол соёлын нөлөөг дэлхий нийтэд сурталчлан таниулахад оршино.'
        }
        loc={'location'}
        location={'Dornogobi aimag'}
      ></FirstPart>

      <div id="spacer" className="h-32"></div>

      {/* <Goals title="Goals"></Goals> */}
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
    </MainLayout>
  )
}

export default Naadam
