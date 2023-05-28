import React from 'react'

const WidgetTags = () => {
    const tags = ['C','C++','Java','SQL','React.js','Express','Vue.js','Html','Css','Node.js','JQuery','Angular','JavaScript','Next.js','Php','Python']
  return (
    <div className='widget-tags'>
      <h3>Watched Tags</h3>
      <div className='widget-tags-div'>
        {
            tags.map((tag)=>(
                <p key={tag}>{tag}</p>
            ))
        }
      </div>
    </div>
  )
}

export default WidgetTags
