import Typography from 'components/typography'
import { } from 'react'

type Props = {
    picture: React.ReactNode,
    name: string,
    job: string,
}

const MemberCard = (props: Props) => {
    const { picture, name, job } = props

    return <div className='flex flex-col m-[12px]'>
        <Typography variant='body-web' className='h-[256px] bg-primary-white mb-[12px] flex flex-col justify-end'>
            <img src={`${picture}`} className='w-[218px]' />
        </Typography>
        <Typography variant='p-big' className='text-primary-white mb-[4px] uppercase'>{name}</Typography>
        <Typography variant='p-small' className='text-primary-white'>{job}</Typography>
    </div >

}

export default MemberCard;