import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { StateContext } from "../context/ContextProvider";
useContext;
const Home = () => {
  const { setSelectedValue } = useContext(StateContext);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setSelectedValue("title");
    }
  });
  return (
    <>
      <section className="flex flex-col items-center my-2 ">
        <h1 className="text-5xl text-bold mt-2">Bienvenido Maestro Pokemón</h1>
        <div className="img-cont">
          <img src="/home-img.png" alt="charizard" />
        </div>
      </section>
    </>
  );
};

export default Home;
