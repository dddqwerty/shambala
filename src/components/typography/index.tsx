import { FC, ReactElement } from 'react'

export type TypographyTypes =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'title-big'
  | 'title-small'
  | 'p-big'
  | 'p-small'
  | 'body-web'
  | 'body-mobile'

type Props = {
  variant: TypographyTypes
  className?: string
  children: React.ReactNode
}

const Typography: FC<Props> = ({ variant = 'h1', className = '', children }) => {

  const getClasses = (variant: TypographyTypes) => {
    switch (variant) {
      case 'h1':
        return 'font-semibold text-h1'
      case 'h2':
        return 'font-bold text-h2'
      case 'h3':
        return 'font-semibold text-h3'
      case 'h4':
        return 'font-medium text-h4'
      case 'title-big':
        return 'font-semibold text-title1'
      case 'title-small':
        return 'text-title2'
      case 'p-big':
        return 'font-medium text-p1'
      case 'p-small':
        return ' text-p2'
      case 'body-web':
        return 'text-body'
      case 'body-mobile':
        return 'text-bodyMobile font-normal'
    }
  }

  return <div className={`${getClasses(variant)} ${className}`}>{children}</div>
}

export default Typography
