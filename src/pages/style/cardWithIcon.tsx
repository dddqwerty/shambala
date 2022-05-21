import { CardWithIcon } from 'components'
import { handleIcon } from 'utils'
import { Emphasis } from 'components'
import { motion } from 'framer-motion'

const CardWithIconn = ({classname}) => {
  const container = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.5,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <div className="  flex flex-col items-center p-20 h-screen relative flex max-w-shambWidth items-center mx-auto ${PADDINGX} hidden md:block">
      {/* <div className="hidden md:block absolute ">
        <img src="/assets/footer1.png" alt="" />
      </div> */}
      <div>
      <motion.div variants={container} initial="hidden" whileInView="visible" className="">
        <motion.div variants={item} className="flex flex-col items-center">
          <Emphasis>What we have done </Emphasis>
        </motion.div>
      </motion.div>

      <motion.div variants={container} initial="hidden" whileInView="visible" className="">
        <div className=" grid grid-cols-2 gap-x-72 pt-16 pb-48 h-screen">
          <motion.div variants={item} className="flex flex-col items-center">
            <CardWithIcon
              headerEl={handleIcon({ icon: 'riDirection', size: 33, className: 'text-[#A3935B]' })}
              title={`Зам, Дэд Бүтэц`}
              desc={`Зам, Дэд Бүтэц АН-3 авто зам, Улаанбаатар - Замын - Үүдийн болон Таван толгой - Зүүн - Баян чиглэлийн төмөр зам, Газрын  тос боловсруулах үйлдвэр, Салхин цахилгаан станц.`}
            ></CardWithIcon>
          </motion.div>

          <motion.div variants={item} className="flex flex-col items-center">
            <CardWithIcon
              headerEl={handleIcon({ icon: 'leaf', size: 33, className: 'text-[#A3935B]' })}
              title={`Хүлэмжийн аж ахуй эрхлэх боломж`}
              desc={`Жилийн турш ажиллах боломтой Монгол орны нөхцөлд илүү тохромжтой харьцангуй өртөг багатай, амархан халдаг дулаанаа удаан хадгалдаг эрчим хүч хэмнэх сайн талтай нарны гэрэл сайн ашгилдаг.`}
            ></CardWithIcon>
          </motion.div>

          <motion.div variants={item} className="flex flex-col items-center">
            <CardWithIcon
              headerEl={handleIcon({ icon: 'lightning', size: 33, className: 'text-[#A3935B]' })}
              title={`Сэргээгдэх эрчим хүчний нөөц`}
              desc={`Говийн бүсэд нарны гийгүүлэх хугацаа 2900 - 3000 цаг бөгөөд нэг ам метр нэгж талбайд харгалзах нарны эрчимийн хэмжээ өдөрт 5.5 - 6.0 кВт *ц/м2 байна.`}
            ></CardWithIcon>
          </motion.div>

          <motion.div variants={item} className="flex flex-col items-center">
            <CardWithIcon
              headerEl={handleIcon({ icon: 'mapPin', size: 33, className: 'text-[#A3935B]' })}
              title={`Газар зүйн байрлал`}
              desc={`Дорноговь аймгийн Замын - Үүд, Хангийн хилийн боомт нь Монголоос Хятад руу нэвтрэх хамгийн том боомт хотууд юм. Цаг уурын хувьд зуны улиралд +41 хэм хүртэл халж салхины дундаж хурд 4,2 - 4,6 м/сек байна.`}
            ></CardWithIcon>
          </motion.div>
          
        </div>
      </motion.div>
      </div>
    </div>
  )
}

export default CardWithIconn;
