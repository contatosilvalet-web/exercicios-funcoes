# Exercício 03

## Carrinho de um e-commerce

Nesta sequência de exercícios vamos simular a lógica de um processo simples de checkout em um e-commerce. As operações serão implementadas com funções independentes, que receberão o objeto `carrinho` como parâmetro quando precisarem consultar ou alterar seus dados.

**a)** Declare uma função chamada `imprimirResumoDoCarrinho` que tenha apenas um parâmetro chamado `carrinho`.

**b)** O parâmetro `carrinho` terá sempre este formato:

```javascript
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
}
```

Implemente `imprimirResumoDoCarrinho(carrinho)` para exibir:

```
Cliente: Guido Bernal
Total de itens: 5 itens
Total a pagar: R$ 190,00
```

**c)** Declare uma função isolada chamada `addProdutoAoCarrinho` com dois parâmetros: `carrinho` e `produto`.

**d)** Implemente a função para adicionar o produto ao array `carrinho.produtos`. Antes de adicionar, verifique se já existe um produto com o mesmo `id`. Se existir, incremente sua propriedade `qtd`; caso contrário, adicione um novo item.

Teste com:

```javascript
const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

addProdutoAoCarrinho(carrinho, novaBermuda)
imprimirResumoDoCarrinho(carrinho)
```

Resultado esperado:

```
Cliente: Guido Bernal
Total de itens: 8 itens
Total a pagar: R$ 340,00
```

Em seguida, teste com:

```javascript
const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

addProdutoAoCarrinho(carrinho, novoTenis)
imprimirResumoDoCarrinho(carrinho)
```

Resultado esperado:

```
Cliente: Guido Bernal
Total de itens: 9 itens
Total a pagar: R$ 440,00
```

**e)** Declare uma função chamada `imprimirDetalhes` que receba `carrinho` como parâmetro. Ao chamá-la com o carrinho original, ela deverá exibir:

```
Cliente: Guido Bernal

Item 1 - Bermuda - 2 und - R$ 100,00
Item 2 - Camisa - 3 und - R$ 90,00

Total de itens: 5 itens
Total a pagar: R$ 190,00
```

**f)** Para evitar repetir cálculos, declare e implemente as funções abaixo:

- `calcularTotalDeItens(carrinho)`: retorna a quantidade total de itens.
- `calcularTotalAPagar(carrinho)`: retorna o valor total da compra.

Depois, altere `imprimirResumoDoCarrinho(carrinho)` e `imprimirDetalhes(carrinho)` para chamarem essas funções.

**g)** Declare e implemente `calcularDesconto(carrinho)`. A função deve retornar um número inteiro com o desconto, em centavos.

Existem dois descontos possíveis, não cumulativos:

- Para compras acima de 4 itens, o item mais barato sai de graça.
- Para compras acima de R$ 100,00, o cliente recebe 10% de desconto.

No máximo um desconto deve ser aplicado: escolha o mais vantajoso para o cliente.

Para o carrinho original, o desconto deve ser de `R$ 30,00`. Após adicionar a nova bermuda, com 8 itens e total de `R$ 340,00`, o desconto deve ser de `R$ 34,00`. Após adicionar também o tênis, o desconto deve ser de `R$ 44,00`.

---

Preencha a checklist para finalizar o exercício:

-   [x] Resolver o exercício revendo a aula se necessário
-   [x] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
-   [x] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
-   [x] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)

