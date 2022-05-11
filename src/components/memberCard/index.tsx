import Typography from 'components/typography'
import { } from 'react'

type Props = {
    picture?: React.ReactNode,
    name: string,
    job: string,
}

const MemberCard = (props: Props) => {
    const { picture = 'assets/placeholder.png', name, job } = props

    return <div className='flex w-36 flex-col  md:w-52 rounded-t-[8px] md:rounded-none'>
        <div className='relative bg-primary-white w-full h-44 md:h-64 rounded-[8px] md:rounded-none'>
            <img src={`${picture}`} className='max-w-full absolute bottom-0 rounded-b-[8px]  md:rounded-none' />
        </div>
        <Typography variant='p-big' className='text-primary-white uppercase mt-3'>{name}</Typography>
        <Typography variant='p-small' className='text-primary-white mt-1'>{job}</Typography>
    </div >

}

export default MemberCard;