import { NavLink } from "react-router-dom";

import { useState } from "react";

export default function Nav() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="navbar bg-base-100  px-4 lg:px-10 shadow-sm ">
        {/* menu bar start */}
        <div className=" navbar-start relative gap-2  ">
          <div className="items-center flex lg:hidden">
            <label className=" swap swap-rotate bg-transparent border-none ">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" onChange={() => setMenu(!menu)} />

              {/* hamburger icon */}

              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              {/* close icon */}
              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
          </div>
          <ul
            tabIndex={0}
            className={`menu absolute top-10 -left-60  menu-sm lg:hidden   text-xl  dropdown-content border-r border-t border-b border-success border-opacity-60 
               mt-3 z-[1] p-2 shadow-xl bg-base-100 rounded-r-xl w-max  gap-3 py-5  ${
                 menu && "-left-[16px] duration-300  "
               }`}
              
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? " text-success text-base font-medium "
                  : "text-base text-black/60 font-medium "
              }
            >
              <p className="relative group overflow-hidden">
                Home
                <span
                  className="h-[2px] -translate-x-44  group-hover:translate-x-0 transition-transform duration-300
                   w-full bg-[#23BE0A] inline-flex absolute left-0 bottom-0"
                />
              </p>
            </NavLink>
            <NavLink
              to="/listedBooks"
              className={({ isActive }) =>
                isActive
                  ? "  text-success text-base font-bold "
                  : "text-base text-black/60 font-bold "
              }
            >
              <p className="relative group overflow-hidden   ">
                Listed Books
                <span
                  className="h-[2px] -translate-x-44  group-hover:translate-x-0 transition-transform duration-300
                   w-full bg-[#23BE0A] inline-flex absolute left-0 bottom-0"
                />
              </p>
            </NavLink>
            <NavLink
              to="/toRead"
              className={({ isActive }) =>
                isActive
                  ? "text-success text-base font-medium "
                  : "text-base text-black/60 font-medium "
              }
            >
              <p className="relative group overflow-hidden">
                Pages to Read
                <span
                  className="h-[2px] -translate-x-44  group-hover:translate-x-0 transition-transform duration-300
                   w-full bg-[#23BE0A] inline-flex absolute left-0 bottom-0"
                />
              </p>
            </NavLink>
            <NavLink
              to="/GetTouch"
              className={({ isActive }) =>
                isActive
                  ? "text-success text-base font-medium "
                  : "text-base text-black/60 font-medium "
              }
            >
              <p className="relative group overflow-hidden">
                Get in Touch
                <span
                  className="h-[2px] -translate-x-44  group-hover:translate-x-0 transition-transform duration-300
                   w-full bg-[#23BE0A] inline-flex absolute left-0 bottom-0"
                />
              </p>
            </NavLink>

            <li className="mt-5">
              <a className="relative inline-flex items-center justify-start border border-success btn btn-sm cursor-pointer overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-success absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                  Sign in
                </span>
              </a>
            </li>
            <li>
              <a className="relative inline-flex items-center justify-start border border-info btn btn-sm overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-info absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                  Sign up
                </span>
              </a>
            </li>
          </ul>
          <div>
            <a className="font-extrabold text-success/75 text-2xl">
              Book<span className="text-info/85">Haven</span>
            </a>
          </div>
        </div>
        {/* menu bar end*/}

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 items-center ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? " text-success text-base font-medium "
                  : "text-base text-black/60 font-medium "
              }
            >
              <p className="relative group overflow-hidden">
                Home
                <span
                  className="h-[2px] -translate-x-44  group-hover:translate-x-0 transition-transform duration-300
                   w-full bg-[#23BE0A] inline-flex absolute left-0 bottom-0"
                />
              </p>
            </NavLink>
            <NavLink
              to="/listedBooks"
              className={({ isActive }) =>
                isActive
                  ? "  text-success text-base font-medium "
                  : "text-base text-black/60 font-medium "
              }
            >
              <p className="relative group overflow-hidden   ">
                Listed Books
                <span
                  className="h-[2px] -translate-x-44  group-hover:translate-x-0 transition-transform duration-300
                   w-full bg-[#23BE0A] inline-flex absolute left-0 bottom-0"
                />
              </p>
            </NavLink>
            <NavLink
              to="/toRead"
              className={({ isActive }) =>
                isActive
                  ? "text-success text-base font-medium "
                  : "text-base text-black/60 font-medium "
              }
            >
              <p className="relative group overflow-hidden">
                Pages to Read
                <span
                  className="h-[2px] -translate-x-44  group-hover:translate-x-0 transition-transform duration-300
                   w-full bg-[#23BE0A] inline-flex absolute left-0 bottom-0"
                />
              </p>
            </NavLink>
            <NavLink
              to="/toRead"
              className={({ isActive }) =>
                isActive
                  ? "text-success text-base font-medium "
                  : "text-base text-black/60 font-medium "
              }
            >
              <p className="relative group overflow-hidden">
                something
                <span
                  className="h-[2px] -translate-x-44  group-hover:translate-x-0 transition-transform duration-300
                   w-full bg-[#23BE0A] inline-flex absolute left-0 bottom-0"
                />
              </p>
            </NavLink>
            <NavLink
              to="/GetTouch"
              className={({ isActive }) =>
                isActive
                  ? "text-success text-base font-medium "
                  : "text-base text-black/60 font-medium "
              }
            >
              <p className="relative group overflow-hidden">
                Get in Touch
                <span
                  className="h-[2px] -translate-x-44  group-hover:translate-x-0 transition-transform duration-300
                   w-full bg-[#23BE0A] inline-flex absolute left-0 bottom-0"
                />
              </p>
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-2 hidden lg:flex">
          <a className="relative inline-flex items-center justify-start border border-success btn btn-sm cursor-pointer overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-success absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Sign in
            </span>
          </a>
          <a className="relative inline-flex items-center justify-start border border-info btn btn-sm overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
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
