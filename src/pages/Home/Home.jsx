import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import HomeCard from "../../Components/HomeCard/HomeCard";


export default function Home() {
    const books = useLoaderData();
    
    
  return (
    <>
        <Banner/>


        <h1 className="text-center mt-20 mb-8 text-[#131313] text-4xl font-bold" >Books</h1>
        <div className="grid lg:grid-cols-3 gap-6 mb-5">
            {
                books.map((book,idx)=>   <HomeCard key={idx} book={book}/>)
            }
        </div>
      
    </>
  )
}
