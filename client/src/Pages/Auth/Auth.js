import React, { useState } from 'react';
import './Auth.css';
import Logo from '../../assets/stackoverflow_logo.jpg';
const Auth = () => {
  const [isSignUp,setIsSignUp] = useState(false);
  const handleLogin = () =>{
    console.log(isSignUp);
    setIsSignUp(!isSignUp);
  }
  return (
    <>
    <div className='Auth-page'> 
    <div className='contents'>  {isSignUp &&
         <>
        <h3>Join the Stack Overflow community</h3>
        <h4>Get unstuck -- ask a question</h4>
        <h4>Unlock new privileges like voting and commenting</h4>
        <h4>Save your favorite tags, filters, and jobs</h4>
        <h4>Earn reputation and badges</h4>
        <p>Collaborate and share knowledge with a private group for </p>
        <p style={{color:"#007ace"}}>Get Stack Overflow for Teams free for up to 50 users</p>
       </>
      }
      </div>
      <div className='login-signup'>
      
    <form className='form'>
    <img src={Logo} alt="logo" width='170'/>
      {isSignUp &&
      <>
       <label htmlFor='text'>
       <h4 style={{display:"flex",justifyContent:"center",alignContent:"center"}}>Display Name</h4> 
        <input className='input' type='text' name='text' id='text'/></label>
       </>
       }
      <label  htmlFor='email'><h4 style={{display:"flex",justifyContent:"center",alignContent:"center"}}>Email Id</h4>
      <input className='input' type='email' name='email' id='email' />
      </label>
      
      <label htmlFor='password'>
        <div style={{display:"flex", flexDirection:"row",justifyContent:isSignUp?"center":"space-between"}}>
        <h4 style={{marginBottom : isSignUp? "15px": "0px"}}>Password</h4>
        {!isSignUp &&
       <h5 className='password' style={{color:"#007ace",fontSize:"13px",fontWeight:"normal"}}>Forgot Password?</h5>
      }
      </div>
      <input className='input' type='password' name='password' id='password' />
      </label>
      {isSignUp &&
        <p>
          password must contain atleast 8 characters <br/>
          with atleast 1 number and 1 special character
        </p> 
       }
     {isSignUp &&
        <p> 
          <input type='checkbox' className='checkbox' />
           Opt-in to receive occasional <br/>
           product updates, user research invitations,<br/>
           company announcements,and digests.
        </p>
        }
        <div className='button'>
       <button type="submit">
        {!isSignUp?
        <>Login</>:
        <>SignUp</>
        }
        </button></div>
        {isSignUp &&
     <p>By Clicking "Sign Up", you agree to our <br/><span style={{color:"#007ace"}}>terms</span> <span>of </span><span style={{color:"#007ace"}}>
      service </span>, <span style={{color:"#007ace"}}>privacy policy</span><br/>and <span style={{color:"#007ace"}}>cookie policy</span></p>}
    </form>
    <p>{!isSignUp ?
       "Don't have an account?" : "Already have an account?"
     }
     <span style={{color:"#007ace",fontSize:"13px",marginLeft:"5px",cursor:"pointer"}} onClick={handleLogin}>
      {isSignUp ?
      <>Login</>:<>SignUp</>
      }
    
     </span>
     </p>
     
    </div>
  </div>
  </>
  )
}

export default Auth
