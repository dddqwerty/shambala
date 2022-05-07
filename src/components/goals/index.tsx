import { Typography } from "components";
import { } from 'react';
import {Emphasis} from 'components'
type Props = {
    index:string,
    desc:string,
    title:string,
    line: React.ReactNode
}

export const Goals = (props: Props) => {
  const { desc, title} = props;

  return <div className=' w-[800px] text-center '>
    <Emphasis></Emphasis>
    <Typography variant='h1' className='mb-[56px]  text-primary-white leading-8' >{title}</Typography>
        <Typography variant='body-web' className='opacity-60 text-primary-white lowercase leading-8'>{desc}</Typography>
    </div>


}