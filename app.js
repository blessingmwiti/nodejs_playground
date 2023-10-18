
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('Log', (arg) => {
    console.log('Some user logged in', arg);
})

emitter.emit('Log', {name: 'Blessing'});



const Logger = require('./logger');
const logger = new Logger();

logger.on('add', () => {
    console.log('Exported module called');
})
logger.add(4, 6); 