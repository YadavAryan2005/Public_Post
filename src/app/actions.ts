"use server";
import { auth } from "@/auth";
import blogs from "../../model/Blog";
import { connect } from "../utils/connect";
interface Blog {
  img: string;
  title: string;
  description: string;
  name?: string;
  email?: string;
}
export const setBlog = async ({ img, title, description }: Blog) => {
  try {
    await connect();
    const session = await auth();
    console.log("hi how you are");
    const blog123 = new blogs({
      img,
      title,
      description,
      name: session?.user?.name as string,
      email: session?.user?.email as string,
    });
    console.log(blog123);
    await blog123.save();
    return "success";
  } catch (error) {
    console.log(error);
  }
};
export const getBlog = async () => {
  try {
    await connect();
    const data = await blogs.find();
    return data;
  } catch (error) {
    throw new Error(error as string);
  }
};