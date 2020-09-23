import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";
// import { withRouter, Redirect } from "react-router";
import { Auth } from "aws-amplify";
import { useAppContext } from "../libs/contextLib";
import { onError } from "../libs/errorLib";
import { useFormFields } from "../libs/hooksLib";

const Login = () => {
  const history = useHistory();
  const { userHasAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: ""
  });

  function validateForm() {
    return fields.email.length > 0 && fields.password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    try {
      await Auth.signIn(fields.email, fields.password);
      userHasAuthenticated(true);
      history.push("/main");
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }

  return (
      <div className='login-page'>
    <div className='login'>
      <h1 className='main-blue'>Login</h1>
      <form className='login-form' onSubmit={handleSubmit}>
            <label>Email</label>
            <input 
              id="email"
              type="email" 
              value={fields.email}
              onChange={handleFieldChange}
              placeholder="Email" 
            />
            <label>Password</label>
            <input 
              id="password"
              type="password" 
              autoComplete="off"
              placeholder="Password" 
              value={fields.password}
              onChange={handleFieldChange}
            />
        <button 
          type="submit" 
          disabled={!validateForm() && isLoading}
        >
        {isLoading ? "Loading..." : "Login"}  
        </button>
        <p>Don't have an account? <NavLink className='main-blue' to='/signup'>Signup</NavLink></p>
      </form>
    </div>
    </div>
  );
};

export default Login;