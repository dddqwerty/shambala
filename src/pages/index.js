import { Typography } from 'components'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    window.location.href = 'https://www.youtube.com/watch?v=W9QVQvGSsKI'
  }, [])

  return (
    <div>
      <Typography variant="body-mobile">Heading 1</Typography>
      <Typography variant="body-web">Heading 2</Typography>
    </div>
  )
}
