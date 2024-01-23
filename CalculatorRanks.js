function calculaSaldo(vitorias, derrotas) {
    return vitorias - derrotas
}

let herois = [
    [15, 10],
    [27, 10],
    [44, 22],
    [100, 49],
    [91, 1],
    [200, 107],
    [200, 42]
]

for (let i = 0; i < herois.length; i++) {
    let saldoVitorias = calculaSaldo(herois[i][0], herois[i][1])
    let nivel = '';

    if (saldoVitorias <= 10) {
        nivel = 'Ferro'
    } else if (saldoVitorias <= 20) {
        nivel = 'Bronze'
    } else if (saldoVitorias <= 50) {
        nivel = 'Prata'
    } else if (saldoVitorias <= 80) {
        nivel = 'Ouro'
    } else if (saldoVitorias <= 90) {
        nivel = 'Diamante'
    } else if (saldoVitorias <= 100) {
        nivel = 'Lendário'
    } else {
        nivel = 'Imortal'
    }

    console.log(`O Herói ${i+1} tem de saldo de ${saldoVitorias} está no nível de ${nivel}`)
}