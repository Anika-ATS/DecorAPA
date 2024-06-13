import React from "react";
import { Link } from "react-router-dom";
// import useAuth from "../Hooks/useAuth";
const Navbar = () => {
  // const isAdmin= true;
  // const isInstructor= true;
  // const { user, logOut } = useContext(AuthContext);
  // const handleLogOut = () => {
  //     logOut()
  //         .then()
  //         .catch(error => console.log(error));
  // }

  //   const { logout, user } = useAuth();

  //   const handleLogout = async () => {
  //     await logout();
  //   };

  const NavItems = (
    <>
      <li>
        <Link to="/" className="ml-10 text-white font-bold">
          Home
        </Link>
      </li>
      <li>
        <Link to="/users" className=" text-white font-bold">
          Users
        </Link>
      </li>
      <li>
        <Link to="/approved">
          <span className=" text-white font-bold">Products</span>{" "}
        </Link>
      </li>
      {/* {user?.email ? */}
      <>
        <li tabIndex={0}>
          <details className=" text-fuchsia-white font-bold">
            <summary>Dashboard</summary>
            <ul className="p-2 z-50 text-cyan-800">
              {/* {isAdmin?<> */}
              <li>
                <Link to="/dashboard1">Admin Dasboard</Link>
              </li>
              {/* </>:
                     <> */}
              {/* {isInstructor?<> */}
              <li>
                <Link to="/dashboard2">SELL Dashboard</Link>
              </li>
              {/* </> */}
              {/* //  : */}

              <li>
                <Link to="/dashboard3">BUY Dasboard</Link>
              </li>
              {/* //  } */}
              {/* </> */}
              {/* } */}
            </ul>
          </details>
        </li>

        <li>
          <button
            // onClick={handleLogOut}
            className=" text-white font-bold"
          >
            Log Out
          </button>
        </li>
        <li>
          <span className="text-white font-bold">
            UserName
            {/* {user?.displayName} */}
          </span>
        </li>
      </>

      {/* :{" "} */}
      <li>
        <Link to="/login" className=" text-white font-bold">
          Login
        </Link>
      </li>

      {/* } */}
    </>
  );

  return (
    <div className="navbar  bg-gradient-to-r from-cyan-900 to-teal-300  py-5 px-10 opacity-80">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-white lg:hidden"
          >
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-cyan-800 text-white rounded-box w-52 "
          >
            {NavItems}

            {/* {!user && ( */}
            {/* <>
                <li>
                  <Link to="/login">
                    <a>Login</a>
                  </Link>
                </li>
                <li>
                  <Link to="/signin">
                    <a>Register</a>
                  </Link>
                </li>
              </> */}
            {/* )} */}

            {/* {user && ( */}
            {/* <li>
              
                <button className="btn">
                  Logout
                </button>
              </li> */}
            {/* )} */}
          </ul>
        </div>
        <a className="btn btn-ghost text-base-100 text-2xl font-serif font-bold">
          DecorAPA
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="text-white  menu menu-horizontal px-1">
          {NavItems}

          {/* if user here */}
          {/* {user && ( */}
          {/* <li>
              <Link to="/dashboard">
                <a>DashBoard</a>
              </Link>
            </li> */}
          {/* )} */}

          {/* {!user && ( */}
          <>
            <li>
              <Link to="/signin" className="font-bold">
                <a>Register</a>
              </Link>
            </li>
          </>
          {/* )} */}
        </ul>
      </div>
      <div className="navbar-end">
        {/* {user && ( */}
        {/* <button
          
            className=" text-white font-serif font-bold me-5"
          >
            Logout
          </button> */}
        {/* )} */}
        <div className="avatar">
          <div className="w-12 rounded-full border-2 border-black">
            {/* user?.photoURL || */}
            <img src={"/public/placeholder.jpg"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
