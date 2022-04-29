import React from 'react'
import { Typography } from 'components'
import { handleIcon } from 'utils'
export const Header = () => {
  return (
    <div className="bg-black/40 backdrop-opacity-5">
      <div className="max-w-7xl mx-auto flex  justify-between">
        <img src="assets/mainlogo1.png" width={181} height={10} alt="" />
        <div className="flex items-center justify-between">
          <div className="flex">
            <div className="py-[27px] px-[61px] hover:bg-textColor-secondary-darkGray hover:cursor-pointer">
              <Typography variant="p2" className="text-primary-white">
                Who are we
              </Typography>
            </div>
            <div className="py-[27px] px-[61px] hover:bg-textColor-secondary-darkGray hover:cursor-pointer">
              <Typography variant="p2" className="text-primary-white">
                What are we doing
              </Typography>
            </div>
            <div className="py-[27px] px-[61px] hover:bg-textColor-secondary-darkGray hover:cursor-pointer">
              <Typography variant="p2" className="text-primary-white">
                Who we work with
              </Typography>
            </div>
            <div className="py-[27px] px-[61px] hover:bg-textColor-secondary-darkGray hover:cursor-pointer">
              <Typography variant="p2" className="text-primary-white">
                Naadam
              </Typography>
            </div>
          </div>

          <div className="flex gap-[30px]">
            {handleIcon({
              icon: 'facebook',
              size: 16,
              className: 'text-white',
            })}
            {handleIcon({
              icon: 'facebook',
              size: 16,
              className: 'text-white',
            })}
            {handleIcon({
              icon: 'facebook',
              size: 16,
              className: 'text-white',
            })}
            {handleIcon({
              icon: 'facebook',
              size: 16,
              className: 'text-white',
            })}
            {handleIcon({
              icon: 'facebook',
              size: 16,
              className: 'text-white',
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
