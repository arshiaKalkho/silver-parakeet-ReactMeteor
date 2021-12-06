import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'
import React, { useState } from 'react';

export default function Login(){
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [title, setTitle] = useState('Login');

const handleLogin = ()=>{
    setTitle("Login")
    Meteor.loginWithPassword(username, password);
}
const handleSignUp = ()=>{
    setTitle("Sign Up")
    Accounts.createUser({
        username: username,
        password: password,
    })
}

return (
    
    <div className="login">
        
        <div className="login-card">
            <h3 style={{textAlign:'center'}}>Login/Sign Up</h3>
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

            <button className="login-btn"type="submit" onClick={()=>{handleLogin()}}>Log In</button>
            <button className="login-btn"type="submit" onClick={()=>{handleSignUp()}}>Sign Up</button>
        </div>
    </div>
    );
};