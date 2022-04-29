import { FC, ReactElement } from 'react'

type Variants = 'primary' | 'secondary-mobile' | 'secondary-web'

type Props = {
  variant: Variants
  classname?: string
  children: React.ReactNode
}

const Button: FC<Props> = (props): ReactElement => {
  const { variant, classname, children } = props

  const getClasses = (variant: Variants) => {
    switch (variant) {
      case 'primary':
        return 'bg-primary-yellow  py-2.5 px-12  hover:bg-backgroundColor-hover'
      case 'secondary-mobile':
        return 'bg-transparent  py-2.5 px-12  border border-solid border-primary-white text-primary-white hover:bg-button-hover'
      case 'secondary-web':
        return 'bg-transparent py-4 px-8  border border-solid border-primary-white text-primary-white hover:bg-button-ghost-hover hover:opacity-80'
    }
  }

  return (
    <>
      <button className={`rounded-buttonRadius ${classname} ${getClasses(variant)}`}>{children}</button>
    </>
  )
}

export default Button
