'use strict';

const input = document.querySelector('#user');
const btn = document.querySelector('.search-btn');

//Al hacer click en buscar, pedir a Github la información sobre la usuaria en su API

function github(e){
fetch('https://api.github.com/users/' + input.value)
 .then(response => response.json())
 .then(data => {
   const result = document.querySelector('.resultingname');

        //Aqui del nombre y apellido te coge solo el nombre
       let sentence = data.name;

       let fullName = sentence.split(" ");
       console.log(fullName);

       //Aqui donde dividimos el nombre y lo pintamos letra por letra
       let gitname = fullName[0];
       let pieces = gitname.split("");
       console.log(pieces);
    
   result.innerHTML = pieces;
 });
}

btn.addEventListener('click', github);
