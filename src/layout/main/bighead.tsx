import { useEffect, useRef } from 'react'
import React, { useState } from 'react'
import { Typography } from 'components'
import { handleIcon } from 'utils'
import { PADDINGX } from 'constants/layout'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Drawer, Button, SwipeableDrawer } from '@mui/material'

const data = [
  { link: '/whoarewe', name: 'Who are we' },
  { link: '/whatarewedoing', name: 'What are we doing' },
  { link: '/recomended', name: 'Recomended' },
  { link: '/naadam', name: 'Naadam' },
]

export const Bighead = () => {
  const router = useRouter()

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setState({ ...state, [anchor]: open })
  }
  const list = (anchor) => (
    <div className="w-96 h-full bg-mainBg flex flex-col z-50">
      {data.map((el) => {
        const selected = router.pathname == el.link
        return (
          <Link href={el.link}>
            <div
              style={{
                background:
                  selected && 'linear-gradient(90deg, rgba(255, 210, 23, 0.2) 0%, rgba(255, 210, 23, 0) 100%)',
              }}
              className={` w-full h-14 flex justify-center items-center hover:text-white hover:cursor-pointer`}
            >
              {selected && (
                <img
                  src="assets/svgs/yellowBar.svg"
                  style={{}}
                  className="h-full scale-y-[1.4] transform translate-y-1"
                />
              )}
              <Typography
                variant="mobile-menu"
                className={`${
                  router.pathname == el.link ? 'text-white ' : 'ml-3 text-white/70 '
                }group-hover:text-white w-full h-full hover:text-white flex items-center text-center`}
              >
                {el.name}
              </Typography>
            </div>
          </Link>
        )
      })}
    </div>
  )

  return (
    <div
      style={{
        backgroundColor: 'rgba(32, 33, 33, 0.5)',
      }}
      className={`fixed z-50 flex justify-between backdrop-blur-[10px]  items-center w-full h-[70px] px-10`}
    >
      <div className="h-10 w-[181px]">
        <Link href={'/'}>
          <a>
            <img className="max-w-full" src="assets/homelogo.webp" />
          </a>
        </Link>
      </div>
      <div className="headerBpoint:hidden">
        <React.Fragment key={'right'}>
          <div onClick={toggleDrawer('right', true)}>
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
          </div>

          <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
            {list('right')}
          </Drawer>
        </React.Fragment>
      </div>
      <div className="items-center justify-between h-full headerBpoint:flex hidden gap-14">
        <div className="h-full shrink-0 flex items-center">
          {data.map((el) => {
            const sele = router.pathname == el.link
            return (
              <Link href={el.link}>
                <div
                  key={'deez' + el.name}
                  id={el.name}
                  className={`${router.pathname == el.link ? "border-primary-yellow bg-textColor-secondary-darkGray" : " border-transparent"} group flex items-center h-full px-[35px] border-b-2 hover:cursor-pointer text-white`}
                >
                  <a>
                    <Typography
                      variant="mobile-menu"
                      className={`${router.pathname == el.link ? '' : 'text-white/70 '}group-hover:text-white `}
                    >
                      {el.name}
                    </Typography>
                  </a>
                </div>
              </Link>
            )
          })}
        </div>
        <div id="icons" className="flex gap-[30px]">
          <Link href={'/'}>
            <a className="hover:scale-125">
              {handleIcon({
                icon: 'facebook',
                size: 16,
                className: 'text-menuIcon-gray hover:text-primary-yellow',
              })}
            </a>
          </Link>

          <Link href={'/'}>
            <a className="hover:scale-125">
              {handleIcon({
                icon: 'twitter',
                size: 16,
                className: 'text-menuIcon-gray hover:text-primary-yellow',
              })}
            </a>
          </Link>
          <Link href={'/'}>
            <a className="hover:scale-125">
              {handleIcon({
                icon: 'mail',
                size: 16,
                className: 'text-menuIcon-gray hover:text-primary-yellow',
              })}
            </a>
          </Link>
          <Link href={'/'}>
            <a className="hover:scale-125">
              {handleIcon({
                icon: 'instagram',
                size: 16,
                className: 'text-menuIcon-gray hover:text-primary-yellow',
              })}
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
