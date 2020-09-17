/*
* ************
! FOR LOOPS
* ************
  - Loops helps us repeat a process without writing a lot of code

  - We need to:
    1) create an index
    2) run a condition
    3) Change to the indexing variaple(execution of condition)
*/

for(let i = 0; i <=10; i++) {
  console.log(i);
}
/*
  We state our loop with 'for'.
  within this function, we are injectin some paramerter tha JS will run against 
    (index; condition; chang index -> result)

    for(<create index variable> ; <run condition>; <change index>) {
      *will continue is met.
    }
*/
// let x = 20;

//for(i = 10; i <= x; i++){
// console.log(i);
//}

for(let i = 2; i > -10; i -= 4){
  console.log(i);
}

let word = 'supercalifragilisticexpialidocious'
  for(let i = 0; i < word.length; i++) {
    console.log(i, word[i]);
  }

  /*
!FOR IN LOOP
  */
  
  let city = {
    name: 'indianapolis',
    pop: 877000,
    speedway: true
  };

  for(info in city) {
    console.log(info)
    console.log(city[info]);
  }
  /*
    for(variable IN object) {
    |  <statement>
    }
  */

  let list = ['milk', 'eggs', 'beans', 'bread', 'bananas'];

  for(item in list) {
   //console.log(item)
    console.log(list[item]);
  }

let name = 'piCard';

let fullName;
  
  for(char in name){
      //let lowChar = name[char].toLowerCase()
      //console.log(char);
      char == 0 ? fullName = name[char].toUpperCase() : fullName += name[char].toLowerCase();
   }
   console.log(fullName);

   /*
   FOR OF LOOP
  
  | - In order  to run a FOR OF loop, the thing must be numbered like any array.

  let object = {
    key: value,
    key: value,
    key: value,

  };
 
    for(o of object) {
      <breaks>
    }
   */

   let indexArr = ['spot 1', 2 ,true, 'four'];

   for(pos of indexArr) {
     console.log(pos);
   }

   /*
    for loop: loops through a block of code util the counter reaches a specivied number
    for in loops: loops through properties of an object.
    for of loops: loops over iterables objects as in arrays and strings "strings can be accessed much in the same way as arrays."
   */

  
  
    function whatDoesItDo(val) {
      return val ? 1 : 2;
    };
  console.log(val);