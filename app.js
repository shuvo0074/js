//https://www.youtube.com/watch?v=TlB_eWDSMt4
function helloWorld (name) {
    console.log("Hello " + name)
}
helloWorld('ERA')
//To load a module we need the "require" function in the main module
const logger = require('./logger') // We save the imported module inside a constant named logger
//console.log("--*- " + logger) // To see what is inside the imported module

logger('any message') //This is when we import only a function of the object
//logger.log('a message') //This is when we import the whole objectas a module
//Deep inside module
console.log("--**" + exports)
console.log("--**" + require)
console.log("--**" + module)
//Learn more about exports, require,module

//node built in modules https://nodejs.org/en/docs/
//"Require" is equivalent to "import" in other languages
const path = require('path')
var pathObj = path.parse(__filename)
console.log(pathObj)

const os = require ('os')
var totMem = os.totalmem()
var freeMem = os.freemem()
console.log(" Total Memory " + totMem + "\n Free memory " + freeMem)
//Template string format in ES6, does the same thing from the previous line
console.log(` Total Memory ${totMem} \n Free memory ${freeMem}`)