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
    <div className="inline-flex flex-row">
      <Typography variant="h1">
        <div className={classNames(DEFAULT_CLASSES, props.left && ADDITIONAL_CLASSES.left, props.right && ADDITIONAL_CLASSES.right)}>
          <hr className="flex justify-center rounded-buttonRadius w-16 bg-secondary-blue h-2" />
        </div>
        {props.children ?? props.content}
      </Typography>
    </div>
  )
}

export default Emphasis
