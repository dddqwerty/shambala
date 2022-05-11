import { MemberCard, Typography } from 'components'
import { MainLayout } from 'layout'
import { members } from '../../public/assets/membersInfo'

export default function Home() {



    return (
        <div className="bg-backgroundColor-darkGray">
            <MainLayout>
                <div className='h-screen flex justify-center'>
                    {members.forEach((member) => {
                        return (
                            < MemberCard picture={member.picture} name={member.name} job={member.job} />
                        )
                    })}
                </div>
            </MainLayout>
        </div>
    )
}
