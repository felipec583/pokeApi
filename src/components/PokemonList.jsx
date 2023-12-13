import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { StateContext } from "../context/ContextProvider";
const PokemonList = () => {
  const { setSelectedValue } = useContext(StateContext);

  const list = useLoaderData();
  const pokemons = list.map((pkm) => {
    return (
      <option value={pkm?.name} key={pkm?.id}>
        {pkm?.name.toUpperCase()}
      </option>
    );
  });

  return (
    <select
      className="select select-bordered w-full max-w-xs"
      defaultValue={"title"}
      onChange={(e) => setSelectedValue(e.target.value)}
      id="pokemonOptions"
    >
      <option value={"title"}>Pokemones</option>
      {pokemons}
    </select>
  );
};

export default PokemonList;
