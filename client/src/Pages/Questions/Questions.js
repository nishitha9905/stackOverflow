import React from 'react'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import MainMenu from '../../components/MainMenu/MainMenu'
import RightSideBar from '../../components/RightSideBar/RightSideBar'
import '../../App.css'

const Questions = () => {
  return (
    <div className='home-container1'>
       <LeftSideBar/>
       <div className='home-container2'>
        <MainMenu/>
       </div>
       <div className='home-container3'>
        <RightSideBar/>
       </div>
    </div>
  )
}

export default Questions