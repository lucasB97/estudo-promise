function gerarNumeros(min, max) {
    if(min > max) {
        //invertendo o valor das daus variáveis com destructuring
        //o valor do min vai pro max e o max vai pro min
        [max, min] = [min, max]
       
    }
    return new Promise(resolve => {
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
        resolve(aleatorio)
    })
}

gerarNumeros(1, 20)
    .then(num => num * 10)
    .then(numx10 => `o número gerado foi ${numx10}`)
    .then(console.log)