import { connect,disconnect } from "./connect";
import Blog from "../../model/Blog";
export const getBlog = async () => {
    try {
      connect();
      const posts = await Blog.find();
      disconnect();
      return posts;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch posts!");
    }
  };
export const setBlog = async (data: any) => {
    try {
      connect();
      const blog123 = new Blog(data);
      await blog123.save();
      return "success";
    } catch (err) {
      console.log(err);
      throw new Error("Failed to create post!");
      return "failed";
    }
    finally{
      await disconnect();
    }
  }