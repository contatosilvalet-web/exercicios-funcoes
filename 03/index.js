const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ]
};

function calcularTotalDeItens(carrinho) {
    let total = 0;

    for (const produto of carrinho.produtos) {
        total += produto.qtd;
    }

    return total;
}

function calcularTotalAPagar(carrinho) {
    let total = 0;

    for (const produto of carrinho.produtos) {
        total += produto.qtd * produto.precoUnit;
    }

    return total;
}

function imprimirResumoDoCarrinho(carrinho) {
    const totalItens = calcularTotalDeItens(carrinho);
    const totalAPagar = calcularTotalAPagar(carrinho);

    console.log(`Cliente: ${carrinho.nomeDoCliente}`);
    console.log(`Total de itens: ${totalItens} itens`);
    console.log(
        `Total a pagar: R$ ${(totalAPagar / 100).toFixed(2).replace(".", ",")}`
    );
}

function addProdutoAoCarrinho(carrinho, produto) {

    const produtoExistente = carrinho.produtos.find(
        p => p.id === produto.id
    );

    if (produtoExistente) {
        produtoExistente.qtd += produto.qtd;

    } else {
        carrinho.produtos.push(produto);
    }
}

function imprimirDetalhes(carrinho) {

    console.log(`Cliente: ${carrinho.nomeDoCliente}`);
    console.log("");

    let numeroItem = 1;

    for (const produto of carrinho.produtos) {

        const subtotal = produto.qtd * produto.precoUnit;

        console.log(
            `Item ${numeroItem} - ${produto.nome} - ${produto.qtd} und - R$ ${(subtotal / 100).toFixed(2).replace(".", ",")}`
        );

        numeroItem++;
    }

    console.log("");

    const totalItens = calcularTotalDeItens(carrinho);
    const totalAPagar = calcularTotalAPagar(carrinho);

    console.log(`Total de itens: ${totalItens} itens`);

    console.log(
        `Total a pagar: R$ ${(totalAPagar / 100).toFixed(2).replace(".", ",")}`
    );
}

function calcularDesconto(carrinho) {

    const totalItens = calcularTotalDeItens(carrinho);
    const totalAPagar = calcularTotalAPagar(carrinho);

    let descontoItem = 0;
    let descontoDezPorCento = 0;


    if (totalItens > 4) {

        let menorPreco = carrinho.produtos[0].precoUnit;

        for (const produto of carrinho.produtos) {

            if (produto.precoUnit < menorPreco) {
                menorPreco = produto.precoUnit;
            }

        }

        descontoItem = menorPreco;
    }

    if (totalAPagar > 10000) {

        descontoDezPorCento = totalAPagar * 10 / 100;
    }


    return Math.max(
        descontoItem,
        descontoDezPorCento
    );
}

console.log("CARRINHO INICIAL");

imprimirResumoDoCarrinho(carrinho);

console.log("");

imprimirDetalhes(carrinho);

console.log("");

console.log(
    `Desconto: R$ ${(calcularDesconto(carrinho) / 100).toFixed(2).replace(".", ",")}`
);

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
};

addProdutoAoCarrinho(carrinho, novaBermuda);

console.log("");
console.log("CARRINHO APÓS ADICIONAR A BERMUDA");

imprimirResumoDoCarrinho(carrinho);

console.log(
    `Desconto: R$ ${(calcularDesconto(carrinho) / 100).toFixed(2).replace(".", ",")}`
);

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
};

addProdutoAoCarrinho(carrinho, novoTenis);

console.log("");
console.log("CARRINHO APÓS ADICIONAR TÊNIS");

imprimirResumoDoCarrinho(carrinho);

console.log(
    `Desconto: R$ ${(calcularDesconto(carrinho) / 100).toFixed(2).replace(".", ",")}`
);

/* Imprime 
CARRINHO INICIAL
Cliente: Guido Bernal
Total de itens: 5 itens
Total a pagar: R$ 190,00

Cliente: Guido Bernal

Item 1 - Camisa - 3 und - R$ 90,00
Item 2 - Bermuda - 2 und - R$ 100,00

Total de itens: 5 itens
Total a pagar: R$ 190,00

Desconto: R$ 30,00

CARRINHO APÓS ADICIONAR A BERMUDA
Cliente: Guido Bernal
Total de itens: 8 itens
Total a pagar: R$ 340,00
Desconto: R$ 34,00

CARRINHO APÓS ADICIONAR TÊNIS
Cliente: Guido Bernal
Total de itens: 9 itens
Total a pagar: R$ 440,00
Desconto: R$ 44,00 */
