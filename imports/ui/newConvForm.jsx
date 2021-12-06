import React , {useState}from 'react'

function newConvForm() {
    
    const[text, setText] = useState("");


    
    
    return (
    <form className="task-form">
        <input
        type="text"
        placeholder="reply"
        />
    
        <button type="submit">Add Task</button>
    </form>
    )
}

export default newConvForm
