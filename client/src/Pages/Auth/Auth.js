import React, { useState } from 'react';
import './Auth.css';
import Logo from '../../assets/stackoverflow_logo.jpg';
import { signup,login } from '../../actions/authActions'
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import AboutAuth from './AboutAuth';
const Auth = () => {
  const [isSignUp,setIsSignUp] = useState(false);
  const [name,setName] = useState('')
  const [password,setPassword] = useState('')
  const [email,setEmail] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogin = () =>{
    console.log(isSignUp);
    setIsSignUp(!isSignUp);
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!email || !password){
      alert("Enter Email and password")
    }
    if(isSignUp){
      if(!name){
      alert("Enter a name to continue")
      }
      dispatch(signup({name,email,password},navigate))
    }else {
    dispatch(login({email,password},navigate))
    }
    console.log({name,email,password})
  }
  return (
    <>
    <div className='Auth-page'> 
    {isSignUp && <AboutAuth/>}
      <div className='login-signup'>
    <form className='form' onSubmit={handleSubmit}>
    <img src={Logo} alt="logo" width='170'/>
      {isSignUp &&
      <>
       <label htmlFor='text'>
       <h4 style={{display:"flex",justifyContent:"center",alignContent:"center"}}>Display Name</h4> 
        <input className='input' type='text' name='text' id='text' onChange={(e)=>{setName(e.target.value)}}/></label>
       </>
       }
      <label  htmlFor='email'><h4 style={{display:"flex",justifyContent:"center",alignContent:"center"}}>Email Id</h4>
      <input className='input' type='email' name='email' id='email' onChange={(e)=>{setEmail(e.target.value)}} />
      </label>
      
      <label htmlFor='password'>
        <div style={{display:"flex", flexDirection:"row",justifyContent:isSignUp?"center":"space-between"}}>
        <h4 style={{marginBottom : isSignUp? "15px": "0px"}}>Password</h4>
        {!isSignUp &&
       <h5 className='password' style={{color:"#007ace",fontSize:"13px",fontWeight:"normal"}}>Forgot Password?</h5>
      }
      </div>
      <input className='input' type='password' name='password' id='password' onChange={(e)=>{setPassword(e.target.value)}} />
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
