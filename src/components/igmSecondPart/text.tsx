import { Emphasis } from 'components'
import Typography from 'components/typography'
import { motion } from 'framer-motion'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const item = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        transition: {
            delay: 0.5,
            duration: 0.8,
        },
        opacity: 1,
        y: 0,
    },
}

export const IgmSecondPartText = () => {

    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <motion.div
            variants={item}
            initial="hidden"
            whileInView={'visible'}
            className="max-w-shambWidth w-full flex items-center flex-col justify-center"
        >
            <Emphasis children="General planning of the institute" />
            <div className="h-[55px]"></div>
            <Typography variant={matches ? 'body-web' : 'body-mobile'} className="text-center w-[90%] md:w-[60%] md:text-title2 text-white/50 ">
                {matches ? 'Бидний "Art-Tech Empire" Лэнд Арт төсөл маань Дорноговь аймгийн, Төхөмийн хөндий, Ар цацын ус гэх байршлын 5 га газарт нийт 30,000 ширхэг буюу 10,000 бортоготой мод тарих төсөл юм.' : 'Бага насны хүүхдүүд, өсвөр насны залуучууд, ахмад настан болон тусгай хэрэгцээт иргэдийн чөлөөт цагаа өнгөрүүлэх аюулгүй орчин бүрдүүлэх. IGM төсөл нь 5 бүсээс бүрдэнэ. Энэ хэсэг нь тогтвортой технологийн хөгжилд ашиглагдах бөгөөд IGM-н лаборатори, инкубаторын барилга байгууламж, зуны болон өвлийн хүлэмж, машины зогсоол, хог хаягдлын менежментийн систем, цэцэрлэгт хүрээлэн рүү орох хаалга зэргийг багтаана.'}
            </Typography>
            <div className="h-[55px]"></div>
        </motion.div>
    )
}

export default IgmSecondPartText
