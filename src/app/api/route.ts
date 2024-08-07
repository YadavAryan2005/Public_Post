import { readdirSync } from "fs";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";
export const POST = async (req: any) => {
  const formData = await req.formData();

  const file = formData.get("file");
  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = Date.now() + file.name.replaceAll(" ", "_");
  console.log(filename);
  try {
    await writeFile(
      path.join(process.cwd(), "public/" + filename),
      buffer
    );
    return NextResponse.json({ Message: "Success", status: 201 ,name:filename});
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
};
export const GET = async () => {
  try {
    const files = readdirSync("./public");
    return NextResponse.json({ Message: files, status: 200 });
  } catch (error) {
    console.log("Error occured ", error);
   }
};
