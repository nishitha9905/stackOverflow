import React, { useState } from 'react'
import './AskQuestion.css'
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { askQuestion } from '../../actions/Questions';
const AskQuestion = () => {
    const [questionTitle,setQuestionTitle] = useState('');
    const [questionBody,setQuestionBody] = useState('');
    const [questionTags,setQuestionTags] = useState('');
    const dispatch = useDispatch()
    const User = useSelector((state) =>(state.currentUserReducer))
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log({ questionTitle , questionBody ,questionTags })
        dispatch(askQuestion({questionTitle,questionBody,questionTags,userPosted:User.result.name ,userId : User?.result?._id},navigate))
    }

    const handleEnter = (e) =>{
        if(e.key === "Enter"){
            setQuestionBody(questionBody +"\n");
        }
    }

  return (
    <div className='ask-question'>
        <div className='ask-question-container'>
            <h1>Ask a public Question</h1>
            <form onSubmit={handleSubmit}>
                <div className='ask-form-question'>
                    <label htmlFor='ask-question-title'>
                        <h4>Title</h4>
                        <p>Be Specific and you're asking a question to another person </p>
                        <input type='text' id='ask-question-title' placeholder='e.g.is there an R function for finding an index of an element in a vector' onChange={(e) =>{setQuestionTitle(e.target.value)}} />
                    </label>
                    <label htmlFor='ask-question-body'>
                        <h4>Body</h4>
                        <p>Include all the information someone would need to answer your question </p>
                        <textarea id='ask-question-body' rows='5' cols='110' onChange={(e) =>{setQuestionBody(e.target.value)}} onKeyPress={handleEnter} ></textarea>
                    </label>
                    <label htmlFor='ask-question-tags'>
                        <h4>Tags</h4>
                        <p>Add upto 5 Tags to describe what your question is about </p>
                        <input type='text' id='ask-question-tags' placeholder='(e.g.xml typescript word)' onChange={(e) =>{setQuestionTags(e.target.value)}}/>
                    </label>
                </div>
                <input type='submit' className='button1' value='Review your Question' />
            </form>

        </div>
    </div>
  
  )
}

export default AskQuestion