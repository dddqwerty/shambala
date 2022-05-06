import { handleIcon } from 'utils'
import Link from 'next/link'
import { Typography } from 'components'
// import Image from 'next/image'

const Footer = () => {
  return (
    <div className="w-100vw h-[414px]  md:h-28 lg:h-28 items-center bg-textColor-secondary-darkGray flex justify-center ">
      <div className="w-[85%] flex  h-[221px] flex-col md:flex-row lg:flex-row items-center justify-between">
        <div className="flex items-center flex-col">
          <img src="assets/footer1.png" className="w-[30px] h-25" alt="" />
          <img src="assets/footer2.png" className="w-[148px] h-25" alt="" />
        </div>
        {/* <Image width={100} height={100} src={image} /> */}
        <div className="   text-textColor-secondary-lightGray font-bold text-xs opacity-60 flex flex-col w-[250px]  md:w-3/10 lg:w-3/10">
          <div className="flex justify-between flex-row">
            <Typography className="w-7/10" variant="p-small">
              Одоо хийж буй төсөл
            </Typography>

            <Typography variant="p-small">Төслүүд</Typography>
          </div>
          <div className="flex justify-between flex-row">
            <Typography variant="p-small">Team</Typography>
            <Typography variant="p-small">Бүтээл</Typography>
          </div>
        </div>
        <div className="flex flex-row  justify-between">
          <Link href={'https://www.instagram.com/'}>
            <a className="pr-4" target="_blank">
              {handleIcon({
                className: 'text-primary-yellow',
                icon: 'facebook',
              })}
            </a>
          </Link>

          <Link href={'https://www.instagram.com/'}>
            <a className="pr-4" target="_blank">
              {handleIcon({
                className: 'text-primary-yellow',
                icon: 'twitter',
              })}
            </a>
          </Link>
          <Link href={'https://www.instagram.com/'}>
            <a className="pr-4" target="_blank">
              {handleIcon({
                className: 'text-primary-yellow',
                icon: 'instagram',
              })}
            </a>
          </Link>
          <Link href={'https://www.instagram.com/'}>
            <a className="pr-4" target="_blank">
              {handleIcon({
                className: 'text-primary-yellow',
                icon: 'twitter',
              })}
            </a>
          </Link>
        </div>

        {/* <Link href={'https://www.instagram.com/'}>
            <a target="_blank" >
              {handleIcon({
                className: 'text-primary-yellow',
                icon: 'gmail',
              })}
            </a>
          </Link> */}
      </div>
    </div>
  )
}

export default Footer
