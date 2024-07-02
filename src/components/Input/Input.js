'use client'
import React from 'react'
import './Input.scss'
import Image from 'next/image'

const Input = ({placeholder, img, value, setValue, type, onClickImg, error}) => {
    const [clicked, setClicked] = React.useState(false);
  return (
    <div className={error ? 'input input_error' : 'input'} onClick={() => {setClicked(true)}} onBlur={() => {setClicked(false)}}>
      {
        clicked ?
            <input className='input__fieled' type={type} autoFocus value={value} onChange={(event) => {setValue(event.target.value)}}/>
        :
            type == 'password' ? <p className={error ? 'input__placeholder input__placeholder_error' : 'input__placeholder'}>{value ? '*'.repeat(value.length) : placeholder}</p> : <p className={error ? 'input__placeholder input__placeholder_error' : 'input__placeholder'}>{value ? value : placeholder}</p>
      }
      {
        img ?
            <Image
                src={img}
                alt="img"
                className='input__img'
                quality={100}
                priority
                onClick={onClickImg}
            />
        : null
      }
    </div>
  )
}

export default Input
