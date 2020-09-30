/*
 !SYNTAX
 **************


 keywork varName = [...arrayName];
 */

 const nameOne = ['Eric', 'Winebrenner'];
 const nameTwo = ['Zach', "Maynard"];
 const copiedNames = ['Adam', 'Jayne', ...nameOne,...nameTwo];
 console.log(copiedNames);

 const copiedNamesDiff = ['Adam', 'Jayne', nameOne, nameTwo];
 console.log(copiedNamesDiff);


 /*
  Since the spread operator is pulling out all items of an array, we need to make sure we use the spread operator within a new array. This is so the values that are pulled out gets placed into our new array 

  ...arrName(if not within array, will throw error)

   - We can add to our originla array with our altering our copied array. 
    -dependant on what data types we are using

 */

nameOne.unshift('Mr'); //inserting a new element to the beginning of the array, and shifting all element to the right in the variable named 'nameOne'
console.log('Altered: ', nameOne, 'Spread; ', copiedNames);

/*
! ... NUMBERS
**************

*/

console.log(Math.min(1, 5, -3));

const prices = [10.99, 5.99, 3.99, 5.59];
console.log(Math.min(prices)); //out put NaN because it expects numbers and not an array 
console.log(Math.min(...prices));//Spread Op pulls elements out of the prices array to allow the min method to work.

/*
! ... OBJECTS
**************

*/

const persons = [
  {
      name: 'Lore',
      species: 'Android'
  },
  {
    name: 'Picard',
    species: 'Humam'
  }
];

const copiedPersons = [...persons];
// persons.push({name: 'Worf', species: 'Klingon'});
console.log(('Obj', persons, 'SO', copiedPersons))
//We are only changing the original array.

/*
  -primitive variable = primitive value
    ex:
        let x = 10;
        let y = 'abc';
        let z = null;

  - JS storee to memory both variable and values:
      varibles  Values
      x         10
      y         'abc'
      z         null

      ex:
      let a = x
      let b = y
      console.log(x, z, a, b,) -> 10, 'abc', 10, 'abc'

  - Altering one wouldn't affect the previous
  a = 5
  b = 'xyz'
  console.log(x, y, a, b) - 10, 'abc', 5, 'xyz'  

  - 3 Data Types that are passed by reference: Array, Function, and Opjects
     - technically objects.
     - non primitive variables are given a reference to the value - the reference points to the location in memory.

     * pretend datatype: address - denoted by < >

     let arr = [];
     arr.push(1);

     - How our code woule look in memory:
    
     VARIABLES  VALUES   ADDRESS  OBJECT
     arr       <#001>    #001    []
     arr        <#001>    #001   [1]

     let ref = [1];
     let refCopy = ref;

     -Memory:
    VARIABLES  VALUES   ADDRESS  OBJECT
      ref       <#001>    #001    []
      refCopy   <#001>

    ref.push(2)
    console.log(ref, refCop) -> [1,2], [1,2]



*/

copiedPersons[0].name = 'Data';
console.log('Obj: ', persons, 'SO', copiedPersons);

/*
! ... AVOIDING CHAINGING BOT THE ORIGINAL & COPIED ARRAY
*/

const comics = [
  {title:'Spider-Man', year: 1964},{title: 'Detective Comics', year: 1985}
];

const copiedComics = comics.map(comic =>({
  title: comic.title,
  year: comic.year

}));// the map method will return to me an array 

comics.push({title: 'Calvin and Hobbes', year: 1985});
console.log('Before Altering: ', copiedComics);
copiedComics[1].title = 'Detective Comics #27';
console.log('After Altering: ',comics, copiedComics);





