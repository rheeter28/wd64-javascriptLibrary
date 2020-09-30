/*
* ***********
! CONSTRUCTOR FUNCTIONS
* ************
  - Function allows us to easily create a unique soltion for differents circumstances by useing parameters. 
  -   

*/

// Option 1:
let person1 = {
  name: 'Macy',
  age: 24,
  canVote: true,
}
let person1 = {
  name: 'Jeremy',
  age: 15,
  canVote: false,
}
let person1 = {
  name: 'Tyler',
  age: 28,
  canVote: false,
}

//Opt2
// 1       2           3
function person(name, age, canVote){
 // 4   5      6
  this.name = name;
  this.age = age;
  this.canVote = canVote
}

//console.log(typeof Person);
//             7     8
let person4 = new person('James', 80, true);
console.log(person4);

/*
  1. The keyword
  2. The functions NAME. For Constructor Functions, the name should be capitalized.
  3. The parameters. These will be the values of the object once this function is in use.
  4. The "this" keyword.  "this" gives us the ability to refer back to whatever called, or whatever activates it. In this case, "this refers to 'Person'
  5. This will be a key of the new object we will create. This is NOT refering to the parameter.
  6. This is refering to the parameter we pass through our constructor functions.
  7 & 8: This "new" keyword is calling our Person function, creating a new person with the valuew we passing as arguments, and storing that person in a variable.
  */

  



