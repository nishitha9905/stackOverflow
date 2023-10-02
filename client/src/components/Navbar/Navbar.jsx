import React ,{useEffect} from 'react'
import {Link, useNavigate}  from "react-router-dom";
import './Navbar.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import Avatar from '../Avatar/Avatar';
import { useSelector, useDispatch} from 'react-redux';
import { setCurrentUser } from '../../actions/currentUser';
import decode from 'jwt-decode'


const Navbar =()=>{
  const dispatch = useDispatch()
  var user = useSelector((state) => (state.currentUserReducer));
  // var user = JSON.parse(localStorage.getItem("PROFILE"))
  console.log("===============15",user);
  const Navigate = useNavigate();

  const handleLogout = () =>{ 
    dispatch({type :'LOGOUT'})
    Navigate('/')
    dispatch(setCurrentUser(null))
  }

  useEffect(()=>{
    const token = user?.token
    if(token){
      const decodedToken = decode(token)
      if(decodedToken.exp *1000  < new Date().getTime()){
        handleLogout()
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('PROFILE'))))
  },[dispatch])


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
           { user === null ?
              <Link to='/Auth' className='navbar-navbarLink' style={{cursor:"pointer"}}>Log In</Link>:
              <>
              <Avatar backgroundColor="#009dff" padding="6px 10px" cursor="pointer" borderRadius="50%" color="white" fontSize="14px"><Link to={`/Users/${user?.result._id}`} style={{textDecoration:"none",color:"#fff"}}>{user?.result?.name.charAt(0).toUpperCase()}</Link></Avatar>
              <button  className='navbar-navbarLink' style={{cursor:"pointer"}} onClick={handleLogout}>Logout</button>
              </>  
           }
        </nav>
    </div>
</>
  )
}

export default Navbar;
