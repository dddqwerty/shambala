import { handleIcon } from 'utils'
import Link from 'next/link'
import { Typography } from 'components'
import { PADDINGX } from 'constants/layout'
// import Image from 'next/image'

const Footer = () => {
  return (
    // border-top: 10px solid BLACK;
    // border-radius: 10px;
    // border-top: 10px solid #FFFFFF;
    // /* z-index: 100 !important; */
    // border-top-left-radius: 10px !important;
    // border-top-right-radius: 10px !important;
    // border-color: white !important;

    <div className="relative w-100vw  border-textColor-secondary-darkGray pb-6 items-center bg-textColor-secondary-darkGray flex flex-col justify-center z-[10] rounded-full">
      <div className="md:hidden lg:hidden  left-0 absolute top-0 w-10 h-10 bg-mainBg">
        <div className="  w-[100%] h-[100%] bg-textColor-secondary-darkGray rounded-tl-[15px] border-t-4 border-t-textColor-secondary-darkGray "></div>
      </div>
      <div className=" md:hidden lg:hidden top-0 right-0 absolute transform  w-10 h-10 bg-mainBg">
        <div className="w-[100%] h-[100%] bg-textColor-secondary-darkGray rounded-tr-[15px] border-t-4 border-t-textColor-secondary-darkGray "></div>
      </div>
      <div
        className={`w-full max-w-shambWidth mx-auto gap-16 flex flex-col md:flex-row lg:flex-row items-center justify-between ${PADDINGX}`}
      >
        <div className="mt-[1.5rem] flex items-center flex-col">
          <img src="assets/footer1.png" className="w-[30px] h-25" alt="" />
          <img src="assets/footer2.png" className="w-[148px] h-25" alt="" />
        </div>
        {/* <Image width={100} height={100} src={image} /> */}
        <div className="text-textColor-secondary-lightGray font-bold text-xs flex gap-16">
          <div className="flex flex-col gap-3">
            <Link href="/">
              <a>
                <Typography className="opacity-60 hover:opacity-100 hover:text-primary-yellow" variant="p-small">
                  Current project
                </Typography>
              </a>
            </Link>
            <Link href="/">
              <a>
                <Typography className="opacity-60 hover:opacity-100 hover:text-primary-yellow" variant="p-small">
                  Team
                </Typography>
              </a>
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/">
              <a>
                <Typography className="opacity-60 hover:opacity-100 hover:text-primary-yellow" variant="p-small">
                  Projects
                </Typography>
              </a>
            </Link>
            <Link href="/">
              <a>
                <Typography className="opacity-60 hover:opacity-100 hover:text-primary-yellow" variant="p-small">
                  Creation
                </Typography>
              </a>
            </Link>
          </div>
          {/* <div className="flex justify-between flex-row">
        <Typography className="w-7/10" variant="p-small">
          Одоо хийж буй төсөл
        </Typography>

        <Typography variant="p-small">Төслүүд</Typography>
      </div>
      <div className="flex justify-between flex-row">
        <Typography variant="p-small">Team</Typography>
        <Typography variant="p-small">Бүтээл</Typography>
      </div> */}
        </div>
        <div className="flex flex-row  justify-between gap-3">
          <Link href={'https://www.facebook.com/shambala.mn'}>
            <a className="pr-4" target="_blank">
              {handleIcon({
                className: 'text-primary-yellow w-4 md:w-5',
                icon: 'facebook',
              })}
            </a>
          </Link>

          <Link href={'https://twitter.com'}>
            <a className="pr-4" target="_blank">
              {handleIcon({
                className: 'text-primary-yellow w-4 md:w-5',
                icon: 'twitter',
              })}
            </a>
          </Link>
          <Link href={'https://www.gmail.com/'}>
            <a className="pr-4" target="_blank">
              {handleIcon({
                className: 'text-primary-yellow w-4 md:w-5',
                icon: 'mail',
              })}
            </a>
          </Link>
          <Link href={'https://www.instagram.com/shambala2056/'}>
            <a className="pr-4" target="_blank">
              {handleIcon({
                className: 'text-primary-yellow w-4 md:w-5',
                icon: 'instagram',
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
