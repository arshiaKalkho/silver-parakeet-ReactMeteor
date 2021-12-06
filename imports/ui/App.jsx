import React from 'react';
import Conversation from './Conversation';
import {useTracker} from 'meteor/react-meteor-data';
import { ConversationsCollection } from '../api/Conversations';

export const App = () => {
  
  const conversations = useTracker(()=>ConversationsCollection.find({}).fetch())
  var convIndex = 0;

  return(
  <div>
    
    { 
      conversations.map((index)=>{
        convIndex++;
        
        return( <Conversation key = {convIndex} obj = {index} />)
      })
    }
  </div>
)}
