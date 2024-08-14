"use client";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
function BlogForm(props: any) {
  return (
    <div
      key={props.id}
      className='bg-gray-800 text-white   p-5 flex flex-col rounded-md border border-gray-700 shadow-lg'
      style={{ height: "100%" }}
    >
      <div className='flex-1 flex flex-col'>
        <div className='flex-grow h-0' style={{ flexBasis: "70%" }}>
          <CldImage
            src={props.img}
            width={500}
            height={300}
            alt='Blog Image'
            className='w-full h-full object-cover rounded-md'
          />
        </div>
        <div className='flex-1 flex flex-col items-center text-center mt-4'>
          <h1 className='text-xl font-semibold'>{props.title}</h1>
          <p className='text-sm text-gray-300 mt-2'>
            {props.description.slice(0, 25) + "...."}
          </p>
          <Link
            href={{
              pathname: `/blog/${props.id}`,
              query: {
                id: props.id,
                title: props.title,
                description: props.description,
                img: props.img,
                name: props.name,
                email: props.email,
              },
            }}
            className='mt-4 bg-purple-600 hover:bg-purple-700 transition duration-300 py-2 px-4 rounded-md'
          >
            Read More..
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogForm;
