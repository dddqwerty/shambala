import {} from 'react'
import { MainLayout } from 'layout'
import { Yellow } from 'components'
import { handleIcon } from 'utils'
import { PADDINGX } from 'constants/layout'

const beHuman = () => {
  return (
    <MainLayout classname={'bg-backgroundColor-darkGray'}>
      <div className="w-full">
        <div className="relative hidden md:block lg:block">
          <img src="/assets/behuman1.png" alt="" className="absolute left-0 top-0 w-screen h-screen" />
          <div style={{ background: '#060B27' }} className="absolute top-0 left-0 w-screen h-screen opacity-40" />
          <div style={{ background: '#060B27' }} className="absolute top-0 left-0 w-screen h-screen opacity-40" />
        </div>

        <div className={`h-screen relative flex max-w-shambWidth mx-auto ${PADDINGX}`}>
        <Yellow
          className="mt-72"
          title={'be human'}
          desc={
            '2021 онд “Лантуун Дохио ТББ”, “Ид Шидийн Орон” хүүхэд хамгааллын төвтэй хамтран “Байгальд Хайртай Хүн Бай” уриан дор нэгдэн 18000 мод бүхий “BE HUMAN” лэнд артыг хийсэн. Мөн “Нэг сонголт, хоёр шийдэл” буюу говьд таригдсан нэг мод нь Улиастайн гэр хорооллын бүсэд дахин нэг мод болж таригдсан юм.'
          }
          headerEl={handleIcon({ icon: 'nav', size: 30 })}
        />
        </div>
      </div>
    </MainLayout>
  )
}
export default beHuman
