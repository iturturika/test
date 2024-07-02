import './Logo.scss'
import Image from 'next/image'
import logo from '../../assets/images/logo.svg'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href={'/'}>
      <Image
        src={logo}
        alt="logo"
        className='logo'
        priority
      />
    </Link>
  )
}

export default Logo
