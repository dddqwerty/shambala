import React from 'react'
import { Typography } from 'components'
import { handleIcon } from 'utils'
import Link from 'next/link'
export const Header = () => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(32, 33, 33, 0.5)',
      }}
      className={`fixed z-50 md:flex justify-between backdrop-blur-[10px]  items-center w-full h-[70px] px-32`}
    >
      <div className="h-10 w-[181px]">
        <Link href={'/'}>
          <a>
            <img className="max-w-full" src="assets/mainlogo1.png" />
          </a>
        </Link>
      </div>
      <div className="md:hidden lg:hidden">
        {handleIcon({
          icon: 'menu',
          className: 'text-primary-yellow',
        })}
      </div>
      <div className="items-center justify-between h-full hidden md:flex lg:flex gap-14">
        <div className="h-full shrink-0 flex items-center">
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

        <div id="icons" className="flex gap-[30px]">
          <Link href={'/'}>
            <a className="hover:scale-125">
              {handleIcon({
                icon: 'facebook',
                size: 16,
                className: 'text-white hover:text-primary-yellow',
              })}
            </a>
          </Link>

          <Link href={'/'}>
            <a className="hover:scale-125">
              {handleIcon({
                icon: 'twitter',
                size: 16,
                className: 'text-white hover:text-primary-yellow',
              })}
            </a>
          </Link>
          <Link href={'/'}>
            <a className="hover:scale-125">
              {handleIcon({
                icon: 'mail',
                size: 16,
                className: 'text-white hover:text-primary-yellow',
              })}
            </a>
          </Link>
          <Link href={'/'}>
            <a className="hover:scale-125">
              {handleIcon({
                icon: 'instagram',
                size: 16,
                className: 'text-white hover:text-primary-yellow',
              })}
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
