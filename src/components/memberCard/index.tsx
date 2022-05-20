import Typography from 'components/typography'
import { } from 'react'

type Props = {
    picture?: React.ReactNode,
    firstName: string,
    lastName: string,
    job: string,
}

const MemberCard = (props: Props) => {
    const { picture = 'assets/placeholder.png', firstName, lastName, job } = props

    return <div className='flex w-36 flex-col  md:w-52 rounded-t-[8px] md:rounded-none'>
        <div className='relative bg-primary-white w-full h-44 md:h-64 rounded-[8px] md:rounded-none'>
            <img src={`${picture}`} className='max-w-full absolute bottom-0 rounded-b-[8px  md:rounded-none' />
        </div>
        <div className='md:flex flex-row mt-3' >
            <Typography variant='p-big' className='text-primary-white capitalize -tracking-[0.5px] opacity-50 mr-[5px] md:uppercase md:opacity-100 md:font-[500]'>{firstName}</Typography>
            <Typography variant='p-big' className='text-primary-white uppercase -tracking-[0.5px] font-bold md:font-[500]'>{lastName}</Typography>
        </div>
        <Typography variant='p-small' className='text-primary-white font-bold opacity-70 text-[8px] mt-1 md:font-[600] md:opacity-100 md:text-[12px]'>{job}</Typography>
    </div >

}

export default MemberCard;