import { Typography } from "components"
import { handleIcon } from "utils"

const FirstPart = () => {

    return (
        <div className="bg-backgroundColor-darkGray relative w-screen h-screen">
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

            <div
                className="absolute top-0 left-0 h-screen w-screen bg-no-repeat bg-cover hidden md:block"
                style={{
                    background: `url('assets/homePageBg.png')`,
                }}
            ></div>
            <div className="h-screen flex md:justify-center flex-col">
                <div className="flex flex-col gap-32 md:gap-10 items-center mt-[91px] md:mt-0">
                    <div className="z-10 flex justify-center ">
                        <img src="assets/homeLogo.svg" alt="" className="max-w-[65%] md:max-w-full" />
                    </div>

                    <Typography
                        variant="body-web"
                        className="md:opacity-60 text-primary-white  md:text-textColor-secondary-lightGray lg:w-[808px] w-[322px] text-center"
                    >
                        2056 он гэхэд Монгол Улсын тогтвортой хөгжлийн зорилтонд нийцсэн олон улсын инженер, судалгааны хүрээлэнг
                        байгуулна.
                    </Typography>
                </div>
            </div>
            <div className="hidden md:block z-10 absolute bottom-12 left-1/2 transform -translate-x-1/2">
                {handleIcon({
                    icon: 'mouse',
                    size: 40,
                    className: 'text-white',
                })}
            </div>
        </div>
    )
}

export default FirstPart