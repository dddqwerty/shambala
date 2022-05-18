import { Typography } from "components"
import { Emphasis, GoalCard } from "components"

const OurGoalsPart = () => {

    return (
        <div className="flex justify-start items-center max-w-shambWidth h-screen mx-auto z-20 relative">
            <div className="-z-[100] md:z-10 absolute w-[40%] -left-[53%] -bottom-[30%]">
                <img src="assets/ellipse/twoEllipse.svg" alt="" />
            </div>
            <div className="hidden md:block absolute w-[90%] -right-[45%]">
                <img src="assets/ellipse/earthShadow.svg" alt="" />
            </div>
            <div className="md:hidden absolute w-[100] bottom-[5%] -left-[10%]">
                <img src="assets/ellipse/greyEllipseSm.svg" alt="" />
            </div>
            <div className="md:hidden absolute w-[100%] -right-[70%] top-[45%]">
                <img src="assets/ellipse/greyEllipseMd.svg" alt="" />
            </div>

            <div className="grid md:gap-[157px] gap-[42px]">
                <div className="text-center" >
                    <Emphasis children="Our goals" left={true} />
                </div>
                <div className="grid md:gap-20 gap-[60px] md:w-[100%] w-[97%]">
                    <GoalCard desc="Дорнговь аймагт сэргээгдэх эрчим хүчний дэд бүтцийг хөгжүүлэх" index="01" />
                    <GoalCard desc="Газрын доройтлыг тогтвортой хөгжлийн зорилтын хүрээнд урьдчилсан сэргийлэх" index="02" />
                    <GoalCard desc="Цөлжилттэй газар нутагт тухайн газрын онцлогт тохирох модыг тарьж ургуулан нөхөн сэргээх" index="03" />
                    <GoalCard desc="Дотоодын технологийн шинэчлэлийг өсөн дэвжихэд нь туслах, дэмжих" index="04" />
                </div>
            </div>
            <div className="hidden md:block absolute w-[90%] -right-[60%]">
                <img src="assets/realearth.webp" className="animate-spin-slowf" />
            </div>
        </div>
    )
}

export default OurGoalsPart