var url = 'http://abcd.com\log'
//export const adrs = url;

const EventEmitter = require('events')

class Logger extends EventEmitter{

    log(message) {
        //Send an http request
        console.log(message)
        this.emit('logging',{id : 1234, url: 'qwerty.com'})
    }
}

//module.exports.log = log; //This is when we export the whole object

//node built-in modules https://nodejs.org/en/docs/

const path = require('path')
var pathObj = path.parse(__filename)
console.log("Path object in logger " + pathObj)
module.exports = Logger; //This is when we export only a function of the object
