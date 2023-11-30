import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import '../style/Pages.css'
import { auth } from '../firebaseConfig'
const User = () => {

  
  const param = useParams()
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  useEffect(()=>{
    setEmail(param.email)
  //   try{
  //    if(auth !== null){
  //     auth.currentUser.email === param.email ? setEmail(param.email): navigate('/GetStarted')
  //    }
  // }
  //   catch(err){
  //     navigate('/GetStarted')
  //     console.log(err)
  //   }
  }, [param.email])



  return (
    <div className='page'> 
      {param.email}
    </div>
  )
}

export default User