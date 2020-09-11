/*
!TYPES

*/
/*
? Data and Structure Types 
* **********************
- Primitive Data TYpes
    - boolean
    -undefined
    -object
    -function

-null
-object
-fuction

BOOLEANS

A booles has two possible values: true and false
*/
let on = true;
let off= false;



// ? NULL
// A null value is an empty value. Think of it as an emplty container that has a space to fill. 

let empty = null;
console.log(empty);

//? UNDEFINENED
// No value has been assigned to a container.

let undef = undefined;
let password;
console.log(password);

/*
- Null is like a container with nothing in it.

- Undefinted is when a variable has been set, or hasn't been created yet.

- Null you can trust as zero. Undefined you can not.

*/

//? NUMBERS
let degrees = 90;
console.log(degrees);

let precise = 999999999999999; //15 9's
console.log(precise); 

let rounded = 9999999999999999 // 16 9's
console.log(rounded);
// JS gives us space for 15 9s before rounding up.

let notQuite =0.3 + 0.1;
console.log(notQuite);
// JS rounds out at a certain number, so if math is needed be aware.

let whatIf=(.02 *10 + 0.1 * 10);
console.log(whatIf);
let numbersAreHard = (02 *10 + 0.1 * 10) / 10;
console.log(numbersAreHard);
//console.log('.' + whatIf);

//? STRINGS

// Strings represtnt text and are wrappe din either single or double quotes.

let doubleQuote = "Double Quote";
let singleQuote = 'Single Quote';
console.log(doubleQuote,singleQuote);

let incetption = "I've";
let singleQ ='I\'ve';
console.log(incetption, singleQ);

//? Numbers Vs Stings

let addThese = 1050 + 100;
console.log(addThese);
 
let addTheseAlso = '1050' + "100";
console.log(addTheseAlso);

console.log(typeof addThese);
console.log(typeof addTheseAlso);

// we can usw an operator called 'typeof' that returns a string that tells us exactly what ou rvariable "type" is.

let stringToNumber = Number('1150')
console.log(stringToNumber);
console.log(typeof stringToNumber);
console.log("test");

//const log = console.log; //
//log('test');

//? OBJECTS
/*
- OBJECTS are use to store may valuse instead of a singlular value.
-Consider these as a collection of various preoperties
-denoted by curly prackets: {}

*/

let frodo = {
    race: 'hobbit', //string
    rings: 1, //number
    sting: true, // boolean
}

console.log(frodo);
console.log(typeof frodo);

//1: Key
//2: Value

//? ARRAYS
/*
ARRAYS ar containers that hold a various list of items
-denoted by square brackets
-all items are withing square the square brackets
- regardless of datatype, eac item is seperated by a comma
*/

let arrayList = [ 'pos1', 'pos2','pos3'];
console.log(arrayList);
let anotherExample = [1, 2, 'three', true];
console.log(anotherExample);

console.log(typeof anotherExample);
// JS classifed array as objects and not a datatype of their own.

//? ADDITION VS CONCATENATION
/*
   -JS sees the "+" symblol in two different ways.
    - When combined with numbers, uses built-in math functionality
    - When combined with strings, it ingnores the math and concats the two strings.

*/

let strings = 'one' + ' ' + 'is a number';
let concatDiff = 1050 + '100';
console.log(strings);
console.log(concatDiff);
console.log(typeof concatDiff);

let firstName = "Robert"; //string
let lastName = "Heeter"; //string
let houseNumber = 3178269645;//number
let aptNumber = 'Apt. 1B'; //string
let street = 'Woods Edge East Drive ';//string
let city = "Indianapolis"; //stromg
let state = "Indiana"; //string
let zipcode = 46250;//number

console.log(8518 + ' ' + street + aptNumber + ", " + city + ", " + state + " " + zipcode);

//? STRING PROPERTIES
/*
    - srings have properties, or the qualities assiciated wit that strings.
    - the length of a string is a property


*/

let myName = "Bob";
console.log(myName.length);

//? String Methods
/*
    - methods ar tolls tht can help us manipulate our data
*/

let myNameIs = "Eric";
console.log(myNameIs.toUpperCase()); // This method makes the sting Upper case

console.log(myNameIstoLowerCase());

let home = "My home is Fishers";
console.log(home.includes('Fishers'));
















