

const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
        
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
}

Promise.all([
    fetch('http://pokeapi.co/api/v2/pokemon/1'),
    fetch('http://pokeapi.co/api/v2/pokemon/2'),
    fetch('http://pokeapi.co/api/v2/pokemon/3'),
    fetch('http://pokeapi.co/api/v2/pokemon/4'),
]).then(results => {
    console.log(results)
})