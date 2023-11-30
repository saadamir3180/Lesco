import React, { useState } from 'react'
import SignUp from './SignUp'
import Login from './Login'
import '../style/Login.css'
import ToogleSwitch from '../components/ToogleSwitch'

const GetStarted = () => {

    const [formType, setFormType] = useState('login')

  return (
    <>
    <div className='box'>
    <ToogleSwitch formType={formType} setFormType={setFormType}/>
      {formType === 'login' ?
      <Login/> :  <SignUp/>
      }
    </div>
    
    </>
  )
}

export default GetStarted