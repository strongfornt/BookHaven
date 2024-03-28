import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../RootLayout/MainLayout";
import Home from "../pages/Home/Home";
import ListedBooks from "../pages/ListedBooks/ListedBooks";
import PageRead from "../pages/PagestoRead/PageRead";
import Error from "../pages/Error/Error";
import BooksDetails from "../pages/BooksDetails/BooksDetails";
import GetTouch from "../pages/GetTouch/GetTouch";
import PopularBooks from "../pages/PopularBooks/PopularBooks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<Error/>,
    children:[
        {
            path:'/',
            element:<Home/>,
            loader:()=> fetch('../books.json')

        },
        {
            path:'/book/:bookId',
            element:<BooksDetails/>,
            // eslint-disable-next-line no-unused-vars
            loader:({params}) =>fetch(`../books.json`)
        },
        {
            path:'/listedBooks',
            element:<ListedBooks/>
        },
        {
            path:'/toRead',
            element:<PageRead/>
        },
        {
             path:'/popular',
             element:<PopularBooks/>
            
        },
        {
            path:'/GetTouch',
            element:<GetTouch/>
        }
    ]
  },
]);
