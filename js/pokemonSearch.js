async function fetchPokemon() {
    const inputElement = document.getElementById("pokemonName");
    if (!inputElement || !inputElement.value) {
      document.getElementById("pokemonInfo").innerHTML = `<p>Please enter a Pokémon name or ID.</p>`;
      return;
    }
  
    const pokemonName = inputElement.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
      
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Pokémon not found");
  
      const pokemon = await response.json();
        
      document.getElementById("pokemonInfo").innerHTML = `
        <h2>${pokemon.name}</h2>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <p>Height: ${pokemon.height}</p>
        <p>Weight: ${pokemon.weight}</p>
        <p>Type: ${pokemon.types.map(type => type.type.name).join(", ")}</p>
      `;
    } catch (error) {
      document.getElementById("pokemonInfo").innerHTML = `<p>${error.message}</p>`;
    }
  }