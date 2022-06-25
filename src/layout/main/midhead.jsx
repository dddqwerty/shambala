import React, { useState } from 'react'
import { Typography } from 'components'
import { handleIcon } from 'utils'
import { PADDINGX } from 'constants/layout'
import Link from 'next/link'
import { useRouter } from 'next/router'

const data = [
  { link: '/whoarewe', name: 'Who are we' },
  { link: '/whatarewedoing', name: 'What are we doing' },
  { link: '/recomended', name: 'Recomended' },
  { link: '/naadam', name: 'Naadam' },
]

export const Midhead = () => {
  const router = useRouter()
  return (
    <div
      className={`fixed z-50 visible headerBpoint:absolute headerBpoint:-z-50 headerBpoint:invisible flex justify-between backdrop-blur-[10px]  items-center w-full h-[70px] px-10`}
    >
      <div className=" w-56">
        <Link href={'/'}>
          <a>
            <img className="max-w-full" src="assets/homelogo.webp" />
          </a>
        </Link>
      </div>

      <div className="w-10 h-10">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="8" rx="4" fill="white" />
          <rect width="40" height="8" rx="4" fill="white" />
          <rect width="40" height="8" rx="4" fill="white" />
          <rect y="16" width="40" height="8" rx="4" fill="white" />
          <rect y="16" width="40" height="8" rx="4" fill="white" />
          <rect y="16" width="40" height="8" rx="4" fill="white" />
          <rect y="32" width="40" height="8" rx="4" fill="white" />
          <rect y="32" width="40" height="8" rx="4" fill="white" />
          <rect y="32" width="40" height="8" rx="4" fill="white" />
        </svg>

        {/* {data.map((el) => {
          return (
            <Link href={el.link}>
              <div
                className={`${
                  router.pathname == el.link && 'border-primary-yellow bg-textColor-secondary-darkGray'
                } group flex items-center border-transparent h-full px-[35px] text-white border-b-2  hover:cursor-pointer`}
              >
                <a>
                  <Typography
                    variant="mobile-menu"
                    className={`${router.pathname == el.link ? '' : 'text-white/70 '}group-hover:text-white text-[10px]`}
                  >
                    {el.name}
                  </Typography>
                </a>
              </div>
            </Link>
          )
        })} */}
      </div>
    </div>
  )
}
