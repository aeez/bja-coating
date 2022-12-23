import { NavLink } from "react-router-dom";

const Navlink = () => {
  return (
    <>
      <NavLink
        to={"/"}
        className="rounded-lg py-2 px-3 font-semibold text-gray-900 hover:bg-gray-400/10"
        style={({ isActive }) => ({
          color: isActive ? "green" : " ",
        })}
      >
        Home
      </NavLink>

      <NavLink
        to={"/gallery"}
        className="rounded-lg py-2 px-3 font-semibold text-gray-900 hover:bg-gray-400/10"
        style={({ isActive }) => ({
          color: isActive ? "green" : " ",
        })}
      >
        Gallery
      </NavLink>

      <NavLink
        to={"/contact"}
        className="rounded-lg py-2 px-3 font-semibold text-gray-900 hover:bg-gray-400/10"
        style={({ isActive }) => ({
          color: isActive ? "green" : " ",
        })}
      >
        Contact
      </NavLink>

      <NavLink
        to={"/about"}
        className="rounded-lg py-2 px-3 font-semibold text-gray-900 hover:bg-gray-400/10"
        style={({ isActive }) => ({
          color: isActive ? "green" : " ",
        })}
      >
        About
      </NavLink>
    </>
  );
};

export default Navlink;
