// declaração da variável letras como um array contendo 3 arrays
// cada um com um conjunto de letras
const letras = [
    ['a', 'b', 'c'],  
    ['c', 'd', 'f'],  
    ['d', 'f', 'g'],  
];

// utiliza método flat para achatar o array, transformando em um único array contendo todas as letras
let resultado = letras.flat().reduce((objeto, numero) => { // usa reduce para contar as letras

    // verifica se a letra já foi adicionada ao objeto 
    if (objeto[numero]) {
        // se a letra já existir no objeto, incrementa o valor dessa letra aumentando a contagem
        objeto[numero] += 1;
    } else {
        // caso a letra ainda não tenha sido encontrada, adiciona a chave ao objeto
        // e inicia a contagem da letra com o valor 1
        objeto[numero] = 1;
    }

    // retorna o objeto atualizado depois da contagem das letras
    return objeto;

    // o valor inicial do reduce é um objeto vazio, ele começa com um objeto sem nenhuma letra
}, {});

// o valor de resultado será um objeto com as letras e quantas vezes cada letra aparece
console.log(resultado);  // Exibe o resultado 

