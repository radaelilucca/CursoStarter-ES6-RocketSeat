"use strict";

var usuarios = [{
  nome: "Diego",
  idade: 23,
  empresa: "Rocketseat"
}, {
  nome: "Gabriel",
  idade: 15,
  empresa: "Rocketseat"
}, {
  nome: "Lucas",
  idade: 30,
  empresa: "Facebook"
}];
var bt01 = document.getElementById("bt01").onclick = ex201;
var bt02 = document.getElementById("bt02").onclick = ex202;
var bt03 = document.getElementById("bt03").onclick = ex203;
var bt04 = document.getElementById("bt04").onclick = ex204;
var btMostra = document.getElementById("btMostra").onclick = mostraUsuarios;
var divCen = document.querySelector("div.cen");

function mostraUsuarios() {
  var result = document.createTextNode(JSON.stringify(usuarios));
  divCen.innerHTML = "";
  divCen.appendChild(result);
}

function ex201() {
  /* Exercício 02.1
  2.1 Utilizando o map
  Crie uma variável que contenha todas idades dos usuários: [23, 15, 30] */
  var idade = usuarios.map(function (user) {
    return user.idade;
  });
  console.log(idade);
  divCen.innerHTML = "";
  var result = document.createTextNode(idade);
  divCen.appendChild(result);
}

function ex202() {
  /* 2.2 Utilizando o filter
  Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
  anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }];*/
  var filterRocket = usuarios.filter(function (user) {
    return user.empresa === "Rocketseat" && user.idade >= 18;
  });
  console.log(filterRocket);
  divCen.innerHTML = "";
  var result = document.createTextNode(JSON.stringify(filterRocket));
  divCen.appendChild(result);
}

function ex203() {
  /* 2.3 Utilizando o find
  Crie uma variável que procura por um usuário que trabalhe na empresa Google: */
  var find = usuarios.find(function (user) {
    return user.empresa === "Google";
  }); //var validFind = usuarios.find(user => user.empresa === "Rocketseat");
  //console.log(validFind);

  console.log(find);
  divCen.innerHTML = "";
  var result = document.createTextNode(JSON.stringify(find));
  divCen.appendChild(result);
}

function ex204() {
  /* 2.4 Unindo operações
  Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
  no máximo 50 anos
  */
  var idadeMulti = usuarios.map(function (user) {
    return user.idade = user.idade * 2;
  });
  var filter50 = usuarios.filter(function (user) {
    return user.idade <= 50;
  });
  console.log(filter50);
  divCen.innerHTML = "";
  var result = document.createTextNode(JSON.stringify(filter50));
  divCen.appendChild(result);
}
