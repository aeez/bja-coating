import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
  return (
    <>
      <NavLink
        to={"/"}
        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
        style={({ isActive }) => ({
          color: isActive ? "green" : " ",
        })}
      >
        Home
      </NavLink>
      <NavLink
        to={"/gallery"}
        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
        style={({ isActive }) => ({
          color: isActive ? "green" : " ",
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
      <NavLink
        to={"/about"}
        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
        style={({ isActive }) => ({
          color: isActive ? "green" : " ",
        })}
      >
        About
      </NavLink>
    </>
  );
};

export default MobileNavbar;
