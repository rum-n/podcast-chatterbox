import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./../base.js";
import { AuthContext } from "./../Auth.js";
import { NavLink } from 'react-router-dom';

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/main");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/main" />;
  }

  return (
      <div className='login-page'>
    <div className='login'>
      <h1 className='main-blue'>Login</h1>
      <form className='login-form' onSubmit={handleLogin}>
            <label>Email</label>
            <input name="email" type="email" placeholder="Email" />
            <label>Password</label>
            <input name="password" type="password" placeholder="Password" />
        <button type="submit">Login</button>
        <p>Don't have an account? <NavLink className='main-blue' to='/signup'>Signup</NavLink></p>
      </form>
    </div>
    </div>
  );
};

export default withRouter(Login);