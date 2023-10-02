import React ,{useState} from 'react'
import { Link, useNavigate, useParams ,useLocation } from 'react-router-dom'
import './Questions.css'
import DisplayAnswer from './DisplayAnswer'
import Avatar from '../../components/Avatar/Avatar'
import { useSelector,useDispatch } from 'react-redux'
import { deleteQuestion, postAnswer ,voteQuestion} from '../../actions/Questions'
import moment  from 'moment'
import copy from 'copy-to-clipboard'
import downArrow from '../../assets/down.png'
import upArrow from '../../assets/caret-arrow-up.png'

// var questionList = [
//     {
//     _id:'1',
//     votes:2,
//     upVotes:3,
//     downVotes:2,
//     noOfAnswers:4,
//     questionTitle:"What is a Function?",
//     questionBody:"It meant to be",
//     questionTags:['JavaScript','R','Python'],
//     userPosted:'Nishi',
//     askedOn:'Jan 1',
//     userid:1,
//     answer : [{
//         answerBody :"Answer",
//         userAnswered:"Ram",
//         answeredOn:"Jan 2",
//         userid:2
//     }]
//    },
//    {
//     _id:'2',
//     votes:2,
//     upVotes:3,
//     downVotes:2,
//     noOfAnswers:4,
//     questionTitle:"What is a Function?",
//     questionBody:"It meant to be",
//     questionTags:['JavaScript','R','Python'],
//     userPosted:'Nishi',
//     askedOn:'Jan 1',
//     userid:2,
//     answer : [{
//         answerBody :"Answer",
//         userAnswered:"Kamal",
//         asweredOn:"jan 2",
//         userid:2
//     }]
//    },
//    {
//     _id:'3',
//     votes:2,
//     upVotes:3,
//     downVotes:2,
//     noOfAnswers:4,
//     questionTitle:"What is a Function?",
//     questionBody:"It meant to be",
//     questionTags:['JavaScript','R','Python'],
//     userPosted:'Nishi',
//     askedOn:'Jan 1',
//     userid:3,
//     answer : [{
//         answerBody :"Answer",
//         userAnswered:"Vimal",
//         asweredOn:"jan 2",
//         userid:2
//     }]
//    }

// ]
const QuestionDetails = () => {
    const {id} = useParams();
    const [answer,setAnswer] = useState('')
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => (state.currentUserReducer))
    const location = useLocation()
    const url = "https://localhost:3000"
    const questionList = useSelector(state => (state.questionsReducer))
    const  handleShare = () =>{
        copy(url + location.pathname)
        alert("copied url :" +url+location.pathname)
    }

    const handleDelete = () =>{
        dispatch(deleteQuestion(id,Navigate))
    }
    const handlePostAnswer = (e,answerLength) =>{
        e.preventDefault();
        if(user === null){
            alert('login or signup to answer a question')
            Navigate('/Auth')
        }
        else{
            if(answer === ''){
                alert("Enter an answer before submitting")
            }
            else{
                dispatch(postAnswer({id, noOfAnswers:answerLength + 1 ,answerBody:answer,userAnswered:user.result.name,userId:user.result._id}))
            }
        }

    }
    const handleUpVotes = () =>{
        dispatch(voteQuestion(id,"upVote",user.result._id))
    }
    const handleDownVotes = () =>{
        dispatch(voteQuestion(id,"downVote",user.result._id))
    }
    
  return (
    <div className='question-details-page'>
        {questionList.data===null?
        <h1>Loading...</h1>
        :
        <>
        {
            questionList.data.filter(question => question._id === id).map((question)=> (
                <div key={question._id}>
                    <section className='question-details-container'>
                        <h1>{question.questionTitle}</h1>
                        <div className='question-details-container2'>
                            <div className='question-votes'>
                                <img src={upArrow} width="16px"  alt="upvote" onClick={handleUpVotes} style={{cursor:"pointer"}}/>
                                <p>{question.upVote.length-question.downVote.length}</p>
                                <img src={downArrow} width="18px"  alt="downvote" onClick={handleDownVotes}  style={{cursor:"pointer"}}/>
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
                                        <button type='button' onClick={handleShare}>Share</button>
                                        {user?.result?._id === question?.userId &&
                                        <button type='button' onClick={handleDelete}>Delete</button>
                                        }
                                        
                                    </div>
                                    <div>
                                        <p>Asked {moment(question.askedOn).fromNow()}</p>
                                        <Link to={`/users/${question.userId}`} className='user-link' style={{color:"#0086d8",textDecoration:"none"}}>
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
                                <h3>{question.answer.length} Answers</h3>
                                <DisplayAnswer key={question._id} question={question} handleShare={handleShare}/>
                            </section>
                        )
                    }
                    <section className='post-ans-container'>
                        <h3>Your Answers</h3>
                        <form onSubmit={(e) =>{handlePostAnswer(e,question.answer.length)}}>
                            <textarea name="" id="" cols="38" rows="10" onChange={e =>setAnswer(e.target.value)}></textarea><br/>
                            <input type="Submit" className='post-ans-btn' value="Post Your Answer"/>
                        </form>
                        <p>
                            Browse Other Question Tagged
                            {
                                question.questionTags.map((tags)=>(
                                    <Link to='/Tags' key={tags} className='ans-tag'>{tags}</Link>
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