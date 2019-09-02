/* 5.1 Rest
A partir do array: const arr = [1, 2, 3, 4, 5, 6], defina uma variável x que recebe a primeira
posição do vetor e outra variável y que recebe todo restante dos dados. */

const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(y);

// Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:

function somaRest(...params) {
  return params.reduce((total, next) => total + next);
}

console.log(somaRest(1, 2, 3, 5));

/*5.2 Spread
A partir do objeto e utilizando o operador spread:

Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel.

Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.
*/

const usuario = {
  nome: "Diego",
  idade: 23,
  endereco: {
    cidade: "Rio do Sul",
    uf: "SC",
    pais: "Brasil"
  }
};

const usuario2 = { ...usuario };
usuario2.nome = "Gabriel";

const usuario3 = { ...usuario };
usuario3.endereco.cidade = "Lontras";

console.log(usuario);
console.log(usuario2);
console.log(usuario3);

/* 6
Converta o seguinte trecho de código utilizando Template Literals: */

const usuarioEx06 = "Diego";
const idadeEx06 = 23;
console.log("O usuário " + usuarioEx06 + " possui " + idadeEx06 + " anos");
console.log(`O usuário ${usuarioEx06} tem ${idadeEx06} anos`);

// Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:

const nome07 = "Diego";
const idade07 = 23;
const usuario07 = {
  nome07,
  idade07,
  cidade07: "Rio do Sul"
};

console.log(usuario07);
