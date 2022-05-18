import classNames from 'classnames';
import Typography from 'components/typography'
import * as React from 'react'

type Props = React.PropsWithChildren<{ content?: string; right?: boolean, left?: boolean }>

export const Emphasis = (props: Props) => {
  const DEFAULT_CLASSES = "w-full flex justify-center row";
  const ADDITIONAL_CLASSES = {
    left: "!justify-start",
    right: "!justify-end"
  };

  return (
    <div className="inline-flex flex-row justify-center">
      <div className='md:block hidden'>
        <Typography variant="h1" className='text-primary-white'>
          <div className={classNames(DEFAULT_CLASSES, props.left && ADDITIONAL_CLASSES.left, props.right && ADDITIONAL_CLASSES.right)}>
            <hr className="flex justify-center rounded-buttonRadius w-[68px] bg-secondary-blue h-2  border-0" />
          </div>
          {props.children ?? props.content}
        </Typography>
      </div>
      <div className='md:hidden'>
        <Typography variant='title-big' className='text-primary-white'>
          <div className={classNames(DEFAULT_CLASSES, props.left && ADDITIONAL_CLASSES.left, props.right && ADDITIONAL_CLASSES.right)}>
            <hr className="flex justify-center rounded-buttonRadius w-[42px] bg-secondary-blue h-2  border-0 mb-[10px]" />
          </div>
          {props.children ?? props.content}
        </Typography>
      </div>
    </div>
  )
}

export default Emphasis
