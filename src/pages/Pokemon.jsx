import PokeCard from "../components/PokeCard";
import {StateContext} from "../context/ContextProvider";
import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
const Pokemon = () => {
  const { isLoading, setIsLoading } = useContext(StateContext);
  const { pokemon } = useLoaderData();
  useEffect(() => {
    console.log(isLoading);
    if (pokemon) {
      setIsLoading(false);
      console.log(isLoading);
    }
  });
  return (
    <>
      {isLoading ? (
        <p>Is loading</p>
      ) : (
        <section className="flex h-screen justify-center items-center">
          <PokeCard />
        </section>
      )}
    </>
  );
};

export default Pokemon;
