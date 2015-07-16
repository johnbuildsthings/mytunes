// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    console.log(this);
  },

  playFirst: function(){
    this.trigger('play', this);
  }

});