const fs = require('fs')
const operations = require ('./operations')
console.log('Hola mundo')

const total = operations.sum (2,2)
const totalRes = operations.resta(5,4)
console.log(`Total suma: ${total}\nTotal resta: ${totalRes}`)

fs.writeFileSync('./archivo.txt', '')