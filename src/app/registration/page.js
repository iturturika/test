'use client'
import React from 'react';
import ChooseGender from '../../components/ChooseGender/ChooseGender';
import Logo from '../../components/Logo/Logo';
import './page.scss'
import girlImg from '../../assets/images/girl.svg'
import boyImg from '../../assets/images/boy.svg'
import Input from '../../components/Input/Input';
import eye_on from '../../assets/images/eye_on.svg'
import eye_off from '../../assets/images/eye_off.svg'
import Checkbox from '../../components/Checkbox/Checkbox';
import Link from 'next/link';

export default function Registration() {
    const [choosedGender, setChoosedGender] = React.useState(false);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [inviteCode, setInviteCode] = React.useState('');
    const [birthday, setBirthday] = React.useState('');
    const [showPass, setShowPass] = React.useState(false);
    const [error, setError] = React.useState({
        email: false,
        name: false,
        password: false,
        inviteCode: false,
        birthday: false
    });

    const onClickGender = (gender) => {
        setChoosedGender(gender);
    }

    const validate = () => {
        if(name.length < 3){
            setError(prevState => ({
                ...prevState,
                name: true
            }))
        }

        if(email.length < 3){
            setError(prevState => ({
                ...prevState,
                email: true
            }))
        }

        if(birthday.length < 3){
            setError(prevState => ({
                ...prevState,
                birthday: true
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
        <article className='registration-block'>
            <Logo />
            {
                choosedGender ?
                <section className='registraion-section'>
                    <h1 style={{textAlign: 'center'}}>Registration</h1>
                    <Input placeholder={'Email'} type={'text'} value={email} setValue={setEmail} error={error.email}/>
                    <div style={{display: 'flex', columnGap: '16px'}}>
                        <Input placeholder={'Name'} type={'text'} value={name} setValue={setName} error={error.name}/>
                        <Input placeholder={'Birthday'} type={'date'} value={birthday} setValue={setBirthday} error={error.birthday}/>
                    </div>
                    <Input placeholder={'Password'} type={showPass ? 'text' : 'password'} value={password} setValue={setPassword} error={error.password} img={showPass ? eye_off : eye_on} onClickImg={(event) => {event.stopPropagation(); setShowPass(!showPass)}}/>
                    <Input placeholder={'Invite code'} type={'text'} value={inviteCode} setValue={setInviteCode} error={error.inviteCode}/>
                    {error.email ? <p className='registration-section__errors'>Please enter your email address using the format name@example.com</p> : null}
                    {error.email || error.name || error.birthday || error.password || error.inviteCode ? <p className='registration-section__errors'>Fill out the fields</p> : null}
                    <button className='registration-section__button' onClick={() => {validate()}}>Create account</button>
                    <Checkbox label={'Confirmed 18+'}/>
                    <Checkbox label={'I agree with the processing of personal data and privacy policy'}/>
                </section>
                :
                <section className='choose-gender-section'>
                    <h1 style={{textAlign: 'center'}}>Registration</h1>
                    <div style={{display: 'flex', columnGap: '18px', marginTop: '30px', marginBottom: '40px'}}>
                        <ChooseGender img={girlImg} label={'Sign in as egirl'} onClick={() => {onClickGender('girl')}}/>
                        <ChooseGender img={boyImg} label={'Sign in as user'} onClick={() => {onClickGender('boy')}}/>
                    </div>
                </section>
            }
            <p className='sign-up__link'>Already have an account? <Link href={'/authorization'}>Sign-in</Link></p>
        </article>
    </main>
  );
}
