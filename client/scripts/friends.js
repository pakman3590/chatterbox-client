// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: {},

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.
  addFriend: function(friend) {
    Friends._data[friend] = true;
    Friends.checkFriend(friend);
  },

  checkFriend: function(username) {
    // check if message username is in friends list
    if (Friends._data[username]) {
      console.log(document.getElementsByClassName(`${username}`));
      document.getElementsByClassName(`${username}`).forEach(element => {
        element.addClass('friend');
      });
    }
  }
};