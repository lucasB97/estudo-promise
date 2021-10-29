const fs = require('fs');
const path = __dirname + '/dados.txt'


function lerDodados(path){
    return new Promise(resolve =>{
        fs.readFile(path, function(_, conteudo){
            resolve(conteudo.toString())
        })
        console.log('lendo arquivo...')
    })
}

lerDodados(path)
    .then(dados => console.log(dados))