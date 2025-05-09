// lista com nomes de cidades
const cidades = ["Guarabira", "Belém", "Sapé"];

// transforma cada cidade em um item de lista HTML
const itens = cidades.map(cidade => `<li>${cidade}</li>`).join("");

// junta tudo dentro de uma lista ordenada 
const listaHTML = `<ol>${itens}</ol>`;

// mostra a lista HTML
console.log(listaHTML);
