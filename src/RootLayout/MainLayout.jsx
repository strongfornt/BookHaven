import { Outlet, useNavigation } from "react-router-dom";
import Nav from "../Header/Nav";
import Spinner from "../Components/Spinner/Spinner";


export default function MainLayout() {
    const navigation = useNavigation();
  return (
    <>
        <header className="  ">
            <Nav/>
        </header>
        <main className="px-4 lg:px-10 mt-5 " >
            {
                navigation.state === 'loading'? <Spinner/> : <Outlet/>
            }
            
        </main>
    </>
  )
}
