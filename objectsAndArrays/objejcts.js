/*
* ***********
! OBJECTS
* ***********
*/

let netflix = {
  id: 1,
  name: "The Office",
  season1: {
      seasonInfo: {
          episodeInfo: [{
                  episode: 1,
                  episodeName: "Pilot"
              },
              {
                  episode: 2,
                  episodeName: "Diversity Day"
              },
              {
                  episode: 3,
                  episodeName: "Health Care"
              },
              {
                  episode: 4,
                  episodeName: "The Alliance"
              },
              {
                  episode: 5,
                  episodeName: "Basketball"
              },
              {
                  episode: 6,
                  episodeName: "Hot Girl"
              },
          ]
      }
  },
  season2: {},
  season3: {}
};

//? DOT NOTATION
// While we use bracket notation with arrays, we use something called DOT NOTATION for objects.

// console.log('All data', netflix);
// console.log('Just Season Info',netflix.Season1.seasonInfo);

// We are capable of utilizing as well.
console.log('Episode: ', netflix.season1.seasonInfo.episodeInfo[3].episodeName);

//? JavaScriptObjectNotation Objects
/*
  -JSON: JavaScript Object Notation
  - The JSON systax is derived from JavaScript Obect Notaton syntax, but the JSON is text only
  -JSON exists as a string - useful when you wan to fetch data from a server
  -needs to be converted to a native JS Object if you want to access it. 
*/
let spaceJam = {
    toonSquad:{
      human: "Michael Jordan",
      rabbit1: 'Buggs',
      rabbit2: 'Lola',
      duck:     'Daffy',
      tDevil: 'Tsmanian Devil',
      bird: 'Tweety',
      cat: 'Sylvester',
      pig: 'Porky'
    }
    }     

    //Object.keys()will return an array of string that represent the properties of that object
    console.log(Object.keys(spaceJam.toonSquad));// string of keys

    //console.log(Object.keys(spaceJam.toonSquad.tDevel));////string of the index numbers of that string value.

    console.log(Object.values(spaceJam.toonSquad));

    //? Object Bracket Notation
    /*
      - object bracket notation  can also allow lus to find a value in an object.
      -using object bracket notation van be handy if we watn to store a key in a variable and then use that variable to pass through an object.
      - this works because ALL keys in an object are strings.
    */

    let garden = {
      vegetable: 'zucchini',
      flower: 'sun flower',
      fruit: 'grape',
      water: true,
      sun: true,
      size: 10
    };
    
    let test = Object.keys(garden)
    console.log(test);
    console.log(typeof test[0]);

    //Dot Notation:
    console.log(garden.vegetable);

    //Square Bracket:
    let flowerType = garden['flower'];
    console.log(flowerType);
    // We are accessing the keys within our object by a specific name within our square brackets. The key name that is passed needs to be wrapped in quoteds as all keys in an object are strings.

    let baking = {};
    baking['zucchini'] = 'better make some bread';
    console.log(baking)
    // we hav the ability to set NEW key/value pairs using square brackets.

    let garden = {
      vegetable: 'zucchini',
      flower: 'sun flower',
      fruit: 'grape',
      water: true,
      sun: true,
      size: 10
    };

    console.log(baking[garden['vegetable']]); // here we are saying the same thing as we did above, except we are passing information from our object. garden['vegetable'] is the same as 'zucchini' up above.

    let testObj = {
      'Spaces Here' : true,
      noSpaces: "value Returned"
    }
    console.log(testObj.noSpaces);
    console.log(testObj["Spaces Here"])

    