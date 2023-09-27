const pokemonData = [
    { id: 1, name: "Bulbasaur", type: "Grass/Poison" },
    { id: 4, name: "Charmander", type: "Fire" },
    { id: 7, name: "Squirtle", type: "Water" },
];


function displayPokemonDetails(pokemon) {
    const detailsDiv = document.getElementById("pokemon-details");
    detailsDiv.innerHTML = `<h2>${pokemon.name}</h2><p>Type: ${pokemon.type}</p>`;
}

function listPokemon() {
    const listUl = document.getElementById("pokemon-list");
    
    pokemonData.forEach((pokemon) => {
        const listItem = document.createElement("li");
        listItem.textContent = pokemon.name;
        listItem.addEventListener("click", () => {
            displayPokemonDetails(pokemon);
        });
        listUl.appendChild(listItem);
    });
}


listPokemon();