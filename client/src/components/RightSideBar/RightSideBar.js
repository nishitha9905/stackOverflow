import React from 'react'
import Widget from './Widget';
import WidgetTags from './WidgetTags';
import './RightSideBar.css'
const RightSideBar = () => {
  return (
   <aside className='right-side-bar'>
    <Widget/>
    <WidgetTags/>
   </aside>
  )
}

export default RightSideBar
