import classNames from 'classnames'
import { Typography } from 'components'
import * as React from 'react'
import { handleIcon } from 'utils'

type Props = React.PropsWithChildren<{
  content?: string
  right?: boolean
  left?: boolean
  desc?: string
  title?: string
  width?: number
  headerEl: React.ReactNode
}>
const Yellow = (props: Props) => {
  const DEFAULT_CLASSES = 'w-full flex justify-center row'
  const ADDITIONAL_CLASSES = {
    left: '!justify-start',
    right: '!justify-end',
  }
  const { desc, title, headerEl } = props
  return (
    <div className="inline-flex flex-row">
      <Typography variant="title-big">
        <Typography
          variant="h1"
          className="mb-[20px] font-extrabold uppercase text-[#F8D04B] leading-[112px] tracking-[-0.5px] w-[553px] text-[96px]"
        >
          {title}
        </Typography>
        <Typography
          variant="body-web"
          className="text-primary-white leading-[35px] w-[414px] text-p-small tracking-[0.5px]"
        >
          {desc}
        </Typography>
        <div
          className={classNames(
            DEFAULT_CLASSES,
            props.left && ADDITIONAL_CLASSES.left,
            props.right && ADDITIONAL_CLASSES.right,
          )}
        ></div>
        <hr className="mt-[20px] flex justify-center w-[79px] h-[5px] border-0 bg-primary-yellow" />
        <div className='flex flex-row w-[324px] mt-[20px]'>
          <div className="mr-[20px]">
            <div className="bg-[#404040] w-[60px] h-[60px] rounded-[8px] flex items-center">
              <p className="text-primary-white m-[15px]">{headerEl}</p>
            </div>
          </div>
          <div>
          <Typography variant="p-big" className="text-primary-white mb-[20px]">
            Байршил
          </Typography>
          <Typography variant="p-small" className="text-primary-white opacity-50">
              Дорноговь аймаг
          </Typography>
        </div>
        </div>
    
      </Typography>
    </div>
  )
}
export default Yellow
