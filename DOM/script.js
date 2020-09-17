let x = 10;
console.log(x);

//! 1: getElementById
// console.log(document);
// console.log(document.body);
// document.getElementById("testParagraph").style.color = 'blue';
let testPara = document.getElementById('testParagraph');
testPara.style.color = "red";
console.log(testPara);

// Will only get the first ID

//! 2: Query selector ALL & innerText / innerHTML

console.log(document.querySelectorAll('p.sampleClass'));
// querySelectorAll returns a Nodelist
// nodes are items in HTML like elements and text. 

document.querySelectorAll('p.sampleClass')[2].innerText = 'My Text has changed!';
document.querySelectorAll('p.sampleClass')[2].id = 'No 3';
// brack notation to access the array of elements
// innerText allows us to reference or change the test in that element

let changeAll = document.querySelectorAll('p.sampleClass');

changeAll.forEach(pTag =>{
  pTag.innerText = 'My text has changed using forEach() method.'
  //ptag.innerContent = 'My text has changed using forEach() method.'
  //ptag.innerHTML = 'My text has changed using forEach() method.'
  
})

let showSpan = document.getElementById('spanTest');
console.log(showSpan.innerText);
console.log(showSpan.textContent);
console.log(showSpan.innerHTML);

/*
  - innerText simply reference or allows us to change the test of a specifed element. will retun only visible text in a 'node'.

  - textContent doe the sam thing that innerText does, but will retun the TULL text of a 'node'.

  - innerHTML allows us to set text as well as HTML elements, which will be nested inside of the current HTLM element we'er referencing.
*/
//! ADDEVENTLISTENER - click 

let btn = document.getElementById('clickThis');

//btn.addEventListener('click', event =>{
//  event.target.style.backgroundColor = 'lightblue'
  //console.log(btn);
//});

// btn.addEventListener('click', 'toggle', toggle =>{
//   toggle.target.style.backgroundColor = 'green'
// })

// btn.addEventListener('click', 'toggle',toggle => {
//   toggle.target.style.backgroundColor = 'red'
// })


let red = true;
btn.addEventListener('click', event =>{
  event.target.style.backgroundColor = red ? 'red' :
  'red';
  red = !red;
})

let input = document.getElementById('nameInput');

input.addEventListener('keyup', e => {
  console.log(e.target.value);
  document.getElementsByTagName('p')[0].innerText = 'Something Changed!';
  
  if(e.target.value == ""){
   document.getElementsByTagName('p')[1].innerText = 'Nothing has been typed';
  }
  else {
    document.getElementsByTagName('p')[1].innerText = `Everyone say hello to ${e.target.value}`;
  }

});




