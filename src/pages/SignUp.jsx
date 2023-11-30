import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword }  from 'firebase/auth'
import { auth } from '../firebaseConfig'
import '../style/Login.css'


const SignUp = () => {


  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const registerUser = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, username, password)
    .then(() => {
      navigate(`/user/${auth.currentUser.email}`)
    })
    .catch((error) => {
      console.log(error.code, error.message)
    })
    setUsername('')
    setPassword('')
  }

  return (
    <form className='signupForm' onSubmit={registerUser} >
    <h2 className="text-center">SignUp Now</h2>
    <div className='inputsContainer'>
    {/* <div className="input-container">
      <input type="text" required onChange={nameHandler} value={name}/>
      <label className='label-n'>Name</label>
    </div> */}
    <div className="input-container">
      <input type="text" required onChange={(e)=>{setUsername(e.target.value)}} value={username} aria-label='username' autoComplete="username"/>
      <label className='label-n'>Email</label>
    </div>
    <div className="input-container">
      <input type="password" required onChange={(e)=>{setPassword(e.target.value)}} value={password} 
      autoComplete="new-password" aria-label='password'
      />
      <label className='label-n'>Password
      </label>
    </div>
    {/* <div className="input-container">
      <input type="name" required onChange={companyNameHandler} value={companyName} />
      <label className='label-n'>Company Name</label>
    </div> */}
    <div className="inputCheckboxContainer">
      <input type="checkbox" required />
      <label className='forCheckBox'>I've read and agreed to the Terms of Use, Privacy Notice and Other Details</label>
    </div>
    </div>
    <span className="buttonsContainer">
      <button type="submit" className="btn">
      Submit
    </button>
    </span>
  </form>
  )
}

export default SignUp