var planet1 = "Earth"
var planet2= "Mars"
var planet3= "jupiter"
console.log(planet1,"is nearer than",planet2,"to",planet3)

var x=10
console.log(++x)
// comparison operators also work in opposite direction
if (11==x){
    console.log("ksjdb ",x)
}
//ternary operator = "?"
var res
res = (11==x) ? 11 : "other"
console.log(res,"-")
while(x-- > 0 ){
    console.log(x)
}
var planets=["Earth" , "Uranus" , "neptune" , "saturn","sdvf","sgfsfvv"]
console.log(planets)
var morePlanets = ["pluto","mars","asdf","qwert"]
console.log("**slice " + planets.slice(-3)) //Accessing last 3 elements
//Slice doesn't delete the selected chunk, splice does
var pl=morePlanets // A deep copy hppened here where the array pl is copied from the memory where morePlanets is saved. 
morePlanets[1]="*****"
console.log("this is pl " + pl)
//To do shallow copy , where an array is copied from the contents of another array, we can use slice method. when we copy a variable, shallow copy automatically happens
/*console.log(planets.reverse())*/