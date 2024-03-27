import { useEffect, useState } from "react";
import NotFoundData from "../../Components/NotFoundData/NotFoundData";
import ShapeBarChart from "../../Components/ShapeBarChart/ShapeBarChart";
import { getStoredBook } from "../../utils/LocalStorage";


export default function PageRead() {
  const [readData, setReadData] = useState([]);

  useEffect(() => {
    const getReadData = getStoredBook();
    setReadData(getReadData);
  }, []);
  return (
    <>

        {
          readData.length < 1 ?<NotFoundData/> :<ShapeBarChart readData={readData} />
        }       
       

        
    </>
  )
}
