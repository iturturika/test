import './SocialButton.scss'
import Image from 'next/image'
const SocialButton = ({img, label, style}) => {
  return (
    <div className='social-button' style={style}>
        <Image
            src={img}
            alt="img"
            className='social-button__img'
            priority
        />
        <p style={{color: style.color}}>{label}</p>
    </div>
  )
}

export default SocialButton
