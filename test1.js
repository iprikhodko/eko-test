function normalizeReceivedData(receivedData) {
  const {
    users = [],
    messages = [],
  } = receivedData;

  const usersMap = users.reduce((result, user) => {
    result[user.id] = user;

    return result;
  }, {});

  return messages.map(message => {
    const { userId, receiverId, text: messageText } = message;
    const userFromName = usersMap[userId] ? usersMap[userId].name : null;
    const userToName = usersMap[receiverId] ? usersMap[receiverId].name : null;

    return {
      messageText,
      userFromName,
      userToName,
    };
  });
}

console.log(normalizeReceivedData({
  users: [{
    id: 1,
    name: 'Bob',
  }, {
    id: 2,
    name: 'John',
  }, {
    id: 3,
    name: 'Sam',
  }],
  messages: [{
    id: 1,
    text: 'Hey Bob! How are doing?',
    userId: 2,
    receiverId: 1,
  }, {
    id: 2,
    text: 'Hi John! Nice to see you. Fine! What about you?',
    userId: 1,
    receiverId: 2,
  }, {
    id: 3,
    text: 'Good day, John. Anna gave me your contact',
    userId: 3,
    receiverId: 2,
  }],
}));
