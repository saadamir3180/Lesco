import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import '../style/Login.css' 
import { auth } from '../firebaseConfig'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = async (e) =>{
    e.preventDefault()
    auth ? auth.signOut : null
    await signInWithEmailAndPassword(auth, username, password)
    .then(()=>{
      setUsername('')
      setPassword('')
      navigate(`/dashboard`)
    })
    .catch((error)=>{
      console.log(error)
      setPassword('')
    })
  }

  return (
      <form className='loginForm' onSubmit={handleSubmit}>
        <h2 className="text-center">LESCO</h2>
        <div>
        <div className="input-container">
          <input type="text" required onChange={(e)=>{(setUsername(e.target.value))}} value={username} autoComplete="username" aria-label='username'/>
          <label className="label-n">Username</label>
        </div>
        <div className="input-container">
          <input type="password" required onChange={(e)=>{(setPassword(e.target.value))}} value={password}  autoComplete="current-password" aria-label='password'/>
          <label className="label-n">Password</label>
        </div>
        </div>
        <span className="buttonsContainer">
          
          <button type="submit" className="submitBtn btn">
          Login
        </button>
        </span>
      </form> 
      
  )
}

export default Login