import { Emphasis, GoalCard, MemberCard, Typography } from 'components'
import { MainLayout } from 'layout'
import { members } from '../../public/assets/membersInfo'
import { PADDINGX } from 'constants/layout'
import { motion } from 'framer-motion'

export default function Home() {

    const container = {
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.5,
            },
        },
    }

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    }

    return (
        <MainLayout classname='bg-backgroundColor-darkGray relative pt-36 md:pb-[400px] pb-[220px]'>
            <div style={{
                background: 'linear-gradient(180deg, rgba(32, 33, 33, 0) 0%, #202121 100%)'
            }} className='absolute top-0 left-0 w-screen h-screen z-10 hidden md:block lg:block' />
            <div className='absolute top-0 left-0 z-0 h-screen w-screen bg-no-repeat bg-cover hidden md:block lg:block'
                style={{
                    background: `linear-gradient(0deg, rgba(32, 33, 33, 0.7), rgba(32, 33, 33, 0.7)), url('assets/homePageBg.png')`
                }}>
            </div>
            <div className={`flex flex-col items-center max-w-shambWidth mx-auto z-20 relative ${PADDINGX}`}>
                <div className='flex flex-col items-center'>
                    <div className='w-10 hidden md:block'>
                        <img src="assets/footer1.png" alt="" className='max-w' />
                    </div>
                    <div className='md:hidden'>
                        <img src="assets/mainlogo.svg" alt="" />
                    </div>
                    <div className='flex w-[90%] md:w-[70%] flex-col text-center gap-14 mt-20'>
                        <Emphasis content='Our company' />
                        <Typography variant='body-web' className='text-primary-white opacity-60'>Бидний "Art-Tech Empire" Лэнд Арт төсөл маань Дорноговь аймгийн, Төхөмийн хөндий, Ар цацын ус гэх байршлын 5 га газарт нийт 30,000 ширхэг буюу 10,000 бортоготой мод тарих төсөл юм</Typography>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-4 mt-40 mb-72 gap-y-12 mx-auto gap-x-6'>
                        {members[0].map((member, index) => {
                            return < MemberCard firstName={member.firstName} lastName={member.lastName} job={member.job} picture={member.picture} key={index} />
                        })}
                    </div>
                </div>


                <div className='hidden md:block absolute -right-[40%] -top-[3%]'>
                    <img src="assets/ellipse/ellipse513.svg" alt="" className='w-[284px]' />
                </div>
                <div className='hidden md:block absolute -left-[43%] top-[19%]'>
                    <img src="assets/ellipse/ellipse513.svg" alt="" className='w-[355px]' />
                </div>
                <div className='hidden md:block absolute -right-[50%] top-[85%]'>
                    <img src="assets/ellipse/ellipse513.svg" alt="" className='w-[512px]' />
                </div>
                <div className='absolute md:top-[62%] md:left-[20%] -bottom-[4%] -right-[22%]' >
                    <img src="assets/ellipse/twoEllipse.svg" alt="" className='w-[265px] rotate-[120deg]' />
                </div>
                <div className='absolute md:hidden -right-[20%] top-[20%] z-[-1]' >
                    <img src="assets/ellipse/ellipse513.svg" alt="" className='w-[240px]' />
                </div>
                <div className='absolute md:hidden -left-[43%] top-[43%] z-[-1]' >
                    <img src="assets/ellipse/ellipse513.svg" alt="" className='w-[248px]' />
                </div>
                <div className='absolute md:hidden -right-[12%] top-[53%] z-[-1]' >
                    <img src="assets/ellipse/ellipse513.svg" alt="" className='w-[138px]' />
                </div>

                <div className='flex items-center flex-col text-center gap-14 w-4/5 relative'>
                    <div className='md:hidden absolute -top-[34%]'>
                        <img src="assets/shambalaIcon.svg" alt="" />
                    </div>
                    <Emphasis content='Company goals' />
                    <Typography variant='body-web' className='text-primary-white opacity-60'>NОНГОЛ УПСЫН ГАЗАР НУТГИЙН 76.8% НЬ Х6РСНV1Й ДОРОЙТОЛД ОРСОН БАV1НА. БV1Д Ц6ЛХV1Х БУЙ ГАЗАР ХУТАГТ НеХеН СЭРГЭЭПТ ХИ Й Н vОД ТАРЬХ Х6РСНИV1 ДОРОЙТОПТОV1 ТЭИЦДЭГ. VАНАЙ ХАХ/Т ОЛОН УРТ ХУГАЦААНЫ ТУРШ БV1ДЭНТЭV1 ХАУТРАН АХИЛЛАН, БАЙ ГАП Ь ОРЧ И НДОО ХУВЬ НЭМ РЭЭ ОРУУПАХ ХУВЬ ХУН, АЛ БАН БАЙ ГУУЛЛАГА ТА БУХНИЙГУРЬХ БАV1НА. </Typography>
                </div>
                <div className='md:block mt-48 hidden w-[120%]'>
                    <div className='grid grid-cols-3 justify-center'>
                        <GoalCard index='01' desc='Цөлжилттэй газар нутагт тухайн газрын онцлогт тохирох модыг тарьж ургуулан нөхөн сэргээх' />
                        <GoalCard index='03' desc='Газрын доройтлыг тогтвортой' />
                        <GoalCard index='05' desc='Дотоодын технологийн шинэчлэлийг өсөн дэвжихэд нь туслах, дэмжих' />
                    </div>
                    <div className='flex px-[30px] mt-[50px] justify-around'>
                        <GoalCard index='02' desc='Хөгжлийн зорилтын хүрээн д урьдчилан сэргийлэх' />
                        <GoalCard index='04' desc='Дорноговь аймагт сэргээгдэх эрчим хүчний дэд бүтцийг хөгжүүлэх' />
                    </div>
                </div>
                <div className='md:hidden mt-48 grid gap-[32px] md:w-[100%] w-[95%]'>
                    <GoalCard index='01' desc='Цөлжилттэй газар нутагт тухайн газрын онцлогт тохирох модыг тарьж ургуулан нөхөн сэргээх' />
                    <GoalCard index='02' desc='Хөгжлийн зорилтын хүрээн д урьдчилан сэргийлэх' />
                    <GoalCard index='03' desc='Газрын доройтлыг тогтвортой' />
                    <GoalCard index='04' desc='Дорноговь аймагт сэргээгдэх эрчим хүчний дэд бүтцийг хөгжүүлэх' />
                    <GoalCard index='05' desc='Дотоодын технологийн шинэчлэлийг өсөн дэвжихэд нь туслах, дэмжих' />
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 mt-40 gap-y-12 mx-auto gap-x-6'>
                    {members[1].map((member, index) => {
                        return < MemberCard firstName={member.firstName} lastName={member.lastName} job={member.job} picture={member.picture} key={index} />
                    })}
                </div>
            </div>
        </MainLayout >

    )
}
