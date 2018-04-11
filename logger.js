var url = 'http://abcd.com\log'
//export const adrs = url;

function log(message) {
    //Send an http request
    console.log(message)
}
//module.exports.log = log; //This is when we export the whole object
module.exports = log; //This is when we export only a function of the object
//Deep inside module
console.log("--" + exports)
console.log("--" + require)
console.log("--" + module)

//node built in modules https://nodejs.org/en/docs/

const path = require('path')
var pathObj = path.parse(__filename)
console.log(pathObj)