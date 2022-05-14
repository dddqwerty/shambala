import { Typography } from "components"
import { Emphasis, GoalCard } from "components"

const OurGoalsPart = () => {

    return (
        <div className="flex justify-start items-center max-w-shambWidth h-screen mx-auto z-20 relative">

            <div className="grid gap-[157px]">
                <div>
                    <Emphasis children="Our goals" left={true} />
                </div>
                <div className="grid gap-20">
                    <GoalCard desc="Дорнговь аймагт сэргээгдэх эрчим хүчний дэд бүтцийг хөгжүүлэх" index="01" />
                    <GoalCard desc="Газрын доройтлыг тогтвортой хөгжлийн зорилтын хүрээнд урьдчилсан сэргийлэх" index="02" />
                    <GoalCard desc="Цөлжилттэй газар нутагт тухайн газрын онцлогт тохирох модыг тарьж ургуулан нөхөн сэргээх" index="03" />
                    <GoalCard desc="Дотоодын технологийн шинэчлэлийг өсөн дэвжихэд нь туслах, дэмжих" index="04" />
                </div>
            </div>
            <div className="hidden md:block absolute w-[90%] -right-[45%]">
                <img src="assets/realearth.webp" className='animate-spin-slow' />
            </div>
        </div>
    )
}

export default OurGoalsPart