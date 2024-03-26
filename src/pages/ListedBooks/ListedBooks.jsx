
import BookListTabs from "../../ListedBooksFolder/BookListTabs";
import HeadTitle from "../../ListedBooksFolder/HeadTitle";


export default function ListedBooks() {
  return (
    <>
        <HeadTitle/>
       <div className="mt-5">
        
       <BookListTabs/>
       </div>
    </>
  )
}
