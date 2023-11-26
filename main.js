let htmlElem = document.querySelector('html');
let pElem = document.querySelector('p');
let img = document.querySelector('img');

let bgcolorForm = document.getElementById('bgcolor');
let fontForm = document.getElementById('font');
let imageForm = document.getElementById('image')

if(!localStorage.getItem('bgcolor')){
    populateStorage();
}else{
    setStyles();
}

function populateStorage(){
    
}