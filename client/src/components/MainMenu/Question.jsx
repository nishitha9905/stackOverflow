import React from 'react'
import { Link } from 'react-router-dom'
import './MainMenu.css'

const Question = ({question}) => {
  return (
    <div className='display-ans-container'>
        <div className='display-votes-ans'>
            <p>{question.votes}</p>
            <p>Votes</p>
        </div>
        <div className='display-votes-ans'>
            <p>{question.noOfAnswers}</p>
            <p>Answers</p>
        </div>
        <div className='display-question-details'>
            <Link to={`/Questions/${question.id}`} className='question-title-link'>{question.questionTitle}</Link>
            <div className='display-tags-time'>
              <div className='display-tags'>
                {question.questionTags.map((tag)=>(
                  <p key={tag}>{tag}</p>
                ))}
              </div>
              <p className='display-time'>Asked {question.askedOn} {question.userPosted}</p>
            </div>
        </div>

    </div>
  )
}

export default Question