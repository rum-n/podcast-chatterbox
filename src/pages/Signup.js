import React from "react"
import { toast } from "react-toastify"
import { register } from "./../data/fauna-queries"
import {
  safelyExtractErrorCode,
  errorCodeToRegisterErrorMessage
} from "./../util/error-handling"

// Components
import Form from "./../components/form"

const handleRegister = (event, username, password) => {
  register(username, password)
    .then(e => {
      toast.success("User registered")
    })
    .catch(err => {
      console.error("error on register", err)
      const errorCode = safelyExtractErrorCode(err)
      toast.error(errorCodeToRegisterErrorMessage(errorCode))
    })
  event.preventDefault()
}

const SignUp = () => { 
  return <Form isLogin={false} handleSubmit={handleRegister}></Form>
}

  export default SignUp;
    
    // <div className='login'>
    //   <h1 className='main-blue'>Signup</h1>
    //   <form className='login-form' onSubmit={handleSignUp}>
    //     <label>
    //       Email
    //     </label>
    //       <input name="email" type="email" placeholder="Email" />
    //     <label>
    //       Password
    //     </label>
    //       <input name="password" type="password" placeholder="Password" />
    //     <button type="submit">Signup</button>
    //     <p>Already have an account? <NavLink className='main-blue' to='/login'>Login</NavLink></p>
    //   </form>
    // </div>

