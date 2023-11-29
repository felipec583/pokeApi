import { useNavigate } from "react-router-dom";
import PokemonList from "../components/PokemonList";
import { useContext } from "react";
import { StateContext } from "../context/ContextProvider";
const Pokemones = () => {
  const { selectedValue } = useContext(StateContext)
  const navigate = useNavigate();
  function handleClick(name) {
    if (selectedValue !== "title") {
      navigate(`./${name}`, { replace: true });
    } else {
      alert("Selelecciona un Pokemon");
    }
  }
  return (
    <>
      <section
        className="flex flex-col items-center justify-center gap-y-5"
        id="pokemon-container"
      >
        <h1 className="text-7xl text-bold my-3">Selecciona un pokemon</h1>
        <PokemonList />
        <button
          className="btn btn-primary"
          onClick={() => handleClick(selectedValue)}
        >
          Ver detalles
        </button>
      </section>
    </>
  );
};

export default Pokemones;
