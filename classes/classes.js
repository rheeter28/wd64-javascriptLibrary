/*
***********
! CLASSES
***********
  - classes can be defined by either expression or declaration
  - Classes are functions
  - Classes act as a blueeprint for creating objects
    ex: model could be a property of a class of Automobile. Eache automobile we create thats a copy of out original class and could have a different value for the property model
  - Body of a class is between {}
  -The constructor method is a special method for creating and initialinzing an object that was created with a class.
      - There can only be ONE constructor method.
      - can use the keyword 'super'
      - The super keyworkd is used to access and call functions on an object parent.
   - Introduced in ES5
   - New way to write priviour existing prototype-based inheritance.
   - Closest thing in vanilla JS to OOP
*/

/*
************
! CLASS DECLARATION
*************
*/

class Automobile {
  constructor(make, model){
    // instanced properties muse be defined inside of class methods, like constructor method.
    this.make = make;
    this.model = model;
  }
}

// Hoisting: Unlike function declaratiosn, class declarations are not hoisted. a class declaration needs to be declared before accessing it.


/*
*************
! CLASS EXPRESSION
*************
    - can be named or not
    - the name given to an unnames class expression is local to the class's body
        - the name of aclass can be retrieved through the class's name property
*/
//* unnamed:
let Vehicle = class {
  constructor(make, mode) {
    this.make = make;
    this.model = model;
  }
};
console.log(Vehicle.name)

let Auto = class Mobile {
  constructor(make, model) {
    this.make = make
    this.model = model
  }
}

console.log(Auto.name);

/*
***********
! METHODS
***********
  - Introduces in ES%
    -prototype method are shorter for method definitions.
*/

//Method Definition: OLD SYNTAX
const automobile = {
  start: function(){
    //
  },
  stop: function() {
    //
  }
};

//Prototype Method : New SYNTAX

const autoMobile = { 
start() {
  //
},
stop() {
  //
}

}

class AutoMobile {
  constructor(make, model){
    this.make = make;
    this.model = model;
  }


  //Method 1
  start() {
    console.log(`This ${this.make} ${this.model}'s engine started`);
  }

  // Method 2:
  stop() {
    console.log(`This ${this.make} ${this.model}'s engine stoped.`)
  }
}

/*
***********
! NEW INSTANCE
***********
using the keyword 'new' we can create a new oobject/instance of AutoMobole class
*/
// new object/instace of the class

let hondaCivic = new AutoMobile('Honda', 'Civic');
hondaCivic.start();
hondaCivic.stop();

let fordEscape = new AutoMobile('Ford', 'Escape');
fordEscape.start();
fordEscape.stop();
/*
***********
! CONSTUCTOR METHOD
***********
  - Helps create and initializes an object created from a class.
  - Works along with the 'new' keyword
  - Needs to be included to create nwe objects and instances of ou rclass.
    - set properties
    - oasses values for properties

*/
// cookie is our blueprint
class Cookie {
  constructor(type, icing, shape){
    this.t = type;
    this.i = icing;
    this.s = shape;
    //LEFT-SIDE : assinging our kes for the values we pass in
            //RIGHT-SIDE: the accepted values form our parameters
  }
}



let chocolateChip = new Cookie ('chocolate chip', false, 'circle')
//console.log(chocolateChip.type);
console.log(chocolateChip.t)
console.log(chocolateChip.i)
console.log(chocolateChip.s)
console.log(chocolateChip);


let sugarCookie = new Cookie ('Sugar', false, 'star')
console.log(sugarCookie.t);
console.log(sugarCookie.i);
console.log(sugarCookie.s);
console.log(sugarCookie);

/*
***********
! EXTENDS
***********

  - keyword used in class declarations/expression to create a new class
  -  each new class created inherits the properties an themtod form the parten class.
  - can have its own properties and methods
    - also know as a subclass
*/


//* PARENT
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat (){
    console.log(`${this.name} eats thier food.`)
  }
}

//* SUBCLASS
class Dog extends Animal {
  constructor(name, breed){
    super(name); // 'super' prior to 'this' keyword - will cause error
    this.type = breed;
  }
  play() {
    console.log(`The ${this.type} named ${this.name} fetches the ball!`);// is call by Fido.play(); output the mutt fido fetches the ball!
  }
}

let Fido = new Dog ('Fido', 'mutt');
Fido.eat();
Fido.play();
Animal.play(); //breaks - cant access method withing Dog
