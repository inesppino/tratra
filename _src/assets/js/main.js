'use strict';

const input = document.querySelector('#user');
const btn = document.querySelector('.search-btn');
const list = document.querySelector('.list-name');

//Al hacer click en buscar, pedir a Github la información sobre la usuaria en su API

function github(e) {
  fetch('https://api.github.com/users/' + input.value)
    .then(response => response.json())
    .then(data => {
      const result = document.querySelector('.resultingname');

      //Aqui del nombre y apellido te coge solo el nombre
      const sentence = data.name;

      const fullName = sentence.split(" ");
      console.log(fullName);

      //Aqui donde dividimos el nombre y lo pintamos letra por letra
      const gitname = fullName[0];
      let pieces = gitname.split("");
      console.log(pieces);

      //Aqui pinta en una lista ordenada las letras del nombre
      let names = '';
      for (let i = 0; i < pieces.length; i++) {
        const letter = pieces[i];
        names += `<li class="square">${[letter]}</li>`;
      }
      //Se saca del bucle para que lo pinte una vez
      list.innerHTML = names;
    });
}

btn.addEventListener('click', github);
