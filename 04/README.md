# Exercício 04

## Sistema de transações bancárias

Nesta sequência de exercícios vamos simular as operações básicas de um sistema bancário usando funções e parâmetros. As funções receberão o objeto `contaBancaria` para consultar ou alterar seus dados diretamente.

**a)** Crie um objeto `contaBancaria` com o seguinte formato:

```javascript
const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: []
}
```

**b)** Declare uma função `depositar` que tenha os parâmetros `contaBancaria` e `valor`.

**c)** Implemente `depositar(contaBancaria, valor)`. O valor será um número inteiro em centavos e a função deverá:

- Somar o valor ao saldo atual da conta.
- Adicionar ao array `historicos` um objeto no formato:

```javascript
{
    tipo: "Depósito",
    valor: 10000
}
```

- Retornar: `Deposito de R$100 realizado para o cliente: Maria`.

**d)** Declare uma função `sacar` que tenha os parâmetros `contaBancaria` e `valor`.

**e)** Implemente `sacar(contaBancaria, valor)`. O valor também será informado em centavos e a função deverá:

- Verificar se o valor é maior que o saldo. Se for, retornar `Saldo insuficiente para o saque de: Maria` e não realizar nenhuma outra operação.
- Caso haja saldo suficiente, subtrair o valor do saldo.
- Adicionar ao array `historicos` um objeto no formato:

```javascript
{
    tipo: "Saque",
    valor: 5000
}
```

- Retornar: `Saque de R$50 realizado para o cliente: Maria`.

**f)** Declare uma função `extrato` que tenha `contaBancaria` como parâmetro.

**g)** Implemente `extrato(contaBancaria)` para retornar o seguinte formato:

```
Extrato de Maria - Saldo: R$50
Histórico:
Depósito de $100
Saque de $50
```

**h)** Teste sua implementação com as chamadas abaixo:

```javascript
console.log(depositar(contaBancaria, 10000))
console.log(sacar(contaBancaria, 50000))
console.log(sacar(contaBancaria, 5000))
console.log(extrato(contaBancaria))
```

Resultado esperado:

```
Deposito de R$100 realizado para o cliente: Maria
Saldo insuficiente para o saque de: Maria
Saque de R$50 realizado para o cliente: Maria
Extrato de Maria - Saldo: R$50
Histórico:
Depósito de $100
Saque de $50
```

Faça commit do resultado.

---

Preencha a checklist para finalizar o exercício:

- [ ] Resolver o exercício revendo a aula se necessário
- [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)

