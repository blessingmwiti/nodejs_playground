const EventEmitter = require('events');

console.log(__filename);
console.log(__dirname);

class Logger extends EventEmitter {
    add(a, b){
        console.log(a + b);
        this.emit('add');
    }
}

module.exports = Logger;