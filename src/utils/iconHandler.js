import { SiGmail } from 'react-icons/si'
import { BsTwitter, BsFacebook } from 'react-icons/bs'
import { RiInstagramFill } from 'react-icons/ri'

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
  default:
    return <></>
  }
}
