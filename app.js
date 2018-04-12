//https://www.youtube.com/watch?v=TlB_eWDSMt4
//Function
function helloWorld (name) {
    console.log("Hello " + name)
}
helloWorld('ERA')

//To load a module we need the "require" function in the main module
const Logger = require('./logger') 
const logger = new Logger()
logger.log('any message') //This is when we import only a function of the object
//logger.log('a message') //This is when we import the whole object as a module
//console.log("--*- " + logger) // To see what is inside the imported module

//Deep inside module
console.log("--**" + exports)
console.log("--**" + require)
console.log("--**" + module)
//Learn more about exports, require,module

//node built in modules https://nodejs.org/en/docs/
//"Require" is equivalent to "import" in other languages
const path = require('path')
var pathObj = path.parse(__filename)
console.log("Path object in main " +pathObj)

const os = require ('os')
var totMem = os.totalmem()
var freeMem = os.freemem()
console.log(" Total Memory " + totMem + "\n Free memory " + freeMem)
//Template string format in ES6, does the same thing from the previous line
console.log(` Total Memory ${totMem} \n Free memory ${freeMem}`)

//file system
const fs = require ('fs')
//Synchronus
const files = fs.readdirSync('./')
console.log("files--" + files)
//Asynchronus (preferred)
//in the "err" parameter of function, it returns the error if there is any, else it returns the files in the directory
fs.readdir ('./', (err,files) => // this thing is called arrow function. "function(parameter) {body}" is equivalent to "(parameter) => { body }" . It is used in ES6
{
    if (err) console.log("error" + err)
    else console.log("files---" + files)
})

//event
const EventEmitter = require('events')
const emitter = new EventEmitter() //we 'imported' or required a class from the logger module, so we no longer need it

emitter.addListener('messageLogged', (eventArg) => { //listens to the event
    console.log('listener called',eventArg)
}) 
emitter.emit('messageLogged',{id : 123, url: 'asdf.com'}) //raise an event

logger.on('logging',(arg) => {
    console.log("logging event " , arg)
}) // raised an event in the logger module
logger.log("Logger message")
// study event more

// http module
const http = require('http')
const server = http.createServer((req,res) =>{
    //console.log('New connection')
    if (req.url =='/'){
        res.write('Hello World')
        res.end()
    }
    if (req.url == '/array'){
        res.write(JSON.stringify([1,2,3]))
        res.end
    }

})

/*
server.on('connection', (socket) =>{
    
})*/
server.listen(3000)
console.log('listening on port 3000...')