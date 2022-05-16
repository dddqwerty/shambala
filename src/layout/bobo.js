// import Gurvaljinurd from "pages/style/card"
import { Card, Button, Typography } from 'components'
import { motion } from 'framer-motion'

const container = {
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    // transition: {
    //   delay: 0.2
    // }
  },
}
const Titi = ({ classname }) => {
  return (
    <div className="w-full">
      <div className="hidden md:block lg:block md:absolute lg:absolute border-solid border-2 w-[455px] h-[455px] rounded-full opacity-40   top-[115px] left-[-170px]" />
      <div className={`max-w-shambWidth relative mx-auto flex flex-col ${classname} mb-60`}>
        <div className="absolute w-[170%] z-0 t-25 md:w-[90%] lg:w-[90%] left-[14%] md:top-4 md:left-1/2 md:transform md:-translate-x-1/2 lg:top-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 ">
          <img src="assets/trangle.svg" />
          <div className="hidden md:block md:top-[47%] md:left-1/2 md:transform md:-translate-x-1/2 md:absolute lg:block lg:top-[47%] lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:absolute">
            <img src="assets/ep.svg" />
          </div>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="md:mt-[140px] ml-10 flex flex-col gap-32 py-10 z-10"
        >
          <motion.div variants={item} className="flex flex-col">
            <div className="grid grid-cols-1">
              <Card
                headerEl={`our new project`}
                title={`Art Tech Empire`}
                desc={`Бидний "Art-Tech Empire" Лэнд Арт төсөл маань Дорноговь аймгийн, Төхөмийн хөндий, Ар цацын ус гэх байршлын 5 га газарт нийт 30,000 ширхэг буюу 10,000 бортоготой мод тарих төсөл юм.`}
                buttonEl={
                  <Button variant="primary">
                    <Typography variant="p-big">See more</Typography>
                  </Button>
                }
              />
            </div>
          </motion.div>

          <motion.div variants={item} className="flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="hidden md:blcok lg:block" />
              <Card
                headerEl={`our new project`}
                title={`Why Gobi ?`}
                desc={`Монгол орны нийт нутаг дэвсгэрийн 77% нь цөлжилтөд нэрвэгдсэн тул, цаг тухайд нь зохих арга хэмжээ авахгүй бол 2080 он гэхэд нийт газар нутгийн 92 хувь нь цөлжих төлөвтэй байна. `}
                buttonEl={
                  <Button variant="primary">
                    <Typography variant="p-big">See more</Typography>
                  </Button>
                }
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Titi
