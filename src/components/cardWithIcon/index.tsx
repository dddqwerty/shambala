import Typography from 'components/typography'
// import { createTheme } from '@mui/material'
import { } from 'react'

type Props = {
    headerEl: React.ReactNode,
    title: string
    desc: string
}

const CardWithIcon = (props: Props) => {
    const { headerEl, title, desc } = props

    return <div className=' ml-80 mr-80 mb-96 mt-96'>
        <div className='w-[484px] h-[216px]'>
            <p className=''>{headerEl}</p>
            <Typography variant='title-big'><p className='text-primary-white h-[44px] leading-11 mt-5'>{title}</p></Typography>
            <Typography variant='body-web'><p className='text-primary-white h-[96px] opacity-70 leading-8 mt-5 w-[484px] subtitle1'>{desc}</p></Typography>
        </div>
    </div>

}

export default CardWithIcon;