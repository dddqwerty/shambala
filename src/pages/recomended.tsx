import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useEffect, useRef, useState } from 'react'
import { MainLayout } from "layout"
import { Yellow } from 'components'
import { handleIcon } from 'utils'
import { PADDINGX } from 'constants/layout'

const FirstPart = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('sm'))
    const [height, setHeight] = useState(0)
    const imageRef = useRef<HTMLImageElement>(null)

    useEffect(() => {
        if (!imageRef) return
        setHeight(imageRef.current.offsetHeight)
    }, [imageRef])

    return (
        <MainLayout classname={'bg-recomended'}>
            <div className="relative w-screen h-screen">
                <div
                    className={`absolute flex justify-center items-center h-[200px] z-50`}>
                    <img src="assets/homelogo.webp" alt="" className={`max-w-[65%]  md:max-w-full md:hidden md:mt-52`} />
                </div>


                {/* <div
                    style={{
                        background: '#060B27',
                    }}
                    className="absolute top-0 left-0 z-10 h-screen w-screen md:block lg:block opacity-40"
                /> */}
                {/* <div style={{ background: '#060B27' }} className="absolute top-0 left-0 w-screen h-screen opacity-40 z-10" /> */}
                {/* <div style={{ background: '#060B27' }} className="absolute top-0 left-0 w-screen h-screen opacity-40 z-10" /> */}
                {/* <div className="absolute z-10 right-[0%] bottom-[5%] hidden md:block">
                    <img src="assets/ellipse/home.svg" alt="" />
                </div> */}
                <div className={`h-screen relative flex max-w-shambWidth mx-auto ${PADDINGX} z-10`}>
                    <Yellow
                        className="mt-52"
                        title={'Be human'}
                        desc={
                            '2021 онд “Лантуун Дохио ТББ”, “Ид Шидийн Орон” хүүхэд хамгааллын төвтэй хамтран “Байгальд Хайртай Хүн Бай” уриан дор нэгдэн 18000 мод бүхий “BE HUMAN” лэнд артыг хийсэн. Мөн “Нэг сонголт, хоёр шийдэл” буюу говьд таригдсан нэг мод нь Улиастайн гэр хорооллын бүсэд дахин нэг мод болж таригдсан юм.'
                        }
                        headerEl={handleIcon({ icon: 'nav', size: 30 })}
                    />

                </div>

                <div style={{
                    bottom: `calc(100vh - ${height + 10}px)`,
                    background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 4.13%, #212222 100%)"
                }} className={`absolute md:bottom-0 h-[375px] md:h-[40%] z-20 w-full`} />
                <img ref={imageRef} src="/assets/be human 1.webp" className="absolute md:translate-y-0 top-0 md:top-0 left-0 md:h-screen md:w-screen md:block md:scale-100" />
                {/* <div className="hidden md:block z-20 absolute bottom-24 left-1/2 transform -translate-x-1/2">
                    <img src="assets/svgs/mouse.svg" alt="" />
                </div> */}
            </div>
        </MainLayout>
    )
}

export default FirstPart