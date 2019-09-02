/* 4.1 Desestruturação simples
A partir do seguinte objeto: */

const empresa = {
  nome: "Rocketseat",
  endereco: {
    cidade: "Rio do Sul",
    estado: "SC"
  }
};

const {
  nome,
  endereco: { cidade, estado }
} = empresa;
console.log(nome);
console.log(cidade);
console.log(estado);

const user = {
  nome: "Pedrinho",
  idade: 22,
  cidade: "RJ"
};
const user2 = {
  nome: "Carem",
  idade: 94,
  cidade: "SP"
};
const user3 = {
  nome: "Sandra",
  idade: 2,
  cidade: "SC"
};
const user4 = {
  nome: "Carlos",
  idade: 44,
  cidade: "RN"
};

function mostraUser({ nome, idade, cidade }) {
  return `${nome} tem ${idade} anos.`;
}

console.log(mostraUser(user2));
