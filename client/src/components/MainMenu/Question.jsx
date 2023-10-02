import React from 'react'
import { Link } from 'react-router-dom'
import './MainMenu.css'
import moment from 'moment'

const Question = ({question}) => {
  return (
    <div className='display-ans-container'>
        <div className='display-votes-ans'>
            <p> {question.upVote.length - question.downVote.length} </p>
            <p>Votes</p>
        </div>
        <div className='display-votes-ans'>
            <p>{question.answer.length}</p>
            <p>Answers</p>
        </div>
        <div className='display-question-details'>
            <Link to={`/Questions/${question._id}`} className='question-title-link'>{question.questionTitle}</Link>
            <div className='display-tags-time'>
              <div className='display-tags'>
                {question.questionTags.map((tag)=>(
                  <p key={tag}>{tag}</p>
                ))}
              </div>
              <p className='display-time'>Asked {moment(question.askedOn).fromNow()} {question.userPosted}</p>
            </div>
        </div>

    </div>
  )
}

export default Question