import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar bg-gray-800 text-white h-50">
      <div className="flex-1">
        <img src="../../public/logo.svg" alt="logo" className="logo" />
      </div>
      <div className="flex gap-x-3">
        <NavLink
          to="/"
          className={({ isActive }) => {
            const par = [
              isActive
                ? ["btn-primary", "text-white"].join(" ")
                : ["btn-secondary", "text-black"].join(" "),
            ];

            return [...par, "btn"].join(" ");
          }}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            const par = [
              isActive
                ? ["btn-primary", "text-white"].join(" ")
                : ["btn-secondary", "text-black"].join(" "),
            ];

            return [...par, "btn"].join(" ");
          }}
          to="/pokemones"
        >
          Pokemones
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
