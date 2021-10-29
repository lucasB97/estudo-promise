function gerarNumeros(min, max, tempo) {
    if(min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        setTimeout(() => {
            const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros() {
    console.log('Gerando números...')
    return Promise.all([
        gerarNumeros(1,10,1000),
        gerarNumeros(1,20,2000),
        gerarNumeros(1,30,3000),
        gerarNumeros(1,40,4000),
        gerarNumeros(1,50,5000),
    ])
}

gerarVariosNumeros()
    .then(numeros => console.log(numeros))