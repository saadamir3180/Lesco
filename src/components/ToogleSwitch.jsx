import React from 'react'
import '../style/ToogleSwitch.css'

const ToogleSwitch = ({formType, setFormType}) => {

        const handleToggle = () => {
          setFormType(formType === 'signup' ? 'login' : 'signup');
        };
  return (
    <label className="switch">
	<input type="checkbox" onChange={handleToggle}/>
	<div className="slider slider--0">SignUp</div>
	<div className="slider slider--1">
		<div></div>
		<div></div>
	</div>
	<div className="slider slider--2"></div>
	<div className="slider slider--3">Login</div>
</label>
  )
}

export default ToogleSwitch