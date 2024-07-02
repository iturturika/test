'use client'
import React from 'react'
import Logo from '@/components/Logo/Logo'
import './page.scss'
import Input from '@/components/Input/Input'
import notificationImg from '../../assets/images/i.svg'
import Image from 'next/image'
const page = () => {
    const [email, setEmail] = React.useState('');
    const [error, setError] = React.useState({
        email: false,
        name: false,
        password: false,
        inviteCode: false,
        birthday: false
    });
    const [sended, setSended] = React.useState(false);

    const validate = () => {
        if(email.length < 3){
            setError(prevState => ({
                ...prevState,
                email: true
            }))
            return false
        }
        setSended(true);
    }

  return (
    <main>
      <article className='forgot-password-block'>
        <Logo />
            {
                !sended ?
                    <section className='forgot-password-section'>
                        <h1 style={{textAlign: 'center'}}>Забыли свой пароль?</h1>
                        <p className='forgot-password-section__description'>Укажите свой Email или имя пользователя. Ссылку на создание нового пароля вы получите по электронной почте.</p>
                        <Input placeholder={'Email'} type={'text'} value={email} setValue={setEmail} error={error.email}/>
                        <button className='forgot-password-section__button' onClick={() => {validate();}}>Continue</button>
                    </section>
                :       
                <div className='notification'>
                    <Image
                        src={notificationImg}
                        alt="img"
                        className='notification__img'
                        quality={100}
                        priority
                    />
                    <p className='forgot-password-section__description'>Ссылка для сброса пароля и дальнейших инструкций отправлена вам на почту. Перейдите по ссылке и следуйте дальнейшим инструкциям.</p>
                </div>
            }
      </article>
    </main>
  )
}

export default page
