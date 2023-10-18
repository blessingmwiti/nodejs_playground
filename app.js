
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

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.write('Hello muchacho');
        res.end();
    }
});


server.listen(3000);
console.log('Listening on port 3000...');