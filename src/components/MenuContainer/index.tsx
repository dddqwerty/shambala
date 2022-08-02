import * as React from 'react'
import { motion } from 'framer-motion'
import MenuItem from '../MenuItem'
import { useRouter } from 'next/router'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const itemIds = [
  {
    name: 'Home',
    path: '/',
    id: '',
  },
  {
    name: 'Who we are',
    path: '/whoarewe',
    id: 'whoarewe',
  },
  {
    name: 'Artech',
    path: '/artech',
    id: 'whatarewedoing',
  },
  {
    name: 'Our Planet',
    path: '/ourplanet',
    id: 'whatarewedoing',
  },
  {
    name: 'Recommended projects',
    path: '/recomended',
    id: 'recomended',
  },
  {
    name: 'Naadam',
    path: '/naadam',
    id: 'naadam',
  },
]

export const Navigation = () => {
  const router = useRouter()
  return (
    <motion.ul className="m-0 flex flex-col py-5 absolute w-full" variants={variants}>
      {itemIds.map(({ name, path }, index) => (
        <MenuItem name={name} isSelected={router.pathname == path} key={index} path={path} />
      ))}
    </motion.ul>
  )
}
