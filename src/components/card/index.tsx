import Button from 'components/Button'
import Typography from 'components/typography'
import { } from 'react'

type Props = {
    headerEl: string,
    title: string
    desc: string
    buttonEl: React.ReactNode
    onClick: React.ReactNode
}

const Card = (props: Props) => {
    const { headerEl, title, desc, buttonEl, onClick } = props

    return <div className='w-[527px]    '>
        <Typography variant='body-web' className='text-[#C7B36D] opacity-80 font-bold uppercase mb-[8px]'>{headerEl}</Typography>
        <Typography variant='h3' className='text-primary-white mb-[24px]'>{title}</Typography>
        <Typography variant='body-web' className='text-primary-white mb-[32px]'>{desc}</Typography>
        <Typography variant='p-big'>{buttonEl}</Typography>
    </div >

}

export default Card;