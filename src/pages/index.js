import { Hello, Typography } from 'components'
import { MainLayout } from 'layout'
import { handleIcon } from 'utils'
export default function Home() {
  return (
    <div>
      <Typography variant="h1">dwqdwq</Typography>
      <Hello />
      <MainLayout />
      {handleIcon({
        icon: 'facebook',
        size: 40,
        className: 'text-primary-yellow',
      })}
    </div>
  )
}
