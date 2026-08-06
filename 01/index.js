const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

function corrigirProva(prova) {
    const { aluno, valor, questoes } = prova;
    let nota = 0;
    let acertos = 0;

    for (let questao of questoes) {
        if (questao.resposta === questao.correta) {
            acertos++;
        }
    }

    const palavraQuestao = acertos === 1 ? "questão" : "questões";
    const pesoDaQuestao = valor / questoes.length;
    nota = acertos * pesoDaQuestao;

    console.log(`O aluno (a) ${aluno} acertou ${acertos} ${palavraQuestao} e obteve nota ${nota}`)
}

corrigirProva(prova);

// O aluno (a) João acertou 3 questões e obteve nota 6.
