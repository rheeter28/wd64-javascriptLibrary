/*
! CONDTIONALS

//? FALSY VALUES

-false
-0
",",'', ``
-null
-undefined-
NaN(not a number)

When JS is expectoin a boolean value and it is returned with on of these 6 values, it is evaluated as "falsy"
*/

/*
* **********
!if
* **********

- if something is true, do "this thing"

*/
let light = "on";
if(light == 'on') {
  console.log('The light is on');
}
  let weather = 68;
  if(weather < 70){
    console.log('wear a jacket.');
  }
let rain = false;

if(weather < 70 &&  !rain) {
  console.log('Is is a little chilly and will possibly rain.');
  //new function
};

/*
* **************
! IF ELSE
* **************
IF/ELSE statements allow us the ability wo write out a chain of events.
*/

let today = 65;

if(today < 70) {
  console.log('It is ' + today + ', wear a jacket');
  } else {
    console.log("It is " + today + ", No jacket needed." )
}

let name = "Robert";
if(name ==  "bert") {
  console.log("My name is " + name) 
} else {
  console.log( 'Hello!, is your name ' + name + '?');
}
  
/*
* *************
! ELSE IF
* *************
| this is a condition that would be checked if the above condition was not met
*/

let cookTime = 40;
if(cookTime === 45) {
  console.log('let us feast!');
} else if(cookTime >= 30){
  console.log(`Is has only been  ${cookTime} minutes. Wait anight 5 - 15 minutes`);
} else if(cookTime >=20) {
  console.log(`It has only been ${cookTime} minutes. Wait another 10 - 25 minutes`);
} else{
  console.log(`It has only been ${cookTime} minutes. Perhaps at least try cooking it...`);
}

// The end of the ELSE IF statment should have a simple "else" to finish it.

let age = 20;
if(age >= 25){
  console.log(`If you are ${age} years old. You can rent a car`);
} else if(age >= 21){
  console.log( `If you are ${age} years old. At least you can drink`);
} else if(age >= 18){
  console.log(`If you are ${age} years old. At least you can vote`);
} else(age < 17); {
  console.log(`If you are ${age} years old.  Sorry you are too young and can't do anyting`);
}

/*
* ************
! TERNARIES
* *************
| - This was a quick way of considering an is/else statement. We are capable of writing out our conditional in a simple way 
*/

let myName = 'Robert';
//if(name ==  "bert") {
  //console.log("My name is " + name) 
//} else {
  //console.log( 'Hello!, is your name ' + name + '?');
//}

//condition ? if true : else result

myName === 'Robert' ? console.log(`Hello, my name is ${myName}.`) : console.log(`Hello, is your name ${myName}?`);

let lampOn = false;
let daytime= true;

  lampOn == true && daytime != true ? console.log('The lamp is on during the night') 
: lampOn != true && daytime != true ? console.log('The lamp is off during the night') 
: lampOn == true && daytime == true ? console.log('The lamp is on during the day') 
: lampOn != true && daytime == true ? console.log('The lamp is off during the day') 
: console.log('what lamp?');

/*
* *********** 
! SWITCH
* ***********
it executes a block of code depending on different case
*/

let instructor = 'Ing'

switch(instructor) {
  case 'Ing' :
    console.log(`${instructor} is a part of the Web Dev Team`)
    break;
  // Once each case has been evaluates and we retun a retun a result, we need to note "break" outof our swich statement.  
  case 'Zach' :
    console.log(`${instructor} is a part of the Web Dev Team`)
    break;
  case 'Josh' :
    console.log(`${instructor} is a part of the Web Dev Team`)
    break;
    default:
      console.log(`Sorry, i can't find what ${instructor} teaches at this time`)
      // we need a default to help us catch thos cases when not are the true
}

instructor = 'Amanda';

switch(instructor) {
  case 'Ing':
  case 'Adam':
  case 'Eric':
  case 'Zach':
  case 'Donovan':
    console.log(`${instructor} is part of the Web Dev team.`)
    break;
    case 'Josh':
    case 'Amanda':
    case 'Casey':
      console.log(`${instructor} is part of the Software Dev team`)
     break;
    default: 
    console.log(`Sorry, I cant find what ${instructor} teaches`);  

}

let grade = 57; 

switch(true) {
    case grade <= 100 && grade >= 89:
    console.log(`If you grade is ${grade}. You get an A`);
    break;
  case grade <= 88 && grade >= 79:
    console.log(`If your grade is ${grade}. You get a B`); 
    break;
  case (grade <= 78 && grade >= 66): 
    console.log(`If your grade is ${grade}. You get a C`) ;
    break;
  case (grade <= 65 && grade >= 59) :
    console.log(`If your grade is ${grade}. You get a D`);
    break;
  case (grade <= 58 ): 
    console.log(`If ${grade}. I will need to talk to your parents`)
    break;
    default:
      console.log("Were you even in class?");
        
}


