import React from 'react'
import './AskQuestion.css'

const AskQuestion = () => {
  return (
    <div className='ask-question'>
        <div className='ask-question-container'>
            <h1>Ask a public Question</h1>
            <form>
                <div className='ask-form-question'>
                    <label htmlFor='ask-question-title'>
                        <h4>Title</h4>
                        <p>Be Specific and you're asking a question to another person </p>
                        <input type='text' id='ask-question-title' placeholder='e.g.is there an R function for finding an index of an element in a vector' />
                    </label>
                    <label htmlFor='ask-question-body'>
                        <h4>Body</h4>
                        <p>Include all the information someone would need to answer your question </p>
                        <textarea id='ask-question-body' />
                    </label>
                    <label htmlFor='ask-question-tags'>
                        <h4>Tags</h4>
                        <p>Add upto 5 Tags to describe what your question is about </p>
                        <input type='text' id='ask-question-tags' placeholder='(e.g.xml typescript word)' />
                    </label>
                </div>
                <input type='submit' className='button' value='Review your Question'/>
            </form>

        </div>
    </div>
  
  )
}

export default AskQuestion