import { useLoaderData, useParams } from "react-router-dom"


export default function BooksDetails() {
    const book = useLoaderData();
    console.log(book);
    const {bookId} = useParams();
    console.log(bookId);
  return (
    <div>BooksDetails</div>
  )
}
