import { Meteor } from 'meteor/meteor';
import { ConversationsCollection , insertConversation} from '/imports/api/dataServices.js';
import { Accounts } from 'meteor/accounts-base';

const SEED_USERNAME = 'default';
const SEED_PASSWORD = 'default';

Meteor.startup(() => {
  //ConversationsCollection.remove({}) //THIS WILL DELETE ALL DATA ON THE DB for testing
  
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }
  const user = Accounts.findUserByUsername(SEED_USERNAME);
  
  
  // adding ice breaker if DB is empty
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
