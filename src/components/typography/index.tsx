import { FC } from 'react'

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
  | 'title-normal'
  | 'mobile-menu'
  | 'yeloo'
  | 'thin'

type Props = {
  variant: TypographyTypes
  className?: string
  children: React.ReactNode
}

const Typography: FC<Props> = ({ variant , className = '', children }) => {
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
        return 'font-semibold text-title1 leading-[26px]'
      case 'title-small':
        return 'text-title2 leading-[37.2px]'
      case 'p-big':
        return 'font-medium text-p1'
      case 'p-small':
        return 'font-semibold text-p2'
      case 'body-web':
        return 'text-body font-normal leading-[32px]'
      case 'body-mobile':
        return 'text-bodyMobile font-normal  leading-[26px]'
      case 'title-normal':
        return 'text-p1 font-bold'
      case 'mobile-menu':
        return 'text-p2 font-normal'
      case 'yeloo' : 
        return 'text-body font-bold text-[14px]'
      case 'thin' : 
        return 'font-thin text-h3'
    }
  }

  return <div className={`${getClasses(variant)} ${className}`}>{children}</div>
}

export default Typography
