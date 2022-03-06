// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  /*
  push messages from fetched data as is
  */
  _data: [],
  lastMessageID: 0,

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  addMessage: function (message) {
    // store valid messages in message obj
    Messages.filterMessage(message);
    Messages._data.push(message);
    //console.log(message)
    // update last message ID
    this.lastMessageID = message.message_id;
  },

  filterMessage: function (message) {
    // filter out strings with tags <>
    const charFilters = string => {
      if (string.includes('<') && string.includes('>')) {
        return true;
      }
      return false;
    };
    // get unescaped strings from room, text, user and push to array
    if (charFilters(_.unescape(message.roomName))) {
      message.roomName = 'invalid room name';
    }
    if (charFilters(_.unescape(message.username))) {
      message.username = 'invalid username';
    }
    if (charFilters(_.unescape(message.text))) {
      message.text = 'invalid message';
    }

  }
};
