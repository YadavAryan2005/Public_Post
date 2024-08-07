"use client";
import BlogForm from "@/components/BlogForm";
import NewBlog from "@/components/NewBlog";
import { useEffect, useState,createContext } from "react";
import { BlogDocument } from "../../../model/Blog";
import Loading from "../loading"; // Assume you have a Loading component
const BlogContext = createContext<BlogDocument[] | null>(null);
function Blog() {
  const [blog, setBlog] = useState<BlogDocument[] | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const getData = async (): Promise<void> => {
    let blogPostData = await fetch("/api/blog");
    setBlog(await blogPostData.json());
  };

  useEffect(() => {
    // Show loading for 3 seconds before fetching data
    const timer = setTimeout(() => {
      getData().then(() => setLoading(false));
    }, 2000);

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Clean up on unmount
    };
  }, [open]);

  if (loading) {
    return <Loading />; // Display the loading component
  }

  return (
    <>
      <div className={open ? "block" : "hidden"}>
        <NewBlog />
      </div>
      <div className='bg-[#0d0c22] mt-20 flex flex-col w-full  p-2 pt-8 md:pt-2 pb-0 lg:min-h-[98vh]  justify-center min-h-[500px]'>
        <div className='relative max-w-[2000px] xl:px-[150px] md:px-[30px] lg:px-[90px] sm:px-[20px] justify-center items-center sm:flex'>
          <div className='bg-[#0d0c22] px-2 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {blog?.map((data) => (
              <BlogForm
                key={data._id}
                id={data._id}
                img={data.img}
                title={data.title}
                description={data.description}
              />
            ))}
          </div>
        </div>
        <div
          onClick={() => setOpen((prev) => !prev)}
          className='fixed font-semibold bottom-20 text-white shadow-2xl cursor-pointer xl:right-[150px] md:right-[30px] lg:right-[90px] sm:right-[20px]  bg-purple-600 hover:bg-purple-700 transition duration-300 rounded-md p-4 right-10 pb-15'
        >
          Add New Blog
        </div>
      </div>
      <div className={open ? "block" : "hidden"}>
        <NewBlog />
      </div>
    </>
  );
}

export default Blog;
