import PokeCard from "../components/PokeCard";
import { useNavigate } from "react-router-dom";
const Pokemon = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="flex flex-col h-screen justify-center items-center">
        <PokeCard />
        <button
          className="my-4 btn btn-primary"
          onClick={() => navigate("/", { replace: false })}
        >
          Volver al home
        </button>
      </section>
    </>
  );
};

export default Pokemon;
