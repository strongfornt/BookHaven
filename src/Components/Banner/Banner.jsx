import { NavLink } from "react-router-dom";
import banner from "./../../assets/bannerBooks.png";

export default function Banner() {
  return (
    <>
      <div className="hero bg-[#1313130D]  rounded-xl lg:min-h-[90vh]">
        <div className="hero-content flex-col  lg:flex-row-reverse gap-10">
          <img src={banner} className="max-w-sm h-96 rounded-lg " />
          <div className="space-y-8">
            <h1 className=" text-2xl lg:text-5xl font-bold max-w-lg ">
              Books to freshen up your bookshelf
            </h1>

            <NavLink to='/listedBooks' className="relative inline-flex items-center justify-start  border border-success px-6 py-3 cursor-pointer overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-success absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                View The List
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
