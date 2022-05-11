import { SiGmail } from 'react-icons/si'
import { BsTwitter, BsFacebook } from 'react-icons/bs'
import { RiInstagramFill } from 'react-icons/ri'
import { MdLocationPin } from 'react-icons/md'
import { GrSend } from 'react-icons/gr'
import { IoMdRocket } from 'react-icons/io'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsMouse } from 'react-icons/bs'

export const handleIcon = ({ icon, size = 24, className = '' }) => {
  switch (icon) {
  case 'instagram':
    return <RiInstagramFill className={className} style={{ width: size, height: size }} />
  case 'twitter':
    return <BsTwitter className={className} style={{ width: size, height: size }} />
  case 'mail':
    return <SiGmail className={className} style={{ width: size, height: size }} />
  case 'facebook':
    return <BsFacebook className={className} style={{ width: size, height: size }} />
  case 'location':
    return <MdLocationPin className={className} style={{ width: size, height: size }} />
  case 'plane':
    return <GrSend className={className} style={{ width: size, height: size }} />
  case 'rocket':
    return <IoMdRocket className={className} style={{ width: size, height: size }} />
  case 'menu':
    return <AiOutlineMenu className={className} style={{ width: size, height: size }} />
  case 'mouse':
    return <BsMouse className={className} style={{ width: size, height: size }} />

  case 'menu':
    return <AiOutlineMenu className={className} style={{ width: size, height: size }} />
  default:
    return <></>
  }
}
