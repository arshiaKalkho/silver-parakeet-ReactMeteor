import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'
import React, { useState } from 'react';

export default function Login(){
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [title, setTitle] = useState('Login');


const submit = () => {
    if(title === "Login"){
    console.log("run login")
        Meteor.loginWithPassword(username, password);
    }else{
        console.log("run sugn up")
        Accounts.createUser({
            username: username,
            password: password,
          })
    }
};
const handleLogin = ()=>{
    setTitle("Login")
    submit()
}
const handleSignUp = ()=>{
    setTitle("Sign Up")
    submit()
}

return (
    
    <>
    

    <label htmlFor="username">Username</label>
    <input
        type="text"
        placeholder="Username"
        name="username"
        required
        onChange={e => setUsername(e.target.value)}
    />

    <label htmlFor="password">Password</label>

    <input
        type="password"
        placeholder="Password"
        name="password"
        required
        onChange={e => setPassword(e.target.value)}
    />

    <button type="submit" onClick={()=>{handleLogin()}}>Log In</button>
    <button type="submit" onClick={()=>{handleSignUp()}}>Sign Up</button>
    </>
    );
};