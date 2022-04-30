import { MainLayout } from 'layout'

export default function Home() {
  useEffect(() => {
    window.location.href = 'https://www.youtube.com/watch?v=W9QVQvGSsKI'
  }, [])

  return (
    <div>
      <MainLayout></MainLayout>
    </div>
  )
}
