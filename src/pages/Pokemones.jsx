import { useNavigate } from "react-router-dom";
import PokemonList from "../components/PokemonList";
import { useContext } from "react";
import { StateContext } from "../context/ContextProvider";
import toast, { Toaster } from "react-hot-toast";

const notifyError = () => toast.error("Selecciona un Pokemon");

const Pokemones = () => {
  const { selectedValue } = useContext(StateContext);
  const navigate = useNavigate();

  function handlePokemonSelection(name) {
    if (selectedValue !== "title") {
      navigate(`./${name}`, { replace: true });
    } else {
      notifyError();
    }
  }
  return (
    <>
      <Toaster />
      <section
        className="flex flex-col items-center justify-center gap-y-5 h-screen"
        id="pokemon-container"
      >
        <h1 className="text-7xl text-bold my-3">Selecciona un pokemon</h1>
        <PokemonList />
        <button
          className="btn btn-primary"
          onClick={() => handlePokemonSelection(selectedValue)}
        >
          Ver detalles
        </button>
      </section>
    </>
  );
};

export default Pokemones;
