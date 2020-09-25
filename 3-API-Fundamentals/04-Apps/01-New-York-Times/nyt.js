const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key ="bAFPeZCsQYgGFesVgMGUx4vLZMiWikvx"
let url; // making it a global variable??? 
// SEARCH FORM 

//querySelector() returns the first element that is a descendant of the node that matches a selector
// can be a class, id, or 
const searchTerm = document.querySelector('.search'); 
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.sumbit');

// RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION 
const section = document.querySelector('section');

nav.style.display = 'none'; 
let pageNumber = 0; //no pages have been found
console.log('PageNumber: ', pageNumber)
let displayNav = false;

searchForm.addEventListener('submit', fetchResults) // is it important to know that DOM is "listening" for all kinds of 'events'
nextBtn.addEventListener('click', nextPage);        // DOM Events are sent to notify code of interesting this that have taken place.  
previousBtn.addEventListener('click', previousPage); // has 2 parameters the user-action and the function-action

                    //1
function fetchResults(e){
e.preventDefault(); // prevents the action of the event
url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value; //query parameters 
console.log("URL:", url);
if(startDate.value !== ''){
  console.log(startDate.value)
  url += '&begin_date=' + startDate.value; //adds to the url string ".value is grabing whatever is typed into the search box because of the input box in html"
};
if(endDate.value !== ''){
  url += '&end_date=' + endDate.value;// adds to the url string
};// in the facets section of the description in NY times api

fetch(url).then(function(result){
  return result.json();
})
.then(function(json){
  displayResults(json);
});// find the results and display the results in json format

function displayResults(json) {
  while(section.firstChild) {
    section.removeChild(section.firstChild)// while loop will clear out any articles before new search results are added //section refers to html(section contains our results)
  }           // firstChild is the first set of results.
let articles = json.response.docs;// .docs is an array of returned responses
if(articles.length === 10) {
  nav.style.display = 'block'; // shows the nav display if 10 items are in the array
} else {
  nav.style.display = 'none'; // hides the nave display if less that 10 items are in the array
}
 if(articles.length === 0){
    console.log("No results");
  } else {
    for(let i = 0; i < articles.length; i++)  {
      let article = document.createElement('article');
      let heading = document.createElement('h2');
      let link = document.createElement('a');
      let img = document.createElement('img');
      let para = document.createElement('p');
      let clearfix = document.createElement('div');
    
      let current = articles[i]; // url link to article correspinding to whichtever index we are at(current is a stand in for articles[i])
     console.log("Current: ", current);

     link.href = current.web_url; // wed_url is an attribute of the object current
     link.textContent = current.headline.main;

     para.textContent = 'Keywords: ';

     for(let j = 0; j < current.keywords.length; j++) {
       let span = document.createElement('span');

       span.textContent += current.keywords[j].value + " ";
       
       para.appendChild(span);
     }
     if(current.multimedia.length > 0)  {
       img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;

       img.alt = current.headline.main;
     }

     clearfix.setAttribute('class', 'clearfix');

      article.appendChild(heading);
      heading.appendChild(link);
      article.appendChild(img);
      article.appendChild(para); 
      article.appendChild(clearfix);    
      section.appendChild(article);
    }
  }
  }
};


function nextPage(e){
  pageNumber++;
  console.log("Page Number", pageNumber);
}// 5

function previousPage(e){
  if(pageNumber > 0){
    pageNumber--;
  } else {
    return;
  }
  fetchResults(e);
  console.log("Page", pageNumber);
}// 5

