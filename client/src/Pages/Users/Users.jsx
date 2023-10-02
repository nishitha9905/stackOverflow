import React from 'react'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import './Users.css'
import UsersList from './UsersList'

const Users = () => {

  return (
    <div class="home-container1">
        <LeftSideBar />
        <div class="home-container-2" style={{marginTop:"10px"}}>
            <h1 style={{fontWeight:"400"}}>Users </h1>
            <UsersList /> 
        </div>
    </div>
  )
}

export default Users