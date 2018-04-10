function helloWorld (name) {
    console.log("Hello " + name)
}
helloWorld('ERA')
//To load a module we need the "require" function in the main module
const logger = require('./logger') // We save the imported module inside a constant named logger
//console.log("--*- " + logger) // To see what is inside the imported module

logger('any message') //This is when we import only a function of the object
//logger.log('a message') //This is when we import the whole objectas a module
