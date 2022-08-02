import { HeadTextOfIcubator } from './headerText'
import { FirstText } from './firstText'
import { House } from './housePart'
import { Bench } from './bench'
import { Text2 } from './text2'
import { PADDINGX } from 'constants/layout'
import { Last } from './last'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { motion } from 'framer-motion'

const Incubator = (props) => {
  const { incubator } = props

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  const up = {
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
  return (
    <div className={`flex flex-col items-center max-w-shambWidth w-full `}>
      <motion.div variants={up} initial="hidden" whileInView={'visible'}>
        <HeadTextOfIcubator title={incubator.title} body={incubator.body} />
      </motion.div>
      <div className=" h-36"></div>

      <FirstText bigText={incubator.bigText1} subText={incubator.subText1} paragraph={incubator.paragraph1} />
      <div className=" h-36"></div>

      <House
        subText={incubator.subText2}
        bigText={incubator.bigText2}
        paragraph={incubator.paragraph2}
        bigHouse={incubator.bigHouse}
      />
      <div className=" h-36"></div>

      <Bench subText={incubator.bigText3} bigText={incubator.bigText3} paragraph={incubator.paragraph3} />
      <div className=" h-36"></div>

      <Text2 bigText={incubator.bigText4} paragraph={incubator.paragraph4} goals={incubator.goals} />
      <div className=" h-28 md:h-52"></div>

      <motion.div variants={up} initial="hidden" whileInView={'visible'}>
        <Last
          vari={matches ? 'title-small' : 'thin'}
          className={` px-0 md:${PADDINGX} px-1 !font-thin text-white/60 z-20 `}
        >
          {incubator.BIGTEXT}
        </Last>
      </motion.div>

      <div className=" h-36"></div>
    </div>
  )
}

export default Incubator
