import React from 'react'
import { useState } from 'react'
import './register.css'
import 'bulma/css/bulma.min.css';

export default function Register() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    //handles any changes the inputs and saves it to state
    const handleChange = (setState) => (event) => {
      setState(event.target.value);
      console.log(event.target.value)
  };
    //handles the for submission
  const handleSubmit = () => {
  }

  return(
    <main>
      <div className="card">   
       <div className="card-content">
       <input
        className="input"
        type="text"
        placeholder="Email Address"
        value={email}
        onChange={handleChange(setEmail)}
          />

      <input
        className="input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={handleChange(setPassword)}
          />

      <input
        className="input"
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={handleChange(setConfirmPassword)}
          />

      <button
        className="button is-primary" 
        onClick={handleSubmit}>Create Account
          </button>        
       </div>
      </div>
    </main>
  )
}
