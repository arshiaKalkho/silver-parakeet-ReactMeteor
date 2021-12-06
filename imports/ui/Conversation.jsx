import React from 'react'


function Conversation(props) {
  
  const conv = props.obj
    
  return(
    
    <div className="conversation-card">
      <h4>{conv.user}</h4>
      <h4>{conv.createdAt.toString()}</h4>
      <p> {conv.text}</p>
    </div>  
  )
}
export default Conversation;