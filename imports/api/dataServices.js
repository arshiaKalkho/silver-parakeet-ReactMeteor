import { Mongo } from 'meteor/mongo';


export const ConversationsCollection = new Mongo.Collection('Conversations');

export const insertConversation = ({ text, user })=>{
    ConversationsCollection.insert({content:text, username:user, createdAt: new Date()});
}


