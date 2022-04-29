import React, { FC } from 'react'
import Typography from './typography';

export interface Props {
  range: [Date | string, Date | string];
  title: string;
  description: string;
}

/**
 * Tsogt fix this shit i give up my brain is on fire.
 * I found this video that will prove very helpful https://www.youtube.com/watch?v=W9QVQvGSsKI
 */
export const Plan: FC = () => {
  return (
    <div className="w-full pl-[72px] pr-6 before:left-16 before:border-red-500">

    </div>
  )
}

export const Timeline: FC = () => {
  return (
    <div className='relative mx-0 my-auto after:absolute after:w-[4px] after:left-1/2 after:bg-yellow-300 after:top-0 after:bottom-0 after:-ml-3'>
      <div className="relative px-5 py-[30px before:border-red-500">
        <Typography variant="body-web" className="left-0">去年我跟同学一起去了中国杭州的夏令营。那里有很多日本学生和美国学生。我们每天都学书法和中国音乐。</Typography>
      </div>
    </div>
  );
}
