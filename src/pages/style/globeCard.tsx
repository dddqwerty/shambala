import { BidYuHiijBainaVeCard, Title, Buurunhii } from 'components'
import { motion } from 'framer-motion'
const Whatarewedoing = () => {
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
            opacity: 1
        }
    }
    return (
        <div className="grid place-items-center h-full bg-[#151515]">
            <img src="/assets/davalgaa.svg" className='w-full hidden md:block mb-[130px]' alt="" />
            <div className='relative'>
                <Buurunhii />

                <div>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                    >
                        <motion.div variants={item} className="flex flex-col items-center">
                            <Title />
                        </motion.div>
                        <motion.div variants={item} className="flex flex-col items-center">
                            <BidYuHiijBainaVeCard />
                        </motion.div>
                    </motion.div>
                </div>

            </div>
        </div >
    )
}
export default Whatarewedoing