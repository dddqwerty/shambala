// import React from 'react'
// import { Typography } from 'components'
// import { handleIcon } from 'utils'
// import Link from 'next/link'
// import Image from 'next/image'

// type Props = React.PropsWithChildren<{ goal?: Boolean }>

// export const Header = (props: Props) => {
//   return (
//     <>
//       {props.goal ? (
//         <div
//           style={{
//             backgroundColor: 'rgba(32, 33, 33, 0.5)',
//           }}
//           className={`fixed z-50 md:flex justify-between backdrop-blur-[10px]  items-center w-full h-[117px] px-32`}
//         >
//           <div className="justify-center h-full w-full hidden md:flex lg:flex gap-4 items-center">
//             <div className="transition hover:-translate-y-[0.5px] duration-500">
//               <Image src="/static/logo.svg" width="48" height="48" alt="a" />
//             </div>
//             <div className="transition hover:-translate-y-[0.5px] duration-500">
//               <Image src="/static/goal_1.svg" width="48" height="48" alt="a" />
//             </div>
//             <div className="transition hover:-translate-y-[0.5px] duration-500">
//               <Image src="/static/goal_2.svg" width="48" height="48" alt="a" />
//             </div>
//             <div className="transition hover:-translate-y-[0.5px] duration-500">
//               <Image src="/static/goal_3.svg" width="48" height="48" alt="a" />
//             </div>
//             <div className="transition hover:-translate-y-[0.5px] duration-500">
//               <Image src="/static/goal_4.svg" width="48" height="48" alt="a" />
//             </div>
//             <div className="transition hover:-translate-y-[0.5px] duration-500">
//               <Image src="/static/goal_5.svg" width="48" height="48" alt="a" />
//             </div>
//             <div className="transition hover:-translate-y-[0.5px] duration-500">
//               <Image src="/static/goal_6.svg" width="48" height="48" alt="a" />
//             </div>
//             <div className="transition hover:-translate-y-[0.5px] duration-500">
//               <Image src="/static/goal_7.svg" width="48" height="48" alt="a" />
//             </div>
//             <div className="transition hover:-translate-y-[0.5px] duration-500">
//               <Image src="/static/goal_8.svg" width="48" height="48" alt="a" />
//             </div>
//             <div className="transition hover:-translate-y-[0.5px] duration-500">
//               <Image src="/static/goal_9.svg" width="48" height="48" alt="a" />
//             </div>
//             <div className="transition hover:-translate-y-[0.5px] duration-500">
//               <Image src="/static/goal_10.svg" width="48" height="48" alt="a" />
//             </div>
//             <div className="transition hover:-translate-y-[0.5px] duration-500">
//               <Image src="/static/goal_11.svg" width="48" height="48" alt="a" />
//             </div>
//             <div className="transition hover:-translate-y-[0.5px] duration-500">
//               <Image src="/static/goal_12.svg" width="48" height="48" alt="a" />
//             </div>
//             <div className="transition hover:-translate-y-[0.5px] duration-500">
//               <Image src="/static/goal_13.svg" width="48" height="48" alt="a" />
//             </div>
//             <div className="transition hover:-translate-y-[0.5px] duration-500">
//               <Image src="/static/goal_14.svg" width="48" height="48" alt="a" />
//             </div>
//             <div className="transition hover:-translate-y-[0.5px] duration-500">
//               <Image src="/static/goal_15.svg" width="48" height="48" alt="a" />
//             </div>
//             <div className="transition hover:-translate-y-[0.5px] duration-500">
//               <Image src="/static/goal_16.svg" width="48" height="48" alt="a" />
//             </div>
//             <div className="transition hover:-translate-y-[0.5px] duration-500">
//               <Image src="/static/goal_17.svg" width="48" height="48" alt="a" />
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div
//           style={{
//             backgroundColor: 'rgba(32, 33, 33, 0.5)',
//           }}
//           className={`fixed z-50 md:flex justify-between backdrop-blur-[10px]  items-center w-full h-[70px] px-32`}
//         >
//           <div className="h-10 w-[181px]">
//             <Link href={'/'}>
//               <a>
//                 <img className="max-w-full" src="assets/mainlogo1.png" />
//               </a>
//             </Link>
//           </div>
//           <div className="md:hidden lg:hidden">
//             {handleIcon({
//               icon: 'menu',
//               className: 'text-primary-yellow',
//             })}
//           </div>
//           <div className="items-center justify-between h-full hidden md:flex lg:flex gap-14">
//             <div className="h-full shrink-0 flex items-center">
//               <div className="flex items-center border-transparent h-full px-[35px] hover: text-white border-b-2 hover:border-primary-yellow   hover:bg-textColor-secondary-darkGray hover:cursor-pointer">
//                 <Typography variant="p-small" className="text-textColor-secondary-lightGray">
//                   Who we are
//                 </Typography>
//               </div>
//               <div className="flex items-center h-full px-[35px] border-transparent hover: text-white border-b-2 hover:border-primary-yellow   hover:bg-textColor-secondary-darkGray hover:cursor-pointer">
//                 <Typography variant="p-small" className="text-textColor-secondary-lightGray">
//                   What are we doing
//                 </Typography>
//               </div>
//               <div className="flex items-center h-full px-[35px] border-transparent hover: text-white border-b-2 hover:border-primary-yellow   hover:bg-textColor-secondary-darkGray hover:cursor-pointer">
//                 <Typography variant="p-small" className="text-textColor-secondary-lightGray">
//                   Who we work with
//                 </Typography>
//               </div>

