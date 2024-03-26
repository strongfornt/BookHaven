import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div className="navbar bg-base-100">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "border p-2 rounded-lg border-success text-success text-base font-bold "
                    : "text-base text-black/60 font-bold "
                }
              >
                <p className="">Home</p>
              </NavLink>
              <NavLink
                to="/listedBooks"
                className={({ isActive }) =>
                  isActive
                    ? "border p-2 rounded-lg border-success text-success text-base font-bold  "
                    : "text-base text-black/60 font-bold "
                }
              >
                <p>Listed Books</p>
              </NavLink>
              <NavLink
                to="/toRead"
                className={({ isActive }) =>
                  isActive
                    ? "border p-2 rounded-lg border-success text-success text-base font-bold "
                    : "text-base text-black/60 font-bold "
                }
              >
                <p>Pages to Read</p>
              </NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">BookVibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 items-center ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "border btn btn-sm bg-transparent border-success text-success text-base font-bold "
                  : "text-base text-black/60 font-bold "
              }
            >
              <p className="">Home</p>
            </NavLink>
            <NavLink
              to="/listedBooks"
              className={({ isActive }) =>
                isActive
                  ? "border btn btn-sm bg-transparent border-success text-success text-base font-bold "
                  : "text-base text-black/60 font-bold "
              }
            >
              <p>Listed Books</p>
            </NavLink>
            <NavLink
              to="/toRead"
              className={({ isActive }) =>
                isActive
                  ? "border btn btn-sm border-success bg-transparent text-success text-base font-bold "
                  : "text-base text-black/60 font-bold "
              }
            >
              <p>Pages to Read</p>
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <a
           
            className="relative inline-flex items-center justify-start border border-success btn btn-sm cursor-pointer overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-success absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Sign in
            </span>
          </a>
          <a
            href="#_"
            className="relative inline-flex items-center justify-start border border-info btn btn-sm overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-info absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Sign up
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
