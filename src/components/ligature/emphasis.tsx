import classNames from 'classnames';
import Typography from 'components/typography'
import * as React from 'react'

type Props = React.PropsWithChildren<{ content?: string; right?: boolean, left?: boolean, className?: string, hrClasses?: string}>

export const Emphasis = (props: Props) => {
  return (
    <div className="inline-flex flex-row">
      <Typography variant="h1" className={props.className}>
        <div>
          <hr className={`flex ${props.left ? "justify-start" : props.right ? "justify-end" : "justify-center"} rounded-buttonRadius w-16 bg-secondary-blue h-2 border-t-0 ${props.hrClasses}`} />
        </div>
        {props.children ?? props.content}
      </Typography>
    </div>
  )
}

export default Emphasis