import { NavLink } from "react-router-dom";

const Navlink = () => {
  return (
    <>
      <NavLink
        to={"/"}
        className="rounded-lg py-2 px-3 font-semibold text-gray-900 hover:bg-gray-400/10"
        style={({ isActive }) => ({
          color: isActive ? "rgb(220 38 38)" : " ",
        })}
      >
        Home
      </NavLink>

      <NavLink
        to={"/about"}
        className="rounded-lg py-2 px-3 font-semibold text-gray-900 hover:bg-gray-400/10"
        style={({ isActive }) => ({
          color: isActive ? "rgb(220 38 38)" : " ",
        })}
      >
        About
      </NavLink>

      <NavLink
        to={"/gallery"}
        className="rounded-lg py-2 px-3 font-semibold text-gray-900 hover:bg-gray-400/10"
        style={({ isActive }) => ({
          color: isActive ? "rgb(220 38 38)" : " ",
        })}
      >
        Gallery
      </NavLink>

      <NavLink
        to={"/contact"}
        className="rounded-lg py-2 px-3 font-semibold text-gray-900 hover:bg-gray-400/10"
        style={({ isActive }) => ({
          color: isActive ? "red" : " ",
        })}
      >
        Contact
      </NavLink>
    </>
  );
};

export default Navlink;
