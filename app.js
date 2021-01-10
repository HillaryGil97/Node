fetch('https://rickandmortyapi.com/api/character/?page=19')
    .then(response => {
        console.log(response)
        return response.json()
    })
    .then(data => console.log(data.results))
    .catch(err => console.log(`No se pudo broh UmU ${err}`))

/*fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));*/

/*async function getCharacters () {
    const response = await (await fetch('https://rickandmortyapi.com/api/character/?page=19')).json()
    //const data = await response.json()
    console.log(response)
}*/

const getCharacters = async () => {
    try {
        const response = await (await fetch('https://rickandmortyapi.com/api/character/?page=19')).json()
        console.log(response)
    } catch (error) {
        console.log(`No se pudo broh UmU ${error}`)
    }
}

getCharacters()