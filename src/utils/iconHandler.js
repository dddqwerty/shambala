import { SiGmail } from 'react-icons/si'
import { BsTwitter, BsFacebook } from 'react-icons/bs'
import { RiInstagramFill } from 'react-icons/ri'
import { MdLocationPin } from 'react-icons/md'
import { GrSend } from 'react-icons/gr'
import { IoMdRocket } from 'react-icons/io'
import { FiGlobe, FiUsers, FiCreditCard, FiHeart, FiStar } from 'react-icons/fi'
import { AiOutlineMenu } from 'react-icons/ai'
import { IoMdPulse } from 'react-icons/io'

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
  case 'globe':
    return <FiGlobe className={className} style={{ width: size, height: size }} />
  case 'menu':
    return <AiOutlineMenu className={className} style={{ width: size, height: size }} />
  case 'users':
    return <FiUsers className={className} style={{ width: size, height: size }} />
  case 'creditcard':
    return <FiCreditCard className={className} style={{ width: size, height: size }} />
  case 'heart':
    return <FiHeart className={className} style={{ width: size, height: size }} />
  case 'star':
    return <FiStar className={className} style={{ width: size, height: size }} />
  case 'pulse':
    return <IoMdPulse className={className} style={{ width: size, height: size }} />
  default:
    return <></>
  }
}
