const logger = require('./logger');
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('Log', (arg) => {
    console.log('Some user logged in', arg);
})

emitter.emit('Log', {name: 'Blessing'});