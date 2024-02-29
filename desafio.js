let saldo = partidas (90, 30)

console.log ("Seu saldo de vitórias é de : " + saldo)
function partidas(vitorias, derrotas){
    
    return vitorias - derrotas
}

if (saldo < 10){
    rank = "Ferro"    
} else if (saldo > 11 && saldo <= 20){
    rank = "Bronze"
} else if (saldo > 21 && saldo <= 50){
    rank = "Prata"
} else if (saldo > 51 && saldo <= 80){
    rank = "Ouro"
} else if (saldo > 81 && saldo <= 90){
    rank = "Diamante"
} else if (saldo > 91 && saldo <= 100){
    rank = "Lendário"
} else if (saldo >= 101){
    rank = "Imortal"
}

console.log ("O seu herói tem saldo de: " + saldo + ", estando no nível: " + rank)

