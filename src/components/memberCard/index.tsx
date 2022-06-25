import Typography from 'components/typography'
import { } from 'react'

type Props = {
    picture?: string,
    firstName: string,
    lastName: string,
    job: string,
    className?:string,
}

const MemberCard = (props: Props) => {
    const { picture, firstName, lastName, job, className } = props

    return <div className={`flex w-36 flex-col  md:w-[218px] md:rounded-none md:h-[256px] ${className}`}>
        {/* <div className='relative bg-primary-white w-full h-44 md:h-64 rounded-[8px] md:rounded-none'> */}
            <img src={picture} className='max-w-full rounded-[8px] md:rounded-none' />
        {/* </div> */}
        <div className='hidden md:flex flex-row mt-3 flex-wrap' >
            <Typography variant='p-big' className='text-primary-white capitalize -tracking-[0.5px] opacity-50 mr-[5px] md:uppercase md:opacity-100 md:font-[500]'>{firstName}</Typography>
            <Typography variant='p-big' className='text-primary-white uppercase -tracking-[0.5px] font-bold md:font-[500]'>{lastName}</Typography>
        </div>
        <div className='flex md:hidden flex-col mt-3' >
            <Typography variant='p-big' className='text-primary-white capitalize -tracking-[0.5px] opacity-50 mr-[5px] md:uppercase md:opacity-100 md:font-[500]'>{lastName}</Typography>
            <Typography variant='p-big' className='text-primary-white uppercase -tracking-[0.5px] font-bold md:font-[500]'>{firstName}</Typography>
        </div>
        <Typography variant='p-small' className='text-primary-white font-bold opacity-70 text-[8px] mt-1 md:font-[600] md:opacity-100 md:text-[12px]'>{job}</Typography>
    </div >

}

export default MemberCard;