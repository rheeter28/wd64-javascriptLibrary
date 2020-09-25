let url = 'https://rickandmortyapi.com/api/character/';


const image = document.querySelector('body');




fetch('https://rickandmortyapi.com/api/character/')
  .then(function(response) {
  console.log(response);
  return response.json();  
  }). then(function(json){
    let characters = json.results;
    
    
    
   let rickPic = document.createElement('img');
   let mortyPic = document.createElement('img');
   
   let rick = characters[0].image;
    let morty = characters[1].image;
    
    
    image.appendChild(rickPic)
    rickPic.src = rick;

    image.appendChild(mortyPic)
    mortyPic.src = morty
  }); 
  
