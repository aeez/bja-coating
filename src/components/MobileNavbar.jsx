import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
  return (
    <>
      <NavLink
        to={"/"}
        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
        style={({ isActive }) => ({
          color: isActive ? "rgb(220 38 38)" : " ",
        })}
      >
        Home
      </NavLink>

      <NavLink
        to={"/about"}
        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
        style={({ isActive }) => ({
          color: isActive ? "rgb(220 38 38)" : " ",
        })}
      >
        About
      </NavLink>

      <NavLink
        to={"/gallery"}
        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
        style={({ isActive }) => ({
          color: isActive ? "rgb(220 38 38)" : " ",
        })}
      >
        Gallery
      </NavLink>

      <NavLink
        to={"/contact"}
        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
        style={({ isActive }) => ({
          color: isActive ? "red" : " ",
        })}
      >
        Contact
      </NavLink>
    </>
  );
};

export default MobileNavbar;
