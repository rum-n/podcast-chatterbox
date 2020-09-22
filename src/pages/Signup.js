import React from "react";
import { NavLink } from 'react-router-dom';

const SignUp = () => {
  // const handleSignUp = useCallback(async event => {
  //   event.preventDefault();
  //   const { email, password } = event.target.elements;
  //   try {
  //     await app
  //       .auth()
  //       .createUserWithEmailAndPassword(email.value, password.value);
  //     history.push("/main");
  //   } catch (error) {
  //     alert(error);
  //   }
  // }, [history]);

  return (
    <div className='login'>
      <h1 className='main-blue'>Signup</h1>
      <form className='login-form'>
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
      </form>
    </div>
  );
};

export default SignUp;