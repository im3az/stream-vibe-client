import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <div className="lg:flex text-white rounded-lg px-4 py-1 bg-[#6423E6]  gap-x-5">
      <li>
        <NavLink
          className="transition-colors hover:bg-white hover:text-black"
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="transition-colors hover:bg-white hover:text-black "
          to="/addMovies"
        >
          Add Movies
        </NavLink>
      </li>
      <li>
        <NavLink
          className="transition-colors hover:bg-white hover:text-black"
          to="/myCart"
        >
          My Cart
        </NavLink>
      </li>
      <li>
        <NavLink
          className="transition-colors hover:bg-white hover:text-black"
          to="/login"
        >
          Login
        </NavLink>
      </li>
    </div>
  );
  return (
    <div className="navbar text-white font-semibold bg-[#2f343b]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-primary normal-case text-xl">
          <img src="https://i.ibb.co/ZHTVVTP/Stream-Vibe.png" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu  text-lg ">{navLinks}</ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;
