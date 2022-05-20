import { Emphasis, GoalCard, MemberCard, Typography } from 'components'
import { MainLayout } from 'layout'
import NaadamPlan from 'layout/naadamPage/naadamPlan'
import OurplanetHeader from 'layout/whatwedoingPageComponents/header'
import { PADDINGX } from 'constants/layout'

export default function Home() {
    return (
        <MainLayout classname='bg-backgroundColor-darkGray py-[70px] '>
            <div className={`h-screen relative flex max-w-shambWidth mx-auto ${PADDINGX}`}>
                <NaadamPlan />
            </div>
        </MainLayout>

    )
}
