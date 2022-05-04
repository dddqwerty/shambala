import { Typography, Card, GoalCard, Button } from 'components'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Typography variant="h1" className="text-primary-yellow">
        Style Guides
      </Typography>
      <Link href={'/style/typo'}>
        <a>
          <Typography variant="h5" className="text-primary-black hover:underline">
            Go to Typo page
          </Typography>
        </a>
      </Link>
    </div>
  )
}
