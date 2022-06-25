import React, { useState } from 'react'
import { Typography } from 'components'
import { handleIcon } from 'utils'
import { PADDINGX } from 'constants/layout'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Bighead } from './bighead'
import { Midhead } from './midhead'


export const Header = () => {
  // const { selected, setSelected } = useState('')
  const router = useRouter()

  return (
    <div>
      <Bighead />
      {/* <Midhead/> */}
    </div>
  )
}

export default Header
