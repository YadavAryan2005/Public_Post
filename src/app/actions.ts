"use server";
import blogs from "../../model/Blog";
import {connect,disconnect} from "../utils/connect";
interface Blog {
  img: string;
  title: string;
  description: string;
}
export const setBlog = async ({ img, title, description }: Blog) => {
  try {
    await connect();
    const blog123 = new blogs({ img, title, description });
    console.log(blog123);
    await blog123.save();
    return "success";
  } catch (error) {
    console.log(error);
  }
};
export const getBlog =async()=>
{
 try {
   await connect();
   const data=await blogs.find();
   return data;
 } catch (error) {
   throw new Error(error as string);
 }
}
