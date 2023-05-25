import React, { useRef } from 'react'
import './sign.css'
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';


//step 63
function SignUp() {

  //step 71
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  //step 68 authantication
  const register = (e) =>{
    e.preventDefault();
    //step 72
    createUserWithEmailAndPassword (
      auth,
      //step 74
      emailRef.current.value,
      passwordRef.current.value

    ).then((authUser)=> {
      console.log(authUser);

    }).catch ((error) => {
      alert(error.message);
    });

  }

  const signIn = (e)=>{
    e.preventDefault();

    //step 75 
    signInWithEmailAndPassword (
      auth,
      emailRef.current.value,
      passwordRef.current.value

    ).then((authUser)=> {
      console.log(authUser);

    }).catch ((error) => {
      alert(error.message);
    });
//step 76 got to app js

  }
  //step 69 create firbase.js and import config
  return (
    <div className='signScreen'>
    <form>
        <h1>Sign In</h1>

            {/*step 73 */}
        <input ref={emailRef} placeholder="Email" type="email" />
        <br />
        <input ref={passwordRef} type="passwrod" placeholder='passowrd' />
        <br />
         <button type='submit' className='btn' onClick={signIn}>SignIn</button>
           {/*66 // step 67 back to css */}
<br />
    <span>New to Netflix ? <a href="/" onClick={register}>Sign up now.</a></span>
    </form> 
  
</div>
  )
  //step 64 css


}

export default SignUp