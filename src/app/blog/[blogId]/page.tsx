"use client";
import { CldImage } from "next-cloudinary";
function Blog({
  searchParams,
}: {
  searchParams: {
    id: string;
    title: string;
    description: string;
    img: string;
    name: string;
    email: string;
  };
}) {
  return (
    <div
      key={searchParams.id}
      className='bg-[#0d0c22] mt-20 mb-20 relative flex min-h-[86vh] w-full rounded-xl p-4 pt-8 lg:min-h-[98vh]'
    >
      <div className='max-w-[2000px] overflow-hidden mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8 justify-center items-center'>
        <div className='w-full  md:w-1/2 flex justify-center'>
          <CldImage
            src={searchParams.img}
            width={500}
            height={300}
            alt='Blog Image'
            className='w-full h-full object-cover rounded-md'
          />
        </div>
        <div className='w-full md:w-1/2 p-6 bg-gray-800 rounded-lg shadow-lg text-white'>
          <div className='flex flex-col space-y-2 mb-4'>
            <p className='text-lg font-semibold'>
              Author: <span className='font-normal'>{searchParams.name}</span>
            </p>
            <p className='text-lg font-semibold'>
              Title: <span className='font-normal'>{searchParams.title}</span>
            </p>
            <p className='text-lg font-semibold'>
              Email: <span className='font-normal '>{searchParams.email}</span>
            </p>
          </div>
          <div className='text-lg font-medium'>
            Description:{" "}
            <span className='font-normal flex'>{searchParams.description}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
