import React , {useState}from 'react'

import { insertConversation } from '../api/dataServices'

export default function newConvForm(props) {
    const user = props.user;
    const[text, setText] = useState("");

    const newPost = ()=>{
        e.preventDefault()
        insertConversation(text,props.user)
    }

    
    return (
    <form  onSubmit={newPost} className="task-form">
        <input
        type="text"
        placeholder="reply"
        onChange={()=>setText(e.target.value)}
        />
    
        <button type="submit">Add Task</button>
    </form>
    )
}


