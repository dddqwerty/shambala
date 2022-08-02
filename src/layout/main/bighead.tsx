import { useEffect, useRef } from 'react'
import React, { useState } from 'react'
import { Typography } from 'components'
import { handleIcon } from 'utils'
import { PADDINGX } from 'constants/layout'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Drawer, Button, SwipeableDrawer } from '@mui/material'
import { SustainGoals } from './sustainGoals'
const data = {
  tablet: [
    { link: '/whoarewe', name: 'Who are we' },
    { link: '/artech', name: 'Artech' },
    { link: '/ourplanet', name: 'Our Planet' },
    { link: '/recomended', name: 'Recomended' },
    { link: '/naadam', name: 'Naadam' },
  ],
  nav: [
    { link: '/whoarewe', name: 'Who are we' },
    { link: '/whatarewedoing', name: 'What are we doing' },
    { link: '/recomended', name: 'Recomended' },
    { link: '/naadam', name: 'Naadam' },
  ],
  icons: [
    { link: 'https://www.facebook.com/shambala.mn/', icon: 'facebook' },
    { link: 'https://www.twitter.com', icon: 'twitter' },
    { link: 'https://www.google.com/gmail/', icon: 'mail' },
    { link: 'https://www.instagram.com/shambala2056/', icon: 'instagram' },
  ],
  whatarewedoing: {
    first: {
      link: '/artech',
      name: 'Artech',
    },
    second: {
      link: '/ourplanet',
      name: 'Our Planet',
    },
  },
}

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
      {data.tablet.map((el) => {
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
      className={`fixed z-50 flex flex-col backdrop-blur-[10px] items-start h-fit w-full px-10`}
    >
      <div className="flex flex-row items-center w-full justify-between h-[70px] z-50">
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
            {data.nav.map((el) => {
              const sele = router.pathname == el.link
              return (
                <div className="h-full">
                  <Link href={el.link == '/whatarewedoing' ? router.pathname : el.link}>
                    <div
                      key={'deez' + el.name}
                      id={el.name}
                      className={`${
                        router.pathname == el.link ||
                        (router.pathname == '/artech' && el.link == '/whatarewedoing') ||
                        (router.pathname == '/ourplanet' && el.link == '/whatarewedoing')
                          ? 'border-primary-yellow bg-textColor-secondary-darkGray'
                          : ' border-transparent'
                      } group flex items-center h-full px-[35px] border-b-2 hover:cursor-pointer text-white ${
                        el.link == '/whatarewedoing' ? ' flex-col justify-center' : ''
                      }`}
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
                  <div
                    className={`${
                      el.link == '/whatarewedoing'
                        ? ' w-[184px] flex flex-col justify-end  absolute top-0 hover:h-[210px] opacity-0 hover:opacity-100 h-[70px] hover:cursor-pointer z-50 '
                        : 'hidden'
                    }`}
                  >
                    <Link href={data.whatarewedoing.first.link} id="liiiink">
                      <a className={`h-[70px] w-full flex justify-center items-center bg-[#202121]`}>
                        <Typography
                          variant="mobile-menu"
                          className={`${
                            router.pathname == el.link ? '' : 'text-white/70 '
                          }group-hover:text-white h-12 w-full flex justify-center items-center hover:bg-textColor-secondary-darkGray hover:text-white  ${
                            router.pathname == data.whatarewedoing.first.link ? 'bg-textColor-secondary-darkGray' : ''
                          }  `}
                        >
                          {data.whatarewedoing.first.name}
                        </Typography>
                      </a>
                    </Link>

                    <Link href={data.whatarewedoing.second.link} id="liiiink">
                      <a className={`h-[70px] w-full flex justify-center items-center bg-[#202121]`}>
                        <Typography
                          variant="mobile-menu"
                          className={`${
                            router.pathname == el.link ? '' : 'text-white/70 '
                          }group-hover:text-white h-12 w-full flex justify-center items-center hover:bg-textColor-secondary-darkGray hover:text-white  ${
                            router.pathname == data.whatarewedoing.second.link ? 'bg-textColor-secondary-darkGray' : ''
                          }  `}
                        >
                          {data.whatarewedoing.second.name}
                        </Typography>
                      </a>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
          <div id="icons" className="flex gap-[30px]">
            {data.icons.map((el) => {
              return (
                <Link href={el.link}>
                  <a className="hover:scale-125" target="_blank">
                    {handleIcon({
                      icon: el.icon,
                      size: 16,
                      className: 'text-menuIcon-gray hover:text-primary-yellow',
                    })}
                  </a>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      <div className={`w-full h-fit px-10  mt-3 ${router.pathname == '/ourplanet' ? 'block' : 'hidden'}`}>
        <SustainGoals />
      </div>
      <div className={`absolute z-30 flex flex-col backdrop-blur-[5px] items-start h-[70px] w-full left-0 ${router.pathname == '/ourplanet' ? 'block' : 'hidden'}`}></div>
    </div>
  )
}
