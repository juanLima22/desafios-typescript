//Desafio 1
const funcionario = {
  codigo: 10,
  nome: 'João'
};

//Desafio 2
enum Trabalho {
  Atriz,
  Padeiro
}

type Humano = {
  nome: string,
  idade: number,
  profissao: Trabalho
}

let pessoa1: Humano = {
  nome: 'maria',
  idade: 29,
  profissao: Trabalho.Atriz
};

let pessoa2: Humano = {
  nome: 'roberto',
  idade: 19,
  profissao: Trabalho.Padeiro
};

let pessoa3: Humano = {
  nome: 'laura',
  idade: 32,
  profissao: Trabalho.Atriz
};

let pessoa4: Humano = {
  nome: "carlos",
  idade: 19,
  profissao: Trabalho.Padeiro
}

//Desafio 3
export {} // Para não reclamar de variáveis duplicadas
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldoTotal = 0

limparSaldo()

function somarAoSaldo(soma: number) {
    if (campoSaldo) {
        saldoTotal += soma
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}

function limparCampoSoma() {
    soma.value = "";
}

function limparSaldo() {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}

if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value)); 
    });
}
botaoLimpar.addEventListener('click', () => { // Percebam que aqui o typescript não acusou o botao de ser nulo e não precisei do if. Caso queiram fazer o teste, retirem a exclamação.
    limparSaldo();
});
