var events = require('events');
var eventEm = new events.EventEmitter();

var myEventHandler = function() {
    console.log("I hear an Ari.");
}

eventEm.on('ari', myEventHandler);
eventEm.emit('ari');