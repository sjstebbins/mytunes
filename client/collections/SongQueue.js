// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

initialize: function(){

  this.on('add', function(song){
    if (this.length === 1){
      this.playFirst();
    }
  }, this);

  this.on('enqueue', function(song){
    this.enqueue(song);
  }, this);

  this.on('dequeue', function(song){
    this.dequeue(song);

  }, this);

  this.on('ended', function(song){
    this.shift();
    if( this.length > 0){
      this.playFirst();
    }
  }, this);



},

playFirst: function() {
  this.at(0).play();
},

play: function(song){
  this.set('currentSong', song);
},

enqueue: function(song){
  this.add(song);
},

dequeue: function(song){
  this.remove(song);
}

  //model: SongModel

});

