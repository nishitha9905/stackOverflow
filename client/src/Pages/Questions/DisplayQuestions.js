import React from 'react'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import RightSideBar from '../../components/RightSideBar/RightSideBar'
import QuestionDetails from './QuestionDetails'
const DisplayQuestions = () => {
  return (
    <div className='home-container1'>
       <LeftSideBar/>
       <div className='home-container3'>
        <QuestionDetails/>
       </div>
       <div className='home-container3'>
        <RightSideBar/>
       </div>
    </div>
  )
}

export default DisplayQuestions