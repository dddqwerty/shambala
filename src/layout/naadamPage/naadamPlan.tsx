import { Typography } from "components"
import { Emphasis, GoalCard } from "components"
import { animate, motion } from 'framer-motion'
import { PADDINGX } from "constants/layout"

const NaadamPlan = () => {

    return (
        <div className={`flex justify-start items-center max-w-shambWidth py-48 mx-auto z-20 relative ${PADDINGX}`}>
            <div className="flex flex-col items-center w-[800px]">
                <Emphasis children="‘’Naadam’’ plan" />
                <Typography variant="body-web" className=" text-primary-white opacity-60 text-center">Эрчим хүчний сүлжээ, сансарын технологи хөгжүүлэлт, Блокчейн технологи хөгжүүлэлт, Дижитал
                    артистууд хөгжүүлэлт, Уран баримал хөгжүүлэлт арт инсталляция, Дижитал хувцас загвар зэрэг
                    сэдвээр салбар салбарын экспертүүдийг хамарсан хэлэлцүүлэг болно.</Typography>
            </div>
            <div>

            </div>
        </div >
    )
}

export default NaadamPlan