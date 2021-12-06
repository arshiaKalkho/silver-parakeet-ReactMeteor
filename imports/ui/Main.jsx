import React from 'react';
import { Meteor } from 'meteor/meteor';
import Conversation from './Conversation';
import { useTracker } from 'meteor/react-meteor-data';
import { ConversationsCollection } from '../api/dataServices';
import NewConvForm from '../ui/newConvForm'

export default function Main(){
    
    const conversations = useTracker(()=>ConversationsCollection.find({}).fetch())
    var convIndex = 0;

    const logOut = ()=>{
        Meteor.logout()
    }

    return(
        <div>
            <div className="navbar">
                <NewConvForm/>
                <button className="logout-btn"onClick={()=>{logOut()}}>LogOut</button>
            </div>
            
            { 
                conversations.slice(0).reverse().map((index)=>{
                convIndex++;
                
                return( <Conversation key = {convIndex} obj = {index} />)
                })
            }
        </div>
    )
}
