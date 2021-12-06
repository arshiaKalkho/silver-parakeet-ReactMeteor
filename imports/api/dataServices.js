import { Mongo } from 'meteor/mongo';


export const ConversationsCollection = new Mongo.Collection('Conversations');

export const insertConversation = ({ text, user })=>{
    ConversationsCollection.insert({text:text, user:user, createdAt: new Date()});
}
export const removeConversation = ({ text, user })=>{
    const result = ConversationsCollection.findOne({text:text, user:user})
    ConversationsCollection.remove({_id:result._id});
}



