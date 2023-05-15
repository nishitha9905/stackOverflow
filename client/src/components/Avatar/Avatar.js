import React from 'react'

const Avatar = ({children,backgroundColor,padding,borderRadius,color,cursor,fontSize}) => {
  const style={
    backgroundColor,
    padding,
    borderRadius,
    color: {color}||  "#000",
    cursor : cursor || null,
    fontSize,
    textAlign:"center"


  }
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Avatar
