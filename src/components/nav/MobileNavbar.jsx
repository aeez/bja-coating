import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
  return (
    <>
      <NavLink
        to={"/"}
        className="-mx-3 ml-6 mr-8 block rounded-lg px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10 "
        style={({ isActive }) => ({
          color: isActive ? "green" : " ",
        })}
      >
        Home
      </NavLink>
      <div className="mx-auto w-3/4 border-b-2 border-green-700/80"></div>
      <NavLink
        to={"/gallery"}
        className="-mx-3 ml-6 mr-8 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10 "
        style={({ isActive }) => ({
          color: isActive ? "green" : " ",
        })}
      >
        Gallery
      </NavLink>
      <div className="mx-auto w-3/4 border-b-2 border-green-700/80"></div>
      <NavLink
        to={"/contact"}
        className="-mx-3 ml-6 mr-8 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10 "
        style={({ isActive }) => ({
          color: isActive ? "green" : " ",
        })}
      >
        Contact
      </NavLink>
      <div className="mx-auto w-3/4 border-b-2 border-green-700/80"></div>
      <NavLink
        to={"/about"}
        className="-mx-3 ml-6 mr-8 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10 "
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
