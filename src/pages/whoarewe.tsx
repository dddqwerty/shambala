import { Emphasis, GoalCard, MemberCard, Typography } from 'components'
import { MainLayout } from 'layout'
import { members } from '../../public/assets/membersInfo'

export default function Home() {
    return (
        <MainLayout classname='bg-backgroundColor-darkGray relative py-36'>
            <div style={{
                background: 'linear-gradient(180deg, rgba(32, 33, 33, 0) 0%, #202121 100%)'
            }} className='absolute top-0 left-0 w-screen h-screen z-10 hidden md:block lg:block' />
            <div className='absolute top-0 left-0 z-0 h-screen w-screen bg-no-repeat bg-cover hidden md:block lg:block'
                style={{
                    background: `linear-gradient(0deg, rgba(32, 33, 33, 0.7), rgba(32, 33, 33, 0.7)), url('assets/homePageBg.png')`
                }}>
            </div>
            <div className='flex flex-col items-center max-w-shambWidth mx-auto z-20 relative'>
                <div className='w-10'>
                    <img src="assets/footer1.png" alt="" className='max-w' />
                </div>

                <div className='flex w-[90%] md:w-[70%] flex-col text-center gap-14 mt-20'>
                    <Emphasis content='Our company' />
                    <Typography variant='body-web' className='text-primary-white opacity-60'>Бидний "Art-Tech Empire" Лэнд Арт төсөл маань Дорноговь аймгийн, Төхөмийн хөндий, Ар цацын ус гэх байршлын 5 га газарт нийт 30,000 ширхэг буюу 10,000 бортоготой мод тарих төсөл юм</Typography>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 mt-40 mb-72 gap-y-12 mx-auto gap-x-6'>
                    {members.map((member, index) => {
                        return < MemberCard name={member.name} job={member.job} key={index} />
                    })}
                </div>
                <div className='flex items-center flex-col text-center gap-14 w-4/5'>
                    <Emphasis content='Company goals' />
                    <Typography variant='body-web' className='text-primary-white opacity-60'>NОНГОЛ УПСЫН ГАЗАР НУТГИЙН 76.8% НЬ Х6РСНV1Й ДОРОЙТОЛД ОРСОН БАV1НА. БV1Д Ц6ЛХV1Х БУЙ ГАЗАР ХУТАГТ НеХеН СЭРГЭЭПТ ХИ Й Н vОД ТАРЬХ Х6РСНИV1 ДОРОЙТОПТОV1 ТЭИЦДЭГ. VАНАЙ ХАХ/Т ОЛОН УРТ ХУГАЦААНЫ ТУРШ БV1ДЭНТЭV1 ХАУТРАН АХИЛЛАН, БАЙ ГАП Ь ОРЧ И НДОО ХУВЬ НЭМ РЭЭ ОРУУПАХ ХУВЬ ХУН, АЛ БАН БАЙ ГУУЛЛАГА ТА БУХНИЙГУРЬХ БАV1НА. </Typography>
                </div>
                <div className='md:block mt-48 hidden'>
                    <div className='flex flex-col md:flex-row justify-between'>
                        <GoalCard index='01' desc='Цөлжилттэй газар нутагт тухайн газрын онцлогт тохирох модыг тарьж ургуулан нөхөн сэргээх' />
                        <GoalCard index='03' desc='Газрын доройтлыг тогтвортой' />
                        <GoalCard index='05' desc='Дотоодын технологийн шинэчлэлийг өсөн дэвжихэд нь туслах, дэмжих' />
                    </div>
                    <div className='flex flex-col md:flex-row justify-around'>
                        <GoalCard index='02' desc='хөгжлийн зорилтын хүрээн д урьдчилан сэргийлэх' />
                        <GoalCard index='04' desc='Дорноговь аймагт сэргээгдэх эрчим хүчний дэд бүтцийг хөгжүүлэх' />
                    </div>
                </div>
                <div className='md:hidden mt-48'>
                    <GoalCard index='01' desc='Цөлжилттэй газар нутагт тухайн газрын онцлогт тохирох модыг тарьж ургуулан нөхөн сэргээх' />
                    <GoalCard index='02' desc='хөгжлийн зорилтын хүрээн д урьдчилан сэргийлэх' />
                    <GoalCard index='03' desc='Газрын доройтлыг тогтвортой' />
                    <GoalCard index='04' desc='Дорноговь аймагт сэргээгдэх эрчим хүчний дэд бүтцийг хөгжүүлэх' />
                    <GoalCard index='05' desc='Дотоодын технологийн шинэчлэлийг өсөн дэвжихэд нь туслах, дэмжих' />
                </div>
            </div>
        </MainLayout>

    )
}
