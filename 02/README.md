# Exercício 02

## Carro

Nesta sequência de exercícios criaremos um objeto `carro` e funções para controlar seu estado. O objeto possuirá duas propriedades: `ligado`, um booleano, e `velocidade`, um número.

As funções deverão receber o objeto `carro` como parâmetro. Dessa forma, será possível alterar suas propriedades diretamente a partir do parâmetro recebido.

#### Vamos então aos passos para completar o exercício!

**a)** Crie o objeto `carro` com as duas propriedades abaixo:

- **ligado**: deve ser inicializada com o valor `false`.
- **velocidade**: deve ser inicializada com o valor `0`.

**b)** Declare uma função chamada `ligar` que receba `carro` como parâmetro e implemente a seguinte lógica:

- Se o carro já estiver ligado, imprima: `Este carro já está ligado.`
- Caso contrário, altere `carro.ligado` para `true`.

**c)** Declare uma função chamada `desligar` que receba `carro` como parâmetro e implemente a seguinte lógica:

- Se o carro já estiver desligado, imprima: `Este carro já está desligado.`
- Caso contrário, altere `carro.ligado` para `false` e atribua `0` à propriedade `carro.velocidade`.

**d)** Declare uma função chamada `acelerar` que receba `carro` como parâmetro e implemente a seguinte lógica:

- Se o carro estiver desligado, imprima: `Não é possível acelerar um carro desligado.`
- Caso contrário, aumente em `10` o valor de `carro.velocidade`.

**e)** Declare uma função chamada `desacelerar` que receba `carro` como parâmetro e implemente a seguinte lógica:

- Se o carro estiver desligado, imprima: `Não é possível desacelerar um carro desligado.`
- Caso contrário, diminua `10` do valor de `carro.velocidade`.

**f)** Em cada função, somente quando alguma propriedade for alterada, imprima o status atual do carro no formato:

`Carro [ligado/desligado]. Velocidade: [velocidade].`

Exemplos:

```
Carro desligado. Velocidade: 0.
Carro ligado. Velocidade: 0.
Carro ligado. Velocidade: 30.
```

**g)** Depois de construir o objeto e as funções, execute as funções na seguinte ordem:

1. `desligar(carro)`
2. `ligar(carro)`
3. `ligar(carro)`
4. `acelerar(carro)`
5. `acelerar(carro)`
6. `desacelerar(carro)`
7. `desligar(carro)`
8. `acelerar(carro)`
9. `desacelerar(carro)`

As mensagens esperadas são:

```
Este carro já está desligado.
Carro ligado. Velocidade: 0.
Este carro já está ligado.
Carro ligado. Velocidade: 10.
Carro ligado. Velocidade: 20.
Carro ligado. Velocidade: 10.
Carro desligado. Velocidade: 0.
Não é possível acelerar um carro desligado.
Não é possível desacelerar um carro desligado.
```

Depois, fique à vontade para testar outras sequências de chamadas.

### EXTRA

Estes itens não são obrigatórios e só deverão ser feitos se estiver com tempo sobrando.

- Crie uma função auxiliar para evitar a repetição da impressão do status do carro.
- Faça uma validação para permitir que o carro seja desligado apenas quando estiver em velocidade zero.
- Implemente uma função `startStop(carro)` que ligue o carro se ele estiver desligado e desligue o carro se ele estiver ligado.
- Faça com que `acelerar(carro)` ligue o carro automaticamente quando necessário e que `desacelerar(carro)` desligue o carro quando a nova velocidade for zero.

---

Preencha a checklist para finalizar o exercício:

-   [x] Resolver o exercício revendo a aula se necessário
-   [x] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
-   [x] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
-   [x] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)

