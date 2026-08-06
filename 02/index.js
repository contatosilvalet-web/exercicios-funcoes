const carro = {
    ligado: false,
    velocidade: 0,
};

function status(carro) {
    const estado = carro.ligado ? "ligado" : "desligado";
    console.log(`Carro ${estado}. Velocidade: ${carro.velocidade}.`);
}

function ligar(carro) {
    if (carro.ligado) {
        console.log("Este carro já está ligado.");
    } else {
        carro.ligado = true;
        status(carro);
    }

}

function desligar(carro) {
    if (!carro.ligado) {
        console.log("Este carro já está desligado.");
    } else {
        carro.ligado = false;
        carro.velocidade = 0;
        status(carro);
    }
   
}

function acelerar(carro) {
    if (!carro.ligado) {
        console.log("Não é possível acelerar um carro desligado.");
    } else {
        carro.velocidade += 10;
        status(carro);
    }

}

function desacelerar(carro) {
    if (!carro.ligado) {
        console.log("Não é possível desacelerar um carro desligado.");
    } else {
        (carro.velocidade -= 10);
        status(carro);
    }
}

desligar(carro);
ligar(carro);
ligar(carro);
acelerar(carro);
acelerar(carro);
desacelerar(carro);
desligar(carro);
acelerar(carro);
desacelerar(carro);

/* Este carro já está desligado.
Carro ligado. Velocidade: 0.
Este carro já está ligado.
Carro ligado. Velocidade: 10.
Carro ligado. Velocidade: 20.
Carro ligado. Velocidade: 10.
Carro desligado. Velocidade: 0.
Não é possível acelerar um carro desligado.
Não é possível desacelerar um carro desligado. */
