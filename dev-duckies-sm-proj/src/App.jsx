import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import './App.css'

export default function App() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChange = (event) => {
        setState(event.target.value);
        console.log(state)
    };

  return(
    <main>
      <div className='card-container'>
       <div className="register-card">

        <input className="email-box"
               type="text" 
               placeholder='Email Address'>
        </input>

        <input className="password-box"
               type="text" 
               placeholder='Password'>
        </input>

        <input className="password-confirm-box"
               type="text"
               placeholder='Confirm Password'>
        </input>
        <button>Create Account</button>
       </div>
      </div>
    </main>
  )
}
