import { Typography, CardWithIcon } from 'components'
import {} from '..'
import { handleIcon } from 'utils'

export default function Home() {
    return (
        <div className=''>
            <CardWithIcon headerEl={handleIcon({ icon: "riDirection", size: 33})} title={`Зам, Дэд Бүтэц`} 
            desc={`Зам, Дэд Бүтэц
АН-3 авто зам, Улаанбаатар - Замын - Үүдийн болон Таван толгой - Зүүн - Баян чиглэлийн төмөр зам, Газрын  тос боловсруулах үйлдвэр, Салхин цахилгаан станц.`}></CardWithIcon>
        </div >
    )
}
