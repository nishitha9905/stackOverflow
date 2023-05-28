import React from 'react'
import './RightSideBar.css'
const Widget = () => {
  return (
    <div className='widget'>
      <h4>OverFlow Blog</h4>
      <div className='right-side-bar-div-1'>
        <div className='right-side-bar-div-2'> 
           <p>Observability is key to the future of software (and your DevOps career)</p>
        </div>
        <div className='right-side-bar-div-2'> 
           <p>PodCast 374: How Valuable is your screen name?</p>
        </div>
      </div>
      <h4>Featured on Meta</h4>
      <div className='right-side-bar-div-1'>
        <div className='right-side-bar-div-2'> 
           <p>Review queue workflows - Finalrelease...</p>
        </div>
        <div className='right-side-bar-div-2'> 
           <p>Please Welcome Valued Associates:#958 - V2Blast #959 - SpencerG</p>
        </div>
        <div className='right-side-bar-div-2'> 
           <p>Outdated Answers: Accepted Answer is now unpinned on Stack OverFlow</p>
        </div>
      </div>
      <h4>Hot Meta Posts</h4>
      <div className='right-side-bar-div-1'>
        <div className='right-side-bar-div-2'> 
           <p>38 why was this spam flag declined, yet the question marked as spam?</p>
        </div>
        <div className='right-side-bar-div-2'> 
           <p>20 What is the best course of action when the user has high enough rep to...</p>
        </div>
        <div className='right-side-bar-div-2'> 
           <p>Is a link to the "how to ask" help page a useful comment?</p>
        </div>
      </div>
    </div>
  )
}

export default Widget
