import { NavLink } from "react-router-dom";

const Navlink = () => {
  return (
    <>
      <NavLink
        to={"/"}
        className="rounded-lg py-2 px-3 font-semibold"
        style={({ isActive }) => ({
          color: isActive ? "#10b981" : " ",
        })}
      >
        Home
      </NavLink>

      <NavLink
        to={"/gallery"}
        className="rounded-lg py-2 px-3 font-semibold"
        style={({ isActive }) => ({
          color: isActive ? "#10b981" : " ",
        })}
      >
        Gallery
      </NavLink>

      <NavLink
        to={"/contact"}
        className="rounded-lg py-2 px-3 font-semibold"
        style={({ isActive }) => ({
          color: isActive ? "#10b981" : " ",
        })}
      >
        Contact
      </NavLink>

      <NavLink
        to={"/about"}
        className="rounded-lg py-2 px-3 font-semibold"
        style={({ isActive }) => ({
          color: isActive ? "#10b981" : " ",
        })}
      >
        About
      </NavLink>
    </>
  );
};

export default Navlink;
