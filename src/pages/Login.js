import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { Auth } from "aws-amplify";
import { useAppContext } from "../libs/contextLib";

const Login = () => {
  const { userHasAuthenticated } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
  
    try {
      await Auth.signIn(email, password);
      userHasAuthenticated(true);
    } catch (e) {
      alert(e.message);
    }
  }

  return (
      <div className='login-page'>
    <div className='login'>
      <h1 className='main-blue'>Login</h1>
      <form className='login-form' onSubmit={handleSubmit}>
            <label>Email</label>
            <input 
              name="email" 
              type="email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email" 
            />
            <label>Password</label>
            <input 
              name="password" 
              type="password" 
              autoComplete="off"
              placeholder="Password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
        <button 
          type="submit" 
          disabled={!validateForm()}
        >
          Login
        </button>
        <p>Don't have an account? <NavLink className='main-blue' to='/signup'>Signup</NavLink></p>
      </form>
    </div>
    </div>
  );
};

export default Login;