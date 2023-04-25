import React, { useRef } from "react";
import "./SignUpScreen.css";
import { auth } from "./Firebase";

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
        ).then((UserAuth)=>{
console.log(UserAuth)
        })
        .catch((error)=>{
            alert(error.message)
        })
  };

  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
    ).then((UserAuth)=>{
        console.log(UserAuth)
    }).catch((error)=>{
        alert(error.message)
        
    })
  };
  return (
    <div className="signUpScreen">
      <form>
        <h1> Sign In </h1>
        <input  ref={emailRef}  placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="SignUpScreen__Grey">New to Netflix?</span>
          <span className="SignUpScreen__Link" onClick={register}>
            Sign Up Now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
