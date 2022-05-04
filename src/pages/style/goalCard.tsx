import { GoalCard } from 'components'
import { Typography } from 'components'

export default function Home() {
    return (
        <div className="bg-black h-screen flex flex-col items-center justify-center">
            <GoalCard index="01" desc="Дорнговь аймагт сэргээгдэх эрчим хүчний дэд бүтцийг хөгжүүлэх" />
            <GoalCard index="02" desc="Газрын доройтлыг тогтвортой хөгжлийн зорилтын хүрээнд урьдчилсан сэргийлэх" />
            <GoalCard index="03" desc="Цөлжилттэй газар нутагт тухайн газрын онцлогт тохирох модыг тарьж ургуулан нөхөн сэргээх" />
            <GoalCard index="04" desc="Дотоодын технологийн шинэчлэлийг өсөн дэвжихэд нь туслах, дэмжих" />
        </div>
    )
}
