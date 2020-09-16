/*
* ***********
! ARRAYS
* ***********
*/

//? POPULATE AND REFERING

let list = ['orange', 'banana', 'oreos'];
console.log(list[1]);

// JS counts starting at 0. So in tis array , it would be 0-2 
// When we call an array, we can append square brackeds onto the end of out array with the index number we want to reference. This is SQUARE BRACKET NOTATION.
//                 0         1         2     3   4              5       
let students = ["Tony", "Marshell", 'Rhys', 23, true,[ 'Ryan', 'Iesha', 'Amira']];
//                                                        0       1       2
//console.log(typeof students);

console.log(students instanceof Array); // the instanceof operator is used to check the  to check the type of an object at one time. Remember that arrays are technically 

// console.log(students[2]);
// console.log("Hello", students[1])
// console.log("Hello", students[5][0]);


//? ARRAY METHODS
// We has multiple methods to allow us to manupulate arrays as we may need.
//            
let food = ['Pecan Pie', 'Shrimp', 'Quesadilla','Cheese Cake','Hotdog'];

for(foodItem of food){
  console.log(foodItem);
}

//Add to our array
food.push('Pizza')// Appends Pizz to the end of our array
console.log('push: ', food);

//Remove and insert
food.splice(1, 1, "Bananas")// Removes Shimp and add Bananas => (position, how many to remove, what to add)
console.log('splice: ', food);

food.splice(2, 0, 'Sweet Potato Pie')
console.log('splice 2: ', food);

//Removes from end
food.pop();// pop removes the last item of an array 
console.log('pop ', food);

//Adds to the start
food.unshift('Popcorn', 'Steak');// unshift adds one or more elements to the beginning of the array
console.log('unshift: ', food);

//Remove from the stars
food.shift();// shfit removes the first element in an array
console.log('shift: ', food);

//? LENGTH

// We can us a method call lenght() that can tell us how many values are within our array

let long = [1,2,3,4,5,6,7,8,9,10];
console.log(long.length);

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];
console.log(colors.length);

console.log(colors);
console.log(colors.toString());

//? ITERATING
/*
  forEach - 
      - the forEach() method executes a provided function one once for each element in an array - much like a for lopp or a for of loop

      -run three arguments:
      1. The value
      2. The index
      3. The array object itself
*/
// arrayObjecct.for Each(value, index) => return);



let foodList = ['apple', 'pear', 'mushroom', 'cheese', 'peach'];

// for(let i = 0; i < foodList.length; i++){
//   console.log(i, foodList[i]);
// }
// We invove callback function for each elements within our array
foodList.forEach(foodItem => console.log(foodItem));
// A callback functtion is another function we invoke within our main function

// function print(callback) {
//   callback();
// }

foodList.forEach((foodItem, index) => {
  console.log(foodItem);
  console.log(index)
})
// - the second position oe parameter is ALWAYS the index
 
let movies = ['Matrix', 'Avatar', 'Avengers', 'Real Steel'];

movies.forEach((movies) => {
  console.log(movies);
})
movies.pop()
console.log('pop ', movies)

movies.splice(1 ,1 , 'How to Tain A Dragon')
console.log('splice 1', movies);