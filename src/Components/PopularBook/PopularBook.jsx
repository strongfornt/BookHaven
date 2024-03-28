/* eslint-disable react/prop-types */


export default function PopularBook({popular}) {
    const {image,bookName,writerName,price} = popular
  return (
    <>
      <div className=" p-2 rounded-md shadow-md flex flex-col ">
        <img
          src={image}
          alt=""
          className="object-contain object-center w-full rounded-md   "
        />
        <div className="mt-1 mb-2 flex flex-col items-start lg:items-center flex-grow  justify-center">
         
          <h2 className=" text-base lg:text-xl font-semibold tracking-wide   ">
            {bookName}
          </h2>
          
          <p className="text-sm text-[#131313CC]   ">By: {writerName}</p> 
        <div className="flex-grow flex flex-col justify-end">
        <p className="text-base font-medium mt-4 text-red-800">$: {price}</p> 
        </div>
        </div>
     
      </div>
    </>
  );
}
