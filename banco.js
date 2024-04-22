
// let/nomeUsuario e uma variavel enquanto o prompt pede pro usurario digitar um nome

let nomeUsuario = prompt("Digite seu login:");
let senhaUsuario = prompt("Digite sua senha:");

const opcao = parseInt(prompt(`
    1. Saldo
    2. Extrato
    3. Saque
    4. Depósito
    5. Transferência
    6. Sair
`));

console.log(opcao);

// console.log vai exibir uma mensagem de boas-vindas,

//(${nomeUsuario}, e uma interpolação de string que coloca um valor da variavel nomeUsuario)
//(interpolação) é uma intercalação de palavras ou frases em um texto,
//e um metodo que permite construir um novo conjunto de dados, apartir de um conjunto de dados conhecido



// duas variaveis saldo, senha e login

let saldo = 1000; // saldo inicial
let senha = 5698; // senha
let login = 'rafa'

//função inicio vai ter uma variavel chamada opcao
//essa função vai ter um (parseInt) essa função converte um string(letras, números e/ou símbolos)
//em numeros inteiros, 

/* function inicio() {
    let opcao = parseInt(prompt(`\nEscolha uma opção:
    1. Saldo
    2. Extrato
    3. Saque
    4. Depósito
    5. Transferência
    6. Sair`)); */

const saldoUsuario = ()=> {
    alert(`Olá ${nomeUsuario}, seu saldo = ${saldo}`)
}

const erro = ()=> {
    alert("erro")
}

// switch recebe a variavel(opcao) o switch e usado quando você tem varios valores
// possíveis e deseja abrir diferentes blocos de código com base nesses valores
// daria pra fazer com if e else, mas dificultaria a leitura do codigo

switch (opcao) {
    case 1:
    saldoUsuario();
        break;
    case 2:
    extratoUsuario();
        break;
    case 3:
    sacar();
        break;
    case 4:
    depositar();
        break;
    case 5:
    transferir();
        break;
    case 6:
        console.log(`\n${nomeUsuario}, foi um prazer ter você por aqui!`);
        break;
    default:
        erro(); 
         break;
}

    
