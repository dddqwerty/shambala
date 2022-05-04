import { MainLayout } from 'layout'

export default function Home() {
  useEffect(() => {
    window.location.href = 'https://www.youtube.com/watch?v=W9QVQvGSsKI'
  }, [])

  return (
    <div>
      <MainLayout>
        <div className="w-[500px] h-[500px] bg-red-800" />
      </MainLayout>
    </div>
  )
}
