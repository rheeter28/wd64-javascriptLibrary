const Cupcake = require('./cupcake') //used that module.exports = Cupcake for cupcake.js

class Shop {
  constructor(location, owner){
    this.location = location;
    this.owner = owner;
  }

getLocation(){
  console.log(`This shop is at: ${this.location}`);
}
getOwner() {
console.log(`This shop is owned by: ${this.owner}`);
  }
// changed the value of owner to newOwner
  changeOwner(newOwner){
    this.owner = newOwner;
  }
}
//use extend to pull shop to new class, then use super to pull the params of the parent object Shop,
class CupcakeShop extends Shop {
constructor(location, owner, name){
  super(location, owner);
  this.name = name;
  this.inventory = [] // will hold instaces of cupcakes...eventulally 
  this.cash = 0; //not empty just holding the number 0

}
  bakeBatch(count, batter, icing, price){
 // Make COUNT cupcakes, add them to inventory
 // made a for loop to make cupcakes and added them to inventory 
 for(let i = 0; i < count; i++) {
   let newCupcake = new Cupcake(icing, batter, price); 
  this.inventory.push(newCupcake);
    }
  }

sellCupcake(){
  //Remove cupcake from inventory, increase cash by price of cupcake
let soldCupcake = this.inventory.pop(); // pop() removes the last element of inventory array and adds it to soldCupcake variable
this.cash += soldCupcake.price; //

}
}

let myShop = new CupcakeShop('Broad Ripple', 'Bill Murray', 'Inzombia Cupcakes');
myShop.bakeBatch(12, 'Red Velvet', 'Honey Mustard', 4); 

myShop.sellCupcake();
myShop.sellCupcake();
myShop.sellCupcake();

console.log(myShop.cash)

//Babel is a huge open source repository
function Fan(diameter, amps){
  this.diameter = diameter;
  this.amps = amps;
}

let myfan = new Fan(12, 150);
myfan.turnOn();
Fan.prototype.turnOn = function(){
  this.isOn = true;
}
 