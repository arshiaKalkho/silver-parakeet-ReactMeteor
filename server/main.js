import { Meteor } from 'meteor/meteor';
import { ConversationsCollection } from '/imports/api/Conversations.js';

function insertConversation({ text, user }) {
  ConversationsCollection.insert({text, user, createdAt: new Date()});
}

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (ConversationsCollection.find().count() === 0) {
    insertConversation({
      text: 'Hello my name is arshia',
      user: 'arshia'
    });

    insertConversation({
      text: 'Hi i am not arshia',
      user: 'notArshia'
    });

    insertConversation({
      text: 'Hi Im definitely not Arshia',
      user: 'definitelyNotArshia'
    });

    insertConversation({
      text: 'Hi I am a random person',
      user: 'randomPerson'
    });
  }
});
