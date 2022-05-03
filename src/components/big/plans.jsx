import React from 'react'
import { Plancard } from '../small'

export const Plans = () => {
  return (
    <div className="h-full bg-purple-400 flex flex-col items-center">
      <div className="font-semibold text-h1 text-white">Our future plan</div>
      <div className="font-semibold text-h3 text-white">2020 - 2032</div>
      <Plancard />
    </div>
  )
}

export default Plans
