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