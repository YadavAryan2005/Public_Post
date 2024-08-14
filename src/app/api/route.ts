import { auth } from "@/auth";
import { NextResponse } from "next/server";
import Blog from "../../../model/Blog";
import { connect } from "../../utils/connect";
export const POST = async (req: any) => {
  await connect();
  const formData = await req.formData();
  const session = await auth();
  const file = formData.get("file");
  const title = formData.get("title");
  const description = formData.get("description");
  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  console.log(buffer);
  const filename = Date.now() + file.name.replaceAll(" ", "_");
  console.log(filename);
  try {
    const blog123 = new Blog({
      img: buffer,
      title: title as string,
      description: description as string,
      name: session?.user?.name as string,
      email: session?.user?.email as string,
    });
    await blog123.save();
    return NextResponse.json({
      Message: "Success",
      status: 201,
      name: filename,
    });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
};
export const GET = async () => {
  try {
    await connect();
    const data = await Blog.find();
    return NextResponse.json(data);
  } catch (error) {
    throw new Error(error as string);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
};
