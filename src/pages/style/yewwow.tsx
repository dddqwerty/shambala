import { Yellow } from 'components'
import { } from 'react'
import { handleIcon } from 'utils'

export default function Home () {
    return(
        <Yellow title={'be human'}
        desc={'Бидний "Art-Tech Empire" Лэнд Арт төсөл маань Дорноговь аймгийн, Төхөмийн хөндий, Ар цацын ус гэх байршлын 5 га газарт нийт 30,000 ширхэг буюу 10,000 бортоготой мод тарих төсөл юм.'}
        headerEl={handleIcon({ icon: 'nav', size: 30})}
        >
        </Yellow>
    )
}