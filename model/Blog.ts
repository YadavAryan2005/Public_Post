import mongoose, { Document, Schema } from "mongoose";

export interface BlogDocument extends Document {
  _id: string;
  img: string;
  title: string;
  description: string;
}

const blogSchema = new Schema<BlogDocument>({
  img: { type: String, required: true },
  title: { type: String, unique: true, required: true },
  description: { type: String, required: true },
});

const BlogModel =
  mongoose.models.Blog || mongoose.model<BlogDocument>("Blog", blogSchema);
export default BlogModel;
