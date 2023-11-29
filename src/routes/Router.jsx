import App from "../App.jsx";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../pages/Home";
import Pokemones from "../pages/Pokemones";
import Pokemon from "../pages/Pokemon";
import ErrorPage from "../pages/ErrorPage";
import { transformedPokemonArray } from "../data/fetchPokemon.js";
import { loader as pokemonLoader } from "../components/PokeCard.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route
        path="pokemones"
        element={<Pokemones />}
        loader={transformedPokemonArray}
      />
      <Route
        path="pokemones/:name"
        element={<Pokemon />}
        loader={pokemonLoader}
      />
    </Route>
  )
);

export default router;
