const tamanho = prompt('Digite o tamanho da lista de números');
// Solicita ao usuário um número 
// Define o tamanho de elementos que a lista deve ter

const lista = new Array(tamanho).fill(null);
// cria um array com tamanho preenchido com null usando o fill
// inicia uma lista vazia com o número de elementos definidos 

const resultado = lista
    .map((item, index) => index + 1) // usa o index para criar uma sequência de números
    // cria uma sequência numérica iniciando em 1 até o valor de `tamanho`

    .reduce((acumulador, item) => acumulador * item);
//  utiliza reduce para multiplicar todos os elementos da lista
// calcula o fatorial do número digitado

console.log(resultado);
//  exibe o resultado final no console

