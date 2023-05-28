import React from 'react'
import Questions from './Question'

const QuestionsList = ({questionList}) => {
  return (
    <>
    {
    questionList.map((question)=>(
      <Questions key={question} question={question}/>
    ))
    }
    </>
  )
}

export default QuestionsList