import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { useAppContext } from "../libs/contextLib";
import { useFormFields } from "../libs/hooksLib";
import { onError } from "../libs/errorLib";
import { Auth } from "aws-amplify";
import "./styles.css";

const SignUp = () => {
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
    confirmPassword: "",
    confirmationCode: "",
  });
  const history = useHistory();
  const [newUser, setNewUser] = useState(null);
  const { userHasAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return (
      fields.email.length > 0 &&
      fields.password.length > 0 &&
      fields.password === fields.confirmPassword
    );
  }

  function validateConfirmationForm() {
    return fields.confirmationCode.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
  
    setIsLoading(true);
  
    try {
      const newUser = await Auth.signUp({
        username: fields.email,
        password: fields.password,
      });
      setIsLoading(false);
      setNewUser(newUser);
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }

  async function handleConfirmationSubmit(event) {
    event.preventDefault();
  
    setIsLoading(true);
  
    try {
      await Auth.confirmSignUp(fields.email, fields.confirmationCode);
      await Auth.signIn(fields.email, fields.password);
  
      userHasAuthenticated(true);
      history.push("/");
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }

  function renderConfirmationForm() {
    return (
      <form className='login-form' onSubmit={handleConfirmationSubmit}>
        
          <label>Confirmation Code</label>
          <input
            id="confirmationCode"
            autoFocus
            type="tel"
            onChange={handleFieldChange}
            value={fields.confirmationCode}
          />
          <p>Please check your email for the code.</p>
        
        <button
          type="submit"
          disabled={!validateConfirmationForm() && isLoading}
        >
          {isLoading ? "Loading..." : "Verify"}
        </button>
      </form>
    );
  }

  function renderForm() {
    return (
      <form className='login-form' onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            id="email"
            autoFocus
            type="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
          <label>Password</label>
          <input
            id="password"
            type="password"
            value={fields.password}
            onChange={handleFieldChange}
          />
          <label>Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            onChange={handleFieldChange}
            value={fields.confirmPassword}
          />
        <button
          type="submit"
          disabled={!validateForm() && isLoading}
        >
          {isLoading ? "Loading..." : "Signup"}
        </button>
        <p>Already have an account? <NavLink className='main-blue' to='/login'>Login</NavLink></p>
      </form>
    );
  }



  return (
    <div className='login'>
      <h1 className='main-blue'>Signup</h1>
      {newUser === null ? renderForm() : renderConfirmationForm()}
      {/* <form className='login-form'>
        <label>
          Email
        </label>
          <input name="email" type="email" placeholder="Email" />
        <label>
          Password
        </label>
          <input name="password" type="password" placeholder="Password" />
        <button type="submit">Signup</button>
        <p>Already have an account? <NavLink className='main-blue' to='/login'>Login</NavLink></p>
      </form> */}
    </div>
  );
};

export default SignUp;