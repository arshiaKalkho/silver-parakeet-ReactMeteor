import React from 'react'
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import  Main  from './Main';
import Login  from './Login'

export default function App() {
    const user = useTracker(() => Meteor.user());
    return (
        <>
        {user ? (
        <Main user={user}/> 
        ) : (
        <Login/>
        )}
        </>
    )
}

