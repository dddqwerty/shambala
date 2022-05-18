import { Typography } from "components"
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useRef } from 'react'
import { useDimensions } from 'hooks'

const FirstPart = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('sm'))
    const imageRef = useRef<HTMLImageElement>()
    const { height } = useDimensions(imageRef);


    return (
        <div className="relative w-screen h-screen">
            <div
                style={{
                    background: '#060B27',
                }}
                className="absolute top-0 left-0 z-10 hidden h-screen w-screen md:block lg:block opacity-40"
            />
            <div className="-z-[100] md:z-10 absolute -left-[9%] -top-[20%] w-[40%]">
                <img src="assets/shadowEllipse/ellipseBig.svg" className="max-w-full" alt="" />
            </div>
            <div className="absolute z-10 -right-[30%] -top-[10%] w-[70%] md:right-[8%] md:top-[-5%] md:w-[19%]">
                <img src="assets/shadowEllipse/ellipseMd.svg" className="max-w-full" alt="" />
            </div>
            <div className="absolute z-10 -left-[16%] top-[10%] w-[40%] md:right-[-4%] md:bottom-[11%] md:w-[15%]">
                <img src="assets/shadowEllipse/ellipseSm.svg" className="max-w-full" alt="" />
            </div>
            <div className="absolute z-10 right-[0%] bottom-[5%] hidden md:block">
                <img src="assets/ellipse/home.svg" alt="" />
            </div>

            <div style={{
                bottom: `calc(100vh - ${height * 2}px)`,
                background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 4.13%, #141515 100%)"
            }} className={`absolute md:bottom-0 h-[100px] md:h-[40%] z-10 w-full`} />
            <img ref={imageRef} src='assets/homePageBg.png' className="absolute translate-y-1/2 md:translate-y-0 top-0 md:top-0 left-0 md:h-screen md:w-screen md:block scale-[2] md:scale-100" />

            <div className="flex flex-col h-full gap-40 md:gap-10 items-center">
                <img src="assets/homeLogo.svg" alt="" className="max-w-[65%] md:max-w-full z-10 mt-28 md:mt-52" />
                <Typography
                    variant={matches ? "title-small" : "body-web"}
                    className="z-10 md:z-[9] text-primary-white  md:text-textColor-secondary-lightGray lg:w-[808px] w-[322px] text-center"
                >
                    2056 он гэхэд Монгол Улсын тогтвортой хөгжлийн зорилтонд нийцсэн олон улсын инженер, судалгааны хүрээлэнг
                    байгуулна.
                </Typography>
            </div>
            <div className="hidden md:block z-10 absolute bottom-24 left-1/2 transform -translate-x-1/2">
                <img src="assets/svgs/mouse.svg" alt="" />
            </div>
        </div>
    )
}

export default FirstPart