//               <div className="flex items-center h-full px-[35px] border-transparent hover: text-white border-b-2 hover:border-primary-yellow   hover:bg-textColor-secondary-darkGray hover:cursor-pointer">
//                 <Typography variant="p-small" className="text-textColor-secondary-lightGray">
//                   Naadam
//                 </Typography>
//               </div>
//             </div>

//             <div id="icons" className="flex gap-[30px]">
//               <Link href={'/'}>
//                 <a className="hover:scale-125">
//                   {handleIcon({
//                     icon: 'facebook',
//                     size: 16,
//                     className: 'text-white hover:text-primary-yellow',
//                   })}
//                 </a>
//               </Link>

//               <Link href={'/'}>
//                 <a className="hover:scale-125">
//                   {handleIcon({
//                     icon: 'twitter',
//                     size: 16,
//                     className: 'text-white hover:text-primary-yellow',
//                   })}
//                 </a>
//               </Link>
//               <Link href={'/'}>
//                 <a className="hover:scale-125">
//                   {handleIcon({
//                     icon: 'mail',
//                     size: 16,
//                     className: 'text-white hover:text-primary-yellow',
//                   })}
//                 </a>
//               </Link>
//               <Link href={'/'}>
//                 <a className="hover:scale-125">
//                   {handleIcon({
//                     icon: 'instagram',
//                     size: 16,
//                     className: 'text-white hover:text-primary-yellow',
//                   })}
//                 </a>
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

// export default Header
import React, { useState } from 'react'
import { Typography } from 'components'
import { handleIcon } from 'utils'
import { PADDINGX } from 'constants/layout'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Header = () => {
  // const { selected, setSelected } = useState('')
  const router = useRouter();

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
            <img className="max-w-full" src="assets/homelogo.webp" />
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
          <Link href={'/whoarewe'}>
            <div className={`${router.pathname == '/whoarewe' && "border-primary-yellow bg-textColor-secondary-darkGray"} group flex items-center border-transparent h-full px-[35px] text-white border-b-2  hover:cursor-pointer`}>
              <a>
                <Typography
                  variant="mobile-menu"
                  className={`${router.pathname == '/whoarewe' ? "" : 'text-white/70 '}group-hover:text-white`}>
                  Who we are
                </Typography>
              </a>
            </div>
          </Link>
          <Link href={'/whatarewedoing'}>
            <div className={`${router.pathname == '/whatarewedoing' && "border-primary-yellow bg-textColor-secondary-darkGray"} group flex items-center border-transparent h-full px-[35px] text-white border-b-2  hover:cursor-pointer`}>
              <a>
                <Typography
                  variant="mobile-menu"
                  className={`${router.pathname == '/whatarewedoing' ? "" : 'text-white/70 '}group-hover:text-white`}>
                  What are we doing
                </Typography>
              </a>
            </div>
          </Link>
          <Link href={'/recomended'}>
            <div className={`${router.pathname == '/recomended' && "border-primary-yellow bg-textColor-secondary-darkGray"} group flex items-center border-transparent h-full px-[35px] border-b-2 text-white hover:cursor-pointer`}>
              <a>
                <Typography
                  variant="mobile-menu"
                  className={`${router.pathname == '/recomended' ? "" : 'text-white/70 '}group-hover:text-white`}>
                  Who we work with
                </Typography>
              </a>
            </div>
          </Link>
          <Link href={'/naadam'}>
            <div className={`${router.pathname == '/naadam' && "border-primary-yellow bg-textColor-secondary-darkGray"} group flex items-center border-transparent h-full px-[35px] border-b-2 hover:cursor-pointer text-white`}>
              <a>
                <Typography
                  variant="mobile-menu"
                  className={`${router.pathname == '/naadam' ? "" : 'text-white/70 '}group-hover:text-white`}>
                  Naadam
                </Typography>
              </a>
            </div>
          </Link>
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

export default Header
