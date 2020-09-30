/*
***********
! ARRAY DESTRUCTUING
*************




- allows us to unpack values form arrays or properties form objects
- similar syntax ass array literals BUT is on the LEFT side of the assignment operator
  - This difines what valuees to unpack.
  great for pulling info out of an array/object and ressigning that data to its own variable.
*/

const boardGames = ['Catan', 'Pandemic', 'Roll Player'];

//const gameOne = boardGames[0];

const [gameOne, gameTwo, gameThree] = boardGames;
console.log(gameOne);
console.log(gameTwo);
console.log(gameThree);

/*
      - within the brackets (on the left of assignment operator), we have our desired variables names. These coincide with each value within the array that is in the original variable.
    
*/

/*
*************
! REST SYNTAX
**************
    - Rest syntax look exactly like spread syntax
      -Spread expands an array into ites elements
      -Rest collects multiple elemtnts and condenses into a single elements
      -MUST be the last elements defined when using array destructuring.
*/

// const hitchHikersGuide = ['Arthur Dent', 'Trillinan', 'Babel Fish', {day: 'Thursday', answer: 42}];

// let [charOne, charTwo, ... otherInfo] = hitchHikersGuide;
// console.log(charOne);
// console.log(charTwo);
// console.log(otherInfo);
// Using th eapread operator syntax like this is know as 'rest' syntax with  array Desructuring. Using it, we are packing up the Rest of the values into the new array.

// hitchHikersGuide.push('Margin', 'Deep Thought', 'Zaphod Beeblebrox');
// [charOne,CharTwo, ...otherInfo] = hitchHikersGuide;
// console.log(otherInfo);

// [charOne, charTwo, , , ...otherInfo] = hitchHikersGuide;
// console.log('SKIPPED');
// console.log(charOne);
// console.log(charTwo);
// console.log(otherInfo);

/*
************
! OBJECT DESTRUCTURING
************
*/

const game = {
  title: 'Fallout 76',
  developer: 'Bethesda Game Studios',
  platforms: [
    'PC', 'PS4','XBoxOne'
  ]
};

const {title, platforms} = game;
console.log(`${title} is on ${platforms}`);
const games = [
  {
      title: 'Fallout 76',
      developer: 'Bethesda Game Studios',
      platforms: [
      'PC', 'PS4', 'XBoxOne'
      ]
  },
  {
      title: 'The Legend of Zelda: Breath of the Wild',
      developer: 'Nintendo',
      platforms: [
      'Nintendo Switch', 'Wii U'
      ]
  },
  {
      title: 'Stardew Valley',
      developer: 'ConcernedApe',
      platforms: [
      'PC', 'macOS', 'Linux', 'PS4', 'Xbox One', 'Nintento Switch', 'PSVita', 'iOS', 'Android'
      ]
  },
];

const [{title: titleOne, developer: devOne}, ,{title: titleThree}] = games;
console.log(titleOne);
console.log(devOne);
console.log(titleThree);

for({title, developer} of games){
  console.log(`${title} is developed by ${developer}`);
}
for({title, platforms} of games){
  for(p in platforms){
    console.log(`${title} is on ${platforms[p]}`);
  }
}










