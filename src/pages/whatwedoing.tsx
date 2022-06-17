import { Emphasis, GoalCard, MemberCard, Typography } from 'components'
import { MainLayout } from 'layout'
import OurplanetHeader from 'layout/whatwedoingPageComponents/header'

export default function Home() {
    return (
        <MainLayout classname='bg-backgroundColor-darkGray relative py-[70px]'>
            <OurplanetHeader />
            <div>
                <img src="assets/realearth.webp" alt="" />
            </div>
        </MainLayout>

    )
}
