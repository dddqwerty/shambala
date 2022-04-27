import React from 'react'
import { Typography } from 'components'
import { handleIcon } from 'utils'
import Link from 'next/link'
export const Header = () => {
  return (
    <div
      id="header background"
      style={{
        backgroundColor: 'rgba(32, 33, 33, 0.5)',
      }}
      className="fixed z-50 flex justify-between backdrop-blur-[20px]  items-center w-full h-[70px]"
    >
      <div className="h-10 ml-28 ">
        <Link href={'/'}>
          <a>
            <img className="h-full w-full" src="assets/mainlogo1.png" />
          </a>
        </Link>
      </div>
      <div className="flex items-center justify-between h-full">
        <div className="h-full flex items-center">
          <div className="flex items-center border-transparent h-full px-[35px] hover: text-white border-b-2 hover:border-primary-yellow   hover:bg-textColor-secondary-darkGray hover:cursor-pointer">
            <Typography variant="p-small" className="text-textColor-secondary-lightGray">
              Who we are
            </Typography>
          </div>
          <div className="flex items-center h-full px-[35px] border-transparent hover: text-white border-b-2 hover:border-primary-yellow   hover:bg-textColor-secondary-darkGray hover:cursor-pointer">
            <Typography variant="p-small" className="text-textColor-secondary-lightGray">
              What are we doing
            </Typography>
          </div>
          <div className="flex items-center h-full px-[35px] border-transparent hover: text-white border-b-2 hover:border-primary-yellow   hover:bg-textColor-secondary-darkGray hover:cursor-pointer">
            <Typography variant="p-small" className="text-textColor-secondary-lightGray">
              Who we work with
            </Typography>
          </div>

          <div className="flex items-center h-full px-[35px] border-transparent hover: text-white border-b-2 hover:border-primary-yellow   hover:bg-textColor-secondary-darkGray hover:cursor-pointer">
            <Typography variant="p-small" className="text-textColor-secondary-lightGray">
              Naadam
            </Typography>
          </div>
        </div>

        <div id="icons" className="flex gap-[30px] ml-20 mr-20">
          {handleIcon({
            icon: 'facebook',
            size: 16,
            className: 'text-white',
          })}
          {handleIcon({
            icon: 'twitter',
            size: 16,
            className: 'text-white',
          })}
          {handleIcon({
            icon: 'mail',
            size: 16,
            className: 'text-white',
          })}
          {handleIcon({
            icon: 'instagram',
            size: 16,
            className: 'text-white',
          })}
        </div>
      </div>
    </div>
  )
}

export default Header
