'use client'
import React from 'react'
import './page.scss'
import Logo from '@/components/Logo/Logo'
import eye_on from '../../assets/images/eye_on.svg'
import eye_off from '../../assets/images/eye_off.svg'
import Input from '@/components/Input/Input'
import SocialButton from '@/components/SocialButton/SocialButton'
import discordImg from '../../assets/images/discord.png'
import googleImg from '../../assets/images/google.png'
import Link from 'next/link'
const page = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [showPass, setShowPass] = React.useState(false);
    const [error, setError] = React.useState({
        email: false,
        name: false,
        password: false,
        inviteCode: false,
        birthday: false
    });

    const validate = () => {
        if(email.length < 3){
            setError(prevState => ({
                ...prevState,
                email: true
            }))
        }

        if(password.length < 3){
            setError(prevState => ({
                ...prevState,
                password: true
            }))
        }
    }

  return (
    <main>
      <article className='authorization-block'>
        <Logo />
        <section className='authorization-section'>
            <h1 style={{textAlign: 'center'}}>Authorization</h1>
            <Input placeholder={'Email'} type={'text'} value={email} setValue={setEmail} error={error.email}/>
            <Input placeholder={'Password'} type={showPass ? 'text' : 'password'} value={password} setValue={setPassword} error={error.password} img={showPass ? eye_off : eye_on} onClickImg={(event) => {event.stopPropagation(); setShowPass(!showPass)}}/>
            <Link href={'/forgot-password'} className='forgot-password'>Forgot password ?</Link>
            <button className='authorization-section__button' onClick={() => {validate()}}>Continue</button>
            <div className='authorization-section__separator'><span/><p>Or sign in with</p><span/></div>
            <div style={{display: 'flex', columnGap: '16px', justifyContent: 'center'}}>
                <SocialButton img={discordImg} label={'Discord'} style={{backgroundColor: '#5865F233', color: '#5865F2'}}/>
                <SocialButton img={googleImg} label={'Google'} style={{backgroundColor: '#EDEDED', color: '#111111'}}/>
            </div>
            <p className='sign-up__link'>Don't have an account? <Link href={'/registration'}>Sign-up</Link></p>
        </section>
      </article>
    </main>
  )
}

export default page
