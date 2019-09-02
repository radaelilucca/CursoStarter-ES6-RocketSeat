"use strict";

/* 4.1 Desestruturação simples
A partir do seguinte objeto: */
var empresa = {
  nome: "Rocketseat",
  endereco: {
    cidade: "Rio do Sul",
    estado: "SC"
  }
};
var nome = empresa.nome,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(nome);
console.log(cidade);
console.log(estado);
var user = {
  nome: "Pedrinho",
  idade: 22,
  cidade: "RJ"
};
var user2 = {
  nome: "Carem",
  idade: 94,
  cidade: "SP"
};
var user3 = {
  nome: "Sandra",
  idade: 2,
  cidade: "SC"
};
var user4 = {
  nome: "Carlos",
  idade: 44,
  cidade: "RN"
};

function mostraUser(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade,
      cidade = _ref.cidade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

console.log(mostraUser(user2));
