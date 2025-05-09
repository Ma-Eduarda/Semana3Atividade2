// cria um array de objetos chamado funcionarios
// cada objeto representa um funcionário com nome salário e departamento
const funcionarios = [
    { nome: 'João', salario: 30000, departamento: 'TI' },
    { nome: 'Janete', salario: 70000, departamento: 'RH' },
    { nome: 'Sofia', salario: 100000, departamento: 'RH' },
];

// usa reduce para agrupar os funcionários por departamento
// percorre o array de funcionários e monta um objeto com os departamentos 
// organiza os funcionários em categorias conforme o setor em que trabalham
const funcionariosPorDepartamento = funcionarios.reduce(
    (acumulador, funcionario) => {
        const departamento = funcionario.departamento; // nome do departamento do funcionário atual
        if (!acumulador[departamento]) {
            // se ainda não existe um array para esse departamento cria um novo array
            acumulador[departamento] = [];
        }
        acumulador[departamento].push(funcionario); // adiciona o funcionário ao array do seu departamento
        return acumulador; // Retorna o acumulador atualizado
    },
    {} // um objeto vazio pra inciar o acumulador
);

// usa object.keys para obter a lista de departamentos
// usa map para calcular a média salarial de cada departamento
const mediasSalarioPorDepartamento = Object.keys(funcionariosPorDepartamento).map((departamento) => {
    const total = funcionariosPorDepartamento[departamento].reduce(
        (acumulador, funcionario) => acumulador + funcionario.salario, // soma os salários do departamento
        0 // valor inicial da soma
    );

    return {
        departamento: departamento, // Nome do departamento
        media: total / funcionariosPorDepartamento[departamento].length // Média salarial
    };
});

// Uua filter para obter apenas os departamentos cuja média salarial seja maior que 65.000
// pega os departamentos com média salarial maior que 65.000
const maioresPagamentos = mediasSalarioPorDepartamento.filter(
    (departamento) => departamento.media > 65000
);

console.log(maioresPagamentos);
