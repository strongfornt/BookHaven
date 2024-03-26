import { toast } from "react-toastify";

export const getStoredBook = () => {
  const storedBook = localStorage.getItem("books");
  if (storedBook) {
    return JSON.parse(storedBook);
  }
  return [];
};
export const saveBook = (book) => {
  const storedBook = getStoredBook();
  const isExist = storedBook.find((books) => books.bookId == book.bookId);
  if (isExist) {
    return toast.error("it is already been added ");
  }
  storedBook.push(book);
  localStorage.setItem("books", JSON.stringify(storedBook));
  toast.success("Item added successfully");
};

//for wish list
export const getStoredWishlist = () => {
  const storedWishList = localStorage.getItem("wishList");
  if (storedWishList) {
    return JSON.parse(storedWishList);
  }
  return [];
};
export const wishList = (book) => {
  const storedWishList = getStoredWishlist();

  const readList = getStoredBook();

  const isExistRead = readList.find((books) => books.bookId == book.bookId);

  if (isExistRead) {
    return toast.error("Can not added in wish List");
  }

  const isExistWishList = storedWishList.find(
    (wish) => wish.bookId == book.bookId
  );
  if (isExistWishList) {
    return toast.error("Item already has been added in wishList");
  }
  storedWishList.push(book);
  localStorage.setItem("wishList", JSON.stringify(storedWishList));
  toast.success("Item added successfully in wishList");
};
