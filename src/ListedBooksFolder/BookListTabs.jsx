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
  console.log(readData);

  useEffect(() => {
    const getWishListData = getStoredWishlist();
    setWishList(getWishListData);
  }, []);
  console.log(wishList);

  return (
    <>
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
