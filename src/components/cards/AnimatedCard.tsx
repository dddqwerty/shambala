import * as React from 'react'
import Image from 'next/image'
import Typography from 'components/typography'

export const Member = () => {
  /**HAHSHdaushdiashdiuashdigawiudkahbsdiauhwjdb */
  return (
    <div className="ml-20 z-50 overflow-hidden h-[256px] w-[218px]">
      <div className="flex flex-col gap-3 overflow-hidden relative">
        <div className="right-64 relative bg-blue-600 h-[200px] w-24 z-50 rotate-45" onMouseEnter={() => {

        }}></div>
        <div className="absolute bg-white w-[256px] h-[218px]"></div>
        {/* <Image
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.izismile.com%2Fimg%2Fimg2%2F20090811%2Fugly_people_23.jpg&f=1&nofb=1"
        alt="CEO"
        width="218px"
        height="256px"
        layout="fixed"
        className="rounded-md transition hover:scale-105"
        objectFit="fill"
        quality={100}
      /> */}
        <div className="flex flex-col gap-2">
          <div className="">
            <Typography variant="p-small" className="text-white opacity-40 text-lg font-normal">
              Шижирбат
            </Typography>
            <Typography variant="h2" className="text-white !text-p2 uppercase font-bold text-xl">
              Бямбасүрэн
            </Typography>
          </div>
          <Typography variant="h2" className="text-white !text-p2 opacity-80 text-xs">
            CEO
          </Typography>
        </div>
      </div>
    </div>
  )
}
