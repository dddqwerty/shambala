import React from 'react'
import { handleIcon } from 'utils'

//expected props : Yellow or not, right or left, icon, val of : h1 b time , index (last or first)

export const Plancard = (props) => {
  const { headText, bodyText, date, index, selected, l = false, icon } = props

  if (!l) {
    switch (index) {
      case 'first':
        return (
          <div className="h-[450px] w-full flex flex-row justify-center">
            <div id="text-half" className="w-1/4 h-full flex flex-col justify-center">
              <div id="header text" className="text-semibold text-title1 text-white">
                {headText}
              </div>
              <div id="body text" className="text-body text-primary-white/50">
                {bodyText}
              </div>
            </div>
            <div id="spliter" className="w-fit flex justify-center items-center flex-col">
              <div id="line" className="w-[10px] h-[calc(50%-25px)] bg-[#C5C6CD]/30 rounded-t-[10px] "></div>
              <div
                id="icon"
                className="h-[50px] w-[50px] rounded-[50%] border-4 border-backgroundColor-darkGray bg-textColor-secondary-lightGray flex items-center justify-center"
              >
                {handleIcon({
                  icon: icon,
                  size: 32,
                  className: 'text-black',
                })}
              </div>
              <div id="line" className="w-[10px] h-[calc(50%-25px)] bg-[#C5C6CD]/30"></div>
            </div>
            <div id="date-half" className=" w-1/4 h-full flex justify-center items-center">
              <div id="actual date " className="font-medium text-p2 text-primary-white/50">
                {date}
              </div>
            </div>
          </div>
        )

      case 'middle':
        return (
          <div className="h-[450px] w-full flex flex-row justify-center">
            <div id="text-half" className="w-1/4 h-full flex flex-col justify-center">
              <div id="header text" className="text-semibold text-title1 text-white">
                {headText}
              </div>
              <div id="body text" className="text-body text-primary-white/50">
                {bodyText}
              </div>
            </div>
            <div id="spliter" className="w-fit flex justify-center items-center flex-col">
              <div id="line" className="w-[10px] h-[calc(50%-25px)] bg-[#C5C6CD]/30 "></div>
              <div
                id="icon"
                className="h-[50px] w-[50px] rounded-[50%] border-4 border-backgroundColor-darkGray bg-textColor-secondary-lightGray flex items-center justify-center"
              >
                {handleIcon({
                  icon: icon,
                  size: 32,
                  className: 'text-black',
                })}
              </div>
              <div id="line" className="w-[10px] h-[calc(50%-25px)] bg-[#C5C6CD]/30"></div>
            </div>
            <div id="date-half" className=" w-1/4 h-full flex justify-center items-center">
              <div id="actual date " className="font-medium text-p2 text-primary-white/50">
                {date}
              </div>
            </div>
          </div>
        )

      case 'end':
        return (
          <div className="h-[450px] w-full flex flex-row justify-center">
            <div id="text-half" className="w-1/4 h-full flex flex-col justify-center">
              <div id="header text" className="text-semibold text-title1 text-white">
                {headText}
              </div>
              <div id="body text" className="text-body text-primary-white/50">
                {bodyText}
              </div>
            </div>
            <div id="spliter" className="w-fit flex justify-center items-center flex-col">
              <div id="line" className="w-[10px] h-[calc(50%-25px)] bg-[#C5C6CD]/30 "></div>
              <div
                id="icon"
                className="h-[50px] w-[50px] rounded-[50%] border-4 border-backgroundColor-darkGray bg-textColor-secondary-lightGray flex items-center justify-center"
              >
                {handleIcon({
                  icon: icon,
                  size: 32,
                  className: 'text-black',
                })}
              </div>
              <div id="line" className="w-[10px] h-[calc(50%-25px)] bg-[#C5C6CD]/30 rounded-b-[10px]"></div>
            </div>
            <div id="date-half" className=" w-1/4 h-full flex justify-center items-center">
              <div id="actual date " className="font-medium text-p2 text-primary-white/50">
                {date}
              </div>
            </div>
          </div>
        )
    }
  } else {
    switch (index) {
      case 'first':
        return (
          <div className="h-[450px] w-full flex flex-row justify-center">
            <div id="date-half" className=" w-1/4 h-full flex justify-center items-center">
              <div id="actual date " className="font-medium text-p2 text-primary-white/50">
                {date}
              </div>
            </div>

            <div id="spliter" className="w-fit flex justify-center items-center flex-col">
              <div id="line" className="w-[10px] h-[calc(50%-25px)] bg-[#C5C6CD]/30 rounded-t-[10px] "></div>
              <div
                id="icon"
                className="h-[50px] w-[50px] rounded-[50%] border-4 border-backgroundColor-darkGray bg-textColor-secondary-lightGray flex items-center justify-center"
              >
                {handleIcon({
                  icon: icon,
                  size: 32,
                  className: 'text-black',
                })}
              </div>
              <div id="line" className="w-[10px] h-[calc(50%-25px)] bg-[#C5C6CD]/30"></div>
            </div>
            <div id="text-half" className="pl-[50px] w-1/4 h-full flex flex-col justify-center">
              <div id="header text" className="text-semibold text-title1 text-white">
                {headText}
              </div>
              <div id="body text" className="text-body text-primary-white/50">
                {bodyText}
              </div>
            </div>
          </div>
        )

      case 'middle':
        return (
          <div className="h-[450px] w-full flex flex-row justify-center">
            <div id="date-half" className=" w-1/4 h-full flex justify-center items-center">
              <div id="actual date " className="font-medium text-p2 text-primary-white/50">
                {date}
              </div>
            </div>

            <div id="spliter" className="w-fit flex justify-center items-center flex-col">
              <div id="line" className="w-[10px] h-[calc(50%-25px)] bg-[#C5C6CD]/30 "></div>
              <div
                id="icon"
                className="h-[50px] w-[50px] rounded-[50%] border-4 border-backgroundColor-darkGray bg-textColor-secondary-lightGray flex items-center justify-center"
              >
                {handleIcon({
                  icon: icon,
                  size: 32,
                  className: 'text-black',
                })}
              </div>
              <div id="line" className="w-[10px] h-[calc(50%-25px)] bg-[#C5C6CD]/30"></div>
            </div>
            <div id="text-half" className="pl-[50px] w-1/4 h-full flex flex-col justify-center">
              <div id="header text" className="text-semibold text-title1 text-white">
                {headText}
              </div>
              <div id="body text" className="text-body text-primary-white/50">
                {bodyText}
              </div>
            </div>
          </div>
        )

      case 'end':
        return (
          <div className="h-[450px] w-full flex flex-row justify-center">
            <div id="date-half" className=" w-1/4 h-full flex justify-center items-center">
              <div id="actual date " className="font-medium text-p2 text-primary-white/50">
                {date}
              </div>
            </div>

            <div id="spliter" className="w-fit flex justify-center items-center flex-col">
              <div id="line" className="w-[10px] h-[calc(50%-25px)] bg-[#C5C6CD]/30 "></div>
              <div
                id="icon"
                className="h-[50px] w-[50px] rounded-[50%] border-4 border-backgroundColor-darkGray bg-textColor-secondary-lightGray flex items-center justify-center"
              >
                {handleIcon({
                  icon: icon,
                  size: 32,
                  className: 'text-black',
                })}
              </div>
              <div id="line" className="w-[10px] h-[calc(50%-25px)] bg-[#C5C6CD]/30 rounded-b-[10px]"></div>
            </div>
            <div id="text-half" className="pl-[50px] w-1/4 h-full flex flex-col justify-center">
              <div id="header text" className="text-semibold text-title1 text-white">
                {headText}
              </div>
              <div id="body text" className="text-body text-primary-white/50">
                {bodyText}
              </div>
            </div>
          </div>
        )
    }
  }
}

export default Plancard
