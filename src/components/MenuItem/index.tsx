import * as React from 'react'
import { motion } from 'framer-motion'
import Typography from 'components/typography'
import Link from 'next/link'
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const MenuItem = ({ name, isSelected, path }) => {
  return (
    <Link href={path}>
      <motion.li
        variants={variants}
        whileTap={{ scale: 0.95 }}
        style={{
          background: isSelected && 'linear-gradient(90deg, rgba(255, 210, 23, 0.2) 0%, rgba(255, 210, 23, 0) 100%)',
        }}
        className="flex relative items-center cursor-pointer h-14 overflow-hidden"
      >
        {isSelected && (
          <img src="assets/svgs/yellowBar.svg" style={{}} className="h-full scale-y-[1.4] transform translate-y-1" />
        )}
        <Typography variant="mobile-menu" className="text-primary-white absolute left-16">
          {name}
        </Typography>
      </motion.li>
    </Link>
  )
}

export default MenuItem
