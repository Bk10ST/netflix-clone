//step 51
import React, { useState } from 'react'
import './Loginscreen.css' // step 52
import SignUp from './SignUp';


function Login() {
    //step 60
    const [signIn, setSignIn] = useState(false); //when loginbtn is click

  return (
    <div className='loginscreen'>
        <div className="loginscreenbackground">
            <img className='loginscreenlogo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" /> {/**step 53 //css step 54 */}
        </div>

        {/**step 54 */} {/**step 55 btn css           step 61 */}  
        <button className='login_btn'onClick={() => setSignIn(true)} >Sign In</button>
        {/*56 //step58 go back to css  */}
        <div className="gradiant"></div>

        {/*step 58  // step 59 css // st*/}
        <div className="loginscreen_body">
            {/*step 63 create signIn file */}
            {signIn ? (
             <SignUp/>
            ) : (
                <>
                <h1>
                    Unlimited film, TV programmers and more.
                </h1>
                <h3>  <h2>watch any were cancel it anytime</h2>
                ready to watch ? Enter your email to create or restart your membership
    
                </h3>
                <div className="loginscreen_input">
                    <form action="">
                        <input type="email" placeholder='email address' />
                        <button
                    //step 62
                    onClick={()=> setSignIn(true)}    
                        
                    className='login-getstarted'>GET STARTED</button>
                    </form>
                </div>
                </>
            )}
        
        </div>
    </div>
  )
}

export default Login;