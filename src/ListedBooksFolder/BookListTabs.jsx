import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook, getStoredWishlist } from "../utils/LocalStorage";
import ReadList from "../Components/ReadAndWish/ReadList";
import WishList from "../Components/ReadAndWish/WishList";

export default function BookListTabs() {
  const [tabIndex, setTabIndex] = useState(0);
  const [readData, setReadData] = useState([]);
  const [wishList, setWishList] = useState([]);
  useEffect(() => {
    const getReadData = getStoredBook();
    setReadData(getReadData);
  }, []);

  useEffect(() => {
    const getWishListData = getStoredWishlist();
    setWishList(getWishListData);
  }, []);

  const handleSorting = (text) => {
    if (text === "rating") {
      const ratingData = [...readData].sort((a, b) => b.rating - a.rating);
      setReadData(ratingData);
    }
    if(text ==="pages"){
        const pageData = [...readData].sort((a, b) => b.totalPages - a.totalPages);
      setReadData(pageData);
    }
    if(text ==="year"){
        const yearData = [...readData].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        setReadData(yearData);
    }
  };

  const handleWishSorting = (text) =>{
    if (text === "rating") {
        const ratingData = [...wishList].sort((a, b) => b.rating - a.rating);
        setWishList(ratingData);
      }
    if(text ==="pages"){
        const pageData = [...wishList].sort((a, b) => b.totalPages - a.totalPages);
      setWishList(pageData);
    }
    if(text ==="year"){
        const yearData = [...wishList].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        setWishList(yearData);
    }
  }

  return (
    <>
      <div className="navbar  justify-center mt-5 mb-8">
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary className="bg-[#23BE0A] text-[#FFFFFF] hover:text-[#23BE0A] border hover:border-[#23BE0A] font-bold hover:bg-[#23BE0A0D] ">
                  Sort By
                </summary>
                <ul className="p-2 bg-base-100 rounded-t-none z-10 min-w-max">
                  <li onClick={() => handleSorting("rating") || handleWishSorting("rating")}>
                    <a>Rating</a>
                  </li>
                  <li onClick={() => handleSorting("pages") || handleWishSorting("pages")}>
                    <a>Number of pages</a>
                  </li>
                  <li onClick={() => handleSorting("year") || handleWishSorting("year")}>
                    <a>Published year</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>
        <TabPanel>
          <div>
            {readData.map((read, idx) => (
              <ReadList key={idx} readData={read} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            {wishList.map((read, idx) => (
              <WishList key={idx} wishList={read} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
}
