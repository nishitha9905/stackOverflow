import React from 'react'
import QuestionDetails from './QuestionDetails'
import Avatar from '../../components/Avatar/Avatar'
import { Link } from 'react-router-dom'
const DisplayAnswer = ({question}) => {
  return (
    <div>
        {question.answer.map((ans)=>(
            <div className='display-ans' key={ans.id}>
                <p>{ans.answerBody}</p>
                <div className='question-action-user'>
                     <div>
                        <button type="button">Share</button>
                        <button type="button">Delete</button>
                     </div>
                     <div>
                        <p>Answered {ans.answeredOn}</p>
                        <Link to={`/user/${question.userid}`} className='user-link' style={{color:"#0086d8",textDecoration:"none"}}>
                            <Avatar backgroundColor="green" padding="5px 8px">{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                        <div>
                            {ans.userAnswered}
                        </div>
                        </Link>
                     </div>
                </div>
            </div>
            
        ))}
    </div>
  )
}

export default DisplayAnswer