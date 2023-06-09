import React from 'react'
import  LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import RightSideBar from '../../components/RightSideBar/RightSideBar'
import MainMenu from '../../components/MainMenu/MainMenu'
const Home = () => {
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

export default Home
