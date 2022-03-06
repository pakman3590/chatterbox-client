// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // set up event listener for friend username click
    $userName = $('.username');
    $('#chats').on('click', '.username', function() {
      MessagesView.handleClick($(this).text());

    });

  },

  render: function(room) {
    // clear feed
    MessagesView.$chats.html('');
    // loop through messages data array
    for (let message of Messages._data) {
      if (!room) {
        MessagesView.renderMessage(message);
      } else if (message.roomname === room) {
        MessagesView.renderMessage(message);
      }
    }
  },

  renderMessage: function(message) {
    let templateMess = {
      username: message.username,
      text: message.text,
      roomname: message.roomname
    };
    let newMessageHTML = MessageView.render(templateMess);
    //console.log(newMessageHTML)
    //let $userHTML = newMessageHTML.childNode[0];
    //console.log($userHTML)
    // run friend check
    //Friends.checkFriend($userHTML, message.username);
    // prepend new message to chat feed
    MessagesView.$chats.prepend(newMessageHTML);
    //console.log(newMessageHTML)
  },

  handleClick: function(username) {
    // add clicked friend to friend list
    Friends.addFriend(username);
  },

};