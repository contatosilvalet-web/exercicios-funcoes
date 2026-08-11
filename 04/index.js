const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: []
};

function depositar(contaBancaria, valor) {

    contaBancaria.saldo += valor;

    contaBancaria.historicos.push({
        tipo: "Depósito",
        valor: valor
    });

    return `Deposito de R$${valor / 100} realizado para o cliente: ${contaBancaria.nome}`;
}


function sacar(contaBancaria, valor) {

    if (valor > contaBancaria.saldo) {

        return `Saldo insuficiente para o saque de: ${contaBancaria.nome}`;
    }

    contaBancaria.saldo -= valor;

    contaBancaria.historicos.push({
        tipo: "Saque",
        valor: valor
    });

    return `Saque de R$${valor / 100} realizado para o cliente: ${contaBancaria.nome}`;
}


function extrato(contaBancaria) {

    let resultado = `Extrato de ${contaBancaria.nome} - Saldo: R$${contaBancaria.saldo / 100}
Histórico:
`;

    for (const historico of contaBancaria.historicos) {

        resultado += `${historico.tipo} de $${historico.valor / 100}\n`;
    }

    return resultado;
}


console.log(depositar(contaBancaria, 10000));

console.log(sacar(contaBancaria, 50000));

console.log(sacar(contaBancaria, 5000));

console.log(extrato(contaBancaria));

/* Imprime
Deposito de R$100 realizado para o cliente: Maria
Saldo insuficiente para o saque de: Maria
Saque de R$50 realizado para o cliente: Maria
Extrato de Maria - Saldo: R$50
Histórico:
Depósito de $100
Saque de $50 */
