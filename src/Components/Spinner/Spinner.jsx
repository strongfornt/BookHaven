import { PropagateLoader } from "react-spinners";
export default function Spinner() {
  return (
    <>
      {/* <div className='flex items-center-center justify-center min-h-screen'>
   
    </div> */}
      <section className="flex items-center h-full p-16">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <PropagateLoader color="#39FF14" />
          </div>
        </div>
      </section>
    </>
  );
}
