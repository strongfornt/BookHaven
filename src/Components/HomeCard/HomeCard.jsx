/* eslint-disable react/prop-types */

import { FcRating } from "react-icons/fc";
import { Link } from "react-router-dom";
export default function HomeCard({ book }) {
  const { tags, bookName, image, author, category, rating, bookId } = book;
 

  return (
    <>
     <Link to={`/book/${bookId}`}>
     <div className=" p-6 rounded-md shadow-md border-t flex flex-col ">
        <img
          src={image}
          alt=""
          className="object-contain object-center w-full rounded-md h-72 "
        />
        <div className="mt-6 mb-2">
          <div className="flex gap-3">
            {tags.map((item, idx) => (
              <span
                key={idx}
                className="block text-xs font-medium tracking-widest uppercase text-[#23BE0A]"
              >
                {item}
              </span>
            ))}
          </div>
          <h2 className="text-xl font-semibold tracking-wide ">{bookName}</h2>
        </div>
        <h1 className="text-sm text-[#131313CC] font-bold mb-2 flex-grow">
          By : <span>{author}</span>
        </h1>

        <div className="flex justify-between border-t border-[#13131326] pt-2">
          <p className="text-sm  font-semibold text-[#131313CC]">{category}</p>
          <p className="flex items-center gap-1">
            <span className="text-sm text-[#131313CC]">{rating}</span>
            <FcRating />
          </p>
        </div>
      </div>

     </Link>

    </>
  );
}
