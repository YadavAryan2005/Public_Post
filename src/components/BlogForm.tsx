"use client";
import Image from "next/image";
import Link from "next/link";
function BlogForm(props: any) {
  const isPdf = (props.img as string).endsWith(".pdf");

  return (
    <div
      key={props.id}
      className='bg-gray-800 text-white p-5 flex flex-col rounded-md border border-gray-700 overflow-hidden shadow-lg'
      style={{ height: "100%" }}
    >
      <div className='flex-1 flex flex-col'>
        <div className='flex-grow h-0' style={{ flexBasis: "70%" }}>
          {isPdf ? (
            <>
              <iframe
                src={props.img}
                className='w-full h-full object-cover sm:block hidden'
                style={{ maxHeight: "400px", width: "100%", height: "100%" }}
              ></iframe>
              <div className='w-full sm:hidden h-full min-h-[200px] flex justify-center items-center text-center'>
                This file is not supported on mobile devices
              </div>
            </>
          ) : (
            <Image
              src={"/" + props.img}
              alt={props.title}
              width={400}
              height={400}
              className='w-full h-full object-cover'
              style={{ maxHeight: "400px" }}
            />
          )}
        </div>
        <div className='flex-1 flex flex-col items-center text-center mt-4'>
          <h1 className='text-xl font-semibold'>{props.title}</h1>
          <p className='text-sm text-gray-300 mt-2'>
            {props.description.slice(0, 25) + "...."}
          </p>
          <Link
            href={{ pathname: `/blog/${props.id}`, query: { id: props.id, title: props.title, description: props.description, img: props.img} }}
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
