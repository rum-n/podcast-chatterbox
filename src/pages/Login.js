import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import SessionContext from './../context/session';
import { login } from '../data/fauna-queries';
import Form from '../components/Form';

const handleLogin = (event, username, password, history, sessionContext) => {
  login(username, password)
    .then(() => {
      toast.success('Login successful')
      sessionContext.dispatch({ type: 'login', data: { user: username } })
      history.push('/')
    })
    .catch(err => {
      console.error('error on login', err)
      toast.error('Login failed')
    })
  event.preventDefault()
}

const Login = props => {
  const history = useHistory()
  const sessionContext = useContext(SessionContext)

  return (
    <Form
      isLogin={true}
      handleSubmit={(event, username, password) => handleLogin(event, username, password, history, sessionContext)}> 
    </Form>


    //   <div className='login-page'>
    // <div className='login'>
    //   <h1 className='main-blue'>Login</h1>
    //   <form className='login-form' onSubmit={handleLogin}>
    //         <label>Email</label>
    //         <input name="email" type="email" placeholder="Email" />
    //         <label>Password</label>
    //         <input name="password" type="password" placeholder="Password" />
    //     <button type="submit">Login</button>
    //     <p>Don't have an account? <NavLink className='main-blue' to='/signup'>Signup</NavLink></p>
    //   </form>
    // </div>
    // </div>
  );
};

export default Login;