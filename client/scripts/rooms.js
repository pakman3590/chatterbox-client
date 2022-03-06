// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: {},

  addRoom: function(roomName) {
    if (!Rooms._data[roomName]) {
      Rooms._data[roomName] = 1;
    } else {
      Rooms._data[roomName] ++;
    }
  }

};