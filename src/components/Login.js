import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, updateProfile ,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVTAR } from '../utils/constants';

const Login = () => {
  const navigate = useNavigate();
  const [isSignInForm ,setIsSignInForm] = useState(true);  
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();
  
  const [errorMessage , setErrorMessage] = useState(null);
  
  const handleButtonClick = () => {
      //Validate the form data
    const message = checkValidData(email.current.value , password.current.value)
    setErrorMessage(message);

    if (message ) return;

    if(!isSignInForm){
      createUserWithEmailAndPassword(
        auth, 
        email.current.value, 
        password.current.value
        )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: {USER_AVTAR}
          })  
            .then(()=>{
              const {uid , email ,displayName,photoURL} = auth.currentUser;
              dispatch(
                addUser({
                uid : uid ,
                email: email , 
                displayName : displayName,
               photoURL: photoURL
              })
            );
            navigate("/browse")
            })
          })
        .catch((error) => {;
          const errorMessage = error.message;
          setErrorMessage(errorMessage)
        });

    }else{
      signInWithEmailAndPassword(
        auth, 
        email.current.value, 
        password.current.value
        )
        .then((userCredential) => {
          const user = userCredential.user;
          
          navigate("/browse")
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = "Password Does Not Match";
          setErrorMessage(errorMessage)
        });
    }    
  }

  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};
export default Login;