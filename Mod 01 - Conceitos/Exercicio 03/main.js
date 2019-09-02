/*3º exercício
Converta as funções nos seguintes trechos de código em Arrow Functions:

3.1*/

const arr = [1, 2, 3, 4, 5];
var arr2 = arr.map(item => item + 10);

//console.log(arr);
//console.log(arr2);

// 3.2
// Dica: Utilize uma constante pra function

/* const usuario = { nome: "Diego", idade: 23 };
const mostraIdade = () => {
  return usuario.idade;
};
console.log(mostraIdade()); */

// 3.3
// Dica: Utilize uma constante pra function

/* const nome = "Diego";
const idade = 23;

const showUser = () => ({ nome, idade });
};

console.log(showUser());
*/

// 3.4

const promise = () => {
  new Promise(function(resolve, reject) {
    return resolve();
  });
};
