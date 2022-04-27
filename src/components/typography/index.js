const Typography = ({ variant = 'h1', className = '', children }) => {
  const getClasses = (variant, className) => {
    switch (variant) {
      case 'h1':
        return 'font-semibold text-h1'
      case 'h2':
        return 'font-bold text-h2'
      case 'h3':
        return 'font-semibold text-h3'
      case 'h4':
        return 'font-medium text-h4'
      case 'title1':
        return 'font-semibold text-title1'
      case 'title2':
        return 'text-title2'
      case 'p1':
        return 'font-medium text-p1'
      case 'p2':
        return 'font-semibold text-p2'
      case 'body':
        return 'text-body'
    }
    return ''
  }

  return <div className={`${getClasses(variant)} ${className}`}>{children}</div>
}

export default Typography
