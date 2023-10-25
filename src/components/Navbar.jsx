import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleSignOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
    Swal.fire("Logged out");
  };

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
          to="cart"
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
      <div className="navbar-end">
        <div>
          {user ? (
            // <div className="w-10 object-cover mr-2">
            //   <img className="rounded-full" src={user.photoURL} alt="" />
            // </div>
            // <div className="avatar">
            //   <div className="w-12 mr-2 rounded-full">
            //     <img src={user.photoURL} />
            //   </div>
            // </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="h-10 w-10">
                <img
                  className="h-full w-full rounded-full object-cover object-center "
                  src={user.photoURL}
                  alt=""
                />
              </div>
              <div>
                <div className="text-sm font-medium text-secondary-500">
                  {user.displayName}
                </div>
                <div className="text-xs text-secondary-400">
                  {user.email}
                </div>
              </div>
            </div>
          ) : (
            <div className="w-10   mr-2">
              <img
                className="rounded-full"
                src="https://i.ibb.co/8b7zG7B/user.png"
                alt=""
              />
            </div>
          )}
        </div>

        <div className="mx-3">
          {user ? (
            <button onClick={handleSignOut} className="btn btn-primary">
              Log out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
