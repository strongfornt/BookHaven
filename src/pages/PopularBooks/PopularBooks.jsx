
import PopularBook from "../../Components/PopularBook/PopularBook";
import { useEffect, useState } from "react";
import Spinner from "../../Components/Spinner/Spinner";

export default function PopularBooks() {
  const [popularBooks, setPopularBooks] = useState([]);
  const [popular, setPopular] = useState([]);
  const [router, setRouter] = useState("all");
  useEffect(() => {
    fetch("./popular.json")
      .then((res) => res.json())
      .then((data) => setPopularBooks(data));
  }, []);
  useEffect(() => {
    setPopular(popularBooks);
  }, [popularBooks]);

  console.log(popular);

  const handleCategory = (filter) => {
    if (filter === "all") {
      setPopular(popularBooks);
      setRouter(filter);
    } else if (filter === "business") {
      const businessBooks = popularBooks.filter(
        (book) => book.category === "Business"
      );
      setPopular(businessBooks);
    } else if (filter === "technology") {
      const technologyBooks = popularBooks.filter(
        (book) => book.category === "Technology"
      );
      setPopular(technologyBooks);
    } else if (filter === "adventure") {
      const adventureBooks = popularBooks.filter(
        (book) => book.category === "Adventure"
      );
      setPopular(adventureBooks);
    } else if (filter === "romantic") {
      const romanticBooks = popularBooks.filter(
        (book) => book.category === "Romantic"
      );
      setPopular(romanticBooks);
    } else if (filter === "fiction") {
      const fictionBooks = popularBooks.filter(
        (book) => book.category === "Fictional"
      );
      setPopular(fictionBooks);
    }
  };
  console.log(router);

  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-center text-sm text-[#131313CC] mt-10 mb-1 ">
          SOME QUALITY ITEMS
        </h1>
        <h1 className="text-center  font-bold text-4xl bg-300%  bg-gradient-to-r from-success/75 via-blue-400/75 to-info/75 text-transparent bg-clip-text animate-gradient
        
        ">Popular books</h1>
        <h1 className="mb-5">
          <span className="h-[2px] w-24 inline-flex bg-success/60"></span>
        </h1>
      </div>

      <div>
        <div className="flex justify-center  lg:hidden mb-8  ">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary className="bg-[#23BE0A] text-[#FFFFFF] hover:text-[#23BE0A] border hover:border-[#23BE0A] font-bold hover:bg-[#23BE0A0D] ">
                  Sort By Category
                </summary>
                <ul className="p-2 bg-base-100 rounded-t-none z-10 w-full space-y-2 cursor-pointer">
                  <p
                    onClick={() => handleCategory("all")}
                    className="text-sm text-black/60 font-normal  w-fit  "
                  >
                    <p className="relative group overflow-hidden">
                      ALL
                      <span
                        className="h-[2px] -translate-x-44  group-hover:translate-x-0 transition-transform duration-300
                  w-full bg-[#23BE0A] inline-flex absolute left-0 bottom-0"
                      />
                    </p>
                  </p>
                  <p
                    onClick={() => handleCategory("business")}
                    className="text-sm text-black/60 font-normal w-fit  "
                  >
                    <p className="relative group overflow-hidden   ">
                      BUSINESS
                      <span
                        className="h-[2px] -translate-x-44  group-hover:translate-x-0 transition-transform duration-300
                  w-full bg-[#23BE0A] inline-flex absolute left-0 bottom-0"
                      />
                    </p>
                  </p>
                  <p
                    onClick={() => handleCategory("technology")}
                    className="text-sm text-black/60 font-normal w-fit "
                  >
                    <p className="relative group overflow-hidden">
                      TECHNOLOGY
                      <span
                        className="h-[2px] -translate-x-44  group-hover:translate-x-0 transition-transform duration-300
                  w-full bg-[#23BE0A] inline-flex absolute left-0 bottom-0"
                      />
                    </p>
                  </p>
                  <p
                    onClick={() => handleCategory("adventure")}
                    className="text-sm text-black/60 font-normal w-fit "
                  >
                    <p className="relative group overflow-hidden">
                      ADVENTURE
                      <span
                        className="h-[2px] -translate-x-44  group-hover:translate-x-0 transition-transform duration-300
                  w-full bg-[#23BE0A] inline-flex absolute left-0 bottom-0"
                      />
                    </p>
                  </p>
                  <p
                    onClick={() => handleCategory("romantic")}
                    className="text-sm text-black/60 font-normal w-fit "
                  >
                    <p className="relative group overflow-hidden">
                      ROMANTIC
                      <span
                        className="h-[2px] -translate-x-44  group-hover:translate-x-0 transition-transform duration-300
                  w-full bg-[#23BE0A] inline-flex absolute left-0 bottom-0"
                      />
                    </p>
                  </p>
                  <p
                    onClick={() => handleCategory("fiction")}
                    className="text-sm text-black/60 font-normal w-fit "
                  >
                    <p className="relative group overflow-hidden">
                      FICTIONAL
                      <span
                        className="h-[2px] -translate-x-44  group-hover:translate-x-0 transition-transform duration-300
                  w-full bg-[#23BE0A] inline-flex absolute left-0 bottom-0"
                      />
                    </p>
                  </p>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <ul className=" hidden cursor-pointer lg:flex flex-col lg:flex-row  gap-4 items-center justify-center mb-5 ">
        <li
                    onClick={() => handleCategory("all")}
                    className="text-sm text-black/60 font-normal  "
                  >
                    <p className="relative group overflow-hidden">
                      ALL
                      <span
                        className="h-[2px] -translate-x-44  group-hover:translate-x-0 transition-transform duration-300
                  w-full bg-[#23BE0A] inline-flex absolute left-0 bottom-0"
                      />
                    </p>
                  </li>
                  <li
                    onClick={() => handleCategory("business")}
                    className="text-sm text-black/60 font-normal  "
                  >
                    <p className="relative group overflow-hidden   ">
                      BUSINESS
                      <span
                        className="h-[2px] -translate-x-44  group-hover:translate-x-0 transition-transform duration-300
                  w-full bg-[#23BE0A] inline-flex absolute left-0 bottom-0"
                      />
                    </p>
                  </li>
                  <li
                    onClick={() => handleCategory("technology")}
                    className="text-sm text-black/60 font-normal  "
                  >
                    <p className="relative group overflow-hidden">
                      TECHNOLOGY
                      <span
                        className="h-[2px] -translate-x-44  group-hover:translate-x-0 transition-transform duration-300
                  w-full bg-[#23BE0A] inline-flex absolute left-0 bottom-0"
                      />
                    </p>
                  </li>
                  <li
                    onClick={() => handleCategory("adventure")}
                    className="text-sm text-black/60 font-normal  "
                  >
                    <p className="relative group overflow-hidden">
                      ADVENTURE
                      <span
                        className="h-[2px] -translate-x-44  group-hover:translate-x-0 transition-transform duration-300
                  w-full bg-[#23BE0A] inline-flex absolute left-0 bottom-0"
                      />
                    </p>
                  </li>
                  <li
                    onClick={() => handleCategory("romantic")}
                    className="text-sm text-black/60 font-normal  "
                  >
                    <p className="relative group overflow-hidden">
                      ROMANTIC
                      <span
                        className="h-[2px] -translate-x-44  group-hover:translate-x-0 transition-transform duration-300
                  w-full bg-[#23BE0A] inline-flex absolute left-0 bottom-0"
                      />
                    </p>
                  </li>
                  <li
                    onClick={() => handleCategory("fiction")}
                    className="text-sm text-black/60 font-normal  "
                  >
                    <p className="relative group overflow-hidden">
                      FICTIONAL
                      <span
                        className="h-[2px] -translate-x-44  group-hover:translate-x-0 transition-transform duration-300
                  w-full bg-[#23BE0A] inline-flex absolute left-0 bottom-0"
                      />
                    </p>
                  </li>
        </ul>
      </div>

      {
        popular.length < 1 ? <Spinner/> : <div className="grid grid-cols-2 lg:grid-cols-4   gap-4 lg:gap-6 mb-4">
        {popular?.map((popular, idx) => (
          <PopularBook key={idx} popular={popular} />
        ))}
      </div>
      }
    </>
  );
}
