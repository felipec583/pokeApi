import { NavLink, useNavigate } from "react-router-dom";
import generateNavLinkClass from "../utils/utils";
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar bg-gray-800 text-white h-50">
      <div className="flex-1">
        <img
          src="/logo.svg"
          alt="logo"
          className="logo"
          onClick={() => navigate("/", { replace: true })}
        />
      </div>
      <div className="flex gap-x-3">
        <NavLink
          to="/"
          className={({ isActive }) => generateNavLinkClass(isActive)}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => generateNavLinkClass(isActive)}
          to="/pokemones"
        >
          Pokemones
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
