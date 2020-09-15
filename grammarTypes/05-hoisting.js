/*
* ************
! HOISTING
* *************
What is hoisting?
  - JS pulls all variables and functions calls to the  "top" of thier respective scope prior to being executed.
  - Only the declaration is pulled up, NOT the assingnment.

*/

// console.log(hoistedVar);

// console.log('How is JS sees hoistedVar', typeof hoistedVar)
//var hoistedVar = 'using var';
//let hoistedVar = 'using let';

//console.log(noVariable);

//? Hoisting in a Function
// This process is considered the same within a function. On the first pass, it reads it, pushed the declarations to the top and then executes them in the order that they are written.


function testHoist() {
  becomesGlobal = " not delcared, it becomes part of the global scope";
  console.log(`Prior to declaring `, insideFunc)
  var insideFunc = "rules still apply here";
  console.log(insideFunc);
}

testHoist();
console.log(becomesGlobal);

// It is best practice to always declare variables regardless of whether they are in a function or scope. This makes it clear how it should be handled

//? Using LET
// The keyword 'let' is block scoped and not function scoped.

console.log(letVariable);
let letVariable = "Using Let";
// This throws a ReferenceError due to ES6 not accepting undelcared variables. This is to ensure we ALWAYS declare our variables FIRST.

//? Hoisting Function
//Function Declarations

hoistedFunc();
function hoistedFunc(){
  console.log(`This is a hoisted function`);
}

//Function Expressions:
//This are NOT hoisted.
expressionFunc();

let expressionFunc = function () {
  console.log(`Works?`);
}
