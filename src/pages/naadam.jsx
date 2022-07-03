import React from 'react'
import { MainLayout } from 'layout'
import FirstPart from 'layout/indexPageComponents/firstNaadam'
import { PADDINGX } from 'constants/layout'
import { NaadamEvents, BigPicture, NaadamPlanText, GoalCard, Emphasis, Pictures } from 'components'
import { motion } from 'framer-motion'

const goal = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    transition: {
      delay: 0.3,
      duration: 0.8,
    },
    opacity: 1,
    y: 0,
  },
}
const smallGoal = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    transition: {
      delay: 0.3,
      duration: 0.8,
    },
    opacity: 1,
    y: 0,
  },
}

const Naadam = () => {
  return (
    <MainLayout classname={'bg-mainBg flex flex-col items-center'}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />

      <FirstPart
        btext={
          "Within the framework of the Global Sustainable Development Goals in Mongolia's desertified region, the aim is to promote the influence of Mongolian culture to the world by circulating national culture and Mongolian intellectual creations based on innovation and copyright, and developing cultural production."
        }
        loc={'location'}
        location={'Dornogobi aimag'}
      ></FirstPart>

      <div className="absolute top-[55vh] right-0 visible md:invisible ">
        <svg width="156" height="360" viewBox="0 0 156 360" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="127.5" cy="138" rx="50.5" ry="138" fill="url(#paint0_linear_452_1383)" />
          <ellipse cx="50.5" cy="222" rx="50.5" ry="138" fill="url(#paint1_linear_452_1383)" />
          <defs>
            <linearGradient
              id="paint0_linear_452_1383"
              x1="127.5"
              y1="0"
              x2="127.811"
              y2="224.607"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2A2C2C" />
              <stop offset="1" stop-color="#2A2C2C" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_452_1383"
              x1="50.5"
              y1="84"
              x2="50.8105"
              y2="308.607"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2A2C2C" />
              <stop offset="1" stop-color="#2A2C2C" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute top-[calc(100vh+200px)] invisible md:visible ">
        <svg width="1117" height="451" viewBox="0 0 1117 451" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.3">
            <circle cx="142" cy="309" r="141.5" stroke="white" />
          </g>
          <g opacity="0.3">
            <circle cx="982.5" cy="134.5" r="134" stroke="white" />
          </g>
        </svg>
      </div>

      <div className="absolute top-0 right-0 invisible md:visible">
        <svg width="1320" height="2221" viewBox="0 0 1920 3221" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.2" filter="url(#filter0_f_1897_17332)">
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

      <div id="spacer" className=" h-24 md:h-32"></div>

      <div className="flex flex-col items-center max-w-shambWidth gap-16">
        <div className="absolute z-10 left-[calc(50%-75px)] visible md:invisible">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1898_17904)">
              <circle cx="25" cy="25" r="5" fill="#FFD217" />
            </g>
            <defs>
              <filter
                id="filter0_d_1898_17904"
                x="0"
                y="0"
                width="50"
                height="50"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.972549 0 0 0 0 0.815686 0 0 0 0 0.294118 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1898_17904" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1898_17904" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="absolute visible md:invisible">
          <svg width="276" height="276" viewBox="0 0 276 276" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="138" cy="138" r="138" fill="url(#paint0_linear_1898_17894)" />
            <defs>
              <linearGradient
                id="paint0_linear_1898_17894"
                x1="138"
                y1="0"
                x2="138.114"
                y2="224.607"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#2A2C2C" />
                <stop offset="1" stop-color="#2A2C2C" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className=" absolute mt-[90%]">
          <svg width="329" height="141" viewBox="0 0 329 141" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.6">
              <circle cx="17.5" cy="74.5" r="17" stroke="white" />
            </g>
            <g opacity="0.6">
              <circle cx="286.5" cy="42.5" r="42" stroke="white" />
            </g>
            <g opacity="0.6">
              <circle cx="213.5" cy="134.5" r="6" stroke="white" />
            </g>
          </svg>
        </div>

        <motion.div variants={goal} initial="hidden" whileInView={'visible'} className="text-center z-10">
          <Emphasis children="Goals" left={true} />
        </motion.div>
        <motion.div
          variants={smallGoal}
          initial="hidden"
          whileInView={'visible'}
          className={`max-w-shambWidth mx-auto flex justify-center ${PADDINGX}`}
        >
          <div className="md:flex md:justify-around md:flex-wrap z-40 w-[90%] md:w-full">
            <GoalCard
              className="m-2"
              index={'01'}
              desc="To promote Mongolia's heritage, art and culture internationally through technology"
            />
            <GoalCard className="m-2" index={'02'} desc="Rehabilitation through desertification in Mongolia's arts" />
            <GoalCard className="m-2" index={'03'} desc="Long-term protection of Mongolia's terrestrial ecosystem" />
            <GoalCard
              className="m-2"
              index={'04'}
              desc="To introduce the development of Mongolian art and technology to the world and to exchange international experience"
            />
            <GoalCard className="m-2" index={'05'} desc="Disseminate Mongolian heritage" />
            <GoalCard className="m-2" index={'06'} desc="Introduce the value of art and technology to society" />
          </div>
          <div id="spacer" className="h-32"></div>
        </motion.div>
      </div>

      <div id="spacer" className=" h-24 md:h-32"></div>

      <NaadamEvents />
      <BigPicture />
      <div className="h-[55px] md:h-[150px]"></div>
      <NaadamPlanText />
      <div className="h-[55px]"></div>
      <Pictures />
      <div className=" h-[55px] md:h-[200px]"></div>
    </MainLayout>
  )
}

export default Naadam

//grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-20 gap-x-24
