'use client'
import React from 'react'
import './Checkbox.scss'
import checkboxOn from '../../assets/images/checkbox_on.svg';
import checkboxOff from '../../assets/images/checkbox_off.svg';
import Image from 'next/image';

const Checkbox = ({label}) => {
    const [checked, setChecked] = React.useState(false);

  return (
    <div className='checkbox'>
      {
        checked ?
        <Image
            src={checkboxOn}
            alt="img"
            className='checkbox__img'
            quality={100}
            priority
            onClick={() => {setChecked(false)}}
        />
        :
        <Image
            src={checkboxOff}
            alt="img"
            className='checkbox__img'
            quality={100}
            priority
            onClick={() => {setChecked(true)}}
        />
      }
      <p className='checkbox__label'>{label}</p>
    </div>
  )
}

export default Checkbox
