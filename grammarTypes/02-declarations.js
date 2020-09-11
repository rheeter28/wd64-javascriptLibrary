/*
* **********
! VARIABLES
* **********
*/

console.log('hello');
// It is a debugging tool

let a = 2;

/*
- let is our keyword
- a is our NAME of our varible
- = is our OPERATOR
- 2 is the valuable of our variable
*/

let b = 1
console.log(a + b);

//! RESTRICTIONS
/*
- a variable name but begien wiht a letter, underscore, or a dillar sign
- numbr ma follow in abour character, BUT cannor come first.
- javascrips IS case sensitve - 'hello' and 'Hello', these would be different variables.
- camelCase is the best practice for naming
- ex:
let myName = 'Eric';
is easier to read than
let myname = 'Eric';

*/

let startingWithLettter = "Works";
let _startingWithUnderscore = "Works";
let $startingWithDolarSign = "Works";
// let 4startWithNumber = "Breaks";

console.log(_startingWithUnderscore, $startingWithDolarSign);

let PascalCase;
let camelCase;
let snake_case;


/*
*KEYWORDS

var,let and, const

- var :"old" keywork for variable. ** We wont be usng it has ofter bus is till a viable one

- let: is a "new" keyword for variable. (introduced with ES6 ECMAScript, which is a standardization of JS)

- const: is also "new" keyword that declares an UNCHANGEABLE, or constant, variable

*/

var variable = "var variable";
let letVariable = "let variable";

// let function = 1; Cannot use reserved worder within a varianle name - *function is a reserved word.

/*
! DECLARATIONS
*/
// Declarations are the left sid eof the assignment operator
let x;

let x = 10;

// 10 is our initializaton

let = y;
console.log('declaraton: ', y);

y = 10;
console.log('initialization: ', y);

y = 33;
console.log('initialization 2: ', y);

// We've set our variables with our let keyword. with each iterations, we have redeclared what it is.

//? const

let today = "great";
const efa = "wonderful";
console.log(today, efa);

today = "Awesome!";
console.log(today, efa);

 // efa = "Super";
 console.log(today, efa);
 // cosnt allows us to make a variable that we do not want to change.

 







