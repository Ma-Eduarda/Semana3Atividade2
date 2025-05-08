// cria um array de objetos chamado estudantes, onde cada objeto representa um estudante
// com um nome e um array de notas
const estudantes = [
    { nome: 'Alice', notas: [100, 60, 92] },
    { nome: 'João', notas: [75, 30, 85] },  
    { nome: 'Charles', notas: [90, 95, 85] }, 
    { nome: 'Paulo', notas: [100, 100, 100] }, 
];

// usa o map para criar um novo array chamado "estudantesMedias"
// o map percorre cada elemento do array estudantes e transforma cada objeto
const estudantesMedias = estudantes.map((estudante) => {
    // calcula total das notas do estudante usando o reduce
    // reduce soma todas as notas do array notas
    const total = estudante.notas.reduce((soma, nota) => soma + nota);

    // extraí o nome do estudante
    let { nome } = estudante;

    // retornamos um novo objeto contendo o nome do estudante e a média das notas
    // a média é calculada dividindo o total pelo número de notas
    return { nome, media: total / estudante.notas.length };
});

// Usa o filter para criar um novo array chamado "melhoresMedias"
// O filter percorre o array "estudantesMedias" e retorna apenas os estudantes
// cuja média seja maior que 90
const melhoresMedias = estudantesMedias.filter(
    (student) => student.media > 90, // Verifica se a média do estudante é maior que 90
);


