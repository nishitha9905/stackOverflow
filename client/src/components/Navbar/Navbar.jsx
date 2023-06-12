import React from 'react'
import {Link}  from "react-router-dom";
import './Navbar.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import Avatar from '../Avatar/Avatar';
const Navbar =()=>{
  var user = null;
  return(
<>
    <div>
        <nav className='navbar'>
           <Link to='/' className='img-class'>
            <img src={logo} alt='logo' width='20'/>
           StackOverFlow</Link>
           <Link to='/' className='img-class1'>About</Link>
           <Link to='/' className='img-class1'>Products</Link>
           <Link to='/' className='img-class1'>For Teams</Link>
           <form>
           <input type='text' placeholder='Search...' />
            <img src={search} alt="logo" width="20" style={{marginLeft:"-20px",marginBottom:"-7px",color:"black"}}/>
           </form>
           {user === null ?
              <Link to='/Auth' className='navbar-navbarLink'>Log In</Link>:
              <>
              <Link to='/' style={{textDecoration:"none",color:"#fff"}}><Avatar backgroundColor="#009dff" padding="6px 10px" cursor="pointer" borderRadius="50%" color="white" fontSize="14px">N</Avatar></Link>
              <Link to='/' className='navbar-navbarLink'>Logout</Link>
              </>  
           }
        </nav>
    </div>
</>
  )
}

export default Navbar;
