//what shoule a cupkake have?
//Icing, Cake, Price

//? DECLARATION OF CLASS

class Cupcake {
  constructor(icing, cake, price) {
    this.icing = icing;
    this.cake = cake;
    this.price = price;
  // add "this" as in this particular instance, then add = to reference the given parameter ie: icing, cake, price.

  // functions and methods are the same but a method resides in a class(???) not sure if it worded that corrrctly
  getDescription (); {
    console.log(`A ${this.icing} topped ${this.cake} cupcake for $${this.price}`)
   };
 }  

}

/* 

APIE (DO MORE RESEARCH)
A - ABSTRACTION: Hide complicated detail behind and easy interface(ex: console.log())
P - POLYMORPHISIM: A singular interface with mulitple implementations (spacesuttle or airplane cockpit) (ex: string.length, Array.length) 
I - INHERITANCE: Class heirarchy that shares fuctionality and attributes
E - ENCAPSULATION: The data and functionality to manipulate the data are bundled together. ()
*/


module.exports - Cupcake;