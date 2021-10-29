//resolve quando a promise é cumprida
function falardepoisDe(segundos, frase) {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falardepoisDe(3, "é a frase")
    .then(frase => frase.concat(" boy"))
    .then(outraFrase => console.log(outraFrase))



//reject quando a promise é negada
function erroDepoisDe(segundos, frase) {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            reject(frase)
        }, segundos * 1000)
    })
}

falardepoisDe(3, "ta errado")
    .then(frase => frase.concat(" boy"))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))