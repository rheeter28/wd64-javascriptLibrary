/*
* ***********
! SCOPE
* ***********
What is scope?

  -scope is how a computer keeps strack of all the variables in a program
  - Scope can also be nested, where there's an outer scope(global) that encloses and inner scope
*/

let scope = 'Earth'; // this is currently the global scope in our JS file.

function localScope(){
  //let scope = "Indiana"; // the state (local) within the JS "World/Globe"
  //console.log(`${scope} marks the local scope`);

  let place = 'Bloomington';

function veryLocalScope(){
  let scope = "Indianapolis";
  console.log(`${scope} is capital of Indiana`)
  console.log(`Just outside, we went to ${place}`)
}
  veryLocalScope();
 
};

console.log(`${scope} marks the global scope.`)
localScope();
// Scope Chain: If a variable is not found, JS attemps to locate the requested information outside. 

//! ORDER MATTERS
//JavaScroipt reads from top to bottom and is know as a single-threaded language, this means it only can execute one task at a time.

let ordered = 1;

function layerOne(){
  let ordered =2;


  function layerTwo() {
    let ordered = 3;
    console.log(ordered);
  }
      layerTwo() ;
      console.log(ordered);
      
}    
      layerOne();// we vall this function prior to console logging our variable "ordered" wiithin our Global
  console.log(ordered);

  //?R Reassignments/ VAR vs LET
  //- var is scoped to the nearest function block.
  //- let is scoped to the nearest enclosing block.

  let a = 10;
  function reassign(){
    a = 30 // we are keeping this variable open and , with the 'let' keyword, we are capable of changing the value that is currently being held within that variable.
    console.log(`a is being set to ${a} in tis function.`);
  };
  console.log((`Before reassigning function ${a}`);
  reassign();
  console.log(`After reassigning function: ${a}`);

  var x = 2;
  function varScope(){
    var x = 4;
  }if(true){
    var x = 5;
    console.log(x)
  }
  console.log(`Var Block Scopt ${x}`)

  varScope();
  console.log(x);

  // statement like "if" or loops don't create a new scope. If variable is defined inside a block statement, it will remain in that scope. However, we can utilize let and const as keyworks to help us control how our variables are viewed.









