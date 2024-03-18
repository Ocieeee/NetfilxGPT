import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';

const Login = () => {

  const [isSignInForm ,setIsSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage , setErrorMessage] = useState(null);
  
  const handleButtonClick = () => {
      //Validate the form data
    const message = checkValidData(email.current.value , password.current.value)
    setErrorMessage(message);

    console.log(email.current.value);
    console.log(password.current.value);
  }

  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg'
        alt='logo'>
        </img>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1 
          className='font-bold text-3xl py-4'>
          {isSignInForm ? "Sign In " : "Sign Up"}
        </h1>
        
        <input 
        ref={email}
        type='text' 
        placeholder='Email'
        className='p-4 my-4 w-full bg-gray-600'/>

        {!isSignInForm && (
        <input 
        type='text' 
        placeholder='Full Name'
        className='p-4 my-4 w-full bg-gray-600'/>
        )}

        <input 
        ref={password}
        type='Password' 
        placeholder='Password'
        className='p-4 my-4 w-full  bg-gray-600'/>
        
        <p className='text-red-500 font-bold text-lg'>{errorMessage}</p>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer'
        onClick={handleButtonClick}>
          {isSignInForm ? "Sign In  " : "Sign Up"}
        </button>
        
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
        {isSignInForm 
        ? "New to Netfilx ? Sign Up " 
        : "Already registered ? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login