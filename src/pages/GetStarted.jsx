import React, { useState } from 'react'
import SignUp from './SignUp'
import Login from './Login'
import '../style/Login.css'

const GetStarted = () => {

    const [formType, setFormType] = useState('logi')

  return (
    <>
    <div className='box topPad'>
      {formType === 'login' ?
      <Login/>:   <SignUp/>
      }
    </div>
    
    </>
  )
}

export default GetStarted