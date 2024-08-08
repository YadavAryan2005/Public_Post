import mongoose, { Document, Schema } from "mongoose";

export interface BlogDocument extends Document {
  _id: string;
  img: string;
  title: string;
  description: string;
  name: string;
  email: string;
}

const blogSchema = new Schema<BlogDocument>({
  img: { type: String, required: true },
  title: { type: String, unique: true, required: true },
  description: { type: String, required: true },
  name: { type: String },
  email: { type: String },
});

const BlogModel =
  mongoose.models.Blog || mongoose.model<BlogDocument>("Blog", blogSchema);
export default BlogModel;
