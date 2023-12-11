async function getPokemon() {
  try {
    const url = "https://pokeapi.co/api/v2/";
    const res = await fetch(`${url}pokemon?limit=700`);
    if (!res.ok) throw new Error(`Something went wrong ${res.status}`);
    const data = await res.json();
    return data?.results;
  } catch (error) {
    console.log(error.message);
  }
}

async function transformedPokemonArray() {
  try {
    const data = await getPokemon();
    const transformedArray = data.map((datum, index) => {
      return { ...datum, id: index + 1 };
    });
    return transformedArray;
  } catch (error) {
    console.log(error.message);
  }
}

async function getPokemonData(name) {
  try {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    const res = await fetch(`${url}${name}`);
    if (!res.ok) throw new Error(`Something went wrong ${res.status}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export { getPokemon, transformedPokemonArray, getPokemonData };
