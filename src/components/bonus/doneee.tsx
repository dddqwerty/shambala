import { Bonusnuud, GarchigBonus, Mod } from 'components'
import { PADDINGX } from 'constants/layout'
import { motion } from 'framer-motion'
const Modd = () => {

    const container = {
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.5,
            },
        },
    }

    const item1 = {
        hidden: { x: -120, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.3,
                duration: 0.5,
            }
        }
    }
    const item2 = {
        hidden: { x: -60, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.3,
                duration: 0.5,
            }
        }
    }
    const modd = {
        hidden: { x: 60, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.3,
                duration: 0.5,
            }
        }
    }
    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            className={`flex flex-col md:flex-row relative py-10 gap-20`}>
            <div
                style={{
                    background: 'linear-gradient(180deg, rgba(248, 208, 75, 0) 0%, rgba(248, 208, 75, 0.21) 100%)',
                }}
                className="absolute w-full h-[656px] bottom-[10%] md:bottom-0  md:hidden"
            />

            <motion.div
                // variants={item}
                className={`flex z-40 flex-col h-screen max-w-shambWidth justify-center mx-auto ${PADDINGX} w-full`}>
                <div className="flex space-x-4 ">
                    <div className="flex flex-col items-start gap-28 h-100%">
                        <motion.div variants={item1}>
                            <GarchigBonus />
                        </motion.div>
                        <motion.div variants={item2}>
                            <Bonusnuud />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
            <motion.div variants={modd}>
                <Mod />
            </motion.div>
        </motion.div>
    )
}
export default Modd