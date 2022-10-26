
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const limit = 10
let offSet = 0
const maxRecords = 151

function loadPokemonItems(offSet, limit) {
  
    pokeApi.getPokemons(offSet, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="details">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}"/>
                </div>
            </li>
        `).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItems(offSet, limit)

loadMoreButton.addEventListener('click', () => {
    offSet += limit

    const qtdRecordNextPage = offSet + limit

    if (qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offSet
        loadPokemonItems(offSet, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItems(offSet, limit)
    }

})


    
    