import { Typography } from "components"
import { Emphasis, GoalCard } from "components"
import { animate, motion } from 'framer-motion'
import { PADDINGX } from "constants/layout"

const OurGoalsPart = () => {

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
        <div className={`flex justify-start items-center max-w-shambWidth py-48 mx-auto z-20 relative ${PADDINGX}`}>

            {/* <div className="-z-[100] md:z-50 lg:z-50 absolute w-[40%] -left-[53%] -bottom-[30%]">
                <img src="assets/ellipse/twoEllipse.svg" alt="" />
            </div> */}
            <div className="hidden md:block absolute w-[90%] -right-[45%]">
                <img src="assets/ellipse/earthShadow.svg" alt="" />
            </div>
            {/* <div className="md:hidden absolute w-[100] bottom-[5%] -left-[10%]">
                <img src="assets/ellipse/greyEllipseSm.svg" alt="" />
            </div>
            <div className="md:hidden absolute w-[100%] -right-[70%] top-[45%]">
                <img src="assets/ellipse/greyEllipseMd.svg" alt="" />
            </div> */}

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                className="md:mt-[140px] flex flex-col gap-32 py-10 z-10"
            >
                <div className="grid md:gap-[157px] gap-[42px]">
                    <motion.div variants={item}>
                        <div className="text-center" >
                            <Emphasis children="Our Goals" left={true} />
                        </div>
                    </motion.div>
                    <motion.div variants={item}> 
                        <div className="grid md:gap-20 gap-[60px] md:w-[100%] w-[97%]">
                            <GoalCard desc="Renewable energy infrastructure will be developed in Dornogovi aimag." index="01" />
                            <GoalCard desc="Land degradation will be prevented within the framework of the Sustainable Development Goals." index="02" />
                            <GoalCard desc="Rehabilitate by establishing green zones in accordance with the specifics of desertified areas." index="03" />
                            <GoalCard desc="Support domestic technological innovation." index="04" />
                        </div>
                    </motion.div>

                </div>

                <div className="hidden md:block absolute w-[85%] -right-[60%]">
                    <img src="assets/realearth.webp" className="-rotate-90" />
                </div>
            </motion.div>

        </div >
    )
}

export default OurGoalsPart