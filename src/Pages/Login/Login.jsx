import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {


const locate= useNavigate()
  let [userValues, setUserValues] = useState({
    email:"",
    password:""
  })
  let [isMailValid, setIsMailValid] = useState(true)
  let [isPasswordValid, setIsPasswordValid] = useState(true)

  const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const isFormValid= emailRegex.test(userValues.email) && passwordRegex.test(userValues.password)
   const onInputChange=(e)=>{
    setUserValues({...userValues,[e.target.name]:e.target.value})
 }
 const emailValidate=()=>{
    setIsMailValid(emailRegex.test(userValues.email))
 }
  const passwordValidate=()=>{
    setIsPasswordValid(passwordRegex.test(userValues.password))
 }
 const formSubmitHandler=(e)=>{
    e.preventDefault();
    if(isFormValid){
    locate('/list')

    }
    setUserValues({
        email:"",
        password:""
    })
 }
  return (
   <form className='login-form' onSubmit={formSubmitHandler} action="">
    <div className="form-control text-center">
        <label htmlFor="">User Name</label><br/>
        <input onChange={onInputChange} onBlur={emailValidate} type="text" value={userValues.email} name='email'/><br/>      
        {!isMailValid &&(
            <span className='text-danger'>Enter a valid email id</span>
        ) } 
         </div>
    <div className="form-control text-center">
        <label htmlFor="">Password</label><br/>
        <input onChange={onInputChange} onBlur={passwordValidate} type="password" value={userValues.password} name='password'/><br/>
        {!isPasswordValid &&(
            <span className='text-danger'>Enter a valid password</span>
        )}
         </div>
    <button disabled={!isFormValid} type='submit' className='btn btn-primary mt-3'>Submit</button>
   </form>
  )
}

export default Login
