import { useLoaderData } from "react-router-dom";
import { getPokemonData } from "../data/fetchPokemon";

export async function loader({ params }) {
  try {
    const pokemon = await getPokemonData(params.name);
    return { pokemon };
  } catch (error) {
    console.log(error.message);
  }
}
const PokeCard = () => {
  const { pokemon } = useLoaderData();

  const pokemonStats = pokemon.stats.map((stat) => {
    return (
      <div className="stats shadow" key={stat.stat.name}>
        <div className="stat">
          <div className="stat-title">{stat?.stat.name.toUpperCase()}</div>
          <div className="stat-value">{stat?.base_stat}</div>
        </div>
      </div>
    );
  });
  const pokemonImage = pokemon.sprites.other.dream_world["front_default"];
  const alternativeImage = pokemon.sprites.other.home["front_default"];
  const capitalizedName =
    pokemon?.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  const type = pokemon.types[0]?.type.name.toUpperCase();
  return (
    <>
      <section className="poke-card flex">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body grow-0">
            <h1 className="card-title font-bold mx-auto text-4xl">
              {capitalizedName}
            </h1>
          </div>
          <figure className="flex flex-col flex-1">
            <img
              src={pokemonImage || alternativeImage || "/fallback-img.png"}
              alt="pokemon"
              className="poke-img self-center grow"
            />
            <figcaption className="my-4 font-bold text-2xl">{type}</figcaption>
          </figure>
        </div>
        <div className="flex flex-col">{pokemonStats}</div>
      </section>
    </>
  );
};

export default PokeCard;
