import classNames from 'classnames';
import Typography from 'components/typography'
import * as React from 'react'
import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles'

type Props = React.PropsWithChildren<{ content?: string; right?: boolean, left?: boolean, className ?:string }>

export const Emphasis = (props: Props) => {
  const DEFAULT_CLASSES = "w-full flex justify-center row";
  const ADDITIONAL_CLASSES = {
    left: "!justify-start",
    right: "!justify-end"
  };

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <div className="inline-flex flex-row justify-center">
      <div className={props.className}>
        <Typography variant={matches ? 'title-big' : 'h1'} className='text-primary-white text-center'>
          <div className={classNames(DEFAULT_CLASSES, props.left && ADDITIONAL_CLASSES.left, props.right && ADDITIONAL_CLASSES.right)}>
            <hr className="flex justify-center rounded-buttonRadius w-[42px] md:w-[68px] bg-secondary-blue h-2 mb-[10px] border-0" />
          </div>
          {props.children ?? props.content}
        </Typography>
      </div>
      {/* <div className='md:hidden'>
        <Typography variant='title-big' className='text-primary-white'>
          <div className={classNames(DEFAULT_CLASSES, props.left && ADDITIONAL_CLASSES.left, props.right && ADDITIONAL_CLASSES.right)}>
            <hr className="flex justify-center rounded-buttonRadius w-[42px] bg-secondary-blue h-2  border-0 mb-[10px]" />
          </div>
          {props.children ?? props.content}
        </Typography>
      </div> */}
    </div>
  )
}

export default Emphasis
