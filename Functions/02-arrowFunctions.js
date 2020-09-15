/*
* ***********
! ARROW FUNCTONS
* ***********

Arrow fuctions are expressional functions that can be simplified into one of the two forms, CONCISE and BOLCK BODY. The main goal is to generate forter syntax for writing a function

* Arrow functions also do not get hoisted

*/
//      (1)     (2)(3)      (4)
let arrowFunc = () => console.log('Arrow Func');
arrowFunc(); // still need to invoke our function

/*
  1. Arrow functions are always anonymous
  2. Parameters are still capable of being injected.
      - if we have one parameter , we technically dont need the param ()
      - BUT it we are not passing any parameter, itis REQUIRED to denote ()
  3. This syntax tell JS that we are about process a function    
  4. Within this format , JS assumes the return statements
*/

//? CONCISE VS. BLOCK BODY

//* Concise:

let cBody = (x , y) => console.log(x + y);
cBody(1, 2)

let slightlyComplex = (x,y) => x > 2 && y < 2 ? console.log(`${x} is greater that 2 and ${y} is less thatn 2`) : console.log(`${x} and ${y} are where we want them`);
 slightlyComplex(1,3)
 slightlyComplex(1,5)

 //Block
 //The 'return keyword JS required. We also include curly braces.

 let blockArrow = (x,y) => {
   return `${x} are within a ${y}`
 }
 console.log(blockArrow('We', 'Block Body'));

 let sampleBlock = x => {
   console.log(x);
 }

 sampleBlock(99);

 //?

