import Typography from 'components/typography'
import { } from 'react'

type Props = {
    headerEl: React.ReactNode,
    title: string
    desc: string
}

const CardWithIcon = (props: Props) => {
    const { headerEl, title, desc } = props

    return <div className='bg-[#141515] w-[484px] h-[216px]'>
        <p className='text-primary-yellow'>{headerEl}</p>
        <Typography variant='title-big'><p className='text-primary-white h-[44px] leading-11 mt-5'>{title}</p></Typography>
        <Typography variant='body-web'><p className='text-primary-white h-[96px] opacity-70 leading-8 mt-5'>{desc}</p></Typography>
    </div>

}

export default CardWithIcon;