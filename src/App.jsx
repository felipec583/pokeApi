import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import StateProvider from "./context/ContextProvider.jsx";
function App() {
  return (
    <>
      <NavBar />
      <StateProvider>
        <Outlet />
      </StateProvider>
    </>
  );
}

export default App;
