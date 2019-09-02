"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* 5.1 Rest
A partir do array: const arr = [1, 2, 3, 4, 5, 6], defina uma variável x que recebe a primeira
posição do vetor e outra variável y que recebe todo restante dos dados. */
var arr = [1, 2, 3, 4, 5, 6];
var x = arr[0],
    y = arr.slice(1);
console.log(y); // Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:

function somaRest() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(somaRest(1, 2, 3, 5));
/*5.2 Spread
A partir do objeto e utilizando o operador spread:

Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel.

Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.
*/

var usuario = {
  nome: "Diego",
  idade: 23,
  endereco: {
    cidade: "Rio do Sul",
    uf: "SC",
    pais: "Brasil"
  }
};

var usuario2 = _objectSpread({}, usuario);

usuario2.nome = "Gabriel";

var usuario3 = _objectSpread({}, usuario);

usuario3.endereco.cidade = "Lontras";
console.log(usuario);
console.log(usuario2);
console.log(usuario3);
/* 6
Converta o seguinte trecho de código utilizando Template Literals: */

var usuarioEx06 = "Diego";
var idadeEx06 = 23;
console.log("O usuário " + usuarioEx06 + " possui " + idadeEx06 + " anos");
console.log("O usu\xE1rio ".concat(usuarioEx06, " tem ").concat(idadeEx06, " anos")); // Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:

var nome07 = "Diego";
var idade07 = 23;
var usuario07 = {
  nome07: nome07,
  idade07: idade07,
  cidade07: "Rio do Sul"
};
console.log(usuario07);
