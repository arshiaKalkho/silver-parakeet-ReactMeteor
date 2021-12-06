import React , {useState}from 'react'
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { insertConversation } from '../api/dataServices'

export default function NewConvForm() {
    const user = useTracker(() => Meteor.user());
    const[text, setText] = useState("");

    const newPost = ()=>{
        insertConversation({
            text: text,
            user: user.username
          })
    }

    
    return (
    <div  onSubmit={newPost} className="task-form">
        logged in as: {user.username}
        <div>
            <input
            type="text"
            placeholder="reply"
            onChange={(e)=>setText(e.target.value)}
            />
            <button className="addconv-btn" onClick={()=>newPost() }>Add</button>
        </div>
    </div>
    )
}


