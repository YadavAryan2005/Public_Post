"use client";
import { setBlog } from "@/app/actions";
import { auth } from "@/auth";
import { notification } from "antd";
import { useState } from "react";

function NewBlog() {
  const [api, contextHolder] = notification.useNotification();
  const [file, setFile] = useState<any>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const allowedFileTypes = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/bmp",
    "image/webp",
    "image/x-icon",
    "application/pdf",
  ];

  async function addblock(e: any) {
    e.preventDefault();
    if (!file) {
      api["error"]({
        message: "No File Selected",
        description: "Please select a file to upload.",
        duration: 3,
      });
      return;
    }

    if (!allowedFileTypes.includes(file.type)) {
      api["error"]({
        message: "Invalid File Type",
        description:
          "Please upload a valid file type: .jpg, .png, .gif, .bmp, .webp, .ico, .pdf.",
        duration: 3,
      });
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", file);

      let response = await fetch("/api", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("File upload failed");
      }
      const fi = await response.json();
      console.log(fi);
      const data = await setBlog({
        img: fi.name,
        title,
        description,
      });

      if (data === "success") {
        api["success"]({
          message: "New Blog Added",
          description: "Your content was uploaded successfully.",
          duration: 3,
        });
      } else {
        api["error"]({
          message: "Blog Upload Failed",
          description:
            "We encountered an issue uploading your content. Please try again.",
          duration: 3,
        });
      }
    } catch (error) {
      api["error"]({
        message: "Upload Error",
        description:
          "An error occurred while uploading your file. Please try again.",
        duration: 3,
      });
    }
  }

  return (
    <>
      {contextHolder}
      <div className='fixed h-full min-h-[50px] overflow-y-scroll backdrop-blur-sm z-20 flex flex-col w-full p-6 md:pt-4 pb-0 lg:min-h-[98vh] justify-center '>
        <div className='max-w-[2000px] xl:px-[150px] md:px-[30px] lg:px-[90px] sm:px-[20px] mx-auto overflow-auto'>
          <form className='w-full text-end pr-7 '>
            <button className='self-end absolute text-xl font-bold cursor-pointer z-50 text-white'>
              X
            </button>
          </form>
          <form
            className='text-white relative font-serif flex flex-col gap-6 bg-[#0d0c22c9] backdrop-blur-lg p-6 rounded-lg shadow-lg'
            onSubmit={addblock}
          >
            <h2 className='text-2xl font-bold mb-4'>Create a Blog Post</h2>
            <input
              type='file'
              name='img'
              onChange={(e) => setFile(e.target.files?.[0])}
              accept='.jpg,.jpeg,.png,.gif,.bmp,.webp,.ico,.pdf'
              required
              className='p-3 rounded-md bg-white/20 border border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300'
            />
            <input
              type='text'
              name='title'
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
              minLength={5}
              placeholder='Enter Title'
              className='p-3 rounded-md bg-white/20 border border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300'
            />
            <textarea
              placeholder='Enter Content'
              name='description'
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              minLength={50}
              required
              className='p-3 rounded-md bg-white/20 border border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300'
            ></textarea>
            <button
              type='submit'
              className='p-3 rounded-md bg-purple-600 hover:bg-purple-700 transition duration-300 text-white font-bold'
            >
              Add Blog
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default NewBlog;
