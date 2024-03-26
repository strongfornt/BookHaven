import {  useLoaderData, useParams } from "react-router-dom";
import { saveBook, wishList } from "../../utils/LocalStorage";


export default function BooksDetails() {
  const book = useLoaderData();
  const { bookId } = useParams();
  const findSingleData = book.find((item) => bookId === item.bookId);
  const {
    tags,
    bookName,
    image,
    author,
    category,
    rating,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = findSingleData;


  const handleReadBooks = () =>{
    saveBook(findSingleData)
  }

  const handleWishList = () =>{
    wishList(findSingleData)
  }

  return (
    <>
      <section className=" ">
        <div className="container flex flex-col justify-center px-6 py-4   mx-auto sm:py-12 lg:py-10 lg:flex-row ">
          <div className="flex items-center rounded-lg bg-[#1313130D] justify-center lg:mt-0 h-[90vh]   xl:h-112 2xl:h-128">
            <img
              src={image}
              alt=""
              className="object-contain h-full   p-10  xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center mt-5 lg:mt-0 lg:ml-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left space-y-3">
            <h1 className="text-2xl font-bold leading-none sm:text-3xl">
              {bookName}
            </h1>
            <p className="text-[#131313CC] font-medium text-sm text-start ">
              By : <span>{author}</span>
            </p>

            <div className="py-2 border-t border-b border-[#13131326] ">
              <p className="text-[#131313CC] text-sm font-medium text-start">{category}</p>
            </div>

            <div>
              <p className="text-sm font-normal text-[#131313B3]  text-start">
                <span className="text-sm font-bold text-[#131313]">
                  Review :
                </span>{" "}
                {review}
              </p>

              <div className="flex items-center gap-6 border-[#13131326] border-b py-5">
                <h1 className="text-sm font-bold text-[#131313]">Tag</h1>
                <div className="flex gap-3 items-center">
                  {tags.map((tag, idx) => (
                    <button key={idx} className="btn btn-sm text-[#23BE0A]">
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="overflow-x-auto">
                <table className=" table-auto  ">
                  {/* head */}

                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <td className="pr-5 text-start">Number of Pages :</td>
                      <th className=" text-start">{totalPages}</th>
                    </tr>
                    {/* row 2 */}
                    <tr className="hover">
                      <td className=" text-start">Publisher :</td>
                      <th className=" text-start">{publisher}</th>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <td className="text-start">Year of Publishing :</td>
                      <th className=" text-start">{yearOfPublishing}</th>
                    </tr>
                    {/* row 4 */}
                    <tr>
                      <td className="text-start">Rating :</td>
                      <th className=" text-start">{rating}</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex  space-x-4 sm:items-center sm:justify-center    lg:justify-start">
              <button
                onClick={()=>handleReadBooks()}
              className="relative inline-flex items-center justify-start border border-success  px-6 py-2  cursor-pointer overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-success absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                Read
                </span>
              </button>
              <button
                onClick={()=>handleWishList()}
                className="relative inline-flex items-center justify-start border border-info px-6 py-2  overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
              >
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-info absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                Wishlist
                </span>
              </button>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
}
