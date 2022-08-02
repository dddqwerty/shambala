import { IgmSecondPart, Shartseg, Incubator } from 'components'
import { IGMLAB } from 'components'
import { MainLayout } from 'layout'
import { Wpic } from 'components'
import { Ecard } from 'components'

const data = {
  dir1: 'assets/bigGrass.jpg',
  dir: 'assets/incubatorPicture.jpg',
  
}

const Turshilt = () => {
  return (
    <MainLayout classname="h-fit flex flex-col items-center bg-[#202121]">
      <Shartseg size={10} tsatsrag={20} />
      <IgmSecondPart />
      <IGMLAB />
      <div className=" h-44"></div>
      <Wpic dir={data.dir} />
      <div className=" h-44"></div>
      <Incubator />
      <Wpic dir={data.dir1} />
      <div className=" h-44"></div>
      <Ecard />
    </MainLayout>
  )
}
export default Turshilt
