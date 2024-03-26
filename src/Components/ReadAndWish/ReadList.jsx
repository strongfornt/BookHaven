/* eslint-disable react/prop-types */
import { CiLocationOn } from "react-icons/ci";
import { FaUserGroup } from "react-icons/fa6";
import { TbPageBreak } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function ReadList({ readData }) {
  const {
    tags,
    bookName,
    image,
    author,
    category,
    rating,
    totalPages,
    publisher,
    yearOfPublishing,
    bookId
  } = readData;
  
  return (
    <>
      <section className=" ">
        <div className="container flex flex-col my-5 justify-start px-6 py-4 border border-[#13131326] rounded-lg   mx-auto sm:py-12 lg:py-5   lg:flex-row ">
          <div className="flex items-center rounded-lg bg-[#1313130D] justify-center lg:mt-0 p-4   xl:h-112 2xl:h-128">
            <img
              src={image}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-60 xl:h-112 2xl:h-128 "
            />
          </div>
          <div className="flex flex-col justify-center mt-5 lg:mt-0 lg:ml-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left space-y-3">
            <h1 className="text-2xl font-bold leading-none sm:text-3xl">
              {bookName}
            </h1>
            <p className="text-[#131313CC] font-medium text-sm text-start ">
              By : <span>{author}</span>
            </p>

            <div className="border-[#13131326] border-b pb-3">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3 lg:gap-6 ">
                <div className="flex items-center gap-6">
                  <h1 className="text-lg font-bold text-[#131313]">Tag</h1>
                  <div className="flex gap-3 items-center">
                    {tags.map((tag, idx) => (
                      <button
                        key={idx}
                        className="btn btn-sm text-[#23BE0A] bg-[#23BE0A0D]"
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 items-center text-[#131313CC] text-sm font-normal ">
                  <CiLocationOn />
                  <p>
                    Year of Publishing : <span>{yearOfPublishing}</span>
                  </p>
                </div>
              </div>
              {/* another */}
              <div className="flex gap-5 mt-5 flex-col lg:flex-row">
                <div className="flex gap-2 items-center text-[#131313CC] text-sm font-normal">
                  <FaUserGroup className="text-xl" />
                  <p>
                    Publisher : <span>{publisher}</span>
                  </p>
                </div>
                <div className="flex gap-2 items-center text-[#131313CC] text-sm font-normal">
                  <TbPageBreak className="text-xl" />
                  <p>
                    Page : <span>{totalPages}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex   gap-4 items-start sm:justify-center flex-col  lg:flex-row lg:justify-start">
            <div className="space-x-4 items-start">
            <button className="btn btn-sm text-[#328EFF] bg-[#328EFF26]">
                Category: <span>{category}</span>
              </button>
              <button className="btn btn-sm text-[#FFAC33] bg-[#FFAC3326]">
                Rating: <span>{rating}</span>
              </button>
            </div>

            <div>
            <Link
            to={`/book/${bookId}`} 
            className="relative inline-flex items-center justify-start border border-success  px-5 py-1  cursor-pointer overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-success absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                  View Details
                </span>
              </Link>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
