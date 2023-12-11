import "./App.css";
import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "./components/NavBar";
import StateProvider from "./context/ContextProvider.jsx";

function App() {
  const navigation = useNavigation();
  console.log(navigation.state);
  return (
    <>
      <div id="detail">
        <NavBar />
        <StateProvider>
          {navigation.state === "loading" ? (
            <div id="spinner">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : (
            <Outlet />
          )}
        </StateProvider>
      </div>
    </>
  );
}

export default App;
