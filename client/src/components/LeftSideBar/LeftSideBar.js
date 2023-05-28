import React from 'react'
import { NavLink } from 'react-router-dom'
import './LeftSideBar.css'

const LeftSideBar = () => {
  return (
    <div className='leftside-nav'>
        <nav className='leftside-nav1'>
            <NavLink to='/' className='side-nav-links' activeclass='active-class'>
                <p>Home</p>
            </NavLink>
        <div className='side-nav-div'>
            <div><p>PUBLIC</p></div>
            <NavLink to='/Questions' className='side-nav-links' activeclass='active-class' >
                <p style={{paddingLeft:"10px"}}>Questions</p>
            </NavLink>
            <NavLink to='/Tags' className='side-nav-links' activeclass='active-class' >
                <p style={{paddingLeft:"10px"}}>Tags</p>
            </NavLink>
            <NavLink to='/users' className='side-nav-links' activeclass='active-class' >
                <p style={{paddingLeft:"10px"}}>Users</p>
            </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default LeftSideBar;
