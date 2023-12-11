import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../firebaseConfig';
import '../style/Login.css';


const SignUp = () => {


  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [cnic, setCnic] = useState('')

  const registerUser = async (e) => {
    e.preventDefault()
    const userCredential = await createUserWithEmailAndPassword(auth, username, password)
    .then(() => { 
      updateProfile(userCredential.user, {
      displayName: username,
      cnic: cnic,
    });
      navigate(`/user/${auth.currentUser.email}`)
      
    })
    .catch((error) => {
      console.log(error.code, error.message)
    })
    setUsername('')
    setPassword('')
    setCnic('')
  }

  return (
    <form className='signupForm' onSubmit={registerUser} >
    <h2 className="text-center">Sign Up Now</h2>
    <div className='inputsContainer'>
    <div className="input-container">
      <input type="text" required onChange={(e)=>{setUsername(e.target.value)}} value={username} aria-label='username' autoComplete="username"/>
      <label className='label-n'>Email</label>
    </div>

    <div className="input-container">
      <input type="number" required onChange={(e)=>{setCnic(e.target.value)}} value={cnic} />
      <label className='label-n'>CNIC</label>
    </div>
    <div className="input-container">
      <input type="password" required onChange={(e)=>{setPassword(e.target.value)}} value={password} 
      autoComplete="new-password" aria-label='password'
      />
      <label className='label-n'>Password
      </label>
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
    </span>
  </form>
  )
}

export default SignUp