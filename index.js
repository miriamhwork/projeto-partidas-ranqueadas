let vitorias = 10;
let derrotas = 5;

let saldo = somar (vitorias, derrotas);

function somar (vitorias, derrotas) {
    return vitorias - derrotas;
}

function classificar (saldo) {
    let nivel;
    if (saldo < 10) {
        nivel = "Ferro";
    } else if (saldo > 11 && saldo < 20 ){
        nivel = "Bronze"
    } else if (saldo > 21 && saldo < 50 ){
        nivel = "Prata"
    } else if (saldo > 51 && saldo < 80 ){
        nivel = "Ouro"
    } else if (saldo > 81 && saldo < 90 ){
        nivel = "Diamante"
    } else if (saldo > 91 && saldo < 100 ){
        nivel = "Lendario"
    } else if (saldo >= 101){
        nivel = "Imortal"
    }
    return nivel;
}

let nivel = classificar (saldo);

//Saída
console.log (`O Herói tem de saldo de ${saldo} está no nível de ${nivel}`)
