import classNames from 'classnames'
import Typography from 'components/typography'
import * as React from 'react'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

type Props = React.PropsWithChildren<{
  content?: string
  right?: boolean
  left?: boolean
  className?: string
  hrClasses?: string
  ts ?: string
}>

export const Emphasis = (props: Props) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  const mid = useMediaQuery(theme.breakpoints.down('md'))
  const lma = useMediaQuery(theme.breakpoints.down('lg'))

  return (
    <div className="inline-flex flex-row">
      <Typography variant={matches ? 'title-big' : mid ? 'h3' : lma ? 'h2' : 'h1'} className={props.className}>
        <div className={props.ts}>
          <hr
            className={`flex ${
              props.left ? 'justify-start' : props.right ? 'justify-end' : 'justify-center'
            } rounded-buttonRadius w-16 bg-secondary-blue h-2 border-t-0 ${props.hrClasses}`}
          />
        </div>
        {props.children ?? props.content}
      </Typography>
    </div>
  )
}

export default Emphasis
