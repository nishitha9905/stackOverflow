import React from 'react'
import './MainMenu.css'
import {useLocation,useNavigate} from 'react-router-dom';
import { useSelector} from 'react-redux';
import QuestionsList from './QuestionsList';
const MainMenu = () => {
//     var questionList = [
//         {
//         id:1,
//         votes:2,
//         noOfAnswers:0,
//         questionTitle:"What is a Function?",
//         questionBody:"It meant to be",
//         questionTags:['JavaScript','R','Python'],
//         userPosted:'Nishi',
//         askedOn:'Jan 1'
//        },
//        {
//         id:2,
//         votes:2,
//         noOfAnswers:0,
//         questionTitle:"What is a Function?",
//         questionBody:"It meant to be",
//         questionTags:['JavaScript','R','Python'],
//         userPosted:'Nishi',
//         askedOn:'Jan 1'
//        },
//        {
//         id:3,
//         votes:2,
//         noOfAnswers:0,
//         questionTitle:"What is a Function?",
//         questionBody:"It meant to be",
//         questionTags:['JavaScript','R','Python'],
//         userPosted:'Nishi',
//         askedOn:'Jan 1'
//        }

// ]
const location = useLocation();
const navigate = useNavigate();

const questionList = useSelector(state => state.questionsReducer)
console.log("questionsList",questionList.data)
var user = useSelector((state) => (state.currentUserReducer));
const checkAuth = () => {
  if(user===null){
    alert('login or signup to Ask Question')
    navigate('/Auth')
  }
  else {
    navigate('/AskQuestion')
  }
}
  return (
    <div className='main-menu-bar'>
        <div className='main-menu-bar-header'>
            {
                location.pathname==='/'?<h1>Top Questions</h1>:<h1>All Questions</h1>
            }
            <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
        </div>
      <div>
        {questionList.data===null?
        <h1>Loading....</h1>
        :
        <>
        <p>{questionList.data.length} Questions</p>
        <QuestionsList questionList={questionList.data}/>
        </>
        }
      </div>
    </div>
  )
}

export default MainMenu
