//! ASYNCRONOUS PROGRAMMING
/*
 - synchronours programing is code read line by line

 -Asynchrounous programming allows a program to do do more tahn on ething at a time

 - Makes it possible to run long-running actions without stopping the program to wait for a response

*/

//? Synchronous Sample: Execution Stack
const secondSync = () => {
  console.log('Second Hello');
}

const firstSync = () => {
  console.log('First Hello');
  secondSync();
  console.log('End');
}
firstSync();

// 'First Hello' - then the 'Second Hello' - then 'End'. Once the one before it is completed, the next will execute.

//? Asynchronous Sample

const networkRequest = () => {
  setTimeout(() => {
    console.log('Async Code')
  }, 2000); // setTimeout has weho arguments: callback(our console log), and tome measured in ms(miliseconds)
};
console.log('Hello World');
networkRequest();
console.log('End')

// Event Loop: looks into the call stack and determines if it is empty or not. If empty, it considers if there is any waiting callback that nees to be executed (our console.log('Async code')).

//!  API
/*
 API: Application Program Interface
- is not a database or a server.
- Allows us to access pointer to server
  - comes in the form of ENdPOINTS
  - endpoints directs us to set of data. 

? REST API
- Representational State Transfer
  - creates an object of requested data by the client, send valus in response to user.
- Methods
   CRUD
     Create(POST)
     READ (GET)
     UPDATE (PUT)
     DELETE (DELETE)
*/
//! FETCH()
/*
  -the fetch() method is an asynchronout method. Part of the browser - NOT JS.
  -The fetch() method starts the process of "fetching" a resource. Will return a promise and respond ONCE that promise is fulfilled.

        Promise:
            - an unknown value when created
            - represents the eventual fulfilled value or rejection (error)
        * Promises always one of these states:
            1. Pending: Inintial state, neither fulfilled or rejected
            2. Fulfilled: Meaning the operation completed successfully
            3. Rejected: Meaning the operation failed
*/


