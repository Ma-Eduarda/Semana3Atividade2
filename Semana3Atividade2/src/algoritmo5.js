// cria duas listas com números
const a = [1, 2, 3, 4, 5];
const b = [6, 7, 8, 9, 10];

// junta as duas listas em uma só usando spread 
const lista = [...a, ...b];

// soma todos os valores da lista
// total começa com 0 e vai somando cada número da lista
const soma = lista.reduce((total, num) => total + num, 0);


console.log(soma);
