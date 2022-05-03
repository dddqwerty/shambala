import React from 'react'

//expected props : Yellow or not, right or left, icon, val of : h1 b time , index (last or first)

export const Plancard = (props) => {
  return (
    <div className="h-[450px] w-full bg-red-600 flex flex-row justify-center">
      <div id="text-half" className="w-1/4 h-full flex flex-col justify-center">
        <div id="header text" className="text-semibold text-title1 text-white">
          The first four years
        </div>
        <div id="body text" className="text-body text-primary-white/50">
          A Green zone will be established on an area of 16 hectares.
        </div>
      </div>
      <div id="spliter">
        <div id="line" className="w-[6px] h-full bg-gray-600"></div>
        <div id="icon"></div>
      </div>
      <div id="date-half"></div>
    </div>
  )
}

export default Plancard
