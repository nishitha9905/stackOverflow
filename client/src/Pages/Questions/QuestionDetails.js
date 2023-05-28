import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './Questions.css'
import DisplayAnswer from './DisplayAnswer'
import Avatar from '../../components/Avatar/Avatar'
var questionList = [
    {
    id:'1',
    votes:2,
    upVotes:3,
    downVotes:2,
    noOfAnswers:4,
    questionTitle:"What is a Function?",
    questionBody:"It meant to be",
    questionTags:['JavaScript','R','Python'],
    userPosted:'Nishi',
    askedOn:'Jan 1',
    userid:1,
    answer : [{
        answerBody :"Answer",
        userAnswered:"Ram",
        answeredOn:"Jan 2",
        userid:2
    }]
   },
   {
    id:'2',
    votes:2,
    upVotes:3,
    downVotes:2,
    noOfAnswers:4,
    questionTitle:"What is a Function?",
    questionBody:"It meant to be",
    questionTags:['JavaScript','R','Python'],
    userPosted:'Nishi',
    askedOn:'Jan 1',
    userid:2,
    answer : [{
        answerBody :"Answer",
        userAnswered:"Kamal",
        asweredOn:"jan 2",
        userid:2
    }]
   },
   {
    id:'3',
    votes:2,
    upVotes:3,
    downVotes:2,
    noOfAnswers:4,
    questionTitle:"What is a Function?",
    questionBody:"It meant to be",
    questionTags:['JavaScript','R','Python'],
    userPosted:'Nishi',
    askedOn:'Jan 1',
    userid:3,
    answer : [{
        answerBody :"Answer",
        userAnswered:"Vimal",
        asweredOn:"jan 2",
        userid:2
    }]
   }

]
const QuestionDetails = () => {
    const {id} = useParams();
  return (
    <div className='question-details-page'>
        {questionList===null?
        <h1>Loading...</h1>
        :
        <>
        {
            questionList.filter(question => question.id === id).map((question)=> (
                <div key={question.id}>
                    <section className='question-details-container'>
                        <h1>{question.questionTitle}</h1>
                        <div className='question-details-container2'>
                            <div className='question-votes'>
                                <p>{question.upVotes-question.downVotes}</p>
                            </div>
                            <div style={{width:"100%"}}>
                                <p className='question-body'>{question.questionBody}</p>
                                <div className='question-details-tags'>
                                    {
                                        question.questionTags.map((tag)=>(
                                            <p key={tag}>{tag}</p>
                                        ))
                                    }
                                </div>
                                <div className='question-action-user'>
                                    <div>
                                        <button type='button'>Share</button>
                                        <button type='button'>Delete</button>
                                    </div>
                                    <div>
                                        <p>Asked {question.askedOn}</p>
                                        <Link to={`/user/${question.userid}`} className='user-link' style={{color:"#0086d8",textDecoration:"none"}}>
                                            <Avatar backgroundColor="orange" padding="5px 8px">{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                        <div>
                                            {question.userPosted}
                                        </div>
                                       </Link> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {
                        question.noOfAnswers !== 0 && (
                            <section>
                                <h3>{question.noOfAnswers} Answers</h3>
                                <DisplayAnswer key={question.id} question={question}/>
                            </section>
                        )
                    }
                    <section className='post-ans-container'>
                        <h3>Your Answers</h3>
                        <form>
                            <textarea name="" id="" cols="38" rows="10"></textarea><br/>
                            <input type="Submit" className='post-ans-btn' value="Post Your Answer"/>
                        </form>
                        <p>
                            Browse Other Question Tagged
                            {
                                question.questionTags.map((tag)=>(
                                    <Link to='/Tags' key={tag} className='ans-tag'>{tag}</Link>
                                ))
                            } or
                            <Link to='/AskQuestion' style={{textDecoration:"none",color:"#009dff"}}>Ask Your Own Question</Link>
                        </p>
                    </section>
                </div>
            ))
        }
        </>
        }
    </div>
  )
}

export default QuestionDetails