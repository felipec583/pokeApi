import "./App.css";
import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const navigation = useNavigation();
  return (
    <>
      <div id="detail">
        <NavBar />
        {navigation.state === "loading" ? (
          <div id="spinner">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </>
  );
}

export default App;

