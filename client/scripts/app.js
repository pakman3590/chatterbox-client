// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  currentRoom: null,

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // set timeout for refresh (5 min timeout)
    setTimeout(() => {
      App.startSpinner();
      App.fetch(App.stopSpinner);
    }, 300000);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);

      // parse data entries into messages and rooms for storage
      // loop through fetched data array
      for (let i = data.length - 1; i >= 0; i --) {
        let newMessage = data[i];
        let newRoom = newMessage.roomname;
        // sort for invalid messages
        if (newMessage.message_id > Messages.lastMessageID && newRoom && newMessage.text && newMessage.username) {
          // add message to storage
          Messages.addMessage(newMessage);
          // invoke addroom
          Rooms.addRoom(newRoom);
        }
      }
      // run callback to stop spinner
      callback();
      // render messages and rooms
      RoomsView.renderRoom(App.currentRoom);
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
