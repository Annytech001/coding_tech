/*var a = 5;
x = 7;
console.log (a**x);
*/

//ternary operrator

/*let marks = 50;
let result = (marks < 40)? 'Small Number' : (marks >40)? 'Big Number':
console.log(result);


/*loops
Types of loops 
1. while looop 
2. do while loop
3. for loops


while loops checks the condition before excuting logic in the block of code 

*/
/*
 let numbers = [4,7,8,12,16]
 let sum = 1;
 let i =0;
 while (i < numbers.length){
    sum *= numbers [i]
    i++;
 }
 */

 // console.log(sum);


 // Do while excute the logic at least once before checking the condition 
 /*let numbers = [4,7,8,12,16]
 let sum = 0;
 let i =0;

do{
    sum += numbers[i]
    i++;
}
 while (i < numbers.length)
    i++;
 console.log(sum);
 */

//for loops
/*let numbers = [4,7,8,12,16]
 let sum = 0;
for (let i =0; i < numbers.length; i++){
    sum+=numbers[i]
}
 console.log(sum);
 */

 /*var x = 0;
var y = 10;
var z = 5;

console.log(z > x && z < y) // prints true
console.log(z > x && z <= y) // prints true
console.log(z > x && z != y) // prints true
*/

//console.log(!!NaN == !!undefined && 6 >= !!Infinity)
/*
var x = "Hello"
var y = "World"
console.log(x + y)
*/

//function greet ()
/*
{
    console.log ("Annycodes");
}
greet();
console.log ("1")
greet();
greet();
greet();
*/

/*function checkIfNumber( x ){
    if ( typeof x === 'number' ){
        console.log( x + ' is a number.' ); 
    }
}
*/
/*
var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1]; 

var sum = 0;
var i = 0;
while ( i < numbers.length ) {
    sum += numbers[i];
    i += 1;
}
console.log( 'The loop was executed ' + i + ' times' );

console.log(sum);
*/
/*
var i = 0;
while (i < 5) loop {
  console.log(i)
}
i++
*/
/*
var gimli = {
    name: "Gimli",
    race: "dwarf",
    weapon: "axe",
    greet: function() {
        return `Hi, my name is ${this.name}!`;
    },
};

console.log(gimli.greet());
*/

let name = "Glory"
let surname = "Bassey"
let age = 28;
let occupation = "software Engineering"

//console.log( name + " " + surname + " " + occupation)

console.log('my name is ${name} and i am a ${occupation}')