const fs = require('fs')

function escribirSyn (archivo) {
    fs.writeFileSync(archivo, '') //hacer un archivo de forma sincrona
}

function escribir (archivo,contenido) {
    fs.writeFile(archivo, contenido, (err) => { //hacer un archivo de forma asincrona
        if (err) throw err
        console.log('Se creo el archivo chido ;)')})
}

function leer (archivo){
    fs.readFile(archivo, 'utf8',(err,data) => { //hacer un archivo de forma asincrona
        if (err) throw err
        console.log(data)})
}

function borrar (archivo){
    fs.unlink(archivo, (err) => {
        if (err) throw err
        console.log('Ay Drake, si se murio en serio :(')
      });
}

module.exports =  {
    escribirSyn,
    escribir,
    leer,
    borrar
}