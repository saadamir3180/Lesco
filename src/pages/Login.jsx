import React, { useState } from 'react'
// import { auth } from '../firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import '../style/Login.css' 
import { auth } from '../firebaseConfig'

const Login = () => {
  const [formType, setFormType] = useState('login')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()
    signInWithEmailAndPassword(auth, username, password)
    .then((userCredentials)=>{
      console.log(userCredentials)
    })
    .catch((error)=>{
      console.log(error)
    })

  }

  return (
    <div className='box topPad'>
      {formType === 'login' ?
      <form className='loginForm' onSubmit={handleSubmit}>
        <h2 className="text-center">LESCO</h2>
        <div>
        <div className="input-container">
          <input type="text" required onChange={(e)=>{(setUsername(e.target.value))}} value={username}/>
          <label className="label-n">Username</label>
        </div>
        <div className="input-container">
          <input type="mail" required onChange={(e)=>{(setPassword(e.target.value))}} value={password} />
          <label className="label-n">Password</label>
        </div>
        </div>
        <span className="buttonsContainer">
          
          <button type="submit" className="submitBtn btn">
          Login
        </button>
        </span>
      </form> :
      <div className='signupForm'>o
        {/* <h2 className="text-center">Leave your info and we'll get in touch</h2>
        <div className='inputsContainer'>
        <div className="input-container">
          <input type="text" required onChange={nameHandler} value={name}/>
          <label className='label-n'>Name</label>
        </div>
        <div className="input-container">
          <input type="mail" required onChange={emailHandler} value={email} />
          <label className='label-n'>Email</label>
        </div>
        <div className="input-container">
          <input type="number" required onChange={phoneHandler} value={phoneNumber} 
          />
          <label className='label-n'>Phone Number
          </label>
        </div>
        <div className="input-container">
          <input type="name" required onChange={companyNameHandler} value={companyName} />
          <label className='label-n'>Company Name</label>
        </div>
        <div className="inputCheckboxContainer">
          <input type="checkbox" required />
          <label className='forCheckBox'>I've read and agreed to the Terms of Use, Privacy Notice and Other Details</label>
        </div>
        </div>
        <span className="buttonsContainer">
          <button type="submit" className="btn">
          Submit
        </button>
        </span> */}
      </div>
      }
      
    </div>
  )
}

export default Login