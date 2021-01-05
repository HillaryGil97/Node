const fs = require('./files')
const operations = require ('./operations')
console.log('Hola mundo')

const total = operations.sum (2,2)
const totalRes = operations.resta(5,4)
console.log(`Total suma: ${total}\nTotal resta: ${totalRes}`)

fs.escribirSyn('./archivo.txt')
fs.escribir('./archivo2.txt', 'Si weee :v')
fs.leer('./archivo2.txt')
fs.borrar('./archivo.txt')