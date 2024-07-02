import './ChooseGender.scss'
import Image from 'next/image'

const ChooseGender = ({img, label, onClick}) => {
  return (
    <div className='choose-gender-component'>
        <Image
            src={img}
            alt="img"
            className='choose-gender-component__img'
            quality={100}
            priority onClick={onClick}
        />
        <button className='choose-gender-component__button' onClick={onClick}>{label}</button>
    </div>
  )
}

export default ChooseGender
