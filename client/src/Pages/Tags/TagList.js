import React from 'react'
import './Tags.css'
const TagList = ({tag}) => {
  console.log("====================4",tag);
  return (
    <div className='tag'>
      <h5>{tag.tagName}</h5>
      <p>{tag.tagDesc}</p>
    </div>
  )
}

export default TagList