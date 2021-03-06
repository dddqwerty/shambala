import { GoalCard, MemberCard, Typography } from 'components'
import { Emphasis } from 'components/ligature/index'
import { MainLayout } from 'layout'
import { members } from '../../public/assets/membersInfo'
import { PADDINGX } from 'constants/layout'
import { motion } from 'framer-motion'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

export default function Home() {

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  const container = {
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        delayChildren: 0.8,
        staggerChildren: 0.3,
      },
    },
  }
  const titlecon = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.03,
        staggerChildren: 0.05,
      },
    },
  }

  const item = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }
  const logoo = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      // transition:{
      //   duration: 0.7,
      //   delay: 0.7,
      // },
      opacity: 1,
    },

  }
  const cards = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      // transition:{
      //   duration: 0.7,
      //   delay: 0.7,
      // },
      opacity: 1,
    },

  }
  return (
    <MainLayout classname='bg-backgroundColor-darkGray relative pt-36 md:pb-[400px] pb-[220px]'>
      <div style={{
        background: 'linear-gradient(180deg, rgba(32, 33, 33, 0) 0%, #202121 100%)'
      }} className='absolute top-0 left-0 w-screen h-screen z-10 hidden md:block lg:block ' />
      <div className='absolute top-0 left-0 z-0 h-screen w-screen bg-no-repeat bg-cover hidden md:block lg:block'
        style={{
          background: `linear-gradient(0deg, rgba(32, 33, 33, 0.7), rgba(32, 33, 33, 0.7)), url('assets/homePageBg.webp')`
        }}>
      </div>
      <div className={`flex flex-col items-center max-w-araiUrt mx-auto z-20 relative ${PADDINGX}`}>

        <motion.div
          variants={container}
          initial='hidden'
          whileInView={'visible'}
          className={matches ? '' : `flex flex-col mx-auto z-20 relative ${PADDINGX}`}>

          <motion.div
            variants={titlecon}
            initial='hidden'
            whileInView={'visible'}
            className={`flex flex-col items-center`}>

            <motion.div
              variants={item}
              className='w-10 hidden md:block'>
              <img src="assets/footer1.png" alt="" className='max-w' />
            </motion.div>
            <motion.div
              variants={logoo}
              className='md:hidden'>
              <img src="assets/mainlogo.svg" alt="" />
            </motion.div>
            <motion.div
              variants={item}
              className='flex w-[90%] md:w-[70%] flex-col text-center gap-14 mt-20'>
              <Emphasis content='Our company' />
              <Typography variant='body-web' className='text-primary-white opacity-60'>In 2056, an international engineering and research institute will be established in Mongolia that meets the Sustainable Development Goals.</Typography>
            </motion.div>

          </motion.div>
          <motion.div variants={cards} className=' max-w-shambWidth flex flex-wrap justify-center my-20'>
            {members[0].map((member, index) => {
              return < MemberCard className='m-5 my-10' firstName={member.firstName} lastName={member.lastName} job={member.job} picture={member.picture} key={index} />
            })}
          </motion.div>
        </motion.div>

        <div className='hidden md:block absolute -right-[40%] -top-[3%]'>
          <img src="assets/ellipse/ellipse513.svg" alt="" className='w-[284px]' />
        </div>
        <div className='hidden md:block absolute -left-[43%] top-[19%]'>
          <img src="assets/ellipse/ellipse513.svg" alt="" className='w-[355px]' />
        </div>
        <div className='hidden md:block absolute -right-[50%] top-[85%]'>
          <img src="assets/ellipse/ellipse513.svg" alt="" className='w-[512px]' />
        </div>
        <div className='absolute md:top-[62%] md:left-[20%] -bottom-[4%] -right-[22%]' >
          <img src="assets/ellipse/twoEllipse.svg" alt="" className='w-[265px] rotate-[120deg]' />
        </div>
        <div className='absolute md:hidden -right-[20%] top-[20%] z-[-1]' >
          <img src="assets/ellipse/ellipse513.svg" alt="" className='w-[240px]' />
        </div>
        <div className='absolute md:hidden -left-[43%] top-[43%] z-[-1]' >
          <img src="assets/ellipse/ellipse513.svg" alt="" className='w-[248px]' />
        </div>
        <div className='absolute md:hidden -right-[12%] top-[53%] z-[-1]' >
          <img src="assets/ellipse/ellipse513.svg" alt="" className='w-[138px]' />
        </div>

        <motion.div
          variants={container}
          initial='hidden'
          whileInView={'visible'}
          className={matches ? '' : 'flex items-center flex-col gap-14 w-4/5 relative'}>
          <motion.div
            variants={item}
            className='flex items-center flex-col text-center gap-14 relative'>
            <div className='md:hidden absolute -top-[45%]'>
              <img src="assets/shambalaIcon.svg" alt="" />
            </div>
            <Emphasis content='Company goals' />
            <Typography variant='body-web' className='text-primary-white opacity-60 w-[72%]'>In 2056, an international engineering and research institute will be established in Mongolia that meets the Sustainable Development Goals.</Typography>
          </motion.div>

          <motion.div variants={item} className='md:block mt-48 hidden '>
            <div className='grid grid-cols-3 gap-x-[125px] place-content-center'>
              <GoalCard index='01' desc='Rehabilitation will be carried out in desert areas by planting trees suitable for the specifics of the land.' />
              <GoalCard index='03' desc='Renewable energy infrastructure development.' />
              <GoalCard index='05' desc='Promoting innovation.' />
            </div>
            <div className='flex px-[30px] mt-[50px] justify-around'>
              <GoalCard index='02' desc='Work within the framework of the Sustainable Development Goals.' />
              <GoalCard index='04' desc='Reduce urban concentration by combining art and technology.' />
            </div>
          </motion.div>
          <motion.div variants={item} className='md:hidden mt-48 grid gap-[32px] md:w-[100%] w-[95%]'>
            <GoalCard index='01' desc='Rehabilitation will be carried out in desert areas by planting trees suitable for the specifics of the land.' />
            <GoalCard index='02' desc='Work within the framework of the Sustainable Development Goals.' />
            <GoalCard index='03' desc='Renewable energy infrastructure development.' />
            <GoalCard index='04' desc='Reduce urban concentration by combining art and technology.' />
            <GoalCard index='05' desc='Promoting innovation.' />
          </motion.div>

        </motion.div>
        <motion.div
          variants={container}
          initial='hidden'
          whileInView={'visible'}>
          <motion.div variants={item} className=' max-w-shambWidth flex flex-wrap justify-center my-20'>
            {members[1].map((member, index) => {
              return < MemberCard className='m-5 my-10' firstName={member.firstName} lastName={member.lastName} job={member.job} picture={member.picture} key={index} />
            })}
          </motion.div>
        </motion.div>
      </div>
      {/* </motion.div> */}

    </MainLayout >

  )
}