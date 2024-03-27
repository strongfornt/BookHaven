import { PropagateLoader } from "react-spinners";
export default function Spinner() {
  return (
    <>
      <section className="flex items-center h-full sm:p-16 ">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
          <PropagateLoader color="#39FF14" />
        </div>
      </section>
      {/* <section className="flex items-center h-full p-16">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            
          </div>
        </div>
      </section> */}
    </>
  );
}
