import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../firebase/FirebaseAuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "LogOut Success!",
          icon: "success",
          draggable: true,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-blue-600 text-white font-bold px-4 py-2 rounded"
              : "text-gray-600 hover:text-blue-600 px-4 py-2"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-4xl">JobBox</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex gap-5 items-center mr-5">
        {user ? (
          <div className="flex items-center gap-3">
            {user.photoURL && (
              <img
                src={user.photoURL}
                alt="User Profile"
                className="w-10 h-10 rounded-full"
                title={user.displayName || "User"}
              />
            )}
            <span className="hidden sm:inline-block font-semibold">
              {user.displayName || "User"}
            </span>
            <button className="btn btn-warning" onClick={handleLogout}>
              LogOut
            </button>
          </div>
        ) : (
          <>
            <Link to="/register" className="btn">
              Register
            </Link>
            <Link to="/signIn" className="btn">
              Sign in
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
