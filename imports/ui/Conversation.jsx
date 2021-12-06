import React from 'react'
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { removeConversation } from '../api/dataServices';

export default function Conversation(props) {
  
  const user = useTracker(() => Meteor.user());
  const conv = props.obj
  var canUserModify = true;
  if(user.username === conv.user){
    canUserModify = false;
  }
  const deleteConv = ()=>{
    if(!canUserModify)
    removeConversation({text:conv.text, user:conv.user})
  }
    


  return(
    
    <div className="conversation-card">
      <h4>{conv.user}</h4>
      <h6 style={{color:"black"}}>{conv.createdAt.toString()}</h6>
      <h3> {conv.text}</h3>
      <button onClick={()=>{deleteConv()}} className="delete-btn" disabled={canUserModify}>delete
      </button>
    </div>  
  )
}
