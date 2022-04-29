import { Button } from 'components'
import { Typography } from 'components'

export default function Home() {
  return (
    <div className="bg-textColor-secondary-darkGray flex gap-3 p-10">
      <div>
        <Button variant="primary">
          <Typography variant="p-big">See more</Typography>
        </Button>
      </div>
      <div>
        <Button variant="secondary-mobile">
          <Typography variant="p-big">See more</Typography>
        </Button>
      </div>
      <div>
        <Button variant="secondary-web">
          <Typography variant="p-big">See more</Typography>
        </Button>
      </div>
    </div>
  )
}
