/*
! FUNCTIONS

Functions are a process what we call upon to run an action.
  -Take in input so that it can process it, modify it or just respond to it.

Returns a value( but not always)

Can be invoked (called upon) as often as we need

*/
 //1    //2 //3
function hi(){
  console.log("Hi");
}

// 1. Keyword
// 2. Name of the function and parentheses for the parameter.


function functionName() {
  
  return value
};
functionName();

//? Function Declaration
//A chunk of code that performs an action when it is invoked

function funcOne(){
  console.log("Statement Here");
}
funcOne();

//? Function Expression
//Assigning a function to a variable is what is called and expression
let first = function funcTwo(){
  console.log('Second Statement');
}

first();

//? Anonymous Functions
//Anonymous functions are stored in memory but the runtume doesn't automatically create a reference to it.

let anon = function(){
  console.log(`anon function`)
}
anon();



//? Parameters
// Allows us to accecpt information already delcared.

function parameterFunc(num) {
  console.log(num);
}

parameterFunc(2);
parameterFunc(9);

let returnedVal = 5;
parameterFunc(returnedVal);

let firstName = "Jane";
let lastName = "Doe";

function greeting(first, last) {
   console.log(`Hi, ${first}! Welcome back!`);
   console.log(`This is the first parameter: ${first}`);
   console.log(`This is the last parameter: ${last}`);
}

greeting(firstName, lastName);
greeting('', lastName);


let myDog = function charlie(){
 return console.log('I am still a cutie');


}
myDog();