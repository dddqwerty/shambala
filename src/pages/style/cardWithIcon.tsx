import {  CardWithIcon } from 'components'
import {} from '..'
import { handleIcon } from 'utils'

export default function Home() {
    return (
        <div>
            <div>
            <CardWithIcon headerEl={handleIcon({ icon: "riDirection", size: 33, className: 'text-[#A3935B]',})} title={`Зам, Дэд Бүтэц`} 
            desc={`Зам, Дэд Бүтэц АН-3 авто зам, Улаанбаатар - Замын - Үүдийн болон Таван толгой - Зүүн - Баян чиглэлийн төмөр зам, Газрын  тос боловсруулах үйлдвэр, Салхин цахилгаан станц.`}></CardWithIcon>
        </div >
        <div>
            <CardWithIcon headerEl={handleIcon({ icon: "leaf", size: 33, className: 'text-[#A3935B]',})} title={`Хүлэмжийн аж ахуй эрхлэх боломж`} 
            desc={`Жилийн турш ажиллах боломтой Монгол орны нөхцөлд илүү тохромжтой харьцангуй өртөг багатай, амархан халдаг дулаанаа удаан хадгалдаг эрчим хүч хэмнэх сайн талтай нарны гэрэл сайн ашгилдаг.`}></CardWithIcon>
        </div >
        <div>
            <CardWithIcon headerEl={handleIcon({ icon: "lightning", size: 33, className: 'text-[#A3935B]',})} title={`Сэргээгдэх эрчим хүчний нөөц`} 
            desc={`Говийн бүсэд нарны гийгүүлэх хугацаа 2900 - 3000 цаг бөгөөд нэг ам метр нэгж талбайд харгалзах нарны эрчимийн хэмжээ өдөрт 5.5 - 6.0 кВт *ц/м2 байна.`}></CardWithIcon>
        </div >
        <div>
            <CardWithIcon headerEl={handleIcon({ icon: "mapPin", size: 33, className: 'text-[#A3935B]',})} title={`Газар зүйн байрлал`} 
            desc={`Дорноговь аймгийн Замын - Үүд, Хангийн хилийн боомт нь Монголоос Хятад руу нэвтрэх хамгийн том боомт хотууд юм. Цаг уурын хувьд зуны улиралд +41 хэм хүртэл халж салхины дундаж хурд 4,2 - 4,6 м/сек байна.`}></CardWithIcon>
        </div >
        </div>
    )
}
